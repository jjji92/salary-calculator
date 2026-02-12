// 2026년 4대보험 요율 (근로자 부담분)
const NATIONAL_PENSION_RATE = 0.0475;
const NATIONAL_PENSION_UPPER_LIMIT_MONTHLY = 6_370_000; // 상한 월 637만원 (1~6월)
const NATIONAL_PENSION_LOWER_LIMIT_MONTHLY = 390_000; // 하한 월 39만원

const HEALTH_INSURANCE_RATE = 0.03595;
const LONG_TERM_CARE_RATE = 0.1314; // 건강보험료의 13.14% (사실상 반반이므로 /2 불필요 — 이미 건강보험 근로자분에 적용)
const EMPLOYMENT_INSURANCE_RATE = 0.009;

// 소득세 구간 (2026년)
const TAX_BRACKETS = [
  { limit: 14_000_000, rate: 0.06, deduction: 0 },
  { limit: 50_000_000, rate: 0.15, deduction: 1_260_000 },
  { limit: 88_000_000, rate: 0.24, deduction: 5_760_000 },
  { limit: 150_000_000, rate: 0.35, deduction: 15_440_000 },
  { limit: 300_000_000, rate: 0.38, deduction: 19_940_000 },
  { limit: 500_000_000, rate: 0.40, deduction: 25_940_000 },
  { limit: 1_000_000_000, rate: 0.42, deduction: 35_940_000 },
  { limit: Infinity, rate: 0.45, deduction: 65_940_000 },
];

// 근로소득공제
function getEarnedIncomeDeduction(totalPay: number): number {
  if (totalPay <= 5_000_000) {
    return totalPay * 0.7;
  } else if (totalPay <= 15_000_000) {
    return 3_500_000 + (totalPay - 5_000_000) * 0.4;
  } else if (totalPay <= 45_000_000) {
    return 7_500_000 + (totalPay - 15_000_000) * 0.15;
  } else if (totalPay <= 100_000_000) {
    return 12_000_000 + (totalPay - 45_000_000) * 0.05;
  } else {
    return 14_750_000 + (totalPay - 100_000_000) * 0.02;
  }
}

// 인적공제: 본인 + 부양가족 × 150만원
function getPersonalDeduction(dependents: number): number {
  return dependents * 1_500_000;
}

// 근로소득세액공제
function getEarnedIncomeTaxCredit(calculatedTax: number): number {
  if (calculatedTax <= 500_000) {
    return calculatedTax * 0.55;
  } else if (calculatedTax <= 33_000_000) {
    return 275_000 + (calculatedTax - 500_000) * 0.3;
  } else {
    return 10_025_000 + (calculatedTax - 33_000_000) * 0.1;
  }
}

// 근로소득세액공제 한도
function getEarnedIncomeTaxCreditLimit(totalPay: number): number {
  if (totalPay <= 33_000_000) {
    return 740_000;
  } else if (totalPay <= 70_000_000) {
    return 740_000 - (totalPay - 33_000_000) * 0.008;
  } else {
    return Math.max(500_000, 660_000 - (totalPay - 70_000_000) * 0.5);
  }
}

// 자녀세액공제
function getChildTaxCredit(children: number): number {
  if (children <= 0) return 0;
  if (children === 1) return 150_000;
  if (children === 2) return 350_000;
  return 350_000 + (children - 2) * 300_000;
}

// 산출세액 계산
function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;
  for (const bracket of TAX_BRACKETS) {
    if (taxableIncome <= bracket.limit) {
      return taxableIncome * bracket.rate - bracket.deduction;
    }
  }
  return 0;
}

export interface SalaryOptions {
  annualSalary: number;         // 연봉 (원)
  nonTaxableMonthly?: number;   // 월 비과세액 (원), 기본 200,000
  dependents?: number;          // 부양가족 수 (본인 포함), 기본 1
  childrenUnder20?: number;     // 20세 이하 자녀 수, 기본 0
  includeRetirement?: boolean;  // 퇴직금 포함 여부, 기본 false (별도)
}

export interface DeductionDetail {
  nationalPension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  incomeTax: number;
  localIncomeTax: number;
  totalDeduction: number;
}

export interface SalaryResult {
  annualSalary: number;
  monthlyGross: number;
  monthlyNet: number;
  annualNet: number;
  deductions: DeductionDetail;
}

export function calculateNetSalary(options: SalaryOptions): SalaryResult {
  const {
    annualSalary,
    nonTaxableMonthly = 200_000,
    dependents = 1,
    childrenUnder20 = 0,
    includeRetirement = false,
  } = options;

  // 퇴직금 포함이면 실제 연봉은 12/13
  const effectiveAnnual = includeRetirement
    ? Math.round(annualSalary * 12 / 13)
    : annualSalary;

  const monthlyGross = Math.round(effectiveAnnual / 12);
  const annualNonTaxable = nonTaxableMonthly * 12;
  const taxableAnnual = Math.max(0, effectiveAnnual - annualNonTaxable);
  const taxableMonthly = Math.round(taxableAnnual / 12);

  // 4대보험 (월 기준, 과세소득 기준)
  // 국민연금: 월 소득 기준 상하한 적용
  const pensionBase = Math.min(
    Math.max(taxableMonthly, NATIONAL_PENSION_LOWER_LIMIT_MONTHLY),
    NATIONAL_PENSION_UPPER_LIMIT_MONTHLY
  );
  const nationalPension = Math.round(pensionBase * NATIONAL_PENSION_RATE);

  // 건강보험
  const healthInsurance = Math.round(taxableMonthly * HEALTH_INSURANCE_RATE);

  // 장기요양보험
  const longTermCare = Math.round(healthInsurance * LONG_TERM_CARE_RATE);

  // 고용보험
  const employmentInsurance = Math.round(taxableMonthly * EMPLOYMENT_INSURANCE_RATE);

  // 소득세 계산 (연간 기준)
  const totalPay = taxableAnnual; // 과세 대상 총급여
  const earnedIncomeDeduction = getEarnedIncomeDeduction(totalPay);
  const earnedIncome = Math.max(0, totalPay - earnedIncomeDeduction); // 근로소득금액

  // 종합소득공제
  const personalDeduction = getPersonalDeduction(dependents);
  const standardDeduction = 70_000; // 표준공제 (7만원, 근로소득자 특별소득공제 미적용 시)
  // 국민연금 공제 (연간)
  const annualPensionDeduction = nationalPension * 12;
  // 건강보험+장기요양 공제 (연간)
  const annualHealthDeduction = (healthInsurance + longTermCare) * 12;
  // 고용보험 공제 (연간)
  const annualEmploymentDeduction = employmentInsurance * 12;

  const totalSocialInsuranceDeduction = annualPensionDeduction + annualHealthDeduction + annualEmploymentDeduction;

  const taxableIncome = Math.max(
    0,
    earnedIncome - personalDeduction - totalSocialInsuranceDeduction - standardDeduction
  );

  // 산출세액
  const calculatedTax = calculateIncomeTax(taxableIncome);

  // 세액공제
  const earnedCreditRaw = getEarnedIncomeTaxCredit(calculatedTax);
  const earnedCreditLimit = getEarnedIncomeTaxCreditLimit(totalPay);
  const earnedCredit = Math.min(earnedCreditRaw, earnedCreditLimit);
  const childCredit = getChildTaxCredit(childrenUnder20);

  const finalAnnualTax = Math.max(0, calculatedTax - earnedCredit - childCredit);
  const monthlyIncomeTax = Math.round(finalAnnualTax / 12);
  const monthlyLocalTax = Math.round(monthlyIncomeTax * 0.1);

  const totalDeduction = nationalPension + healthInsurance + longTermCare + employmentInsurance + monthlyIncomeTax + monthlyLocalTax;
  const monthlyNet = monthlyGross - totalDeduction;

  return {
    annualSalary: effectiveAnnual,
    monthlyGross,
    monthlyNet,
    annualNet: monthlyNet * 12,
    deductions: {
      nationalPension,
      healthInsurance,
      longTermCare,
      employmentInsurance,
      incomeTax: monthlyIncomeTax,
      localIncomeTax: monthlyLocalTax,
      totalDeduction,
    },
  };
}

// 역산: 원하는 월 실수령액 → 필요 연봉
export function calculateRequiredSalary(
  desiredMonthlyNet: number,
  options?: Omit<SalaryOptions, 'annualSalary'>
): { requiredAnnualSalary: number; result: SalaryResult } {
  // 이진 탐색으로 역산
  let low = desiredMonthlyNet * 12;
  let high = desiredMonthlyNet * 12 * 3; // 최대 3배까지 탐색

  for (let i = 0; i < 100; i++) {
    const mid = Math.round((low + high) / 2);
    const result = calculateNetSalary({ ...options, annualSalary: mid });

    if (Math.abs(result.monthlyNet - desiredMonthlyNet) < 1000) {
      // 만원 단위로 올림
      const roundedSalary = Math.ceil(mid / 10000) * 10000;
      return {
        requiredAnnualSalary: roundedSalary,
        result: calculateNetSalary({ ...options, annualSalary: roundedSalary }),
      };
    }

    if (result.monthlyNet < desiredMonthlyNet) {
      low = mid;
    } else {
      high = mid;
    }
  }

  const roundedSalary = Math.ceil(high / 10000) * 10000;
  return {
    requiredAnnualSalary: roundedSalary,
    result: calculateNetSalary({ ...options, annualSalary: roundedSalary }),
  };
}

// 숫자 포맷 (천단위 콤마)
export function formatNumber(n: number): string {
  return Math.round(n).toLocaleString('ko-KR');
}

// 만원 단위 표시
export function formatManWon(n: number): string {
  const man = Math.round(n / 10000);
  return man.toLocaleString('ko-KR');
}

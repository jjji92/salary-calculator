import { useState, useMemo } from 'react';
import { calculateNetSalary, formatNumber } from '../utils/salaryCalculator';

const SALARY_RANGE = Array.from({ length: 91 }, (_, i) => (i + 10) * 100); // 1000~10000만원 (100만원 단위)

export default function SalaryTablePage() {
  const [dependents, setDependents] = useState(1);

  const rows = useMemo(() => {
    return SALARY_RANGE.map((salaryMan) => {
      const r = calculateNetSalary({
        annualSalary: salaryMan * 10000,
        dependents,
      });
      return {
        salary: salaryMan,
        monthlyNet: r.monthlyNet,
        annualNet: r.annualNet,
        totalDeduction: r.deductions.totalDeduction,
        nationalPension: r.deductions.nationalPension,
        healthInsurance: r.deductions.healthInsurance + r.deductions.longTermCare,
        employmentInsurance: r.deductions.employmentInsurance,
        incomeTax: r.deductions.incomeTax,
        localIncomeTax: r.deductions.localIncomeTax,
      };
    });
  }, [dependents]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">2026 연봉 실수령액 표</h1>
        <p className="text-slate-500">연봉 1,000만원 ~ 1억원 구간별 실수령액 한눈에 보기</p>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm font-medium text-slate-700">부양가족 수 (본인 포함)</label>
        <select
          value={dependents}
          onChange={(e) => setDependents(parseInt(e.target.value))}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        >
          {Array.from({ length: 11 }, (_, i) => (
            <option key={i} value={i + 1}>{i + 1}명</option>
          ))}
        </select>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-3 py-3 text-left font-semibold text-slate-700">연봉</th>
              <th className="px-3 py-3 text-right font-semibold text-slate-700">월 실수령액</th>
              <th className="px-3 py-3 text-right font-semibold text-slate-700 hidden sm:table-cell">국민연금</th>
              <th className="px-3 py-3 text-right font-semibold text-slate-700 hidden sm:table-cell">건강보험</th>
              <th className="px-3 py-3 text-right font-semibold text-slate-700 hidden md:table-cell">고용보험</th>
              <th className="px-3 py-3 text-right font-semibold text-slate-700 hidden md:table-cell">소득세</th>
              <th className="px-3 py-3 text-right font-semibold text-slate-700">공제합계</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.salary} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-3 py-2.5 font-medium text-slate-900">{formatNumber(row.salary)}만원</td>
                <td className="px-3 py-2.5 text-right font-semibold text-blue-600">{formatNumber(row.monthlyNet)}원</td>
                <td className="px-3 py-2.5 text-right text-slate-500 hidden sm:table-cell">{formatNumber(row.nationalPension)}</td>
                <td className="px-3 py-2.5 text-right text-slate-500 hidden sm:table-cell">{formatNumber(row.healthInsurance)}</td>
                <td className="px-3 py-2.5 text-right text-slate-500 hidden md:table-cell">{formatNumber(row.employmentInsurance)}</td>
                <td className="px-3 py-2.5 text-right text-slate-500 hidden md:table-cell">{formatNumber(row.incomeTax)}</td>
                <td className="px-3 py-2.5 text-right text-slate-600">{formatNumber(row.totalDeduction)}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">연봉 실수령액 표 읽는 법</h2>
        <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
          <p>
            위 표는 2026년 기준 4대보험 요율과 소득세율을 적용한 연봉별 실수령액입니다.
            비과세액은 월 20만원(식대), 퇴직금은 별도 기준으로 계산되었습니다.
          </p>
          <p>
            부양가족 수에 따라 소득세 공제 금액이 달라지므로, 본인의 상황에 맞는 부양가족 수를 선택해 주세요.
            부양가족에는 본인이 포함됩니다.
          </p>
          <p>
            건강보험 항목에는 장기요양보험료가 포함되어 있습니다. 실제 급여명세서와 소폭 차이가 있을 수 있으며,
            이는 원단위 절사, 간이세액표 적용 등의 차이입니다.
          </p>
        </div>
      </section>
    </div>
  );
}

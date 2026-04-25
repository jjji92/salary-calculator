import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { calculateNetSalary, formatNumber } from '../utils/salaryCalculator';
import { usePageMeta } from '../utils/usePageMeta';

const SALARY_RANGE = Array.from({ length: 91 }, (_, i) => (i + 10) * 100); // 1000~10000만원 (100만원 단위)

export default function SalaryTablePage() {
  usePageMeta(
    '2026 연봉 실수령액 표 - 연봉별 월급 비교',
    '2026년 연봉 1,000만원~1억원 구간별 월 실수령액, 4대보험, 소득세 공제 내역을 한눈에 비교하세요.'
  );

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
        <p className="text-slate-600">연봉 1,000만원 ~ 1억원 구간별 실수령액 한눈에 보기</p>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <label htmlFor="table-dependents" className="text-sm font-medium text-slate-700">부양가족 수 (본인 포함)</label>
        <select
          id="table-dependents"
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
        <table className="w-full text-xs sm:text-sm">
          <thead className="sticky top-0 z-10">
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
                <td className="px-3 py-2.5 text-right text-slate-600 hidden sm:table-cell">{formatNumber(row.nationalPension)}</td>
                <td className="px-3 py-2.5 text-right text-slate-600 hidden sm:table-cell">{formatNumber(row.healthInsurance)}</td>
                <td className="px-3 py-2.5 text-right text-slate-600 hidden md:table-cell">{formatNumber(row.employmentInsurance)}</td>
                <td className="px-3 py-2.5 text-right text-slate-600 hidden md:table-cell">{formatNumber(row.incomeTax)}</td>
                <td className="px-3 py-2.5 text-right text-slate-700">{formatNumber(row.totalDeduction)}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 관련 도구 링크 */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">연봉 실수령액 계산기</h3>
          <p className="text-sm text-slate-500">내 연봉으로 정확한 실수령액 계산</p>
        </Link>
        <Link to="/reverse" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">역산 계산기</h3>
          <p className="text-sm text-slate-500">원하는 월급으로 필요 연봉 계산</p>
        </Link>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">연봉 실수령액 표 읽는 법</h2>
        <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
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

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-5">주요 연봉 구간별 실수령액 분석</h2>
        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">연봉 2,000만원대 — 사회초년생·아르바이트 기준</h3>
            <p>
              연봉 2,000만원의 월 실수령액은 약 154~156만원입니다. 이 구간은 소득세 구간이 6%로
              세금 부담이 가장 낮은 단계입니다. 4대보험(국민연금·건강보험·고용보험)을 합산하면
              월 약 12~13만원이 공제됩니다. 소득세는 월 1만원 내외로 거의 발생하지 않습니다.
              연봉 2,400만원(월급 200만원) 기준으로 실수령액은 약 182만원 수준입니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">연봉 3,000만원대 — 중소기업 평균 초봉 구간</h3>
            <p>
              연봉 3,000만원의 월 실수령액은 약 218~220만원입니다. 공제액은 월 약 30만원 수준으로,
              국민연금 약 11.9만원, 건강보험(장기요양 포함) 약 10.2만원, 고용보험 약 2.3만원,
              소득세+지방소득세 약 5~6만원이 차감됩니다. 식대 비과세 월 20만원이 적용된 경우
              소득세가 약 1~2만원 줄어듭니다. 3,600만원이라면 실수령액은 약 260만원 수준입니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">연봉 4,000만원대 — 대기업 신입·경력직 초봉</h3>
            <p>
              연봉 4,000만원의 월 실수령액은 약 282~285만원입니다. 소득세 구간이 15%에 진입하면서
              세금이 급격히 늘어나는 구간입니다. 월 공제 총액은 약 48만원 수준으로 증가합니다.
              소득세·지방소득세가 합산 월 15만원 이상 발생하며, 부양가족 수에 따라 3~5만원 수준의
              세금 차이가 생깁니다. 연봉 4,500만원이면 실수령액은 약 316만원입니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">연봉 5,000만원대 — 직장인 평균 연봉 구간</h3>
            <p>
              연봉 5,000만원의 월 실수령액은 약 347~352만원입니다. 2026년 기준 한국 직장인 평균 연봉에
              가까운 이 구간은 소득세 부담이 본격적으로 커집니다. 소득세+지방소득세 합산 월
              20~25만원 수준이며, 공제 총액은 월 65만원 이상입니다. 연봉의 약 84~86%만
              실수령할 수 있는 구간으로, 비과세 항목을 최대한 활용하는 것이 유리합니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">연봉 6,000만원~8,000만원 — 고연봉 구간</h3>
            <p>
              연봉 6,000만원의 월 실수령액은 약 412~417만원이며, 8,000만원은 약 538만원 수준입니다.
              이 구간부터는 소득세율 24%가 본격 적용됩니다. 6,000만원 기준 소득세+지방소득세는
              월 약 37만원, 8,000만원에서는 월 약 57만원으로 증가합니다.
              국민연금은 월 소득 상한 637만원(2026년 기준)에 도달하면 상한이 적용되어
              월 최대 공제액이 30.2만원으로 고정됩니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">연봉 1억원 이상 — 고소득 직장인</h3>
            <p>
              연봉 1억원의 월 실수령액은 약 660만원 수준입니다. 소득세 구간 35%가 적용되기 시작하며,
              월 소득세+지방소득세 합산 공제액이 100만원을 넘어섭니다. 이 구간에서는
              연말정산을 통한 의료비·교육비·기부금 등 특별세액공제를 적극 활용하는 것이
              중요합니다. 실수령 비율은 연봉의 약 79~80% 수준으로 낮아집니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">실수령액을 높이는 방법</h2>
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-slate-800 mb-1">① 비과세 항목 최대 활용</h3>
            <p>
              식대 월 20만원, 자가운전보조금 월 20만원, 연구보조비 월 20만원 등 비과세 항목은
              소득세와 4대보험 계산에서 제외됩니다. 연봉 협상 시 동일 금액을 비과세로 받으면
              실수령액이 증가합니다. 예를 들어 연봉 5,000만원 중 비과세가 월 20만원이면
              월 소득세가 1~2만원 절감됩니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-1">② 연말정산 공제 항목 챙기기</h3>
            <p>
              이 표는 연말정산 추가 공제를 반영하지 않습니다. 실제로는 의료비(총급여 3% 초과분의 15%),
              교육비(15%), 기부금(15~30%), 주택청약저축(40% 소득공제) 등을 활용하면
              납부 세금을 상당히 줄일 수 있습니다. 특히 연봉 4,000만원~6,000만원 구간에서
              절세 효과가 가장 큽니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-1">③ 부양가족 공제 정확히 신청</h3>
            <p>
              부양가족 1명당 소득세 계산 시 150만원 인적공제가 적용됩니다. 소득 없는 배우자,
              만 20세 이하 자녀, 만 60세 이상 부모님을 부양가족으로 등록하면 세금이 줄어들고
              실수령액이 늘어납니다. 이 표의 부양가족 수 옵션을 변경하면 차이를 직접 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">연봉 협상 시 이 표 활용법</h2>
        <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
          <p>
            연봉 협상에서 회사는 "연봉"을 기준으로 이야기하지만, 실제 생활에 쓰이는 돈은
            "실수령액"입니다. 협상 전 이 표에서 원하는 실수령액에 해당하는 연봉 구간을 미리
            파악해 두면 협상 목표를 구체적으로 제시할 수 있습니다.
          </p>
          <p>
            예를 들어 "월 300만원은 실제로 받고 싶다"면, 이 표에서 월 실수령액이 300만원 이상인
            연봉 구간(약 4,200만원 이상)을 목표로 잡아야 합니다. 단순히 "연봉 300만원 인상"을
            요구하는 것보다, 실수령액 기준으로 구체적인 숫자를 제시하면 협상력이 높아집니다.
          </p>
          <p>
            또한 현재 받는 연봉과 이직 제안 연봉의 실수령액 차이를 이 표로 빠르게 비교할 수 있습니다.
            연봉 500만원 차이가 실제 월 실수령액으로는 얼마나 차이나는지 한눈에 확인해보세요.
          </p>
        </div>
      </section>
    </div>
  );
}

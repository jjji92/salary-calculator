import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { calculateRequiredSalary, formatNumber } from '../utils/salaryCalculator';
import { usePageMeta } from '../utils/usePageMeta';

export default function ReverseCalculatorPage() {
  usePageMeta(
    '연봉 역산 계산기 - 원하는 월급으로 연봉 계산',
    '원하는 월 실수령액을 입력하면 필요한 연봉을 역산합니다. 이직·연봉 협상 시 활용하세요.'
  );

  const [desiredNet, setDesiredNet] = useState('250');
  const [nonTaxable, setNonTaxable] = useState('20');
  const [dependents, setDependents] = useState('1');
  const [children, setChildren] = useState('0');

  const netNum = parseFloat(desiredNet) || 0;
  const netError = desiredNet !== '' && (netNum < 50 || netNum > 5000)
    ? '50만원 ~ 5,000만원 범위로 입력해 주세요'
    : '';

  const result = useMemo(() => {
    if (!netNum || netNum < 50 || netNum > 5000) return null;
    return calculateRequiredSalary(netNum * 10000, {
      nonTaxableMonthly: (parseFloat(nonTaxable) || 0) * 10000,
      dependents: parseInt(dependents) || 1,
      childrenUnder20: parseInt(children) || 0,
    });
  }, [desiredNet, nonTaxable, dependents, children]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">연봉 역산 계산기</h1>
        <p className="text-slate-600">원하는 월 실수령액으로 필요한 연봉을 계산합니다</p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">원하는 조건 입력</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="desiredNet" className="block text-sm font-medium text-slate-700 mb-1">원하는 월 실수령액 (만원)</label>
            <input
              id="desiredNet"
              type="number"
              value={desiredNet}
              onChange={(e) => setDesiredNet(e.target.value)}
              min={50}
              max={5000}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="250"
            />
            {netError && <p className="text-xs text-red-500 mt-1">{netError}</p>}
          </div>

          <div>
            <label htmlFor="rv-nonTaxable" className="block text-sm font-medium text-slate-700 mb-1">비과세액 (월/만원)</label>
            <input
              id="rv-nonTaxable"
              type="number"
              value={nonTaxable}
              onChange={(e) => setNonTaxable(e.target.value)}
              min={0}
              max={100}
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="20"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="rv-dependents" className="block text-sm font-medium text-slate-700 mb-1">부양가족 수 (본인 포함)</label>
              <select
                id="rv-dependents"
                value={dependents}
                onChange={(e) => setDependents(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i} value={i + 1}>{i + 1}명</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="rv-children" className="block text-sm font-medium text-slate-700 mb-1">20세 이하 자녀 수</label>
              <select
                id="rv-children"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <option key={i} value={i}>{i}명</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {result && (
        <div className="space-y-4">
          <div className="rounded-lg bg-blue-600 p-6 text-white shadow-sm">
            <p className="text-sm text-blue-100 mb-1">필요 연봉</p>
            <p className="text-4xl font-bold">{formatNumber(result.requiredAnnualSalary / 10000)}만원</p>
            <p className="text-blue-200 text-sm mt-1">({formatNumber(result.requiredAnnualSalary)}원)</p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">예상 급여 내역 (월)</h3>
            <div className="space-y-2 text-sm">
              <Row label="월 급여 (세전)" value={result.result.monthlyGross} bold />
              <div className="border-t border-slate-100 pt-2 mt-2" />
              <Row label="국민연금" value={-result.result.deductions.nationalPension} />
              <Row label="건강보험" value={-result.result.deductions.healthInsurance} />
              <Row label="장기요양보험" value={-result.result.deductions.longTermCare} />
              <Row label="고용보험" value={-result.result.deductions.employmentInsurance} />
              <Row label="소득세" value={-result.result.deductions.incomeTax} />
              <Row label="지방소득세" value={-result.result.deductions.localIncomeTax} />
              <div className="border-t border-slate-200 pt-2 mt-2" />
              <Row label="월 실수령액" value={result.result.monthlyNet} bold highlight />
            </div>
          </div>
        </div>
      )}

      {/* 관련 도구 링크 */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">연봉 실수령액 계산기</h3>
          <p className="text-sm text-slate-500">내 연봉으로 정확한 실수령액 계산</p>
        </Link>
        <Link to="/table" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">연봉 실수령액 표</h3>
          <p className="text-sm text-slate-500">1,000만원~1억원 구간별 비교</p>
        </Link>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">역산 계산기 사용법</h2>
        <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
          <p>
            원하는 월 실수령액을 입력하면 해당 금액을 받기 위해 필요한 연봉을 역산합니다.
            이직이나 연봉 협상 시 목표 실수령액을 기준으로 요구 연봉을 산정할 때 유용합니다.
          </p>
          <p>
            계산 결과는 2026년 4대보험 요율과 소득세율을 기준으로 하며, 비과세 항목과 부양가족 수에 따라 결과가 달라집니다.
          </p>
        </div>
      </section>
    </div>
  );
}

function Row({ label, value, bold, highlight }: { label: string; value: number; bold?: boolean; highlight?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-semibold' : ''} ${highlight ? 'text-blue-600' : 'text-slate-700'}`}>
      <span>{label}</span>
      <span>{value >= 0 ? '' : '-'}{formatNumber(Math.abs(value))}원</span>
    </div>
  );
}

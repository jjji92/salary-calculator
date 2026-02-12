import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { calculateNetSalary, formatNumber, type SalaryResult } from '../utils/salaryCalculator';

const CHART_COLORS = ['#2563eb', '#e5e7eb'];

export default function SalaryCalculatorPage() {
  const [salary, setSalary] = useState('3000');
  const [nonTaxable, setNonTaxable] = useState('20');
  const [dependents, setDependents] = useState('1');
  const [children, setChildren] = useState('0');
  const [includeRetirement, setIncludeRetirement] = useState(false);

  const result: SalaryResult | null = useMemo(() => {
    const salaryNum = parseFloat(salary);
    if (!salaryNum || salaryNum <= 0) return null;
    return calculateNetSalary({
      annualSalary: salaryNum * 10000,
      nonTaxableMonthly: (parseFloat(nonTaxable) || 0) * 10000,
      dependents: parseInt(dependents) || 1,
      childrenUnder20: parseInt(children) || 0,
      includeRetirement,
    });
  }, [salary, nonTaxable, dependents, children, includeRetirement]);

  const chartData = result
    ? [
        { name: '실수령액', value: result.monthlyNet },
        { name: '공제합계', value: result.deductions.totalDeduction },
      ]
    : [];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">연봉 실수령액 계산기</h1>
        <p className="text-slate-500">2026년 최신 세율 · 4대보험 요율 적용</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 입력 패널 */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">급여 정보 입력</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">연봉 (만원)</label>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="3000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">비과세액 (월/만원)</label>
              <input
                type="number"
                value={nonTaxable}
                onChange={(e) => setNonTaxable(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="20"
              />
              <p className="text-xs text-slate-400 mt-1">식대 등 비과세 항목 (기본 20만원)</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">부양가족 수 (본인 포함)</label>
                <select
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
                <label className="block text-sm font-medium text-slate-700 mb-1">20세 이하 자녀 수</label>
                <select
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

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setIncludeRetirement(!includeRetirement)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  includeRetirement ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    includeRetirement ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm text-slate-700">퇴직금 포함</span>
            </div>
          </div>
        </div>

        {/* 결과 패널 */}
        <div className="space-y-4">
          {result && (
            <>
              {/* 실수령액 카드 */}
              <div className="rounded-lg bg-blue-600 p-6 text-white shadow-sm">
                <p className="text-sm text-blue-100 mb-1">월 실수령액</p>
                <p className="text-4xl font-bold">{formatNumber(result.monthlyNet)}원</p>
                <div className="mt-3 flex gap-6 text-sm text-blue-100">
                  <div>
                    <span>연 실수령액</span>
                    <p className="text-lg font-semibold text-white">{formatNumber(result.annualNet)}원</p>
                  </div>
                  <div>
                    <span>월 공제액</span>
                    <p className="text-lg font-semibold text-white">{formatNumber(result.deductions.totalDeduction)}원</p>
                  </div>
                </div>
              </div>

              {/* 차트 */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">실수령 비율</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {chartData.map((_, index) => (
                          <Cell key={index} fill={CHART_COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(v) => `${formatNumber(v as number)}원`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                    실수령 {result.monthlyGross > 0 ? Math.round((result.monthlyNet / result.monthlyGross) * 100) : 0}%
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-gray-200" />
                    공제 {result.monthlyGross > 0 ? Math.round((result.deductions.totalDeduction / result.monthlyGross) * 100) : 0}%
                  </div>
                </div>
              </div>

              {/* 공제 내역 */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">월 공제 내역</h3>
                <div className="space-y-2 text-sm">
                  <DeductionRow label="국민연금" value={result.deductions.nationalPension} />
                  <DeductionRow label="건강보험" value={result.deductions.healthInsurance} />
                  <DeductionRow label="장기요양보험" value={result.deductions.longTermCare} />
                  <DeductionRow label="고용보험" value={result.deductions.employmentInsurance} />
                  <DeductionRow label="소득세" value={result.deductions.incomeTax} />
                  <DeductionRow label="지방소득세" value={result.deductions.localIncomeTax} />
                  <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between font-semibold text-slate-900">
                    <span>공제 합계</span>
                    <span>{formatNumber(result.deductions.totalDeduction)}원</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* SEO 콘텐츠 */}
      <section className="mt-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">연봉 실수령액이란?</h2>
        <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
          <p>
            연봉 실수령액은 근로자가 회사로부터 받는 연봉에서 4대보험(국민연금, 건강보험, 장기요양보험, 고용보험)과
            소득세, 지방소득세를 공제한 후 실제로 통장에 입금되는 금액입니다.
          </p>
          <p>
            2026년 기준으로 국민연금은 월 소득의 4.75%, 건강보험은 3.595%, 고용보험은 0.9%가 근로자 부담분으로 공제됩니다.
            소득세는 과세표준에 따라 6%~45%의 누진세율이 적용됩니다.
          </p>
          <p>
            본 계산기는 2026년 최신 세율과 4대보험 요율을 적용하여 정확한 실수령액을 계산합니다.
            비과세 항목, 부양가족 수, 자녀 수에 따라 세금이 달라지므로 본인의 상황에 맞게 입력해 주세요.
          </p>
        </div>
      </section>
    </div>
  );
}

function DeductionRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between text-slate-600">
      <span>{label}</span>
      <span>{formatNumber(value)}원</span>
    </div>
  );
}

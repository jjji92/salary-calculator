import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { calculateNetSalary, formatNumber, type SalaryResult } from '../utils/salaryCalculator';
import { usePageMeta } from '../utils/usePageMeta';

const CHART_COLORS = ['#2563eb', '#e5e7eb'];

export default function SalaryCalculatorPage() {
  usePageMeta(
    '연봉 실수령액 계산기 - 2026년 최신 세율 적용',
    '2026년 최신 세율이 적용된 연봉 실수령액 계산기입니다. 4대보험, 소득세, 지방소득세 공제 내역을 한눈에 확인하세요.'
  );

  const [salary, setSalary] = useState('3000');
  const [nonTaxable, setNonTaxable] = useState('20');
  const [dependents, setDependents] = useState('1');
  const [children, setChildren] = useState('0');
  const [includeRetirement, setIncludeRetirement] = useState(false);
  const [copied, setCopied] = useState(false);

  const salaryNum = parseFloat(salary) || 0;
  const salaryError = salary !== '' && (salaryNum < 100 || salaryNum > 100000)
    ? '100만원 ~ 10억원 범위로 입력해 주세요'
    : '';

  const result: SalaryResult | null = useMemo(() => {
    if (!salaryNum || salaryNum < 100 || salaryNum > 100000) return null;
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

  const handleCopy = () => {
    if (!result) return;
    const text = `연봉 ${formatNumber(salaryNum)}만원 → 월 실수령액 ${formatNumber(result.monthlyNet)}원`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">연봉 실수령액 계산기</h1>
        <p className="text-slate-600">2026년 최신 세율 · 4대보험 요율 적용</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 입력 패널 */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">급여 정보 입력</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-slate-700 mb-1">연봉 (만원)</label>
              <input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                min={100}
                max={100000}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="3000"
              />
              {salaryError && <p className="text-xs text-red-500 mt-1">{salaryError}</p>}
            </div>

            <div>
              <label htmlFor="nonTaxable" className="block text-sm font-medium text-slate-700 mb-1">비과세액 (월/만원)</label>
              <input
                id="nonTaxable"
                type="number"
                value={nonTaxable}
                onChange={(e) => setNonTaxable(e.target.value)}
                min={0}
                max={100}
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="20"
              />
              <p className="text-xs text-slate-500 mt-1">식대 등 비과세 항목 (기본 20만원)</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="dependents" className="block text-sm font-medium text-slate-700 mb-1">부양가족 수 (본인 포함)</label>
                <select
                  id="dependents"
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
                <label htmlFor="children" className="block text-sm font-medium text-slate-700 mb-1">20세 이하 자녀 수</label>
                <select
                  id="children"
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
                aria-label="퇴직금 포함 토글"
                role="switch"
                aria-checked={includeRetirement}
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
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-blue-100">월 실수령액</p>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-blue-200 hover:text-white transition-colors px-2 py-1 rounded border border-blue-400 hover:border-white"
                  >
                    {copied ? '복사됨!' : '결과 복사'}
                  </button>
                </div>
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
                <div className="h-40 sm:h-48">
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
                    <span className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
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

      {/* 관련 도구 링크 */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/table" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">연봉 실수령액 표</h3>
          <p className="text-sm text-slate-500">1,000만원~1억원 구간별 비교</p>
        </Link>
        <Link to="/reverse" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">역산 계산기</h3>
          <p className="text-sm text-slate-500">원하는 월급으로 필요 연봉 계산</p>
        </Link>
        <Link to="/guide" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">계산 가이드</h3>
          <p className="text-sm text-slate-500">4대보험·소득세 계산 방법</p>
        </Link>
      </section>

      {/* SEO 콘텐츠 */}
      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">연봉 실수령액이란?</h2>
        <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
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

      {/* FAQ */}
      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">자주 묻는 질문</h2>
        <div className="space-y-4 text-sm">
          <FaqItem
            q="연봉 3,000만원이면 실수령액은 얼마인가요?"
            a="부양가족 1명(본인), 비과세 월 20만원 기준으로 월 약 222만원 내외입니다. 부양가족 수나 비과세 항목에 따라 달라질 수 있으니 위 계산기에서 직접 확인해 보세요."
          />
          <FaqItem
            q="비과세액은 무엇인가요?"
            a="비과세액은 소득세가 부과되지 않는 급여 항목입니다. 대표적으로 식대(월 20만원), 자가운전보조금(월 20만원), 육아수당 등이 있습니다. 비과세액이 클수록 실수령액이 늘어납니다."
          />
          <FaqItem
            q="퇴직금 포함과 별도의 차이는 무엇인가요?"
            a="퇴직금 포함 연봉은 퇴직금이 연봉에 포함되어 있어 실제 월급이 줄어듭니다. 예를 들어 퇴직금 포함 3,900만원이면 실제 연간 급여는 약 3,600만원(3,900 × 12/13)이고 나머지가 퇴직금으로 적립됩니다."
          />
          <FaqItem
            q="부양가족 수는 어떻게 계산하나요?"
            a="본인을 포함한 부양가족 수를 입력합니다. 배우자, 직계존속(부모님), 직계비속(자녀) 중 연간 소득금액 100만원 이하인 분이 해당됩니다. 1인 가구는 1명(본인)을 선택하세요."
          />
          <FaqItem
            q="실제 급여명세서와 차이가 나는 이유는?"
            a="회사마다 비과세 항목 구성이 다르고, 실제 급여에서는 간이세액표를 적용하기 때문에 소폭 차이가 날 수 있습니다. 또한 연말정산 시 의료비, 교육비 등 추가 공제를 받으면 환급받을 수 있습니다."
          />
          <FaqItem
            q="2026년에 바뀐 세율이 있나요?"
            a="2026년부터 국민연금 요율이 9%에서 9.5%(근로자 4.75%)로 인상되었습니다. 건강보험도 7.09%에서 7.19%(근로자 3.595%)로, 장기요양보험도 12.95%에서 13.14%로 인상되었습니다."
          />
        </div>
      </section>
    </div>
  );
}

function DeductionRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between text-slate-700">
      <span>{label}</span>
      <span>{formatNumber(value)}원</span>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="cursor-pointer font-medium text-slate-800 hover:text-blue-600 transition-colors list-none flex items-start gap-2">
        <span className="text-blue-500 mt-0.5 shrink-0">Q.</span>
        <span>{q}</span>
      </summary>
      <p className="mt-2 ml-6 text-slate-600 leading-relaxed">{a}</p>
    </details>
  );
}

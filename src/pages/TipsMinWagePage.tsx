import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsMinWagePage() {
  usePageMeta(
    '2026년 최저임금 완전 가이드 - 시급·월급·연봉 계산',
    '2026년 최저임금 시급과 월급 환산, 업종별 적용 기준, 최저임금 위반 시 신고 방법, 수습 기간 최저임금까지 정리합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">최저임금</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">2026년 최저임금 완전 가이드</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          2026년 최저임금이 확정되었습니다. 최저임금은 모든 사업장에 적용되는 최저 수준의
          임금으로, 이를 지키지 않으면 사업주에게 법적 제재가 가해집니다. 이 글에서는
          2026년 최저임금 시급, 월급 환산, 적용 기준, 위반 시 신고 방법까지 정리합니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 2026년 최저임금
        </h2>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 space-y-3">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-slate-500 mb-1">시급</p>
              <p className="text-xl font-bold text-blue-700">10,030원</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">일급 (8시간)</p>
              <p className="text-xl font-bold text-blue-700">80,240원</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">월급 (209시간)</p>
              <p className="text-xl font-bold text-blue-700">2,096,270원</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center">
            * 적용 기간: 2026년 1월 1일 ~ 2026년 12월 31일 / 전년 대비 1.7% 인상
          </p>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          월급 환산의 기준인 <strong>월 209시간</strong>은 주 40시간 근무 기준으로
          한 달 평균 근로시간(주 40시간 + 유급 주휴 8시간 = 주 48시간, 48시간 ×
          4.345주 ≈ 209시간)을 의미합니다. 주휴수당이 포함된 수치입니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 최저임금 적용 기준
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          최저임금은 <strong>모든 사업장, 모든 근로자</strong>에게 적용됩니다. 사업 규모,
          업종, 고용 형태(정규직·계약직·아르바이트)에 관계없이 동일하게 적용됩니다.
          외국인 근로자도 동일하게 보호받습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          최저임금 계산 시 포함되는 임금과 포함되지 않는 임금이 구분됩니다.
          <strong>포함되는 임금</strong>은 기본급, 직무수당, 직책수당, 생산장려수당 등
          매월 정기적으로 지급하는 수당입니다. <strong>포함되지 않는 임금</strong>은 초과근로수당(연장·야간·휴일),
          연차수당, 가족수당, 식대·교통비(비정기적), 상여금(연 100% 초과분) 등입니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-1">
          <p className="font-medium text-slate-800">최저임금 산입에 포함되는 임금 (2026년 기준)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>기본급 (매월 정기 지급분)</li>
            <li>상여금 중 최저임금 월 환산액의 15% 초과분</li>
            <li>식대·교통비·숙박비 등 복리후생비 중 최저임금 월 환산액의 2% 초과분</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 주휴수당이란
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          주휴수당은 주 15시간 이상 근무하고 소정 근로일에 개근한 경우 1주에 1일치 임금을
          추가로 받는 제도입니다. 최저임금 계산 시 이미 포함되어 있으므로, 월 209시간을
          기준으로 최저임금을 계산하면 주휴수당이 반영된 금액이 됩니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          예를 들어 주 40시간 근무하는 근로자의 주휴수당은 최저시급 × 8시간입니다.
          2026년 기준으로는 10,030원 × 8시간 = 80,240원이 주휴수당입니다.
          아르바이트처럼 일주일 단위로 계약하는 경우에도 주 15시간 이상 개근하면
          주휴수당을 받을 권리가 있습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 수습 기간 최저임금
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          수습 기간 중에는 최저임금의 <strong>90%</strong>를 지급할 수 있습니다. 단,
          이는 다음 조건을 모두 충족해야 합니다.
        </p>
        <ul className="text-sm text-slate-700 leading-relaxed list-disc list-inside space-y-1">
          <li>수습 기간이 3개월 이내일 것</li>
          <li>1년 이상 근로계약을 체결한 경우에만 해당</li>
          <li>단순 노무 업무는 감액 불가 (90% 적용 제외)</li>
        </ul>
        <p className="text-sm text-slate-700 leading-relaxed">
          2026년 기준 수습 기간 최저임금은 10,030원 × 90% = 9,027원입니다.
          단순 노무직이나 계약 기간이 1년 미만인 경우에는 수습 기간에도 정상 최저임금
          (10,030원)을 지급해야 합니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 최저임금 위반 시 신고 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          최저임금을 받지 못한 경우 다음 방법으로 신고하거나 도움을 받을 수 있습니다.
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">고용노동부 민원포털 (minwon.moel.go.kr)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              온라인으로 최저임금 위반 진정을 제기할 수 있습니다. 근로계약서, 급여명세서,
              근무 기록 등 증거 자료를 첨부하면 처리가 빠릅니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">고용노동부 고객상담센터 (☎ 1350)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              전화로 상담하고 도움받을 수 있습니다. 익명 상담도 가능합니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">관할 지방고용노동청 직접 방문</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              서류를 지참해 직접 진정서를 제출할 수 있습니다. 처리 기간은 통상 30~60일입니다.
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          최저임금 위반 사업주에게는 3년 이하 징역 또는 2,000만원 이하 벌금이 부과됩니다.
          신고를 이유로 해고하는 것은 부당해고에 해당하며 별도의 법적 보호를 받습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          6. 연도별 최저임금 추이
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          최저임금은 매년 최저임금위원회에서 결정하며, 노사 간 협의 과정을 거쳐 8월 5일까지
          고시됩니다. 최근 10년간 최저임금 추이를 보면 꾸준한 상승세를 보여왔습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">연도</th>
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">시급</th>
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">전년 대비</th>
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">월급 (209h)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['2022', '9,160원', '+5.1%', '1,914,440원'],
                ['2023', '9,620원', '+5.0%', '2,010,580원'],
                ['2024', '9,860원', '+2.5%', '2,060,740원'],
                ['2025', '10,030원', '+1.7%', '2,096,270원'],
                ['2026', '10,030원', '+0%', '2,096,270원'],
              ].map(([year, wage, rate, monthly], i) => (
                <tr key={year} className={i % 2 === 0 ? '' : 'bg-slate-50'}>
                  <td className="px-3 py-2 border border-slate-200 font-medium text-slate-700">{year}년</td>
                  <td className="px-3 py-2 border border-slate-200 text-slate-600">{wage}</td>
                  <td className="px-3 py-2 border border-slate-200 text-slate-600">{rate}</td>
                  <td className="px-3 py-2 border border-slate-200 text-slate-600">{monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">* 위 수치는 참고용이며, 정확한 수치는 고용노동부 공식 발표를 확인하세요.</p>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">내 월급이 최저임금 이상인지 확인해 보세요</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          연봉 또는 월급을 입력하면 실수령액과 시급을 계산해 최저임금 기준과 비교해 볼 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
            연봉 실수령액 계산기
          </Link>
          <Link to="/table" className="inline-block rounded-md border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 transition-colors">
            연봉 구간별 실수령액 표
          </Link>
        </div>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link to="/tips/four-insurance" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          관련: 4대보험 완전 정리 →
        </Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsRetirementPage() {
  usePageMeta(
    '퇴직금 계산 완전 가이드 - 계산 방법·지급 기준·세금',
    '퇴직금 계산 공식, 지급 조건, 지급 시기, 세금 처리, 퇴직연금(DC·DB) 차이까지 퇴직금에 관한 모든 것을 정리합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">퇴직금</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">퇴직금 계산 완전 가이드</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          퇴직금은 근로자가 1년 이상 근무한 후 퇴직할 때 받는 급여입니다. 계산 공식이
          복잡해 보여도 기본 구조만 이해하면 어렵지 않습니다. 이 글에서 퇴직금 지급
          조건, 계산 방법, 세금 처리, 퇴직연금 제도까지 한번에 정리합니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 퇴직금 지급 조건
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          퇴직금을 받으려면 두 가지 조건을 충족해야 합니다. 첫째, <strong>계속 근로 기간이
          1년 이상</strong>이어야 합니다. 수습 기간을 포함한 실제 근무 기간이 기준입니다.
          둘째, <strong>주 15시간 이상</strong> 근무해야 합니다. 단시간 근로자(주 15시간 미만)는
          퇴직금 지급 의무에서 제외됩니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          자발적 퇴직이든 해고이든 관계없이 조건을 충족하면 퇴직금을 받을 수 있습니다.
          다만 중간 정산을 받은 경우에는 중간 정산 이후의 기간만 계산합니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-1">
          <p className="font-medium text-slate-800">퇴직금 지급 조건 요약</p>
          <ul className="list-disc list-inside space-y-1">
            <li>계속 근로 기간 1년 이상</li>
            <li>주 소정 근로시간 15시간 이상</li>
            <li>고용 형태 불문 (정규직·계약직·아르바이트 모두 해당)</li>
            <li>퇴직 사유 불문 (자발적 퇴직, 해고, 계약 만료 모두 해당)</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 퇴직금 계산 공식
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          퇴직금은 다음 공식으로 계산합니다.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center space-y-2">
          <p className="text-sm font-semibold text-slate-900">퇴직금 = 1일 평균임금 × 30일 × (근속연수)</p>
          <p className="text-xs text-slate-600">1일 평균임금 = 퇴직 전 3개월간 총 임금 ÷ 퇴직 전 3개월간 총 일수</p>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>평균임금</strong>은 퇴직 전 3개월간 실제로 지급받은 임금의 총액을 해당 기간의
          역일수(달력상 일수)로 나눈 금액입니다. 기본급뿐만 아니라 정기적으로 지급받은 상여금,
          수당 등도 포함됩니다. 단, 비정기적인 일회성 급여나 실비 지원금은 제외될 수 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>계산 예시</strong>를 살펴보겠습니다. 월 기본급 300만원, 연 상여금 600만원을
          받는 근로자가 3년 6개월(42개월) 근무 후 퇴직하는 경우를 가정합니다. 월 평균임금은
          기본급 300만원 + 상여금 월 환산분 50만원(600만원 ÷ 12) = 350만원입니다.
          1일 평균임금은 350만원 × 12개월 ÷ 365일 ≈ 115,068원이 됩니다.
          퇴직금은 115,068원 × 30일 × 3.5년 = 약 12,082,140원입니다.
        </p>
        <p className="text-xs text-slate-500">
          * 실제 계산 시 3개월 역일수는 92일(약) 기준으로 계산하며, 상여금의 포함 여부는
          지급 규정에 따라 달라질 수 있습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 퇴직금 지급 시기와 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          퇴직금은 퇴직일로부터 <strong>14일 이내</strong>에 지급해야 합니다. 당사자 간 합의가
          있으면 기간을 연장할 수 있지만, 합리적 이유 없이 지연하면 지연이자(연 20%)가
          발생하고 법적 분쟁으로 이어질 수 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          퇴직금 미지급은 법 위반입니다. 사업주가 퇴직금을 지급하지 않으면 3년 이하 징역
          또는 3,000만원 이하 벌금이 부과될 수 있습니다. 퇴직금을 받지 못한 경우 관할
          지방고용노동청에 진정을 제기하거나, 고용노동부 민원포털에 신고할 수 있습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 퇴직금 세금 처리
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          퇴직금은 <strong>퇴직소득세</strong>가 부과됩니다. 퇴직소득세는 일반 근로소득세보다
          세율이 낮게 적용되도록 설계되어 있어, 장기 근속자일수록 세금 부담이 줄어듭니다.
          근속연수에 따라 공제액이 커지기 때문입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          퇴직소득세 계산 구조를 간단히 설명하면, 퇴직급여에서 근속연수 공제를 적용한 후
          환산급여 계산, 환산급여 공제, 과세표준 산출, 세율 적용 순으로 진행됩니다.
          이 과정은 복잡하므로 회사 또는 퇴직금 지급 기관에서 원천징수 후 지급하는 것이 일반적입니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-3 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-medium text-slate-800">근속연수별 퇴직소득 공제 (2026년 기준)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>근속연수 5년 이하: 근속연수 × 100만원</li>
            <li>근속연수 5년 초과 ~ 10년 이하: 500만원 + (근속연수 - 5) × 200만원</li>
            <li>근속연수 10년 초과 ~ 20년 이하: 1,500만원 + (근속연수 - 10) × 250만원</li>
            <li>근속연수 20년 초과: 4,000만원 + (근속연수 - 20) × 300만원</li>
          </ul>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          퇴직금을 IRP(개인형 퇴직연금 계좌)로 수령하면 퇴직소득세를 일시에 내지 않고,
          실제 인출 시 세금을 내므로 과세 이연 효과가 있습니다. 55세 이후 연금으로 수령하면
          세율이 낮아지므로 장기적으로 유리합니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 퇴직연금 제도 — DB vs DC
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          많은 회사에서 전통적인 퇴직금 대신 <strong>퇴직연금 제도</strong>를 운영합니다.
          퇴직연금은 DB형과 DC형으로 나뉩니다.
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">DB형 (확정급여형, Defined Benefit)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              퇴직 시 받는 금액이 미리 정해져 있는 방식입니다. 기존 퇴직금 계산 방식과 동일하게
              "1일 평균임금 × 30일 × 근속연수"로 계산됩니다. 운용 성과에 관계없이 약정된 금액을
              받으므로 안정적이지만, 급여가 높을수록 회사 부담이 커집니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">DC형 (확정기여형, Defined Contribution)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              매년 회사가 근로자 개인 계좌에 일정 금액(연간 임금의 1/12 이상)을 적립하고,
              근로자가 직접 운용하는 방식입니다. 운용 성과에 따라 최종 수령액이 달라집니다.
              회사 입장에서는 비용이 고정되고, 근로자 입장에서는 운용 성과에 따라 더 많이
              받을 수도 있습니다. 이직이 잦은 경우 DC형이 유리한 경우가 많습니다.
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          DB형은 장기 근속자에게, DC형은 이직이 잦거나 투자에 관심 있는 근로자에게
          일반적으로 유리합니다. 회사에 따라 선택 가능한 경우도 있으니 입사 시 확인해 보세요.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          6. 퇴직금 관련 자주 묻는 질문
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "중간 정산을 받으면 퇴직금이 줄어드나요?",
              a: "중간 정산 후에는 그 시점이 새로운 기산점이 됩니다. 이후 기간만 계산되므로 같은 기간 근무해도 중간 정산이 있으면 최종 퇴직금이 줄어들 수 있습니다. 중간 정산은 법에서 정한 특별한 사유(주택 구입, 요양, 임금피크제 등)가 있을 때만 가능합니다.",
            },
            {
              q: "퇴직금 포함 연봉은 어떻게 계산하나요?",
              a: "퇴직금 포함 연봉이 3,900만원이면, 실제 연간 급여는 3,900 × (12/13) ≈ 3,600만원이고 나머지 300만원이 퇴직금에 해당합니다. 채용 공고의 연봉이 퇴직금 포함인지 별도인지 반드시 확인하세요.",
            },
            {
              q: "계약직이나 아르바이트도 퇴직금을 받을 수 있나요?",
              a: "네, 고용 형태와 관계없이 주 15시간 이상, 1년 이상 계속 근로한 경우 퇴직금을 받을 수 있습니다. 계약이 반복 갱신되어 합산 근로 기간이 1년 이상이 되는 경우도 해당됩니다.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800 mb-1">Q. {item.q}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">연봉 실수령액도 확인해 보세요</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          퇴직금 포함/별도 여부에 따라 실수령액이 달라집니다. 연봉 계산기에서 퇴직금 포함 여부를
          선택해 실수령액을 비교해 보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
            연봉 계산기 바로가기
          </Link>
          <Link to="/guide" className="inline-block rounded-md border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 transition-colors">
            계산 가이드 보기
          </Link>
        </div>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link to="/tips/salary-negotiation" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          다음: 연봉 협상 완전 가이드 →
        </Link>
      </div>
    </div>
  );
}

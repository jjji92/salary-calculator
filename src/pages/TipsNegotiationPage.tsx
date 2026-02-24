import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsNegotiationPage() {
  usePageMeta(
    '연봉 협상 완전 가이드 - 이직·신입·재직 상황별 전략',
    '연봉 협상 타이밍, 희망 연봉 제시 방법, 상황별 대화법, 거절 대응까지 연봉 협상에 관한 모든 것을 정리한 실전 가이드입니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">협상</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">연봉 협상 완전 가이드</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          연봉 협상은 준비한 만큼 결과가 달라집니다. 많은 사람들이 "제시한 금액을 그냥
          받아들이거나" "무작정 올려달라고 했다가 어색해진" 경험을 합니다. 이 글에서는
          이직, 신입 취업, 재직 중 협상 등 상황별로 효과적인 전략과 실전 대화법을 정리합니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 협상 전 반드시 해야 할 준비 — 시장 연봉 조사
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          협상 자리에서 가장 강력한 무기는 <strong>데이터</strong>입니다. "저는 이 정도
          받아야 할 것 같습니다"보다 "동일 직군 3~5년 경력의 시장 평균 연봉이 OOO만원
          수준입니다"라고 말하는 것이 훨씬 설득력 있습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          시장 연봉을 조사하는 방법으로는 <strong>잡코리아·사람인 연봉 정보</strong>,
          <strong>링크드인 연봉 인사이트</strong>, <strong>블라인드 연봉 게시판</strong>,
          <strong>크레딧잡</strong> 등을 활용할 수 있습니다. 동일 직군, 비슷한 경력,
          비슷한 규모의 회사 기준으로 조사하는 것이 정확합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          조사가 끝나면 <strong>최소 수락 금액(Bottom line)</strong>과 <strong>희망
          금액(Target)</strong>을 미리 정해두세요. 협상 도중 즉흥적으로 결정하면
          나중에 후회하는 경우가 많습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 희망 연봉을 먼저 말해야 할까, 기다려야 할까
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          많은 구직자들이 희망 연봉을 먼저 말하는 것을 두려워합니다. 하지만 시장 조사를
          충분히 했다면 <strong>먼저 제시하는 것이 유리</strong>합니다. 협상학에서는
          이를 "앵커링(Anchoring)" 효과라고 합니다. 처음 제시된 숫자가 이후 협상의
          기준점이 되기 때문입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          희망 연봉을 말할 때는 목표 금액보다 <strong>10~15% 높게 제시</strong>하는 것이
          일반적입니다. 어차피 협상을 통해 낮춰지는 경우가 많기 때문에, 처음부터
          딱 받고 싶은 금액을 말하면 실제로는 그보다 낮게 결정되는 경우가 많습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-800">실전 대화 예시</p>
          <p className="text-slate-500 italic">면접관: "희망 연봉이 어떻게 되세요?"</p>
          <p>
            "네, 현재 시장에서 저와 유사한 경력과 역할의 연봉 수준을 조사했을 때
            OOO~OOO만원 구간임을 확인했습니다. 저는 [구체적인 성과/역량] 을 감안해
            OOO만원을 희망합니다. 물론 복리후생과 성장 기회도 함께 고려하겠습니다."
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 이직 협상 — 현재 연봉을 기준으로 올리는 법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          이직 시 연봉 협상의 가장 흔한 실수는 "현재 연봉 + 약간"을 기준으로 생각하는
          것입니다. 이직은 시장 가치를 재평가받는 기회이므로, 현재 연봉이 아닌
          <strong>새 회사의 역할 가치</strong>와 <strong>시장 평균</strong>을 기준으로
          협상해야 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          이직 시 일반적으로 10~20% 인상을 기대할 수 있습니다. 30% 이상 인상되는 경우도
          있지만, 이는 대개 특수한 기술이나 경험이 있거나 해당 포지션의 인재 수급이
          어려운 경우입니다. 이직 제안을 여러 군데서 받아 경쟁을 유도하는 것도
          효과적인 전략입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          "다른 회사에서 OOO만원 오퍼를 받았습니다"라고 말하면 강력한 협상 카드가
          됩니다. 단, 실제로 그 오퍼를 받은 상황이어야 신뢰도가 유지됩니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 신입 연봉 협상 — 금액보다 구조를 보라
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          신입의 경우 기본 연봉 금액만큼이나 <strong>연봉 구조</strong>를 살펴보는 것이
          중요합니다. 기본급, 성과급, 상여금, 인센티브의 비율이 어떻게 되는지에 따라
          실제 수령액이 크게 달라지기 때문입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          예를 들어 기본급 3,000만원 + 성과급 0~200%인 회사와, 기본급 3,500만원 고정인
          회사는 연봉 표기상 비슷해 보여도 실수령 구조가 전혀 다릅니다. 또한 복리후생
          (식대, 교통비, 건강검진, 자기계발비 등)을 금액으로 환산하면 연봉 차이를
          상쇄하는 경우도 많습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm space-y-1">
          <p className="font-semibold text-slate-800">신입이 꼭 확인해야 할 항목</p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1">
            <li>기본급과 성과급·상여금 비율</li>
            <li>식대, 교통비 지원 여부 및 비과세 여부</li>
            <li>인상 주기와 평균 인상률</li>
            <li>수습 기간 급여 (보통 3개월, 80~100% 지급)</li>
            <li>야근 수당 포함 여부 (포괄임금제 여부)</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 거절당했을 때 대응법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          "저희 내규상 그 이상은 드리기 어렵습니다"라는 답변을 받았을 때,
          그냥 수락하거나 포기하는 대신 <strong>대안을 제시</strong>해 보세요.
          연봉 외에 협상 가능한 요소들이 있습니다.
        </p>
        <ul className="text-sm text-slate-600 leading-relaxed space-y-2 list-disc list-inside">
          <li><strong>입사 후 3~6개월 재검토 조건</strong> — "입사 후 성과를 보고 6개월 뒤 재협의할 수 있을까요?"</li>
          <li><strong>사이닝 보너스</strong> — "입사 보너스 형태로 일시 지급이 가능한지요?"</li>
          <li><strong>연차 일수</strong> — 법정 기준보다 추가 연차 요청</li>
          <li><strong>재택·유연근무</strong> — 금전적 보상 대신 근무 환경 협상</li>
          <li><strong>교육비·자기계발비</strong> — 실질적 처우 개선</li>
        </ul>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">협상 전 실수령액 시뮬레이션</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          희망 연봉을 입력하면 실제 월 실수령액을 미리 확인할 수 있습니다.
          협상에서 제시할 금액의 실수령액을 계산해 보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
            연봉 계산기 바로가기
          </Link>
          <Link to="/reverse" className="inline-block rounded-md border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 transition-colors">
            원하는 실수령액으로 역산하기
          </Link>
        </div>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link to="/tips/salary-raise" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          다음: 연봉 인상 요청 전략 →
        </Link>
      </div>
    </div>
  );
}

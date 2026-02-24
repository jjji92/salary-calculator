import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsRaisePage() {
  usePageMeta(
    '현직자를 위한 연봉 인상 요청 전략 - 성과 어필과 타이밍',
    '재직 중 연봉 인상을 요청하는 방법, 성과를 수치로 어필하는 방식, 인상 요청 타이밍과 대화법까지 단계별로 정리한 가이드입니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">인상 전략</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">현직자를 위한 연봉 인상 요청 전략</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          재직 중에 연봉을 올리는 것은 이직보다 훨씬 어렵게 느껴집니다. 분위기가
          어색해질까 봐, 거절당할까 봐 선뜻 요청하지 못하는 경우가 많습니다.
          하지만 준비가 잘 된 요청은 생각보다 받아들여지는 경우가 많습니다.
          이 글에서는 인상 요청 전 준비사항부터 실전 대화법까지 단계별로 정리합니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 연봉 인상 요청의 적절한 타이밍
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          타이밍은 결과에 큰 영향을 줍니다. 아무리 준비가 잘 돼 있어도
          잘못된 타이밍에 요청하면 거절당하기 쉽습니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-green-800">좋은 타이밍</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>연간 성과 평가 직전 (보통 11~12월)</li>
              <li>큰 프로젝트를 성공적으로 마무리한 직후</li>
              <li>중요한 성과나 기여가 있었던 직후</li>
              <li>회사 실적이 좋아진 시기</li>
              <li>이직 오퍼를 받은 시점 (레버리지)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-100 bg-red-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-red-800">피해야 할 타이밍</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>회사 실적이 나빠진 시기</li>
              <li>팀이나 회사 전체가 바쁜 피크 기간</li>
              <li>상사가 스트레스를 받고 있는 시기</li>
              <li>입사 또는 이전 인상 후 너무 짧은 시점</li>
              <li>팀 내 갈등이나 이슈가 있는 시기</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 성과를 수치로 정리하기 — 가장 중요한 준비
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          "열심히 했습니다"는 설득력이 없습니다. <strong>숫자로 증명하는 성과</strong>가
          훨씬 강력합니다. 요청 전에 지난 1년 동안의 성과를 최대한 수치화해서 정리하세요.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 leading-relaxed space-y-3">
          <p className="font-semibold text-slate-800">성과를 수치화하는 방법</p>
          <div className="space-y-2">
            <div>
              <p className="font-medium text-slate-700 mb-1">매출/수익 기여</p>
              <p className="text-slate-500">"OO 프로젝트 수주에 기여, 계약금 OOO만원 달성" / "담당 고객 이탈률 OO% 감소"</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">효율 개선</p>
              <p className="text-slate-500">"업무 프로세스 개선으로 처리 시간 OO% 단축" / "자동화 도입으로 월 OO시간 절감"</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">책임 범위 확대</p>
              <p className="text-slate-500">"입사 당시 OO 담당 → 현재 OO·OO·OO까지 담당, 팀원 OO명 관리"</p>
            </div>
            <div>
              <p className="font-medium text-slate-700 mb-1">역량 향상</p>
              <p className="text-slate-500">"OO 자격증 취득" / "OO 기술 도입 및 팀 내 전파"</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          수치화가 어려운 직무라면 "입사 당시와 지금의 역할 범위 차이", "팀 내에서의
          포지션 변화" 등을 정리해 보세요. 담당 업무와 책임이 커졌다는 것을 명확하게
          보여주는 것이 중요합니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 시장 연봉과의 격차 제시하기
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          성과 외에도 <strong>시장 데이터</strong>는 강력한 근거가 됩니다. 동일 직군,
          비슷한 경력의 시장 평균 연봉이 현재 연봉보다 높다면, 이는 합리적인 인상
          요청의 근거가 됩니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          단, "다른 회사가 이 정도 준답니다"는 표현보다 "시장 데이터를 조사해 보니
          비슷한 역할의 평균이 OOO만원 수준이었습니다. 현재 저의 연봉이 그에 비해
          낮은 편이라 조율이 가능한지 여쭤보고 싶었습니다"처럼 중립적이고
          사실 기반으로 말하는 것이 효과적입니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 실전 대화법 — 말 꺼내는 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          많은 사람들이 연봉 인상 요청을 어떻게 꺼내야 할지 막막해합니다.
          다음과 같은 방식으로 면담을 먼저 요청하면 자연스럽게 시작할 수 있습니다.
        </p>
        <div className="space-y-3">
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-800 mb-2">면담 요청 메시지 예시</p>
            <p className="text-slate-600 italic">
              "팀장님, 잠깐 개인 면담을 요청드려도 될까요? 최근 업무 역할과 성과에 대해
              말씀드리고 싶은 게 있어서요. 가능하신 시간 알려주시면 감사하겠습니다."
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-800 mb-2">면담 시작 멘트 예시</p>
            <p className="text-slate-600 italic">
              "팀장님, 시간 내주셔서 감사합니다. 저는 이 회사에서 계속 성장하고
              기여하고 싶은 마음이 큽니다. 최근 1년간의 성과와 역할 변화를 보면서,
              연봉 조정에 대해 한번 말씀드리고 싶었습니다."
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          요청 시 구체적인 금액을 제시하면 더 효과적입니다. "많이 올려 주세요"보다
          "OOO만원 인상을 희망합니다"처럼 수치를 말하면 협상이 명확해집니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 거절당했을 때 — 다음 단계 준비
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          인상 요청이 거절됐다고 끝이 아닙니다. <strong>"언제 재검토가 가능한가요?"</strong>
          라고 물어 구체적인 기준과 시기를 확인하세요. "6개월 후 재검토", "다음 성과 평가
          때 반영" 같은 답변이 있다면 그 약속을 서면(메일 등)으로 남겨두는 것이 좋습니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          거절 이후 이직 카드를 활용하는 것도 방법입니다. 실제로 다른 회사의 오퍼를
          받아 제시하면, 회사 입장에서도 재고할 가능성이 높아집니다. 다만 진짜
          이직 의사가 없다면 이 전략은 신중하게 사용해야 합니다.
        </p>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">인상 후 실수령액 확인하기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          연봉이 인상된다면 실수령액이 얼마나 달라지는지 미리 계산해 보세요.
          현재 연봉과 목표 연봉을 각각 입력해 비교할 수 있습니다.
        </p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          연봉 계산기 바로가기
        </Link>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips/salary-negotiation" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 이전: 연봉 협상 가이드
        </Link>
        <Link to="/" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          계산기 사용하기 →
        </Link>
      </div>
    </div>
  );
}

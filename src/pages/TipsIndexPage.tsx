import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

const ARTICLES = [
  {
    to: '/tips/salary-negotiation',
    title: '연봉 협상 완전 가이드',
    desc: '이직·신입·재직 상황별 연봉 협상 전략과 실전 대화법을 정리했습니다. 협상 타이밍, 희망 연봉 제시 방법, 거절 대응까지.',
    tag: '협상',
  },
  {
    to: '/tips/salary-raise',
    title: '현직자를 위한 연봉 인상 요청 전략',
    desc: '재직 중 연봉 인상을 요청하는 방법, 성과를 어필하는 방식, 인상 시기 선택까지 단계별로 알려드립니다.',
    tag: '인상 전략',
  },
];

export default function TipsIndexPage() {
  usePageMeta(
    '연봉 팁 모음 - 협상·인상 전략 가이드',
    '연봉 협상, 연봉 인상 요청 전략 등 연봉을 높이는 데 바로 활용할 수 있는 실전 가이드를 모았습니다.'
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">연봉 팁</h1>
        <p className="text-slate-600">연봉을 높이는 데 바로 쓸 수 있는 실전 전략 모음입니다.</p>
      </div>

      <div className="space-y-4">
        {ARTICLES.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="space-y-1.5">
              <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 rounded px-2 py-0.5">
                {a.tag}
              </span>
              <h2 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {a.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
            </div>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">협상 전 연봉 시뮬레이션</h2>
        <p className="text-sm text-slate-600">희망 연봉을 입력하면 실수령액을 미리 확인할 수 있습니다. 협상 전에 목표 금액을 구체적으로 잡아보세요.</p>
        <Link
          to="/"
          className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors"
        >
          연봉 계산기 바로가기
        </Link>
      </div>
    </div>
  );
}

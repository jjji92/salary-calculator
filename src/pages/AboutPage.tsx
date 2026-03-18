import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function AboutPage() {
  usePageMeta(
    '서비스 소개 - 연봉 실수령액 계산기 | silsuryang.com',
    '연봉 실수령액 계산기는 2026년 최신 세율 기준으로 4대보험, 소득세, 지방소득세를 자동 계산해 실수령액을 알려주는 무료 도구입니다. 제작 배경과 주요 기능을 소개합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900">연봉 실수령액 계산기 소개</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          연봉 협상을 앞두고, 혹은 이직을 고민하면서 "이 연봉이면 실제로 통장에 얼마나 들어올까"를
          궁금해하는 분들을 위해 만든 무료 온라인 계산기입니다. 복잡한 세금 계산을
          간단하게 해결할 수 있도록 설계했습니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          왜 만들었나요?
        </h2>
        <div className="text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            취업 준비나 이직 과정에서 연봉 협상을 할 때, 제시받은 금액이 실제로 얼마가 될지
            바로 알기 어렵습니다. 국민연금, 건강보험, 소득세 등을 모두 계산하려면
            여러 수식을 일일이 적용해야 하는데, 이를 한번에 자동으로 처리하는 도구가 필요했습니다.
          </p>
          <p>
            특히 부양가족 수나 비과세 항목에 따라 소득세가 달라지는데, 이 부분까지
            반영한 계산기가 많지 않습니다. 2026년 기준 최신 세율과 4대보험 요율을 정확하게
            적용하고, 비과세액·부양가족·자녀 수까지 고려한 계산기를 만들고자 했습니다.
          </p>
          <p>
            개인정보 입력 없이, 광고나 회원가입 없이 바로 계산 결과를 확인할 수 있도록
            최대한 간결하게 설계했습니다.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              to: '/',
              title: '연봉 실수령액 계산기',
              desc: '연봉, 비과세액, 부양가족 수, 자녀 수를 입력하면 월 실수령액과 공제 내역(국민연금·건강보험·소득세 등)을 한눈에 확인합니다.',
              tag: '핵심 기능',
            },
            {
              to: '/table',
              title: '연봉 구간별 실수령액 표',
              desc: '1,000만원부터 1억원까지 100만원 단위로 실수령액을 비교합니다. 연봉 협상 전 참고 자료로 유용합니다.',
              tag: '비교 표',
            },
            {
              to: '/reverse',
              title: '역산 계산기',
              desc: '원하는 월 실수령액을 입력하면 그 금액을 받기 위해 필요한 연봉을 역으로 계산합니다.',
              tag: '도구',
            },
            {
              to: '/guide',
              title: '계산 가이드',
              desc: '연봉 실수령액 계산 과정을 단계별로 설명합니다. 4대보험 요율 표, 소득세 구간, 근로소득공제 기준을 정리했습니다.',
              tag: '가이드',
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <span className="text-[10px] font-medium text-blue-700 bg-blue-50 rounded px-1.5 py-0.5 shrink-0">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          이런 분들에게 유용합니다
        </h2>
        <ul className="text-sm text-slate-700 leading-relaxed space-y-2 list-disc list-inside">
          <li>
            <strong>취업 준비생</strong> — 합격 후 연봉 협상 전 실수령액을 미리 파악하고 싶은 분
          </li>
          <li>
            <strong>이직 고민 중인 직장인</strong> — 현재 연봉 대비 이직 제안 연봉의 실수령 차이를 비교하고 싶은 분
          </li>
          <li>
            <strong>연봉 협상 준비 중인 분</strong> — 희망 연봉과 최소 수락 연봉의 실수령액을 각각 계산해 협상 기준을 잡고 싶은 분
          </li>
          <li>
            <strong>프리랜서·자영업자</strong> — 직장 복귀 시 예상 실수령액을 미리 확인하고 싶은 분
          </li>
          <li>
            <strong>HR·인사담당자</strong> — 신규 채용자 또는 임직원 급여 계획을 세울 때 참고 수치로 활용하고 싶은 분
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          계산 기준 및 주의사항
        </h2>
        <div className="text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            본 계산기는 <strong>2026년 기준 국민연금 요율(4.75%), 건강보험 요율(3.595%),
            장기요양보험(건강보험료 × 13.14%), 고용보험(0.9%)</strong>을 적용합니다.
            소득세는 간이세액표 기준으로 계산하며, 부양가족 수와 20세 이하 자녀 수에 따른
            인적공제가 반영됩니다.
          </p>
          <p>
            다음 항목은 본 계산기에 포함되지 않습니다.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>연말정산 의료비·교육비·기부금 등 특별세액공제</li>
            <li>회사별 포괄임금제, 성과급, 비정기 수당</li>
            <li>산재보험(근로자 부담 없음)</li>
          </ul>
          <p>
            실제 급여명세서와 소폭 차이가 날 수 있으므로, 정확한 수치는 회사 급여 담당자
            또는 세무사에게 문의하시기 바랍니다. 본 계산기는 참고 목적으로만 사용해 주세요.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          연봉 관련 가이드도 함께 확인해 보세요
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          계산기 외에도 연봉을 높이고 실수령액을 최적화하는 데 도움이 되는 실전 가이드를 제공합니다.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { to: '/tips/salary-negotiation', label: '연봉 협상 가이드' },
            { to: '/tips/salary-raise', label: '연봉 인상 요청 전략' },
            { to: '/tips/four-insurance', label: '4대보험 완전 정리' },
            { to: '/tips/retirement-pay', label: '퇴직금 계산 가이드' },
            { to: '/tips/minimum-wage-2026', label: '2026 최저임금' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 hover:bg-blue-100 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-slate-900">운영 정보</h2>
        <div className="text-sm text-slate-600 leading-relaxed space-y-2">
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-16">서비스명</span>
            <span>연봉 실수령액 계산기</span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-16">도메인</span>
            <span>silsuryang.com</span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-16">운영</span>
            <span>개인 운영</span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-16">적용 기준</span>
            <span>2026년 국민연금·건강보험·고용보험·소득세 간이세액표</span>
          </div>
          <div className="flex gap-3">
            <span className="text-slate-400 shrink-0 w-16">데이터</span>
            <span>서버 저장 없음 — 입력값은 브라우저에서만 처리됩니다.</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
          본 계산기는 참고용이며, 실제 급여와 차이가 있을 수 있습니다.
          정확한 세금 계산은 세무사 또는 급여 담당자에게 문의하시기 바랍니다.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-3 border-t pt-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors"
        >
          연봉 계산기 바로가기
        </Link>
        <Link
          to="/guide"
          className="inline-flex items-center justify-center gap-1 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2 transition-colors"
        >
          계산 방법 가이드
        </Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">소개</h1>

      <div className="space-y-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-600 leading-relaxed space-y-4">
          <p>
            연봉 실수령액 계산기는 2026년 최신 세율과 4대보험 요율을 적용하여
            정확한 실수령액을 간편하게 계산할 수 있는 무료 온라인 도구입니다.
          </p>
          <p>
            연봉 협상, 이직, 취업 준비 시 실제로 받게 될 금액을 미리 확인하고,
            국민연금, 건강보험, 소득세 등 각 공제 항목의 금액을 한눈에 파악할 수 있습니다.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-3">주요 기능</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <Feature
              title="연봉 실수령액 계산"
              desc="연봉, 비과세액, 부양가족 수를 입력하면 월 실수령액과 공제 내역을 상세하게 보여줍니다."
              to="/"
            />
            <Feature
              title="연봉 실수령액 표"
              desc="1,000만원부터 1억원까지 연봉 구간별 실수령액을 한눈에 비교할 수 있습니다."
              to="/table"
            />
            <Feature
              title="역산 계산기"
              desc="원하는 월 실수령액을 입력하면 필요한 연봉을 역으로 계산합니다."
              to="/reverse"
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-600 leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 mb-3">안내사항</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>본 계산기는 참고용이며, 실제 급여와 차이가 있을 수 있습니다.</li>
            <li>연말정산, 특별세액공제 등은 반영되지 않습니다.</li>
            <li>입력 정보는 서버로 전송되지 않으며, 브라우저에서만 처리됩니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, desc, to }: { title: string; desc: string; to: string }) {
  return (
    <Link to={to} className="block rounded-md border border-slate-100 p-3 hover:bg-slate-50 transition-colors">
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-500 mt-0.5">{desc}</p>
    </Link>
  );
}

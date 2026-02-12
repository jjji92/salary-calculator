export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">개인정보처리방침</h1>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-600 leading-relaxed space-y-6">
        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">1. 개인정보의 수집 및 이용</h2>
          <p>
            본 사이트는 별도의 회원가입 절차 없이 이용 가능하며, 사용자의 개인정보를 수집하지 않습니다.
            입력하신 연봉 등의 정보는 브라우저에서만 처리되며, 서버로 전송되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">2. 쿠키 및 분석 도구</h2>
          <p>
            본 사이트는 서비스 개선 및 사용자 경험 향상을 위해 Google Analytics를 사용할 수 있습니다.
            Google Analytics는 쿠키를 사용하여 익명의 방문 통계를 수집합니다.
            사용자는 브라우저 설정을 통해 쿠키 사용을 거부할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">3. 광고</h2>
          <p>
            본 사이트는 Google AdSense를 통해 광고를 게재할 수 있습니다. Google AdSense는
            사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">4. 제3자 제공</h2>
          <p>본 사이트는 사용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">5. 개인정보처리방침의 변경</h2>
          <p>본 개인정보처리방침은 관련 법령 및 서비스 변경에 따라 수정될 수 있습니다.</p>
        </section>

        <p className="text-slate-400 text-xs">시행일: 2026년 2월 12일</p>
      </div>
    </div>
  );
}

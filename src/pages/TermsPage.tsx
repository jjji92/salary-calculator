import { usePageMeta } from '../utils/usePageMeta';

export default function TermsPage() {
  usePageMeta(
    '이용약관 - 연봉 실수령액 계산기',
    '연봉 실수령액 계산기 서비스 이용약관입니다.'
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">이용약관</h1>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-sm text-slate-700 leading-relaxed space-y-6">
        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">제1조 (목적)</h2>
          <p>
            본 약관은 연봉 실수령액 계산기(이하 "서비스")의 이용과 관련하여 서비스 제공자와
            이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">제2조 (서비스의 내용)</h2>
          <p>
            서비스는 2026년 기준 세율 및 4대보험 요율을 적용한 연봉 실수령액 계산, 연봉별 실수령액 표,
            역산 계산 등의 기능을 무료로 제공합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">제3조 (면책사항)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>본 서비스의 계산 결과는 참고용이며, 실제 급여와 차이가 있을 수 있습니다.</li>
            <li>계산 결과의 정확성을 보장하지 않으며, 이를 근거로 한 의사결정에 대해 책임지지 않습니다.</li>
            <li>연말정산, 특별세액공제 등은 반영되지 않으며, 회사별 급여 구조에 따라 실제 금액은 달라질 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">제4조 (개인정보)</h2>
          <p>
            서비스는 별도의 회원가입 없이 이용 가능하며, 이용자가 입력하는 연봉 등의 정보는
            브라우저에서만 처리되고 서버로 전송되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">제5조 (지적재산권)</h2>
          <p>
            서비스에 포함된 콘텐츠, 디자인, 소스코드 등에 대한 지적재산권은 서비스 제공자에게 있으며,
            무단 복제, 배포, 수정을 금지합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">제6조 (서비스의 변경 및 중단)</h2>
          <p>
            서비스 제공자는 운영상, 기술상의 필요에 따라 서비스의 내용을 변경하거나
            중단할 수 있으며, 이에 대해 별도의 보상을 하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800 mb-2">제7조 (약관의 변경)</h2>
          <p>
            본 약관은 관련 법령 및 서비스 정책 변경에 따라 수정될 수 있으며,
            변경된 약관은 서비스 내 공지를 통해 효력이 발생합니다.
          </p>
        </section>

        <p className="text-slate-400 text-xs">시행일: 2026년 2월 12일</p>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsFourInsurancePage() {
  usePageMeta(
    '4대보험 완전 정리 - 국민연금·건강보험·고용보험·산재보험',
    '4대보험의 종류, 2026년 요율, 계산 방법, 직장인과 지역가입자 차이, 자주 묻는 질문까지 4대보험에 관한 모든 것을 정리합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">4대보험</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">4대보험 완전 정리 가이드</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          매달 급여명세서를 받으면 공제 항목에 국민연금, 건강보험, 고용보험이 적혀 있습니다.
          이 항목들이 정확히 무엇인지, 요율은 어떻게 되는지, 왜 내야 하는지를
          모르는 분들이 많습니다. 이 글에서 4대보험의 구조와 계산 방법을 완전히 정리합니다.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 4대보험이란 무엇인가
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          4대보험은 국가에서 의무적으로 가입하도록 정한 4가지 사회보험입니다.
          <strong>국민연금, 건강보험, 고용보험, 산재보험</strong>이 이에 해당합니다.
          직장인의 경우 고용주(회사)와 근로자가 보험료를 나누어 부담하는데,
          급여명세서에 공제되는 항목은 근로자 부담분입니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          4대보험에 가입되면 노후(국민연금), 의료비(건강보험), 실직(고용보험),
          업무상 재해(산재보험) 등 다양한 상황에서 보호를 받을 수 있습니다.
          근로자라면 법적으로 의무 가입 대상이 되며, 미가입 시 사업주에게 과태료가
          부과될 수 있습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 2026년 4대보험 요율 (근로자 부담분)
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          2026년 기준 4대보험 근로자 부담 요율은 아래와 같습니다. 요율은 매년 조정될 수
          있으며, 특히 국민연금과 건강보험 요율은 2026년부터 인상되었습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-800">보험 종류</th>
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-800">근로자 요율</th>
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-800">사업주 요율</th>
                <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-800">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border border-slate-200 font-medium text-slate-700">국민연금</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">4.75%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">4.75%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-500 text-xs">월 소득 상한 637만원</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-3 py-2 border border-slate-200 font-medium text-slate-700">건강보험</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">3.595%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">3.595%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-500 text-xs"></td>
              </tr>
              <tr>
                <td className="px-3 py-2 border border-slate-200 font-medium text-slate-700">장기요양보험</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">건강보험료 × 13.14%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">건강보험료 × 13.14%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-500 text-xs">건강보험에 포함</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-3 py-2 border border-slate-200 font-medium text-slate-700">고용보험</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">0.9%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">0.9%~1.65%</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-500 text-xs">사업주는 규모에 따라 다름</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border border-slate-200 font-medium text-slate-700">산재보험</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">없음 (전액 사업주)</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-600">업종별 상이</td>
                <td className="px-3 py-2 border border-slate-200 text-slate-500 text-xs">근로자 부담 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          * 산재보험은 근로자가 부담하지 않습니다. 급여명세서에 공제되는 항목은 국민연금, 건강보험, 장기요양보험, 고용보험 4가지입니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 4대보험 계산 예시 (월급 300만원 기준)
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          월 급여 300만원(비과세 20만원 제외 시 과세소득 280만원)을 기준으로
          4대보험 공제액을 계산하면 다음과 같습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border p-4 space-y-2 text-sm">
          <div className="flex justify-between text-slate-700">
            <span>국민연금</span>
            <span>280만원 × 4.75% = <strong>133,000원</strong></span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span>건강보험</span>
            <span>280만원 × 3.595% = <strong>100,660원</strong></span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span>장기요양보험</span>
            <span>100,660원 × 13.14% = <strong>13,227원</strong></span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span>고용보험</span>
            <span>280만원 × 0.9% = <strong>25,200원</strong></span>
          </div>
          <div className="flex justify-between font-semibold text-slate-900 border-t border-slate-200 pt-2 mt-1">
            <span>4대보험 합계</span>
            <span>약 272,087원</span>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          * 실제 금액은 원 단위 절사 등으로 소폭 다를 수 있습니다. 소득세와 지방소득세는 별도 공제입니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 각 보험의 혜택 — 왜 내야 하는가
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">국민연금</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              노후에 연금을 받기 위한 보험입니다. 10년 이상 납부하면 만 63세(출생연도에 따라 다름)부터
              매월 연금을 받을 수 있습니다. 납부 기간이 길수록, 납부 금액이 클수록 받는 연금액이
              늘어납니다. 장애 발생 시 장애연금, 사망 시 유족연금으로도 활용됩니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">건강보험 + 장기요양보험</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              병원·약국 이용 시 진료비의 일부만 본인이 부담하고 나머지를 건강보험에서 지원합니다.
              장기요양보험은 65세 이상 노인이나 치매·뇌졸중 등 장기 요양이 필요한 경우
              요양 서비스 비용을 지원합니다. 직장 건강보험 피부양자로 등록하면 가족도 혜택을 받을 수 있습니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">고용보험</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              실직했을 때 실업급여를 받기 위한 보험입니다. 고용보험 가입 기간이 180일 이상이고
              비자발적으로 퇴직한 경우 실업급여 수급 자격이 생깁니다. 실업급여 외에도
              출산·육아휴직급여, 직업능력개발 훈련비 지원 등 다양한 혜택이 있습니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">산재보험</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              업무 중 발생한 사고나 질병에 대해 치료비와 휴업급여를 지원합니다. 근로자는 보험료를
              내지 않으며, 사업주가 전액 부담합니다. 업무상 재해로 인정되면 치료비, 휴업급여,
              장해급여, 유족급여 등을 받을 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 직장가입자 vs 지역가입자 차이
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          건강보험과 국민연금은 직장가입자와 지역가입자로 구분됩니다. 직장에 다니면 직장가입자가 되고,
          자영업자나 프리랜서, 무직자는 지역가입자가 됩니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          직장가입자는 보험료를 회사와 절반씩 부담합니다. 지역가입자는 소득뿐만 아니라
          재산(부동산, 자동차 등)도 보험료 산정에 반영되어 직장가입자보다 부담이 클 수 있습니다.
          퇴직 후 지역가입자로 전환되면 보험료가 갑자기 높아지는 경우가 많으므로,
          임의계속가입 제도를 활용해 직장가입자 자격을 최대 36개월간 유지하는 방법도 있습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          6. 4대보험 자주 묻는 질문
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "알바나 단시간 근로자도 4대보험이 적용되나요?",
              a: "주 15시간 이상 근무하는 근로자는 4대보험 가입 의무가 있습니다. 주 15시간 미만인 경우 국민연금과 건강보험 적용에서 제외되지만, 고용보험과 산재보험은 적용됩니다.",
            },
            {
              q: "4대보험료는 연말정산 시 공제받을 수 있나요?",
              a: "국민연금은 전액 소득공제, 건강보험료도 전액 소득공제 대상입니다. 이미 월급에서 공제 후 지급되는 구조라 별도 신고 없이 연말정산에 자동 반영됩니다.",
            },
            {
              q: "국민연금은 안 내면 어떻게 되나요?",
              a: "직장가입자는 사업주가 의무적으로 공제해 납부하므로 개인이 선택할 수 없습니다. 자영업자(지역가입자)의 경우 납부예외 신청이 가능하나, 해당 기간은 연금 수급 기간에 산입되지 않습니다.",
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
        <h2 className="text-sm font-bold text-slate-900">내 4대보험 공제액 계산해 보기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          연봉을 입력하면 국민연금, 건강보험, 고용보험 공제액과 실수령액을 한번에 확인할 수 있습니다.
        </p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          연봉 실수령액 계산기 바로가기
        </Link>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link to="/guide" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          계산 가이드 보기 →
        </Link>
      </div>
    </div>
  );
}

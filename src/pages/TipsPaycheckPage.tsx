import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsPaycheckPage() {
  usePageMeta(
    '급여명세서 완전 해설 - 항목별 의미와 계산법 (2026년)',
    '급여명세서의 기본급·식대·직책수당 등 지급항목과 국민연금·건강보험·소득세 등 공제항목의 의미와 계산법을 상세히 설명합니다. 급여명세서에서 이상한 점을 발견하는 방법도 알아봅니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">급여명세서</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">급여명세서 완전 해설</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          매달 받는 급여명세서에는 낯선 항목들이 가득합니다. "기타수당이 갑자기 빠져 있는데?"
          "장기요양보험은 뭐지?" "소득세가 지난달이랑 다른 이유는?" — 급여명세서를 제대로 읽을 수 있으면
          자신의 급여 구조를 이해하고, 오류나 누락을 발견할 수 있습니다.
          이 글에서는 급여명세서의 모든 항목을 처음부터 끝까지 해설합니다.
        </p>
      </header>

      {/* 급여명세서 구조 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 급여명세서의 기본 구조
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          급여명세서는 크게 <strong>지급항목</strong>과 <strong>공제항목</strong>으로 나뉩니다.
          지급항목의 합계(지급총액)에서 공제항목의 합계(공제총액)를 빼면 실제로 받는
          <strong> 실수령액(차인지급액)</strong>이 됩니다.
        </p>
        <div className="rounded-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-slate-200">
            <div className="p-4 space-y-2">
              <p className="text-sm font-semibold text-green-700">지급항목 (받는 것)</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 기본급</li>
                <li>• 식대</li>
                <li>• 교통비</li>
                <li>• 직책수당 / 직무수당</li>
                <li>• 가족수당</li>
                <li>• 연장·야간·휴일수당</li>
                <li>• 성과급 / 상여금</li>
                <li>• 기타수당</li>
              </ul>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm font-semibold text-red-700">공제항목 (빠지는 것)</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 국민연금</li>
                <li>• 건강보험</li>
                <li>• 장기요양보험</li>
                <li>• 고용보험</li>
                <li>• 소득세 (근로소득세)</li>
                <li>• 지방소득세</li>
                <li>• 기타 (조합비, 사내대출 상환 등)</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 p-4 border-t border-slate-200 text-sm font-semibold text-blue-800 text-center">
            실수령액 = 지급총액 − 공제총액
          </div>
        </div>
      </section>

      {/* 지급항목 */}
      <section className="space-y-5">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 지급항목 상세 해설
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">기본급</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              근로계약서에 명시된 기본 임금입니다. 연봉을 12로 나눈 금액이 기본급이 되는 경우가 많지만,
              회사마다 기본급과 각종 수당의 비율을 다르게 구성합니다.
              퇴직금, 연장근로수당, 연차수당 등의 계산 기준이 되므로 매우 중요한 항목입니다.
              기본급이 낮고 수당 비율이 높은 구조는 퇴직금이 상대적으로 적게 쌓이는 경향이 있습니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">식대 (식비)</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              회사가 지급하는 식사 대용 금액입니다. 월 <strong>20만원까지는 비과세</strong>로,
              소득세와 4대보험 계산에서 제외됩니다. 따라서 연봉이 같더라도 식대를 별도로
              지급하는 회사가 실수령액이 더 많습니다. 회사가 식사를 직접 제공하는 경우에는
              식대를 따로 지급하지 않아도 됩니다. 식대 20만원을 초과하는 금액은 과세소득에
              포함됩니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">교통비 (차량유지비)</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              출퇴근 또는 업무용 차량 유지를 위한 지원 수당입니다.
              자가운전 보조금의 경우 월 <strong>20만원까지 비과세</strong>가 적용됩니다.
              단, 대중교통 이용자에게 지급하는 교통비는 비과세 혜택이 없습니다.
              출장비, 업무용 차량 유지비는 별도 항목으로 처리되는 경우도 있습니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">직책수당 / 직무수당</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              팀장, 파트장 등 직책에 따라 지급되는 수당이 직책수당, 특정 직무나 전문성에 따라
              지급되는 수당이 직무수당입니다. 과세 소득에 포함되며 퇴직금 산정 기준에도 포함됩니다.
              직책이 바뀌면 수당이 변동되므로 계약서에서 미리 확인하는 것이 좋습니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">연장·야간·휴일수당 (초과근무수당)</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              법정 근로시간(주 40시간)을 초과하는 근로, 야간(오후 10시~익일 오전 6시), 휴일 근로에
              대한 가산임금입니다. 근로기준법에 따라 통상임금의 <strong>50% 가산</strong>이 원칙입니다.
              단, 포괄임금제를 적용하는 회사는 이러한 수당이 기본급이나 포괄수당에 포함되어 있어
              명세서에 별도로 표시되지 않는 경우가 많습니다.
              5인 미만 사업장은 연장·야간·휴일 가산수당 적용이 제외됩니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">성과급 / 상여금</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              개인 성과 또는 회사 성과에 따라 지급되는 변동 보상입니다.
              지급 시기에 따라 월별 또는 분기·연간으로 나눠 지급됩니다.
              성과급이 나오는 달에는 지급총액이 늘어나므로 그 달의 세금도 함께 늘어납니다.
              특히 소득세는 성과급이 포함된 달에 크게 증가할 수 있으며,
              연말정산 때 최종 정산됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 공제항목 */}
      <section className="space-y-5">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 공제항목 상세 해설 — 2026년 기준
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          공제항목은 크게 <strong>4대보험</strong>과 <strong>세금(소득세·지방소득세)</strong>으로 나뉩니다.
          4대보험은 사용자(회사)와 근로자가 절반씩 부담하는 구조이며,
          세금은 근로자가 전액 부담합니다.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">국민연금</p>
              <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-0.5">근로자 부담: 4.5%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              노후 소득 보장을 위한 공적 연금 보험료입니다. <strong>2026년 기준 보험료율은 9%</strong>로,
              근로자와 사용자가 4.5%씩 부담합니다. 보수월액(월 급여에서 비과세 제외한 금액)을 기준으로 산정됩니다.
              상한선은 월 보수 <strong>637만원</strong>으로, 637만원 초과분에는 보험료가 부과되지 않아
              고소득자는 월 최대 286,650원까지만 공제됩니다.
              하한선은 월 보수 37만원입니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">건강보험</p>
              <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-0.5">근로자 부담: 3.545%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              의료비 부담 경감을 위한 건강보험 보험료입니다. <strong>2026년 보험료율은 7.09%</strong>,
              근로자와 사용자가 3.545%씩 부담합니다. 국민연금과 마찬가지로 비과세소득을 제외한
              보수월액을 기준으로 계산됩니다. 상한선(월 보수 약 1억 1,834만원)과 하한선(월 보수 약 28만원)이 있습니다.
              건강보험료는 매년 초 전년도 소득을 기준으로 정산(연말정산과 별도)이 이루어질 수 있으며,
              4월 급여에서 일시 추가 공제 또는 환급이 이루어지는 경우가 있습니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">장기요양보험</p>
              <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-0.5">건강보험료의 12.95%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              노인 장기요양 서비스를 위한 보험으로, 건강보험과 함께 부과됩니다.
              건강보험료에 <strong>12.95%</strong>를 곱한 금액을 근로자와 사용자가 절반씩 부담합니다.
              예를 들어 건강보험료가 월 15만원이면 장기요양보험료는 약 9,713원입니다.
              별도 항목으로 표시되는 경우도 있고, 건강보험에 합산 표시되는 경우도 있습니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">고용보험</p>
              <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-0.5">근로자 부담: 0.9%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              실업급여 지급 재원을 위한 보험입니다. <strong>2026년 근로자 부담율은 0.9%</strong>입니다.
              사용자는 근로자 부담분 0.9%에 더해 고용안정·직업능력개발사업 보험료(사업장 규모에 따라
              0.25~0.85%)를 추가로 부담합니다. 이직 후 구직급여(실업급여) 수급 자격과 연결되는
              보험이므로 직장인에게 중요합니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">소득세 (근로소득세)</p>
              <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-0.5">간이세액표 기준 원천징수</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              근로소득에 부과되는 세금으로, 매달 <strong>간이세액표</strong>에 따라 원천징수됩니다.
              월 급여액과 부양가족 수를 기준으로 세액이 결정되며, 연말정산을 통해 최종 확정됩니다.
              성과급이 지급되는 달, 급여가 변동된 달에는 소득세가 크게 달라질 수 있습니다.
              특이하게 소득세가 0원이거나 매우 낮은 경우, 부양가족 수 설정이 과도하게 높을 가능성이 있어
              연말정산 때 추가 납부가 발생할 수 있습니다.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">지방소득세</p>
              <span className="text-xs text-slate-500 bg-slate-100 rounded px-2 py-0.5">소득세의 10%</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              지방자치단체에 납부하는 세금으로, 소득세의 <strong>10%</strong>가 자동으로 부과됩니다.
              국세인 소득세와 달리 지방세이며, 납세 지역은 매년 1월 1일 기준 주소지입니다.
              소득세와 지방소득세를 합치면 실질적인 세율을 파악할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 포괄임금제 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 포괄임금제 급여명세서는 다르다
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          포괄임금제는 연장·야간·휴일근로 수당을 기본급이나 별도 고정수당에 포함시켜 지급하는 방식입니다.
          IT, 스타트업, 일부 서비스직에서 많이 활용합니다.
          포괄임금제 명세서의 특징은 다음과 같습니다.
        </p>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-amber-800">포괄임금제 급여명세서 확인 포인트</p>
          <ul className="space-y-2 text-slate-600 leading-relaxed">
            <li>
              <strong>• 고정 OT 시간 확인:</strong> 계약서에 "월 52시간 OT 포함" 등으로 명시된 경우,
              해당 시간을 실제로 초과하면 추가 수당이 발생해야 합니다.
              초과분이 지급되지 않는다면 임금 미지급 문제가 될 수 있습니다.
            </li>
            <li>
              <strong>• 포괄수당 명시 여부:</strong> 명세서에 '포괄수당', 'OT수당', '고정초과수당' 등으로
              표시되는 경우가 많습니다. 이 금액이 실제 초과근무에 합당한지 계산해 보세요.
            </li>
            <li>
              <strong>• 최저임금 위반 여부:</strong> 포괄임금제라도 최저임금 이상의 시급은 보장되어야 합니다.
              총 지급액 ÷ 총 근로시간을 계산해 2026년 최저시급 10,030원 이상인지 확인하세요.
            </li>
          </ul>
        </div>
      </section>

      {/* 이상 징후 체크리스트 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 급여명세서에서 이상 징후 발견하는 법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          급여명세서를 꼼꼼히 확인하면 급여 오류나 부당 공제를 찾아낼 수 있습니다.
          다음 항목을 매달 체크하는 습관을 들이세요.
        </p>
        <div className="space-y-3">
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="text-red-500 text-base shrink-0">✗</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">식대·교통비가 갑자기 사라졌다</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                비과세 수당이 빠진 경우 소득세와 4대보험 공제가 동시에 늘어납니다.
                회사 정책 변경이 있었는지 HR에 확인하세요.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="text-red-500 text-base shrink-0">✗</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">국민연금이 상한을 초과해 공제된다</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                2026년 국민연금 상한 보수월액은 637만원이므로, 근로자 최대 공제액은 월 286,650원입니다.
                이를 초과해 공제된다면 오류일 가능성이 있습니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="text-red-500 text-base shrink-0">✗</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">4월에 건강보험료가 크게 늘었다</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                건강보험은 매년 4월에 전년도 보수를 기준으로 정산합니다. 전년도 연봉이 높아졌다면
                4월에 추가 공제가 발생할 수 있습니다. 이는 정상적인 현상입니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="text-red-500 text-base shrink-0">✗</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">지방소득세가 소득세의 10%가 아니다</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                지방소득세는 소득세의 정확히 10%여야 합니다. 차이가 크다면 계산 오류일 수 있습니다.
                단, 원천징수 소득세와 연말정산 지방소득세가 같은 명세서에 뒤섞이는 경우 달라 보일 수 있습니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="text-red-500 text-base shrink-0">✗</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">퇴사 달에 연차수당이 없다</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                퇴사 시 미사용 연차는 수당으로 지급받을 권리가 있습니다(근로기준법 제60조).
                퇴사 마지막 급여명세서에 미사용 연차 일수와 수당이 반영되어 있는지 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 급여명세서 교부 의무 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          6. 회사는 급여명세서를 의무적으로 제공해야 한다
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          2021년 11월부터 근로기준법 개정으로 모든 사업장은 근로자에게 <strong>급여명세서 교부가 의무화</strong>되었습니다.
          서면 또는 전자(이메일, 사내 시스템, 문자 등) 방식으로 교부해야 하며,
          반드시 포함해야 하는 항목은 다음과 같습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600 space-y-1">
          <p className="font-semibold text-slate-800 mb-2">급여명세서 필수 기재사항 (근로기준법 시행령 제27조의2)</p>
          <ul className="list-disc list-inside space-y-1 leading-relaxed">
            <li>근로자의 성명, 생년월일, 사원번호 등 특정하기 위한 정보</li>
            <li>임금 지급일</li>
            <li>임금 총액</li>
            <li>임금의 구성항목별 금액 (기본급, 각종 수당 등)</li>
            <li>공제 항목별 금액과 총액 (4대보험, 소득세 등)</li>
            <li>근로일수, 총 근로시간수 (연장·야간·휴일 근로 시간 포함)</li>
          </ul>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          급여명세서를 교부하지 않거나 필수 기재사항을 누락한 사업주는
          <strong> 500만원 이하의 과태료</strong>를 부과받을 수 있습니다.
          급여명세서를 요청해도 주지 않는 회사라면 고용노동부 민원24(1350)에 신고할 수 있습니다.
        </p>
      </section>

      {/* 연봉계약서 vs 급여명세서 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          7. 연봉계약서와 급여명세서 차이 확인하기
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          연봉계약서에 적힌 연봉과 급여명세서상 지급총액을 12로 나눈 금액이 일치하지 않는 경우가 있습니다.
          이유는 다음과 같습니다.
        </p>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex gap-3 items-start">
            <span className="font-bold text-blue-600 shrink-0">Q.</span>
            <div>
              <p className="font-medium text-slate-700">연봉 4,000만원인데 월 지급액이 333만원이 아닌 이유?</p>
              <p className="mt-1 leading-relaxed">
                연봉 ÷ 12 = 333만원이지만, 연봉 구성에 따라 매달 다를 수 있습니다.
                일부 회사는 연봉의 일부를 설·추석 상여, 하계휴가비 등 특정 달에 몰아 지급합니다.
                또한 연봉에 퇴직금이 포함된 경우 매달 실제 수령액이 연봉 ÷ 13이 됩니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="font-bold text-blue-600 shrink-0">Q.</span>
            <div>
              <p className="font-medium text-slate-700">12월 급여가 다른 달보다 많은 이유?</p>
              <p className="mt-1 leading-relaxed">
                연말정산 환급이 12월에 반영되거나, 연간 성과급·목표달성 인센티브가 지급되는 경우입니다.
                또는 휴일이 많아 연장근무가 줄어든 달에는 반대로 수당이 줄어들기도 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">내 급여에서 실수령액 계산하기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          연봉을 입력하면 국민연금, 건강보험, 고용보험, 소득세가 얼마나 공제되는지 항목별로 확인할 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
            연봉 계산기 바로가기
          </Link>
          <Link to="/tips/income-tax" className="inline-block rounded-md border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 transition-colors">
            근로소득세 완전 해설 →
          </Link>
        </div>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link to="/tips/four-insurance" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          4대보험 완전 해설 →
        </Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsIncomeTaxPage() {
  usePageMeta(
    '근로소득세 계산법 완전 해설 - 2026년 세율표·간이세액·연말정산',
    '2026년 근로소득세 세율 구간, 과세표준 계산 방법, 매달 공제되는 간이세액 원리, 연말정산 흐름까지 직장인이 알아야 할 소득세를 모두 정리합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">근로소득세</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">근로소득세 계산법 완전 해설</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          매달 급여에서 빠져나가는 '소득세'가 정확히 어떻게 계산되는지 아는 직장인은 많지 않습니다.
          연봉이 오를수록 세금이 크게 늘어나는 이유, 같은 연봉인데 동료보다 세금이 많이 나오는 이유,
          연말정산에서 환급받거나 추가 납부하는 원리 — 이 모든 것이 근로소득세 계산 구조에서 비롯됩니다.
          이 글에서는 2026년 기준 근로소득세를 처음부터 끝까지 단계별로 해설합니다.
        </p>
      </header>

      {/* 소득세란 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 근로소득세란 무엇인가
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          근로소득세는 근로를 제공하고 받는 임금·급여·상여금 등에 부과되는 세금입니다.
          소득세법에 따라 근로소득이 있는 모든 거주자는 납세 의무가 있으며,
          회사(원천징수의무자)가 매달 급여를 지급할 때 세금을 미리 떼어 국가에 납부합니다.
          이를 <strong>원천징수</strong>라고 합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          원천징수된 세금은 확정액이 아닙니다. 1년이 끝난 뒤 실제로 내야 할 세금을 다시
          계산하는 과정이 <strong>연말정산</strong>입니다. 원천징수액이 실제 세금보다 많으면
          환급, 적으면 추가 납부가 발생합니다.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 space-y-1">
          <p className="font-semibold text-slate-800">근로소득세의 흐름 요약</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed">
            <li>매달 급여에서 간이세액표 기준으로 소득세를 원천징수</li>
            <li>이듬해 1~2월, 연간 실제 세액을 정산 (연말정산)</li>
            <li>원천징수 합계 &gt; 실제 세액 → 환급 / 원천징수 합계 &lt; 실제 세액 → 추가납부</li>
            <li>5월 종합소득세 신고는 근로소득 외 다른 소득이 있는 경우에 해당</li>
          </ol>
        </div>
      </section>

      {/* 세율표 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 2026년 소득세 세율표 — 과세표준 구간별 세율
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          소득세는 <strong>누진세</strong> 구조입니다. 소득이 높아질수록 더 높은 세율이 적용되는데,
          높은 세율은 전체 소득이 아니라 해당 구간을 초과한 금액에만 적용됩니다.
          따라서 "연봉이 올라서 세금 구간이 바뀌면 손해"라는 말은 사실이 아닙니다.
          구간을 초과한 부분에만 높은 세율이 붙기 때문입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-2 border border-slate-200 text-slate-700">과세표준 구간</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">세율</th>
                <th className="text-right px-4 py-2 border border-slate-200 text-slate-700">누진공제액</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="px-4 py-2 border border-slate-200">1,400만원 이하</td>
                <td className="text-center px-4 py-2 border border-slate-200">6%</td>
                <td className="text-right px-4 py-2 border border-slate-200">—</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">1,400만원 초과 ~ 5,000만원 이하</td>
                <td className="text-center px-4 py-2 border border-slate-200">15%</td>
                <td className="text-right px-4 py-2 border border-slate-200">126만원</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">5,000만원 초과 ~ 8,800만원 이하</td>
                <td className="text-center px-4 py-2 border border-slate-200">24%</td>
                <td className="text-right px-4 py-2 border border-slate-200">576만원</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">8,800만원 초과 ~ 1억 5,000만원 이하</td>
                <td className="text-center px-4 py-2 border border-slate-200">35%</td>
                <td className="text-right px-4 py-2 border border-slate-200">1,544만원</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">1억 5,000만원 초과 ~ 3억원 이하</td>
                <td className="text-center px-4 py-2 border border-slate-200">38%</td>
                <td className="text-right px-4 py-2 border border-slate-200">1,994만원</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">3억원 초과 ~ 5억원 이하</td>
                <td className="text-center px-4 py-2 border border-slate-200">40%</td>
                <td className="text-right px-4 py-2 border border-slate-200">2,594만원</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">5억원 초과 ~ 10억원 이하</td>
                <td className="text-center px-4 py-2 border border-slate-200">42%</td>
                <td className="text-right px-4 py-2 border border-slate-200">3,594만원</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">10억원 초과</td>
                <td className="text-center px-4 py-2 border border-slate-200">45%</td>
                <td className="text-right px-4 py-2 border border-slate-200">6,594만원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          * 누진공제액을 이용하면 세액을 간단히 계산할 수 있습니다. 예: 과세표준 6,000만원이면 6,000만원 × 24% - 576만원 = 864만원
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          소득세와 별도로 <strong>지방소득세</strong>(소득세의 10%)가 추가로 부과됩니다.
          실질적인 세율은 표시된 세율보다 10% 더 높다고 이해하면 됩니다.
          예를 들어 소득세 15% 구간이라면 지방소득세 포함 실질 세율은 16.5%입니다.
        </p>
      </section>

      {/* 과세표준 계산 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 과세표준 계산하는 법 — 연봉에서 세금이 계산되기까지
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          세율표에 나오는 '과세표준'은 연봉(총급여)과 다릅니다.
          연봉에서 여러 공제 항목을 빼고 남은 금액이 과세표준입니다.
          따라서 같은 연봉이어도 공제 항목이 많을수록 실제 납부하는 세금이 줄어듭니다.
        </p>
        <div className="rounded-lg border border-slate-200 bg-white p-5 space-y-3">
          <p className="text-sm font-semibold text-slate-800">과세표준 산출 단계</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-700">① 총급여 (연봉 - 비과세소득)</span>
              <span className="text-slate-500 text-xs">식대 월 20만원 등 제외</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-700">② - 근로소득공제</span>
              <span className="text-slate-500 text-xs">총급여 구간별 공식 적용</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-700">③ = 근로소득금액</span>
              <span className="text-slate-500 text-xs">①에서 ②를 뺀 금액</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-700">④ - 각종 소득공제</span>
              <span className="text-slate-500 text-xs">인적공제, 연금보험료공제 등</span>
            </div>
            <div className="flex justify-between items-center py-2 font-semibold text-blue-700">
              <span>⑤ = 과세표준</span>
              <span className="text-xs font-normal text-slate-500">세율표에 적용하는 금액</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-800">근로소득공제란?</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            근로소득공제는 총급여에서 자동으로 공제되는 금액으로, 별도 신청이 필요 없습니다.
            총급여가 높을수록 공제 금액도 커지지만, 공제율은 낮아집니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-2 border border-slate-200 text-slate-700">총급여 구간</th>
                  <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">공제율</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="px-4 py-2 border border-slate-200">500만원 이하</td>
                  <td className="text-center px-4 py-2 border border-slate-200">70%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-2 border border-slate-200">500만원 초과 ~ 1,500만원 이하</td>
                  <td className="text-center px-4 py-2 border border-slate-200">350만원 + 초과분의 40%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-slate-200">1,500만원 초과 ~ 4,500만원 이하</td>
                  <td className="text-center px-4 py-2 border border-slate-200">750만원 + 초과분의 15%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-2 border border-slate-200">4,500만원 초과 ~ 1억원 이하</td>
                  <td className="text-center px-4 py-2 border border-slate-200">1,200만원 + 초과분의 5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-slate-200">1억원 초과</td>
                  <td className="text-center px-4 py-2 border border-slate-200">1,475만원 + 초과분의 2% (한도 2,000만원)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 text-sm space-y-2">
          <p className="font-semibold text-slate-800">실제 계산 예시 — 연봉 5,000만원 (비과세 월 20만원, 부양가족 본인 1명)</p>
          <div className="space-y-1 text-slate-600">
            <div className="flex justify-between"><span>총급여 (5,000 - 240)</span><span>4,760만원</span></div>
            <div className="flex justify-between"><span>근로소득공제 (750 + (4,760-1,500)×15%)</span><span>- 1,239만원</span></div>
            <div className="flex justify-between"><span>근로소득금액</span><span>3,521만원</span></div>
            <div className="flex justify-between"><span>인적공제 (본인 1명)</span><span>- 150만원</span></div>
            <div className="flex justify-between"><span>연금보험료공제 (국민연금 부담분)</span><span>- 약 214만원</span></div>
            <div className="flex justify-between font-semibold text-blue-700 border-t border-blue-200 pt-1 mt-1"><span>과세표준 (약)</span><span>3,157만원</span></div>
            <div className="flex justify-between font-semibold text-slate-700 border-t border-slate-200 pt-1 mt-1"><span>산출세액 (3,157 × 15% - 126)</span><span>약 347만원</span></div>
            <div className="flex justify-between text-slate-500"><span>지방소득세 (347 × 10%)</span><span>약 35만원</span></div>
            <div className="flex justify-between font-bold text-red-700"><span>연간 소득세+지방세 합계</span><span>약 382만원</span></div>
          </div>
        </div>
      </section>

      {/* 간이세액 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 간이세액표 — 매달 급여에서 왜 이 금액이 빠지나
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          연간 세액을 미리 12로 나눠 매달 원천징수하는 것을 <strong>간이세액</strong>이라고 합니다.
          국세청이 공표하는 '근로소득 간이세액표'에 월 급여액과 부양가족 수에 따른 세액이
          미리 계산되어 있습니다. 회사는 이 표를 기준으로 매달 세금을 공제합니다.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          간이세액은 80%, 100%, 120% 중 선택할 수 있습니다. 기본은 100%이며,
          80%를 선택하면 매달 더 많이 받고 연말정산 때 추가 납부할 가능성이 높고,
          120%를 선택하면 매달 덜 받고 연말정산 때 환급받을 가능성이 높습니다.
          이른바 '13월의 월급'을 선호한다면 120% 선택이 유리합니다.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-slate-800">간이세액 조정 방법</p>
          <p className="text-slate-600">회사 급여 담당자(HR/총무)에게 '근로소득 원천징수세액 조정신청서'를 제출하면 됩니다.
          세율 80%·100%·120% 중 원하는 비율을 선택할 수 있으며, 연중에도 변경이 가능합니다.</p>
        </div>
      </section>

      {/* 연말정산 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 연말정산 — 1년에 한 번 하는 세금 정산
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          매년 1~2월에 진행하는 연말정산은 전년도(1~12월) 근로소득에 대한 세금을 확정하는 절차입니다.
          원천징수로 미리 낸 세금과 실제 세금을 비교해 환급 또는 추가납부를 결정합니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-green-800">환급받는 경우</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>의료비 지출이 많은 경우</li>
              <li>교육비 공제가 적용된 경우</li>
              <li>연금저축·IRP 납입이 있는 경우</li>
              <li>기부금 공제를 받은 경우</li>
              <li>간이세액 120%를 선택한 경우</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-100 bg-red-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-red-800">추가납부하는 경우</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>부업·프리랜서 소득이 있는 경우</li>
              <li>연중 이직으로 합산 신고가 누락된 경우</li>
              <li>성과급·상여금이 급여 외로 지급된 경우</li>
              <li>간이세액 80%를 선택한 경우</li>
              <li>부양가족이 줄어든 경우</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          연말정산 서류는 국세청 홈택스의 <strong>'연말정산 간소화 서비스'</strong>(1월 15일 개통)에서
          대부분 자동으로 조회됩니다. 의료비, 교육비, 신용카드·현금영수증 사용액 등이 취합되며,
          연금저축·IRP 납입 증명서는 금융기관에서 별도로 발급받아야 합니다.
        </p>
      </section>

      {/* 절세 팁 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          6. 직장인이 활용할 수 있는 절세 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          공제 항목을 잘 활용하면 합법적으로 세금을 줄일 수 있습니다.
          다음은 직장인이 실제로 많이 활용하는 주요 절세 수단입니다.
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="rounded bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 shrink-0 mt-0.5">세액공제</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">연금저축 + IRP (개인형 퇴직연금)</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  연금저축 연 600만원 + IRP 합산 연 900만원까지 납입한 금액의 <strong>13.2~16.5%</strong>를
                  세액공제받습니다. 총급여 5,500만원 이하는 16.5%, 초과는 13.2% 적용.
                  연 900만원 납입 시 최대 148만 5,000원 세액공제 효과.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="rounded bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 shrink-0 mt-0.5">세액공제</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">의료비 공제</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  연간 의료비 지출이 <strong>총급여의 3%</strong>를 초과하는 금액의 15%를 세액공제합니다.
                  본인·65세 이상 부양가족·장애인의 의료비는 한도 없이 공제되며,
                  그 외 부양가족은 700만원 한도입니다. 라식·도수치료 등도 포함됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="rounded bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 shrink-0 mt-0.5">소득공제</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">신용카드·체크카드·현금영수증</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  연간 사용액이 총급여의 25%를 초과하면 초과분의 일부를 소득공제합니다.
                  신용카드 공제율은 15%, 체크카드·현금영수증은 30%로 체크카드가 유리합니다.
                  대중교통·전통시장 사용분은 40~80%까지 높은 공제율이 적용됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="rounded bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 shrink-0 mt-0.5">세액공제</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">월세 세액공제</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  무주택 세대주이면서 총급여 8,000만원 이하(종합소득 6,000만원 이하)인 경우,
                  월세 납입액의 <strong>15~17%</strong>를 세액공제합니다. 연간 한도 1,000만원.
                  총급여 5,500만원 이하는 17%, 초과~8,000만원 이하는 15% 적용.
                  주민등록 주소와 임대차 계약서 주소가 일치해야 합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="rounded bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 shrink-0 mt-0.5">소득공제</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">주택청약종합저축</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  무주택 세대주이면서 총급여 7,000만원 이하인 경우,
                  연간 납입액(한도 300만원)의 40%를 소득공제받습니다. 최대 120만원 소득공제.
                  단, 5년 이내 해지 시 공제받은 금액이 추징될 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 실효세율 */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          7. 실효세율 — 실제 세금 부담 비율
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          세율표의 세율(한계세율)은 해당 구간에 적용되는 세율이지, 전체 소득에 부과되는 비율이 아닙니다.
          실제로 납부하는 세금이 연봉 대비 몇 %인지를 <strong>실효세율</strong>이라고 합니다.
          근로소득공제, 각종 소득공제 덕분에 실효세율은 한계세율보다 훨씬 낮습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-2 border border-slate-200 text-slate-700">연봉 (비과세 月20만원, 부양가족 1명)</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">소득세 (지방세 포함)</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">실효세율</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="px-4 py-2 border border-slate-200">3,000만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 62만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 2.1%</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">4,000만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 178만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 4.5%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">5,000만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 327만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 6.5%</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">7,000만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 748만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 10.7%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">1억원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 1,695만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">약 17.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">* 위 수치는 근사값으로, 실제 세액은 개인 공제 항목에 따라 다를 수 있습니다.</p>
      </section>

      {/* CTA */}
      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">내 연봉의 실수령액 직접 계산하기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          소득세, 4대보험을 포함한 정확한 공제액과 월 실수령액을 바로 확인해 보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
            연봉 계산기 바로가기
          </Link>
          <Link to="/tips/four-insurance" className="inline-block rounded-md border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 transition-colors">
            4대보험 완전 해설 →
          </Link>
        </div>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link to="/tips/paycheck-guide" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          다음: 급여명세서 읽는 법 →
        </Link>
      </div>
    </div>
  );
}

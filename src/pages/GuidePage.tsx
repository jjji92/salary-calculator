import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function GuidePage() {
  usePageMeta(
    '연봉 세금 계산 가이드 - 4대보험·소득세 설명',
    '연봉에서 실수령액까지 계산 과정을 단계별로 설명합니다. 2026년 4대보험 요율, 소득세 구간, 근로소득공제 등.'
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">연봉 실수령액 계산 방법</h1>
        <p className="text-slate-600">2026년 기준 4대보험·소득세 계산 과정 안내</p>
      </div>

      <div className="space-y-8">
        <Section title="1. 연봉에서 실수령액까지">
          <p>연봉 실수령액은 다음과 같은 순서로 계산됩니다:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>연봉에서 비과세 항목을 제외한 과세소득 산출</li>
            <li>과세소득에 4대보험 요율을 적용하여 보험료 산출</li>
            <li>근로소득공제, 인적공제 등을 적용하여 과세표준 산출</li>
            <li>과세표준에 소득세율을 적용하여 소득세 산출</li>
            <li>세액공제(근로소득세액공제, 자녀세액공제 등) 적용</li>
            <li>소득세의 10%를 지방소득세로 산출</li>
            <li>월 급여에서 4대보험 + 소득세 + 지방소득세를 공제하면 실수령액</li>
          </ol>
        </Section>

        <Section title="2. 2026년 4대보험 요율 (근로자 부담분)">
          <Table
            headers={['항목', '요율', '비고']}
            rows={[
              ['국민연금', '4.75%', '월 소득 상한 637만원'],
              ['건강보험', '3.595%', ''],
              ['장기요양보험', '건강보험료 × 13.14%', ''],
              ['고용보험', '0.9%', ''],
            ]}
          />
        </Section>

        <Section title="3. 2026년 소득세 구간">
          <Table
            headers={['과세표준', '세율', '누진공제']}
            rows={[
              ['1,400만원 이하', '6%', '0'],
              ['1,400만원 초과 ~ 5,000만원', '15%', '126만원'],
              ['5,000만원 초과 ~ 8,800만원', '24%', '576만원'],
              ['8,800만원 초과 ~ 1억 5천만원', '35%', '1,544만원'],
              ['1억 5천만원 초과 ~ 3억원', '38%', '1,994만원'],
              ['3억원 초과 ~ 5억원', '40%', '2,594만원'],
              ['5억원 초과 ~ 10억원', '42%', '3,594만원'],
              ['10억원 초과', '45%', '6,594만원'],
            ]}
          />
        </Section>

        <Section title="4. 근로소득공제">
          <Table
            headers={['총급여', '공제액']}
            rows={[
              ['500만원 이하', '총급여의 70%'],
              ['500만원 초과 ~ 1,500만원', '350만원 + 500만원 초과분의 40%'],
              ['1,500만원 초과 ~ 4,500만원', '750만원 + 1,500만원 초과분의 15%'],
              ['4,500만원 초과 ~ 1억원', '1,200만원 + 4,500만원 초과분의 5%'],
              ['1억원 초과', '1,475만원 + 1억원 초과분의 2%'],
            ]}
          />
        </Section>

        <Section title="5. 비과세 항목">
          <p>
            비과세 항목은 소득세가 부과되지 않는 급여 항목입니다. 대표적인 비과세 항목은 다음과 같습니다:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>식대: 월 20만원까지</li>
            <li>자가운전보조금: 월 20만원까지</li>
            <li>육아수당: 월 10만원까지 (6세 이하)</li>
            <li>연구보조비: 월 20만원까지</li>
          </ul>
        </Section>

        <Section title="6. 퇴직금 포함/별도">
          <p>
            퇴직금 포함 연봉은 실제 연봉의 12/13에 해당합니다. 예를 들어 퇴직금 포함 연봉이 3,900만원이면
            실제 연간 급여는 약 3,600만원(3,900 × 12/13)이고, 나머지 약 300만원은 퇴직금으로 적립됩니다.
          </p>
        </Section>

        <Section title="7. 참고사항">
          <ul className="list-disc list-inside space-y-1">
            <li>본 계산기는 간이세액 기준이며, 연말정산 결과와 차이가 있을 수 있습니다.</li>
            <li>의료비, 교육비, 기부금 등 특별세액공제는 반영되지 않습니다.</li>
            <li>실제 급여와의 차이는 회사별 비과세 항목, 수당 구조에 따라 발생할 수 있습니다.</li>
          </ul>
        </Section>
      </div>

      {/* 관련 도구 링크 */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">연봉 실수령액 계산기</h3>
          <p className="text-sm text-slate-500">내 연봉으로 직접 계산해 보기</p>
        </Link>
        <Link to="/table" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">연봉 실수령액 표</h3>
          <p className="text-sm text-slate-500">1,000만원~1억원 구간별 비교</p>
        </Link>
        <Link to="/reverse" className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-slate-800 mb-1">역산 계산기</h3>
          <p className="text-sm text-slate-500">원하는 월급으로 필요 연봉 계산</p>
        </Link>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-left font-semibold text-slate-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

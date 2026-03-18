import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

const FAQS = [
  {
    q: '연봉 3,000만원의 실수령액은 얼마인가요?',
    a: '2026년 기준 연봉 3,000만원(비과세 없음, 부양가족 본인만)의 월 실수령액은 약 218~220만원 수준입니다. 국민연금 약 11.9만원, 건강보험 약 10.8만원, 고용보험 약 2.3만원, 소득세·지방소득세 약 5~6만원이 공제됩니다. 식대 등 비과세 항목이 포함된 경우 실수령액이 더 높아집니다.',
  },
  {
    q: '연봉 5,000만원의 실수령액은 얼마인가요?',
    a: '연봉 5,000만원(비과세 없음, 부양가족 본인만)의 월 실수령액은 약 345~350만원 수준입니다. 소득세 구간이 15~24%에 걸쳐 있어 공제액이 크게 늘어납니다. 정확한 금액은 비과세액, 부양가족 수에 따라 달라지므로 계산기를 직접 활용해 보세요.',
  },
  {
    q: '퇴직금 포함 연봉과 퇴직금 별도 연봉의 차이는?',
    a: '"퇴직금 포함 연봉"은 1년치 퇴직금이 연봉 안에 들어 있는 구조입니다. 예를 들어 퇴직금 포함 연봉 3,900만원이라면 실제 월급으로 받는 금액은 3,900 ÷ 13 × 12 = 약 3,600만원이고, 나머지 300만원은 퇴직금으로 적립됩니다. "퇴직금 별도"는 3,600만원을 12개월로 나눈 금액을 매달 받고, 퇴직금은 별도로 쌓이는 구조입니다. 실수령액 계산 시 퇴직금 별도라면 연봉을 그대로 입력하면 됩니다.',
  },
  {
    q: '식대 비과세란 무엇인가요?',
    a: '식대 비과세는 회사에서 지급하는 식사 대용 금액 중 월 20만원까지 소득세·4대보험 계산에서 제외되는 항목입니다. 예를 들어 연봉 4,000만원 중 월 20만원(연 240만원)이 식대로 지급된다면, 과세 대상 소득은 3,760만원이 됩니다. 비과세액을 올바르게 입력해야 실제 공제액과 가깝게 계산할 수 있습니다.',
  },
  {
    q: '부양가족 수는 왜 실수령액에 영향을 주나요?',
    a: '소득세를 계산할 때 부양가족 1인당 150만원의 인적공제가 적용됩니다. 부양가족이 많을수록 과세표준이 낮아져 소득세가 줄고 실수령액이 늘어납니다. 본인 포함 4인 가족이면 600만원의 인적공제를 받게 됩니다. 또한 만 8세 이상 20세 이하 자녀가 있으면 자녀세액공제도 추가로 적용됩니다.',
  },
  {
    q: '4대보험이란 무엇인가요?',
    a: '4대보험은 국민연금, 건강보험, 고용보험, 산재보험을 말합니다. 이 중 근로자가 급여에서 공제되는 항목은 국민연금(4.75%), 건강보험(3.595%), 장기요양보험(건강보험료의 13.14%), 고용보험(0.9%)입니다. 산재보험은 전액 회사가 부담하므로 급여에서 공제되지 않습니다. 2026년 기준 국민연금 상한 소득은 월 637만원입니다.',
  },
  {
    q: '실수령액 계산기 결과와 실제 급여가 다른 이유는?',
    a: '본 계산기는 일반적인 근로소득 기준으로 간이 계산한 결과입니다. 회사마다 비과세 항목의 종류와 금액, 특별 수당 구조가 다르고, 연말정산 시 의료비·교육비·기부금 공제 등이 추가로 적용되기 때문에 실제 급여 명세서와 차이가 생길 수 있습니다. 정확한 공제 내역은 회사 급여 담당자나 세무사에게 문의하는 것이 좋습니다.',
  },
  {
    q: '월급에서 소득세가 얼마나 빠지나요?',
    a: '소득세는 연간 과세표준 구간에 따라 6~45%의 세율이 적용됩니다. 다만 매달 급여에서 차감하는 것은 "간이세액"으로, 연말정산을 통해 최종 세액과의 차이를 정산합니다. 연봉 3,000만원대 근로자는 월 소득세가 3~6만원 수준, 5,000만원대는 15~20만원 수준인 경우가 많습니다.',
  },
  {
    q: '역산 계산기는 어떻게 사용하나요?',
    a: '"내가 원하는 월 실수령액이 300만원이면 연봉이 얼마여야 하나?"를 알고 싶을 때 역산 계산기를 사용합니다. 원하는 월 실수령액을 입력하면 그에 맞는 연봉을 역으로 계산해 드립니다. 이직 협상이나 연봉 목표 설정 시 유용하게 활용할 수 있습니다.',
  },
  {
    q: '연봉 실수령액 표는 어떤 기준인가요?',
    a: '연봉 실수령액 표는 비과세 월 20만원(식대), 부양가족 본인만(1인) 기준으로 계산한 값입니다. 1,000만원부터 1억원까지 500만원 단위로 구간별 실수령액을 한눈에 비교할 수 있습니다. 내 상황에 맞는 정확한 금액은 계산기에서 직접 입력해 확인하세요.',
  },
];

export default function FaqPage() {
  usePageMeta(
    '연봉 실수령액 자주 묻는 질문(FAQ) - 2026년 기준',
    '연봉 3000만원 실수령액, 퇴직금 포함 연봉 차이, 4대보험 계산 방법, 식대 비과세 등 연봉 계산에 관한 자주 묻는 질문을 정리했습니다.'
  );

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">자주 묻는 질문</h1>
        <p className="text-slate-600">연봉 실수령액 계산에 관한 궁금증을 정리했습니다.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <h2 className="text-sm font-bold text-slate-900">Q. {faq.q}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-3">
        <h2 className="text-sm font-bold text-slate-900">직접 계산해 보세요</h2>
        <p className="text-sm text-slate-600">내 연봉을 입력하면 4대보험, 소득세, 실수령액을 바로 확인할 수 있습니다.</p>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/"
            className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors"
          >
            연봉 계산기 바로가기
          </Link>
          <Link
            to="/table"
            className="inline-block rounded-md border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 transition-colors"
          >
            실수령액 표 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

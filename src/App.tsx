import { lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const SalaryCalculatorPage = lazy(() => import('./pages/SalaryCalculatorPage'));
const SalaryTablePage = lazy(() => import('./pages/SalaryTablePage'));
const ReverseCalculatorPage = lazy(() => import('./pages/ReverseCalculatorPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const TipsIndexPage = lazy(() => import('./pages/TipsIndexPage'));
const TipsNegotiationPage = lazy(() => import('./pages/TipsNegotiationPage'));
const TipsRaisePage = lazy(() => import('./pages/TipsRaisePage'));
const TipsFourInsurancePage = lazy(() => import('./pages/TipsFourInsurancePage'));
const TipsRetirementPage = lazy(() => import('./pages/TipsRetirementPage'));
const TipsMinWagePage = lazy(() => import('./pages/TipsMinWagePage'));
const TipsIncomeTaxPage = lazy(() => import('./pages/TipsIncomeTaxPage'));
const TipsPaycheckPage = lazy(() => import('./pages/TipsPaycheckPage'));

const NAV_ITEMS = [
  { to: '/', label: '계산기' },
  { to: '/table', label: '실수령액 표' },
  { to: '/reverse', label: '역산 계산기' },
  { to: '/guide', label: '가이드' },
  { to: '/faq', label: 'FAQ' },
  { to: '/tips', label: '연봉 팁' },
];

function Loading() {
  return <div className="text-center py-12 text-slate-400">로딩 중...</div>;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-blue-600 hover:text-blue-700 shrink-0">
            연봉 계산기
          </Link>
          <nav className="flex gap-1 overflow-x-auto ml-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
                  location.pathname === item.to
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 py-8">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<SalaryCalculatorPage />} />
            <Route path="/table" element={<SalaryTablePage />} />
            <Route path="/reverse" element={<ReverseCalculatorPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/tips" element={<TipsIndexPage />} />
            <Route path="/tips/salary-negotiation" element={<TipsNegotiationPage />} />
            <Route path="/tips/salary-raise" element={<TipsRaisePage />} />
            <Route path="/tips/four-insurance" element={<TipsFourInsurancePage />} />
            <Route path="/tips/retirement-pay" element={<TipsRetirementPage />} />
            <Route path="/tips/minimum-wage-2026" element={<TipsMinWagePage />} />
            <Route path="/tips/income-tax" element={<TipsIncomeTaxPage />} />
            <Route path="/tips/paycheck-guide" element={<TipsPaycheckPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
            <Link to="/" className="hover:text-slate-700">계산기</Link>
            <Link to="/table" className="hover:text-slate-700">실수령액 표</Link>
            <Link to="/reverse" className="hover:text-slate-700">역산 계산기</Link>
            <Link to="/guide" className="hover:text-slate-700">가이드</Link>
            <Link to="/about" className="hover:text-slate-700">소개</Link>
            <Link to="/terms" className="hover:text-slate-700">이용약관</Link>
            <Link to="/faq" className="hover:text-slate-700">FAQ</Link>
            <Link to="/tips" className="hover:text-slate-700">연봉 팁</Link>
            <Link to="/privacy" className="hover:text-slate-700">개인정보처리방침</Link>
          </div>
          <p className="text-slate-400">&copy; 2026 연봉 실수령액 계산기. 본 계산기는 참고용이며, 실제 급여와 차이가 있을 수 있습니다.</p>
        </div>
      </footer>
    </div>
  );
}

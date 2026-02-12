import { Routes, Route, Link, useLocation } from 'react-router-dom';
import SalaryCalculatorPage from './pages/SalaryCalculatorPage';
import SalaryTablePage from './pages/SalaryTablePage';
import ReverseCalculatorPage from './pages/ReverseCalculatorPage';
import GuidePage from './pages/GuidePage';
import PrivacyPage from './pages/PrivacyPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';

const NAV_ITEMS = [
  { to: '/', label: '계산기' },
  { to: '/table', label: '실수령액 표' },
  { to: '/reverse', label: '역산 계산기' },
  { to: '/guide', label: '가이드' },
];

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
        <Routes>
          <Route path="/" element={<SalaryCalculatorPage />} />
          <Route path="/table" element={<SalaryTablePage />} />
          <Route path="/reverse" element={<ReverseCalculatorPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
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
            <Link to="/privacy" className="hover:text-slate-700">개인정보처리방침</Link>
          </div>
          <p className="text-slate-400">&copy; 2026 연봉 실수령액 계산기. 본 계산기는 참고용이며, 실제 급여와 차이가 있을 수 있습니다.</p>
        </div>
      </footer>
    </div>
  );
}

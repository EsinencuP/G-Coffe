import { useEffect, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Layout } from './components/Layout';
import { copy, routeNames } from './data';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ShowroomPage } from './pages/ShowroomPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { ProductPage } from './pages/ProductPage';
import { NotFoundPage } from './pages/NotFoundPage';

function LocalizedShell() {
  const { lang } = useParams();
  const location = useLocation();
  const language = lang === 'ru' ? 'ru' : 'ro';
  const text = useMemo(() => ({
    ...copy[language],
    nav: { ...copy[language].nav, collection: language === 'ru' ? 'Каталог' : 'Catalog' }
  }), [language]);

  if (lang !== 'ro' && lang !== 'ru') return <Navigate to="/ro" replace />;

  const section = location.pathname.split('/').filter(Boolean)[1];
  const activePage = Object.entries(routeNames).find(([, routes]) => routes[language] === section)?.[0] || 'home';

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `G-Coffee · ${text.nav[activePage] || text.nav.home}`;
  }, [activePage, language, text]);

  return (
    <Layout language={language} text={text}>
      <div className="page-key" key={location.pathname}>
        <Routes>
          <Route index element={<HomePage language={language} text={text} />} />
          <Route path={language === 'ro' ? 'colectie' : 'collection'} element={<CollectionPage language={language} text={text} />} />
          <Route path={`${language === 'ro' ? 'colectie' : 'collection'}/:slug`} element={<ProductPage language={language} text={text} />} />
          <Route path="showroom" element={<ShowroomPage language={language} text={text} />} />
          <Route path={language === 'ro' ? 'jurnal' : 'journal'} element={<JournalPage language={language} text={text} />} />
          <Route path={language === 'ro' ? 'contacte' : 'contacts'} element={<ContactPage language={language} text={text} />} />
          <Route path="*" element={<NotFoundPage language={language} text={text} />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ro" replace />} />
      <Route path="/:lang/*" element={<LocalizedShell />} />
    </Routes>
  );
}

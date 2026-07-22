import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, InstagramLogo, List, X } from '@phosphor-icons/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { pagePath, routeNames } from '../data';

function languagePath(pathname, nextLanguage) {
  const segments = pathname.split('/').filter(Boolean);
  const currentLanguage = segments[0] === 'ru' ? 'ru' : 'ro';
  const pageSegment = segments[1] || '';
  const page = Object.entries(routeNames).find(([, value]) => value[currentLanguage] === pageSegment)?.[0] || 'home';
  const slug = page === 'collection' ? segments[2] || '' : '';
  return pagePath(nextLanguage, page, slug);
}

export function Layout({ language, text, children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = useMemo(() => ['home', 'collection', 'showroom', 'journal', 'contact'], []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="service-line">
          <div className="frame service-line__inner">
            <span>{text.service}</span>
            <a href="tel:+37360000000">+373 60 000 000</a>
            <Link to={pagePath(language, 'contact')}>{text.book}<ArrowUpRight size={14} weight="regular" /></Link>
          </div>
        </div>
        <div className="nav-line">
          <div className="frame nav-line__inner">
            <Logo language={language} />
            <nav className="desktop-navigation" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavLink key={item} end={item === 'home'} to={pagePath(language, item)}>
                  {text.nav[item]}
                </NavLink>
              ))}
            </nav>
            <div className="nav-tools">
              <div className="language-control" aria-label="Language">
                <Link className={language === 'ro' ? 'is-active' : ''} to={languagePath(location.pathname, 'ro')}>RO</Link>
                <span>/</span>
                <Link className={language === 'ru' ? 'is-active' : ''} to={languagePath(location.pathname, 'ru')}>RU</Link>
              </div>
              <button className="menu-trigger" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((value) => !value)}>
                {menuOpen ? <X size={24} weight="regular" /> : <List size={24} weight="regular" />}
                <span>{menuOpen ? text.close : text.menu}</span>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-navigation" className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          <nav className="frame">
            {navItems.map((item, index) => (
              <NavLink key={item} end={item === 'home'} to={pagePath(language, item)}>
                <span>0{index + 1}</span>{text.nav[item]}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="content">{children}</main>

      <footer className="site-footer">
        <div className="frame footer-grid">
          <div className="footer-identity">
            <Logo language={language} inverted />
            <p>{text.footer.line}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navItems.slice(1).map((item) => <Link key={item} to={pagePath(language, item)}>{text.nav[item]}</Link>)}
          </nav>
          <div className="footer-contact">
            <a href="tel:+37360000000">+373 60 000 000</a>
            <a href="mailto:hello@gcoffee.md">hello@gcoffee.md</a>
            <span>{text.footer.city}</span>
          </div>
          <a className="footer-social" href="#instagram" aria-label="Instagram"><InstagramLogo size={26} weight="regular" /></a>
        </div>
        <div className="frame footer-bottom">
          <span>© 2026 G-Coffee</span><span>{text.footer.demo}</span>
        </div>
      </footer>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { pagePath } from '../data';

export function Logo({ language, inverted = false }) {
  return (
    <Link className={`brand-lockup ${inverted ? 'brand-lockup--inverted' : ''}`} to={pagePath(language, 'home')} aria-label="G-Coffee Luxury Showroom">
      <span className="brand-lockup__mark" aria-hidden="true">G</span>
      <span className="brand-lockup__words">
        <strong>G-COFFEE</strong>
        <span>LUXURY SHOWROOM</span>
      </span>
    </Link>
  );
}

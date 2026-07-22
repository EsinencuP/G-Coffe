import { ArrowLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { pagePath } from '../data';

export function NotFoundPage({ language, text }) {
  return (
    <section className="not-found frame">
      <span>404 / G</span><h1>{text.notFound.title}</h1>
      <Link className="text-link" to={pagePath(language, 'home')}><ArrowLeft size={18} weight="regular" />{text.notFound.action}</Link>
    </section>
  );
}

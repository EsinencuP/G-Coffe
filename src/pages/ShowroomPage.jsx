import { ArrowRight, Clock, MapPin } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { pagePath } from '../data';

export function ShowroomPage({ language, text }) {
  const content = text.showroom;
  return (
    <div className="inner-page showroom-page">
      <section className="showroom-hero frame">
        <div className="showroom-hero__copy"><p className="overline">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.lead}</p></div>
        <div className="showroom-hero__media"><img src="/assets/private-tasting.png" alt="G-Coffee private tasting" width="1792" height="1024" /><span>G / PRIVATE TABLE</span></div>
      </section>

      <section className="showroom-quote frame">
        <span className="section-number">02</span><blockquote>{content.quote}</blockquote><div><MapPin size={20} weight="regular" /><span>Chișinău</span></div>
      </section>

      <section className="visit-formats surface-warm">
        <div className="frame">
          <div className="section-intro"><span className="section-number">03</span><div><p className="overline">Visit / choose</p><h2>{content.sectionTitle}</h2></div></div>
          <div className="format-ledger">
            {content.formats.map(([title, duration, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div><Clock size={18} weight="regular" /><strong>{duration}</strong></div>
              </article>
            ))}
          </div>
          <Link className="action action--solid" to={pagePath(language, 'contact')}>{content.book}<ArrowRight size={18} weight="regular" /></Link>
        </div>
      </section>

      <section className="showroom-panorama">
        <img src="/assets/showroom-hero.png" alt="G-Coffee showroom interior" width="1792" height="1024" loading="lazy" />
        <span>04 / MATERIALS · LIGHT · EXTRACTION</span>
      </section>
    </div>
  );
}

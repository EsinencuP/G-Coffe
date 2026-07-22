import { ArrowRight, CalendarBlank } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { pagePath, products } from '../data';
import { ProductVisual } from '../components/ProductVisual';

export function HomePage({ language, text }) {
  const content = text.home;
  const featured = products[0];

  return (
    <>
      <section className="hero-split frame">
        <div className="hero-copy">
          <p className="overline">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero-copy__lead">{content.lead}</p>
          <div className="hero-actions">
            <Link className="action action--solid" to={pagePath(language, 'contact')}>
              {content.primary}<CalendarBlank size={18} weight="regular" />
            </Link>
            <Link className="text-link" to={pagePath(language, 'collection')}>
              {content.secondary}<ArrowRight size={18} weight="regular" />
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/showroom-hero.png" alt="G-Coffee showroom interior" width="1792" height="1024" />
          <p>{content.index}</p>
          <span aria-hidden="true">G</span>
        </div>
      </section>

      <div className="origin-marquee" aria-label="Selected origins">
        <div>
          <span>ETHIOPIA GUJI</span><i />
          <span>BRAZIL SERRA NEGRA</span><i />
          <span>COLOMBIA HUILA</span><i />
          <span>KENYA NYERI</span><i />
          <span>ETHIOPIA GUJI</span><i />
          <span>BRAZIL SERRA NEGRA</span><i />
          <span>COLOMBIA HUILA</span><i />
          <span>KENYA NYERI</span><i />
        </div>
      </div>

      <section className="statement-section frame">
        <span className="section-number">02</span>
        <div className="statement-section__empty" aria-hidden="true" />
        <div className="statement-section__copy">
          <p className="overline">G-Coffee approach</p>
          <h2>{content.proofTitle}</h2>
          <p>{content.proofBody}</p>
          <Link className="text-link" to={pagePath(language, 'showroom')}>{content.proofLink}<ArrowRight size={18} weight="regular" /></Link>
        </div>
      </section>

      <section className="selection-section surface-warm">
        <div className="frame">
          <div className="section-intro section-intro--offset">
            <span className="section-number">03</span>
            <div><p className="overline">Curated / 04</p><h2>{content.selection}</h2></div>
            <p>{content.selectionLead}</p>
          </div>
          <div className="selection-layout">
            <Link className="featured-product" to={pagePath(language, 'collection', featured.slug)}>
              <ProductVisual product={featured} />
              <div className="featured-product__meta">
                <span>{content.featureLabel}</span>
                <h3>{featured.name}</h3>
                <p>{featured.notes[language]}</p>
                <strong>{featured.price}</strong>
              </div>
            </Link>
            <div className="product-ledger">
              {products.slice(1).map((product) => (
                <Link key={product.slug} to={pagePath(language, 'collection', product.slug)}>
                  <span className="product-ledger__code">G/{product.code}</span>
                  <div><strong>{product.name}</strong><span>{product.origin}</span></div>
                  <p>{product.notes[language]}</p>
                  <ArrowRight size={18} weight="regular" />
                </Link>
              ))}
              <Link className="ledger-all" to={pagePath(language, 'collection')}>{content.secondary}<ArrowRight size={18} weight="regular" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ritual-section frame">
        <div className="ritual-media">
          <img src="/assets/private-tasting.png" alt="Private coffee tasting" width="1792" height="1024" loading="lazy" />
          <span>04 / 45 MIN</span>
        </div>
        <div className="ritual-content">
          <p className="overline">{content.ritual}</p>
          <h2>{content.ritualTitle}</h2>
          <ol>
            {content.steps.map(([number, title, description]) => (
              <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></li>
            ))}
          </ol>
          <Link className="action action--solid" to={pagePath(language, 'contact')}>{content.primary}<ArrowRight size={18} weight="regular" /></Link>
        </div>
      </section>

      <section className="editorial-callout surface-dark">
        <div className="frame editorial-callout__inner">
          <span className="section-number">05</span>
          <p className="overline">{content.editorial}</p>
          <h2>{content.editorialTitle}</h2>
          <Link className="text-link text-link--light" to={pagePath(language, 'journal')}>{content.editorialLink}<ArrowRight size={18} weight="regular" /></Link>
        </div>
      </section>
    </>
  );
}

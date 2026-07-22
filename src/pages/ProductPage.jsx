import { useEffect } from 'react';
import { ArrowLeft } from '@phosphor-icons/react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { pagePath } from '../data';
import { catalogCopy, catalogProducts, formatMdl, productCopy, productPriceRange } from '../catalogData';
import { CatalogCard } from '../components/CatalogCard';
import { PriceCalculator } from '../components/PriceCalculator';
import { ProductTabs } from '../components/ProductTabs';
import { ProductVisual } from '../components/ProductVisual';
import { NotFoundPage } from './NotFoundPage';

export function ProductPage({ language, text }) {
  const { slug } = useParams();
  const location = useLocation();
  const product = catalogProducts.find((item) => item.slug === slug);
  const copy = productCopy[language];

  useEffect(() => {
    if (!product || !new URLSearchParams(location.search).has('calc')) return undefined;
    const timer = window.setTimeout(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.querySelector('#price-calculator')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.search, product]);

  if (!product) return <NotFoundPage language={language} text={text} />;

  const [minimum, maximum] = productPriceRange(product);
  const related = catalogProducts
    .filter((item) => item.slug !== slug)
    .toSorted((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);

  return (
    <div className="inner-page product-page product-dossier">
      <div className="frame product-back"><Link className="text-link" to={pagePath(language, 'collection')}><ArrowLeft size={18} weight="regular" />{copy.back}</Link></div>

      <section className="product-dossier__grid frame">
        <div className="product-dossier__media">
          <ProductVisual product={product} />
          <div><span>G/{product.code}</span><span>{copy.dossier}</span></div>
        </div>

        <div className="product-dossier__summary">
          <p className="overline">{catalogCopy[language].categories[product.category]}</p>
          <h1>{product.name}</h1>
          <p className="product-dossier__origin">{product.origin}</p>
          <p className="product-dossier__lead">{product.description[language]}</p>
          <div className="product-dossier__range"><span>{catalogCopy[language].indicative}</span><strong>{formatMdl(minimum, language)} — {formatMdl(maximum, language)}</strong></div>
          <dl>
            <div><dt>{copy.profile}</dt><dd>{product.notes[language]}</dd></div>
            <div><dt>{copy.process}</dt><dd>{product.process}</dd></div>
            <div><dt>{copy.roast}</dt><dd>{product.roast}</dd></div>
            <div><dt>{copy.status}</dt><dd><i className={product.available ? 'is-available' : ''} />{product.available ? copy.available : copy.unavailable}</dd></div>
          </dl>
        </div>

        <PriceCalculator product={product} language={language} copy={copy} />
      </section>

      <ProductTabs product={product} language={language} copy={copy} />

      <section className="related-catalog surface-warm">
        <div className="frame related-catalog__header"><div><p className="overline">{copy.related}</p><h2>{copy.related}</h2></div><p>{copy.relatedLead}</p></div>
        <div className="frame related-catalog__grid">
          {related.map((item) => <CatalogCard key={item.slug} product={item} language={language} copy={catalogCopy[language]} compact />)}
        </div>
      </section>
    </div>
  );
}

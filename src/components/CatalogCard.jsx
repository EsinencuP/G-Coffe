import { ArrowRight, Calculator } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { pagePath } from '../data';
import { formatMdl, productPriceRange } from '../catalogData';
import { ProductVisual } from './ProductVisual';

export function CatalogCard({ product, language, copy, compact = false }) {
  const [minimum, maximum] = productPriceRange(product);
  const href = pagePath(language, 'collection', product.slug);

  return (
    <article className={`catalog-card ${compact ? 'catalog-card--compact' : ''}`}>
      <Link className="catalog-card__visual" to={href} aria-label={`${copy.detail}: ${product.name}`}>
        <ProductVisual product={product} compact={compact} />
        <span className={`catalog-card__status ${product.available ? 'is-available' : ''}`}>
          <i aria-hidden="true" />{product.available ? copy.available : copy.unavailable}
        </span>
        <span className="catalog-card__index">G/{product.code}</span>
      </Link>

      <div className="catalog-card__body">
        <p className="catalog-card__taxonomy">
          <span>{copy.categories[product.category]}</span>
          <span>{product.origin}</span>
        </p>
        <h2><Link to={href}>{product.name}</Link></h2>
        <p className="catalog-card__notes">{product.notes[language]}</p>
        {!compact && <p className="catalog-card__short">{product.short[language]}</p>}
        <div className="catalog-card__price">
          <span>{copy.indicative}</span>
          <strong>{formatMdl(minimum, language)} — {formatMdl(maximum, language)}</strong>
        </div>
        <div className="catalog-card__actions">
          <Link className="catalog-card__detail" to={href}>{copy.detail}<ArrowRight size={16} weight="regular" /></Link>
          <Link className="catalog-card__calculate" to={`${href}?calc=1`}><Calculator size={17} weight="regular" />{copy.calculate}</Link>
        </div>
      </div>
    </article>
  );
}

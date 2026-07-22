import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Funnel, MagnifyingGlass, X } from '@phosphor-icons/react';
import { catalogCopy, catalogProducts, catalogTaxonomy, productPriceRange } from '../catalogData';
import { CatalogCard } from '../components/CatalogCard';
import { FilterPanel } from '../components/FilterPanel';

const MAX_PRICE = 30000;
const PAGE_SIZE = 6;

function initialFilters() {
  return { categories: [], origins: [], roasts: [], formats: [], availableOnly: false, maxPrice: MAX_PRICE };
}

export function CollectionPage({ language }) {
  const copy = catalogCopy[language];
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [sort, setSort] = useState('featured');
  const [filters, setFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 360);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [drawerOpen]);

  useEffect(() => setPage(1), [deferredQuery, filters, sort]);

  const activeCount = filters.categories.length + filters.origins.length + filters.roasts.length + filters.formats.length + Number(filters.availableOnly) + Number(filters.maxPrice < MAX_PRICE);

  const filtered = useMemo(() => {
    const normalized = deferredQuery.trim().toLocaleLowerCase(language === 'ru' ? 'ru' : 'ro');
    const result = catalogProducts.filter((product) => {
      const searchable = `${product.name} ${product.origin} ${product.notes[language]} ${product.short[language]}`.toLocaleLowerCase(language === 'ru' ? 'ru' : 'ro');
      const [minimum] = productPriceRange(product);
      return (!normalized || searchable.includes(normalized))
        && (!filters.categories.length || filters.categories.includes(product.category))
        && (!filters.origins.length || filters.origins.includes(product.originKey))
        && (!filters.roasts.length || filters.roasts.includes(product.roastKey))
        && (!filters.formats.length || filters.formats.includes(product.formatKey))
        && (!filters.availableOnly || product.available)
        && minimum <= filters.maxPrice;
    });

    return result.toSorted((a, b) => {
      if (sort === 'low') return productPriceRange(a)[0] - productPriceRange(b)[0];
      if (sort === 'high') return productPriceRange(b)[0] - productPriceRange(a)[0];
      if (sort === 'name') return a.name.localeCompare(b.name);
      return Number(b.available) - Number(a.available) || Number(a.code) - Number(b.code);
    });
  }, [deferredQuery, filters, language, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toggleFilter(group, value) {
    setFilters((current) => ({
      ...current,
      [group]: current[group].includes(value) ? current[group].filter((item) => item !== value) : [...current[group], value]
    }));
  }

  function resetFilters() {
    setFilters(initialFilters());
    setQuery('');
    setSort('featured');
  }

  const filterProps = {
    copy, language, taxonomy: catalogTaxonomy, filters, maxPrice: MAX_PRICE, activeCount,
    onToggle: toggleFilter,
    onAvailability: () => setFilters((current) => ({ ...current, availableOnly: !current.availableOnly })),
    onPrice: (maxPrice) => setFilters((current) => ({ ...current, maxPrice })),
    onReset: resetFilters
  };

  return (
    <div className="inner-page catalog-page">
      <header className="catalog-intro frame">
        <div><p className="overline">{copy.eyebrow}</p><h1>{copy.title}</h1></div>
        <div><p>{copy.lead}</p><aside><strong>{copy.noteTitle}</strong><span>{copy.noteBody}</span></aside></div>
      </header>

      <section className="catalog-shell frame" aria-busy={loading}>
        <div className="catalog-main">
          <div className="catalog-toolbar">
            <p aria-live="polite"><span>{copy.result}</span><strong>{filtered.length.toString().padStart(2, '0')}</strong><span>{copy.of} {catalogProducts.length}</span></p>

            <label className="catalog-search">
              <span>{copy.searchLabel}</span>
              <div><MagnifyingGlass size={18} weight="regular" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.search} />{query && <button type="button" onClick={() => setQuery('')} aria-label={copy.reset}><X size={17} weight="regular" /></button>}</div>
            </label>

            <label className="catalog-sort">
              <span>{copy.sortLabel}</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="featured">{copy.sortFeatured}</option>
                <option value="low">{copy.sortLow}</option>
                <option value="high">{copy.sortHigh}</option>
                <option value="name">{copy.sortName}</option>
              </select>
            </label>

            <button className="mobile-filter-trigger" type="button" onClick={() => setDrawerOpen(true)} aria-haspopup="dialog">
              <Funnel size={18} weight="regular" />{copy.showFilters}{activeCount > 0 && <b>{activeCount}</b>}
            </button>
          </div>

          {loading ? (
            <div className="catalog-skeleton" aria-label="Loading"><span /><span /><span /><span /><span /><span /></div>
          ) : visible.length ? (
            <>
              <div className="catalog-grid" aria-live="polite">
                {visible.map((product, index) => <CatalogCard key={product.slug} product={product} language={language} copy={copy} style={{ '--catalog-index': index }} />)}
              </div>

              {pageCount > 1 && (
                <nav className="catalog-pagination" aria-label={copy.page}>
                  <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page === 1} aria-label={copy.previous}><ArrowLeft size={18} weight="regular" /></button>
                  {Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => <button key={item} className={item === page ? 'is-current' : ''} type="button" onClick={() => setPage(item)} aria-current={item === page ? 'page' : undefined}>{item}</button>)}
                  <button type="button" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={page === pageCount} aria-label={copy.next}><ArrowRight size={18} weight="regular" /></button>
                </nav>
              )}
            </>
          ) : (
            <div className="catalog-empty" role="status">
              <span>00 / 08</span>
              <h2>{copy.emptyTitle}</h2>
              <p>{deferredQuery ? `${copy.queryEmpty} «${deferredQuery}». ${copy.emptyBody}` : copy.emptyBody}</p>
              <button className="action action--solid" type="button" onClick={resetFilters}>{copy.resetAll}</button>
            </div>
          )}
        </div>

        <FilterPanel {...filterProps} />
      </section>

      {drawerOpen && (
        <div className="filter-layer">
          <button className="filter-scrim" type="button" onClick={() => setDrawerOpen(false)} aria-label={copy.closeFilters} />
          <FilterPanel {...filterProps} mobile onClose={() => setDrawerOpen(false)} />
        </div>
      )}
    </div>
  );
}



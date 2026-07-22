import { useEffect, useRef } from 'react';
import { X } from '@phosphor-icons/react';
import { formatMdl } from '../catalogData';

function FilterGroup({ title, values, labels, selected, onToggle }) {
  return (
    <fieldset className="filter-group">
      <legend>{title}</legend>
      <div>
        {values.map((value) => (
          <label key={value}>
            <input type="checkbox" checked={selected.includes(value)} onChange={() => onToggle(value)} />
            <span aria-hidden="true" />
            <b>{labels[value]}</b>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function FilterPanel({ copy, language, taxonomy, filters, maxPrice, activeCount, onToggle, onAvailability, onPrice, onReset, mobile = false, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!mobile) return undefined;
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll('button, input, select, [href], [tabindex]:not([tabindex="-1"])');
    focusables?.[0]?.focus();

    function keydown(event) {
      if (event.key === 'Escape') { onClose(); return; }
      if (event.key !== 'Tab' || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }

    document.addEventListener('keydown', keydown);
    return () => document.removeEventListener('keydown', keydown);
  }, [mobile, onClose]);

  return (
    <aside ref={panelRef} className={`catalog-filters ${mobile ? 'catalog-filters--drawer' : 'catalog-filters--desktop'}`} aria-label={copy.filters} {...(mobile ? { role: 'dialog', 'aria-modal': true } : {})}>
      <header>
        <div><span>{copy.filters}</span>{activeCount > 0 && <b>{activeCount.toString().padStart(2, '0')}</b>}</div>
        {activeCount > 0 && <button type="button" onClick={onReset}>{copy.reset}</button>}
        {mobile && <button className="filter-close" type="button" onClick={onClose} aria-label={copy.closeFilters}><X size={22} weight="regular" /></button>}
      </header>

      <div className="filter-budget">
        <div><label htmlFor={mobile ? 'mobile-price' : 'desktop-price'}>{copy.price}</label><output>{copy.priceTo} {formatMdl(filters.maxPrice, language)}</output></div>
        <input id={mobile ? 'mobile-price' : 'desktop-price'} type="range" min="250" max={maxPrice} step="250" value={filters.maxPrice} onChange={(event) => onPrice(Number(event.target.value))} />
        <div className="filter-range-labels"><span>250 MDL</span><span>{formatMdl(maxPrice, language)}</span></div>
      </div>

      <FilterGroup title={copy.category} values={taxonomy.categories} labels={copy.categories} selected={filters.categories} onToggle={(value) => onToggle('categories', value)} />
      <FilterGroup title={copy.origin} values={taxonomy.origins} labels={copy.origins} selected={filters.origins} onToggle={(value) => onToggle('origins', value)} />
      <FilterGroup title={copy.roast} values={taxonomy.roasts} labels={copy.roasts} selected={filters.roasts} onToggle={(value) => onToggle('roasts', value)} />
      <FilterGroup title={copy.format} values={taxonomy.formats} labels={copy.formats} selected={filters.formats} onToggle={(value) => onToggle('formats', value)} />

      <label className="availability-filter">
        <input type="checkbox" checked={filters.availableOnly} onChange={onAvailability} />
        <span aria-hidden="true" />
        <b>{copy.availability}</b>
      </label>

      {mobile && <button className="action action--solid filter-apply" type="button" onClick={onClose}>{copy.result}</button>}
    </aside>
  );
}

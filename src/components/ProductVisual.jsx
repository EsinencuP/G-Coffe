export function ProductVisual({ product, compact = false }) {
  const kind = product.kind || (product.slug === 'atelier-kit' ? 'equipment' : 'coffee');

  return (
    <div className={`product-visual product-visual--${product.tone} product-visual--${kind} ${compact ? 'product-visual--compact' : ''}`} aria-hidden="true">
      <span className="product-visual__index">G/{product.code}</span>

      {kind === 'equipment' && (
        <div className="machine-object">
          <span className="machine-object__rail" />
          <span className="machine-object__group" />
          <span className="machine-object__cup" />
          <span className="machine-object__gauge" />
        </div>
      )}

      {kind === 'accessory' && (
        <div className="grinder-object">
          <span className="grinder-object__handle" />
          <span className="grinder-object__knob" />
          <span className="grinder-object__body"><i>G</i></span>
          <span className="grinder-object__cup" />
        </div>
      )}

      {kind === 'coffee' && (
        <div className="coffee-object">
          <span className="coffee-object__seal">G</span>
          <span className="coffee-object__name">{product.name}</span>
          <span className="coffee-object__origin">{product.origin}</span>
        </div>
      )}

      <span className="product-visual__edition">CURATED / 2026</span>
    </div>
  );
}

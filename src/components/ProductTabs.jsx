import { useRef, useState } from 'react';

export function ProductTabs({ product, language, copy }) {
  const [active, setActive] = useState('description');
  const buttons = useRef([]);
  const tabs = ['description', 'specifications'];

  function keydown(event, index) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    setActive(tabs[next]);
    buttons.current[next]?.focus();
  }

  return (
    <section className="product-tabs frame">
      <div className="product-tabs__list" role="tablist" aria-label={copy.dossier}>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(node) => { buttons.current[index] = node; }}
            id={`tab-${tab}`}
            type="button"
            role="tab"
            aria-selected={active === tab}
            aria-controls={`panel-${tab}`}
            tabIndex={active === tab ? 0 : -1}
            onClick={() => setActive(tab)}
            onKeyDown={(event) => keydown(event, index)}
          >
            <span>0{index + 1}</span>{copy[tab]}
          </button>
        ))}
      </div>

      <div id="panel-description" role="tabpanel" aria-labelledby="tab-description" hidden={active !== 'description'}>
        <p className="overline">{product.origin} · {product.process}</p>
        <h2>{product.name}: {product.notes[language]}</h2>
        <p>{product.story[language]}</p>
      </div>

      <div id="panel-specifications" role="tabpanel" aria-labelledby="tab-specifications" hidden={active !== 'specifications'}>
        <dl>
          <div><dt>{copy.altitude}</dt><dd>{product.specs.altitude}</dd></div>
          <div><dt>{copy.variety}</dt><dd>{product.specs.variety}</dd></div>
          <div><dt>{copy.harvest}</dt><dd>{product.specs.harvest}</dd></div>
          <div><dt>{copy.recipe}</dt><dd>{product.specs.recipe}</dd></div>
        </dl>
      </div>
    </section>
  );
}

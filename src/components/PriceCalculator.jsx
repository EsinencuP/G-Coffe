import { useMemo, useState } from 'react';
import { ArrowRight, Minus, Plus } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { pagePath } from '../data';
import { formatMdl } from '../catalogData';

export function PriceCalculator({ product, language, copy }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [preparationId, setPreparationId] = useState(product.preparations[0].id);
  const [quantity, setQuantity] = useState(1);
  const [rhythm, setRhythm] = useState('once');
  const showRhythm = product.kind !== 'equipment';

  const calculation = useMemo(() => {
    const variant = product.variants.find((item) => item.id === variantId) || product.variants[0];
    const preparation = product.preparations.find((item) => item.id === preparationId) || product.preparations[0];
    const base = Math.round(product.basePrice * variant.multiplier / 5) * 5 * quantity;
    const service = preparation.cost * quantity;
    const rhythmAdjustment = showRhythm && rhythm === 'monthly' ? -Math.round((base + service) * 0.06 / 5) * 5 : 0;
    const total = base + service + rhythmAdjustment;
    return { base, service, rhythmAdjustment, total };
  }, [preparationId, product, quantity, rhythm, showRhythm, variantId]);

  function reset() {
    setVariantId(product.variants[0].id);
    setPreparationId(product.preparations[0].id);
    setQuantity(1);
    setRhythm('once');
  }

  const isEquipment = product.kind === 'equipment';
  const contactHref = `${pagePath(language, 'contact')}?product=${product.slug}&estimate=${calculation.total}`;

  return (
    <section id="price-calculator" className="price-calculator" aria-labelledby="calculator-title">
      <header>
        <p className="overline">G/{product.code} · MDL</p>
        <h2 id="calculator-title">{copy.calculator}</h2>
        <p>{copy.calculatorLead}</p>
      </header>

      <div className="calculator-fields">
        <label>
          <span>{isEquipment ? copy.variantEquipment : copy.variantCoffee}</span>
          <select value={variantId} onChange={(event) => setVariantId(event.target.value)}>
            {product.variants.map((variant) => <option key={variant.id} value={variant.id}>{variant.label[language]}</option>)}
          </select>
        </label>

        <label>
          <span>{isEquipment ? copy.preparationEquipment : copy.preparationCoffee}</span>
          <select value={preparationId} onChange={(event) => setPreparationId(event.target.value)}>
            {product.preparations.map((preparation) => <option key={preparation.id} value={preparation.id}>{preparation.label[language]}</option>)}
          </select>
        </label>

        <div className="quantity-field">
          <span>{copy.quantity}</span>
          <div>
            <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} disabled={quantity === 1} aria-label={copy.decrease}><Minus size={16} weight="regular" /></button>
            <output aria-live="polite">{quantity.toString().padStart(2, '0')}</output>
            <button type="button" onClick={() => setQuantity((value) => Math.min(12, value + 1))} disabled={quantity === 12} aria-label={copy.increase}><Plus size={16} weight="regular" /></button>
          </div>
        </div>

        {showRhythm && (
          <fieldset className="rhythm-field">
            <legend>{copy.rhythm}</legend>
            <label><input type="radio" name={`rhythm-${product.slug}`} checked={rhythm === 'once'} onChange={() => setRhythm('once')} /><span>{copy.once}</span></label>
            <label><input type="radio" name={`rhythm-${product.slug}`} checked={rhythm === 'monthly'} onChange={() => setRhythm('monthly')} /><span>{copy.monthly}</span></label>
          </fieldset>
        )}
      </div>

      <div className="calculator-breakdown" aria-live="polite" aria-atomic="true">
        <div><span>{copy.subtotal}</span><strong>{formatMdl(calculation.base, language)}</strong></div>
        <div><span>{copy.service}</span><strong>{formatMdl(calculation.service, language)}</strong></div>
        {calculation.rhythmAdjustment !== 0 && <div><span>{copy.rhythmBenefit}</span><strong>{formatMdl(calculation.rhythmAdjustment, language)}</strong></div>}
        <div className="calculator-total"><span>{copy.total}</span><strong>{formatMdl(calculation.total, language)}</strong></div>
      </div>

      <p className="calculator-disclaimer">{copy.disclaimer}</p>
      <div className="calculator-actions">
        <Link className="action action--solid" to={contactHref}>{copy.consult}<ArrowRight size={18} weight="regular" /></Link>
        <button className="text-link" type="button" onClick={reset}>{copy.reset}</button>
      </div>
    </section>
  );
}

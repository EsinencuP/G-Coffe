import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, MapPin, Phone } from '@phosphor-icons/react';

export function ContactPage({ text }) {
  const content = text.contact;
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const timer = useRef();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = {};
    if (String(data.get('name') || '').trim().length < 2) nextErrors.name = content.error;
    if (!/^[+\d][\d\s()\-]{7,}$/.test(String(data.get('phone') || '').trim())) nextErrors.phone = content.error;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setStatus('error'); return; }
    setStatus('loading');
    timer.current = window.setTimeout(() => {
      setStatus('success');
      form.reset();
    }, 720);
  }

  return (
    <div className="inner-page contact-page">
      <header className="contact-header frame">
        <div><p className="overline">{content.eyebrow}</p><h1>{content.title}</h1></div>
        <p>{content.lead}</p>
      </header>
      <section className="contact-layout frame">
        <aside className="contact-facts">
          <div><MapPin size={22} weight="regular" /><p>{content.location}</p></div>
          <div><Clock size={22} weight="regular" /><p>{content.hours}</p></div>
          <div><Phone size={22} weight="regular" /><p><a href="tel:+37360000000">+373 60 000 000</a><a href="mailto:hello@gcoffee.md">hello@gcoffee.md</a></p></div>
          <span>G / CHIȘINĂU / MD</span>
        </aside>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-pair">
            <label><span>{content.name}</span><input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <small>{errors.name}</small>}</label>
            <label><span>{content.phone}</span><input name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} />{errors.phone && <small>{errors.phone}</small>}</label>
          </div>
          <label><span>{content.interest}</span><select name="interest">{content.interests.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>{content.message}</span><textarea name="message" rows="5" placeholder={content.placeholder} /></label>
          <button className="action action--solid" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? content.sending : content.submit}<ArrowRight size={18} weight="regular" />
          </button>
          <div className="form-feedback" role="status" aria-live="polite">
            {status === 'loading' && <span className="form-loading"><i /><i /><i /></span>}
            {status === 'success' && <p className="form-success">{content.success}</p>}
            {status === 'error' && <p className="form-error">{content.error}</p>}
          </div>
        </form>
      </section>
    </div>
  );
}

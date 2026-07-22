import { ArrowUpRight } from '@phosphor-icons/react';

export function JournalPage({ text }) {
  const content = text.journal;
  return (
    <div className="inner-page journal-page">
      <header className="page-header frame">
        <div><p className="overline">{content.eyebrow}</p><h1>{content.title}</h1></div>
        <p>{content.lead}</p>
      </header>
      <section className="journal-index frame">
        <article className="journal-feature">
          <div className="journal-feature__media"><img src="/assets/showroom-hero.png" alt="Espresso equipment in showroom" width="1792" height="1024" /></div>
          <div className="journal-feature__copy">
            <span>{content.articles[0][0]} · {content.articles[0][2]}</span>
            <h2>{content.articles[0][1]}</h2>
            <a href="#article-1">{content.read}<ArrowUpRight size={18} weight="regular" /></a>
          </div>
        </article>
        <div className="journal-ledger">
          {content.articles.slice(1).map(([category, title, duration], index) => (
            <article id={`article-${index + 2}`} key={title}>
              <span className="journal-ledger__index">0{index + 2}</span>
              <div><p className="overline">{category}</p><h2>{title}</h2></div>
              <span>{duration}</span>
              <button type="button" aria-label={`${content.read}: ${title}`}><ArrowUpRight size={22} weight="regular" /></button>
            </article>
          ))}
        </div>
      </section>
      <section className="journal-note surface-dark">
        <div className="frame"><span>G/NOTE</span><p>18 g · 36 g · 27 sec · 93°C</p><strong>ESPRESSO BASELINE / SHOWROOM</strong></div>
      </section>
    </div>
  );
}

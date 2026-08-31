import { pillars } from '../data';

export default function Pillars({ onCtaClick }) {
  return (
    <section className="pillars">
      <div className="pillars__inner">
        <h2 className="pillars__title">
          CRIAR. COMUNICAR. <span className="pillars__title-accent">VENDER.</span>
        </h2>
        <div className="pillars__grid">
          {pillars.map((p) => (
            <div className="pillars__card" key={p.num}>
              <span className="pillars__num">{p.num}</span>
              <h3 className="pillars__card-title">{p.title}</h3>
              <p className="pillars__desc">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <button className="pill-btn pill-btn--navy pill-btn--md" onClick={onCtaClick}>
            QUERO TRANSFORMAR MEU CONTEÚDO
          </button>
        </div>
      </div>
    </section>
  );
}

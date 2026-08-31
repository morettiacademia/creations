import duoPhoto from '../assets/mona-camila-duo.png';
import logoCreations from '../assets/logo-creations.png';

export default function Hero({ onCtaClick }) {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="hero__diamond" />
      <div className="hero__dot" />
      <div className="hero__grid">
        <div>
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            ACADEMIA DA MAGIA APRESENTA
          </div>
          <h1 className="hero__title">
            PARE DE ACORDAR PENSANDO:
            <br />
            <span className="hero__title-highlight">“O QUE EU POSTO HOJE?”</span>
          </h1>
          <p className="hero__subhead">
            Transforme o conteúdo da sua agência em uma estratégia organizada para aparecer, comunicar, construir
            autoridade e vender.
          </p>
          <div className="hero__chips">
            <span className="hero__chip">90 DIAS</span>
            <span className="hero__chip">6 ENCONTROS AO VIVO</span>
            <span className="hero__chip">ACOMPANHAMENTO NO WHATSAPP</span>
          </div>
          <div className="hero__actions">
            <button className="pill-btn pill-btn--yellow hero__cta" onClick={onCtaClick}>
              QUERO PARTICIPAR DO CREATIONS 2.0
            </button>
            <span className="hero__dates">OUT · NOV · DEZ</span>
          </div>
          <p className="hero__micro">Marketing para agentes de viagens que precisam fazer o próprio negócio aparecer.</p>
        </div>
        <div className="hero__visual">
          <img className="hero__duo-photo" src={duoPhoto} alt="Mona Coscarella e Camila Moretti" />
          <div className="hero__logo-wrap">
            <img className="hero__logo" src={logoCreations} alt="Creations" />
            <span className="hero__logo-suffix">2.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}

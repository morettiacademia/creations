export default function CtaFinal({ onCheckoutClick }) {
  return (
    <section className="cta-final">
      <div className="cta-final__inner">
        <h2 className="cta-final__title">TALVEZ VOCÊ NÃO PRECISE POSTAR MAIS.</h2>
        <h2 className="cta-final__title-accent">PRECISA POSTAR COM MAIS INTENÇÃO.</h2>
        <p className="cta-final__text">
          CREATIONS 2.0 — 90 dias para sair da improvisação e construir um sistema de conteúdo para sua agência.
        </p>
        <p className="cta-final__price">
          12x de R$ 154,82 <span className="cta-final__price-asterisk">*</span>
        </p>
        <p className="cta-final__price-alt">Ou R$ 1.497,00 à vista</p>
        <button className="pill-btn pill-btn--yellow cta-final__cta" onClick={onCheckoutClick}>
          QUERO GARANTIR MINHA VAGA
        </button>
        <p className="cta-final__tagline">CREATIONS FAZ ESSE NEGÓCIO APARECER, SE COMUNICAR E VENDER.</p>
      </div>
    </section>
  );
}

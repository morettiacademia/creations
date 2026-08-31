import logoCreations from '../assets/logo-creations.png';
import { offerFeatures } from '../data';

export default function Offer({ onCheckoutClick }) {
  return (
    <section className="offer" id="oferta">
      <div className="offer__card">
        <img className="offer__logo" src={logoCreations} alt="Creations 2.0" />
        <div className="offer__features">
          {offerFeatures.map((f) => (
            <span className="offer__feature" key={f}>
              {f}
            </span>
          ))}
        </div>
        <p className="offer__label">INVESTIMENTO</p>
        <p className="offer__price">
          12x de R$ 154,82 <span className="offer__price-asterisk">*</span>
        </p>
        <p className="offer__price-alt">Ou R$ 1.497,00 à vista</p>
        <button className="pill-btn pill-btn--yellow offer__cta" onClick={onCheckoutClick}>
          QUERO GARANTIR MINHA VAGA
        </button>
      </div>
    </section>
  );
}

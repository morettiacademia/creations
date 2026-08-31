import logoCreations from '../assets/logo-creations.png';
import logoAcademia from '../assets/logo-academia.png';

export default function Header({ onCtaClick }) {
  return (
    <header className="site-header">
      <img className="site-header__logo" src={logoCreations} alt="Creations 2.0" />
      <div className="site-header__right">
        <img className="site-header__badge" src={logoAcademia} alt="Academia da Magia" />
        <button className="pill-btn pill-btn--yellow site-header__cta" onClick={onCtaClick}>
          QUERO PARTICIPAR
        </button>
      </div>
    </header>
  );
}

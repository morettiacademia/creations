import logoAcademia from '../assets/logo-academia.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <img className="site-footer__logo" src={logoAcademia} alt="Academia da Magia" />
      <p className="site-footer__copy">© 2026 Academia da Magia · CREATIONS 2.0</p>
    </footer>
  );
}

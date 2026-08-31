export default function StickyMobileCta({ onCtaClick }) {
  return (
    <div className="sticky-cta">
      <button className="pill-btn pill-btn--yellow sticky-cta__btn" onClick={onCtaClick}>
        QUERO PARTICIPAR
      </button>
    </div>
  );
}

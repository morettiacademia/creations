import { deliverables, knowList } from '../data';

export default function Deliverables() {
  return (
    <section className="deliverables">
      <div className="deliverables__inner">
        <div className="deliverables__head">
          <span className="eyebrow">ENTREGÁVEIS</span>
          <h2 className="deliverables__title">O QUE VOCÊ TERÁ CONSTRUÍDO AO FINAL DOS 90 DIAS?</h2>
        </div>
        <div className="deliverables__grid">
          {deliverables.map((d) => (
            <div className="deliverables__item" key={d}>
              <span className="deliverables__check">✓</span>
              <span className="deliverables__text">{d}</span>
            </div>
          ))}
        </div>
        <div className="deliverables__panel">
          <p className="deliverables__panel-label">AO FINAL, VOCÊ SABERÁ:</p>
          <div className="deliverables__know-list">
            {knowList.map((k) => (
              <span className="deliverables__know-item" key={k}>
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

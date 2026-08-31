import { journey } from '../data';

export default function Journey() {
  return (
    <section className="journey">
      <div className="journey__inner">
        <div className="journey__head">
          <span className="eyebrow">A JORNADA</span>
          <h2 className="journey__title">90 DIAS. 6 ENCONTROS. UMA TRANSFORMAÇÃO.</h2>
        </div>
        <div className="journey__track">
          {journey.map((j) => (
            <div className="journey__step" key={j.num}>
              <div className="journey__node">
                <div className="journey__circle">{j.num}</div>
                <span className="journey__label">{j.label}</span>
              </div>
              {j.hasNext && <div className="journey__connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

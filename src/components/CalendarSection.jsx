import { calendarItems } from '../data';

export default function CalendarSection() {
  return (
    <section className="calendar">
      <div className="calendar__inner">
        <div className="calendar__head">
          <span className="eyebrow">CALENDÁRIO DE DATAS COMEMORATIVAS CREATIONS</span>
          <h2 className="calendar__title">UMA DATA DEIXA DE SER SÓ UMA DATA QUANDO VIRA PAUTA.</h2>
          <p className="calendar__subtitle">
            Datas comemorativas relevantes para o turismo, incluindo Disney, Universal e United Parks, que ajudam a
            construir seu banco de pautas.
          </p>
        </div>
        <div className="calendar__list">
          {calendarItems.map((c) => (
            <div className="calendar__row" key={c.date}>
              <span className="calendar__date">{c.date}</span>
              <span className="calendar__opp">{c.opp}</span>
              <span className="calendar__idea">{c.idea}</span>
              <span className="calendar__format">{c.format}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

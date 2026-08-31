import { missions } from '../data';

export default function Missions() {
  return (
    <section className="missions">
      <div className="missions__inner">
        <div className="missions__head">
          <span className="eyebrow">AS MISSÕES CREATIONS</span>
          <h2 className="missions__title">CADA ENCONTRO GERA UM ATIVO REAL</h2>
          <p className="missions__subtitle">
            Você não termina cada encontro apenas com anotações. Termina com uma parte do marketing da sua agência
            construída.
          </p>
        </div>
        <div className="missions__grid">
          {missions.map((m) => (
            <div className="missions__card" key={m.num}>
              <span className="missions__card-num">{m.num}</span>
              <p className="missions__card-title">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { accompFlow } from '../data';

export default function Accompaniment() {
  return (
    <section className="accompaniment">
      <div className="accompaniment__inner">
        <span className="eyebrow">90 DIAS DE ACOMPANHAMENTO</span>
        <h2 className="accompaniment__title">ENTRE UM ENCONTRO E OUTRO, O CREATIONS CONTINUA.</h2>
        <p className="accompaniment__text">
          Durante outubro, novembro e dezembro, os alunos participam de um grupo exclusivo no WhatsApp acompanhado
          por Mona Coscarella e Camila Moretti, o espaço de implementação do programa.
        </p>
        <div className="accompaniment__flow">
          {accompFlow.map((a) => (
            <span className="accompaniment__pill" key={a}>
              {a}
            </span>
          ))}
        </div>
        <p className="accompaniment__footnote">
          Não são apenas 6 encontros. São 90 dias construindo uma nova rotina de marketing para sua agência.
        </p>
      </div>
    </section>
  );
}

import { impactFlow } from '../data';

export default function MethodImpacto() {
  return (
    <section className="method">
      <div className="method__inner">
        <span className="eyebrow">MÉTODO IMPACTO, DENTRO DO CREATIONS</span>
        <h2 className="method__title">DE CONTEÚDO A OPORTUNIDADE COMERCIAL</h2>
        <div className="method__flow">
          {impactFlow.map((i) => (
            <div className="method__step" key={i.label}>
              <span className="method__label">{i.label}</span>
              {i.hasNext && <span className="method__arrow">→</span>}
            </div>
          ))}
        </div>
        <p className="method__text">
          Camila Moretti traz o Método IMPACTO para dentro do CREATIONS, conduzindo o aluno de um conteúdo bem
          construído até a conversa comercial.
        </p>
      </div>
    </section>
  );
}

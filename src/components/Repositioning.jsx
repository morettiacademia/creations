import { repositionTags } from '../data';

export default function Repositioning() {
  return (
    <section className="reposition">
      <div className="reposition__inner">
        <h2 className="reposition__title-muted">NÃO É SOBRE VIRAR INFLUENCER.</h2>
        <h2 className="reposition__title">É SOBRE APRENDER A FAZER MARKETING PARA SUA AGÊNCIA.</h2>
        <p className="reposition__text">
          O CREATIONS 2.0 não existe para deixar o Instagram simplesmente mais bonito. Existe para transformar
          conteúdo em uma ferramenta de:
        </p>
        <div className="reposition__tags">
          {repositionTags.map((tag) => (
            <span className="reposition__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

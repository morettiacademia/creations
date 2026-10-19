import { connectionsFacts, connectionsHighlights } from '../data';

export default function Connections({ onCtaClick }) {
  return (
    <section className="connections">
      <div className="connections__inner">
        <span className="connections__badge">EXTENSÃO INTERNACIONAL CREATIONS</span>
        <h2 className="connections__title">
          CONNECTIONS — IMERSÃO INTERNACIONAL DE CRIAÇÃO DE CONTEÚDO EM <span className="connections__title-accent">ORLANDO</span>
        </h2>
        <p className="connections__subhead">
          Conheça o destino, fortaleça sua presença digital e transforme experiências em conteúdo para sua agência.
        </p>

        <div className="connections__promise">
          <p className="connections__promise-text">1 ANO DE CONTEÚDO EM 1 SEMANA EM ORLANDO.</p>
        </div>

        <div className="connections__facts">
          {connectionsFacts.map((f) => (
            <span className="connections__fact" key={f}>
              {f}
            </span>
          ))}
        </div>

        <p className="connections__text">
          De <strong>6 a 14 de novembro de 2026</strong>, você vai viver uma imersão prática em Orlando, com
          orientação para captar fotos e vídeos com intenção, contar histórias e apresentar experiências que
          despertem o desejo de viajar.
        </p>

        <div className="connections__highlights">
          {connectionsHighlights.map((h) => (
            <span className="connections__highlight" key={h}>
              {h}
            </span>
          ))}
        </div>
        <p className="connections__text connections__text--muted">
          Além de oportunidades de conexão com profissionais e potenciais parceiros.
        </p>

        <p className="connections__lead">
          Uma viagem para construir um acervo de conteúdo, ampliar seu repertório e gerar ideias para trabalhar sua
          comunicação ao longo do ano.
        </p>

        <p className="connections__audience">
          Para agentes de viagens e profissionais do turismo que querem aparecer com mais confiança, mostrar seu
          conhecimento e criar conteúdo que apoie suas vendas.
        </p>

        <button className="pill-btn pill-btn--yellow connections__cta" onClick={onCtaClick}>
          QUERO PARTICIPAR DO CONNECTIONS
        </button>
      </div>
    </section>
  );
}

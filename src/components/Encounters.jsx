import { encounters } from '../data';

export default function Encounters({ onCtaClick }) {
  return (
    <section className="encounters">
      <div className="encounters__inner">
        <div className="encounters__head">
          <span className="eyebrow">OS 6 ENCONTROS</span>
          <h2 className="encounters__title">O QUE VOCÊ VAI CONSTRUIR EM CADA ETAPA</h2>
        </div>
        <div className="encounters__list">
          {encounters.map((e) => (
            <article className="encounter-card" key={e.num}>
              <div>
                <div className="encounter-card__head">
                  <span className="encounter-card__num">{e.num}</span>
                  <span className="encounter-card__tag">{e.tag}</span>
                </div>
                <h3 className="encounter-card__title">{e.title}</h3>
                <p className="encounter-card__intro">{e.intro}</p>
                <div className="encounter-card__topics">
                  {e.topics.map((t) => (
                    <span className="encounter-card__topic" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {e.quote && <p className="encounter-card__quote">{e.quote}</p>}
                {e.flow && (
                  <div className="encounter-card__block">
                    <span className="encounter-card__block-label">{e.flowLabel}</span>
                    <div className="encounter-card__flow">
                      {e.flow.map((f) => (
                        <span className="encounter-card__flow-step" key={f.label}>
                          <span className="encounter-card__flow-label">{f.label}</span>
                          {f.hasNext && <span className="encounter-card__flow-arrow">→</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {e.channels && (
                  <div>
                    <span className="encounter-card__block-label">1 ASSUNTO → VÁRIOS CANAIS</span>
                    <div className="encounter-card__channels">
                      {e.channels.map((c) => (
                        <span className="encounter-card__channel" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="encounter-card__mission">
                <span className="encounter-card__mission-label">MISSÃO CREATIONS #{e.num}</span>
                <p className="encounter-card__mission-title">{e.missionTitle}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <button className="pill-btn pill-btn--yellow pill-btn--md" onClick={onCtaClick}>
            QUERO PARTICIPAR DO CREATIONS 2.0
          </button>
        </div>
      </div>
    </section>
  );
}

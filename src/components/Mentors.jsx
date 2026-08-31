import monaPhoto from '../assets/mona.png';
import camilaPhoto from '../assets/camila.jpg';

export default function Mentors({ onCtaClick }) {
  return (
    <section className="mentors">
      <div className="mentors__inner">
        <div className="mentors__head">
          <h2 className="mentors__title">
            DUAS ESPECIALISTAS. DOIS OLHARES.
            <br />
            <span className="mentors__title-accent">UM OBJETIVO.</span>
          </h2>
        </div>
        <div className="mentors__grid">
          <div className="mentor-card">
            <img className="mentor-card__photo" src={monaPhoto} alt="Mona Coscarella" />
            <div className="mentor-card__body">
              <h3 className="mentor-card__name">MONICA COSCARELLA</h3>
              <p className="mentor-card__roles">CRIAÇÃO · COMUNICAÇÃO · PRESENÇA · EXECUÇÃO</p>
              <p className="mentor-card__bio">
                Jornalista, editora e proprietária da Revista Orlando Wish (B2C) e do Jornal Wish Travel (B2B). Autora
                do livro Café com Magia • 365 Dias de Sabedoria de Walt Disney. Palestrante, host do podcast PodWish
                e apresentadora da TV Connect USA.
              </p>
              <p className="mentor-card__role-desc">
                À frente da jornada de criação do CREATIONS 2.0 — ensina a transformar conhecimento, experiências,
                viagens e produtos em conteúdo, aparecer, comunicar melhor e criar uma rotina possível de manter.
              </p>
              <p className="mentor-card__pull-quote">
                “Mona ensina você a transformar aquilo que sabe em conteúdo que conecta.”
              </p>
            </div>
          </div>
          <div className="mentor-card">
            <img className="mentor-card__photo" src={camilaPhoto} alt="Camila Moretti" />
            <div className="mentor-card__body">
              <h3 className="mentor-card__name">CAMILA MORETTI</h3>
              <p className="mentor-card__roles">ESTRATÉGIA · POSICIONAMENTO · MARKETING · NEGÓCIOS · VENDAS</p>
              <p className="mentor-card__bio">
                Publicitária com MBA em Marketing, fundadora da Magical Turismo. Sócia e CRO na Academia da Magia,
                responsável por marketing, produtos e vendas.
              </p>
              <p className="mentor-card__role-desc">
                Traz para dentro do CREATIONS o Método IMPACTO e sua visão estratégica de negócios, conectando
                conteúdo ao posicionamento da agência e aos objetivos comerciais.
              </p>
              <p className="mentor-card__pull-quote">
                “Camila ensina você a transformar comunicação em estratégia e oportunidade comercial.”
              </p>
            </div>
          </div>
        </div>
        <div className="mentors__footer">
          <p className="mentors__shared-quote">
            “Mona mostra como criar e comunicar. Camila mostra como transformar comunicação em estratégia e
            negócio.”
          </p>
          <button className="pill-btn pill-btn--navy pill-btn--md" onClick={onCtaClick}>
            QUERO GARANTIR MINHA VAGA
          </button>
        </div>
      </div>
    </section>
  );
}

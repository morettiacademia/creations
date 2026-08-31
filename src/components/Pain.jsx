import { haveList, painList } from '../data';

export default function Pain() {
  return (
    <section className="pain">
      <div className="pain__inner">
        <h2 className="pain__title">VOCÊ NÃO PRECISA DE MAIS UMA LISTA DE IDEIAS DE POSTS.</h2>
        <div className="pain__grid">
          <div className="pain__col">
            <span className="pain__col-label">VOCÊ JÁ TEM</span>
            {haveList.map((row) => (
              <p className="pain__row" key={row}>
                {row}
              </p>
            ))}
          </div>
          <div className="pain__col">
            <span className="pain__col-label">MAS NA HORA DE PRODUZIR PARA SUA PRÓPRIA AGÊNCIA</span>
            {painList.map((row) => (
              <p className="pain__row" key={row}>
                {row}
              </p>
            ))}
          </div>
        </div>
        <div className="pain__banner">
          <p className="pain__banner-line1">O PROBLEMA NÃO É FALTA DE ASSUNTO.</p>
          <p className="pain__banner-line2">FALTA UM SISTEMA.</p>
        </div>
      </div>
    </section>
  );
}

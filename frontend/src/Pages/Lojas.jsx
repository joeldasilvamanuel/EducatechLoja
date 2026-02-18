import "./Lojas.css";

function Lojas() {
  return (
    <section className="lojas">
      <header className="lojas-header">
        <h1>SISTEMA DE GESTÃO ESCOLAR</h1>
        <p>ESCOLHA O PLANO PERFEITO PARA A SUA VISÃO</p>
      </header>

     <div className="cards">
        <div className="card c1">

          <div className="card-title">
            <h2>MINI</h2>
          </div>
          <div className="card-info">
            <p className="info-title">
              150K<span>/mês</span>
            </p>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <p className="btn-aderir">
              <a href="#">ADERIR</a>
            </p>
          </div>
        </div>

        <div className="card c2">
          <div className="card-title">
            <h2>PLUS</h2>
          </div>

          <div className="card-info">
            <p className="info-title">
              300K<span>/mês</span>
            </p>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <p className="btn-aderir">
              <a href="#">ADERIR</a>
            </p>
          </div>
        </div>

        <div className="card c3">
          <div className="card-title">
            <h2>PREMIUM</h2>
          </div>
          <div className="card-info">
            <p className="info-title">
              450K<span>/mês</span>
            </p>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <i className="bi bi-check2-square"><p className="info"> Lorem ipsum dolor sit </p></i>
            <p className="btn-aderir">
              <a href="#">ADERIR</a>
            </p>
          </div>
        </div>

      </div>

      <div className="cta-extra">
        <button className="btn-gratis">
          ADIRA JÁ E GANHE 30 DIAS GRÁTIS
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>

      <div className="garantia">
        <h2>Garantia Total</h2>
        <p>
          Experimente durante 30 dias. Se não estiver satisfeito,
          devolvemos o seu investimento.
        </p>
      </div>

      <div className="faq">
        <h2>Perguntas Frequentes</h2>

        <div className="faq-item">
          <h4>Posso cancelar quando quiser?</h4>
          <p>Sim, não existe fidelização obrigatória.</p>
        </div>

        <div className="faq-item">
          <h4>Os dados ficam seguros?</h4>
          <p>Utilizamos tecnologia avançada de encriptação.</p>
        </div>

        <div className="faq-item">
          <h4>Existe suporte técnico?</h4>
          <p>Sim, suporte disponível 24/7.</p>
        </div>
      </div>
    </section>
  );
}

export default Lojas;

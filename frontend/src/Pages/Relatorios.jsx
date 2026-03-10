import "./Relatorios.css";

function Relatorios() {
  return (
    <div className="relatorios-page">
      <section className="relatorio left">
        <h1>
          PLANO PLUS<span>(ACTIVO)</span>
        </h1>
        <p>
          Este plano oferece acesso completo ao sistema plus. Permite gerar
          relatórios avançados, análises detalhadas e acompanhamento do
          desempenho mensal.
        </p>
        <div className="cards">
          <div className="info-box">
            <i className="fa bi-calendar"></i>
            <h4>
              Início da Assinatura <p>10 Mar, 2026</p>
            </h4>
          </div>
          <div className="info-box">
            <i className="fa bi-hourglass"></i>
            <h4>
              Data de Expiração <p>10 Abr, 2026</p>
            </h4>
          </div>
          <div className="info-box">
            <i className="fa bi-credit-card"></i>
            <h4>
              Método de Pagamento <p>*****123</p>
            </h4>
          </div>
        </div>
        <p className="p">
          Esta assinatura é válida por 30 dias. Com opção de{" "}
          <a href="">Renovação</a>
        </p>
        <div className="cards">
          <div className="card-inf">
            <div>
              <h4>Valor do plano</h4>
              <p>10.000kz /mês</p>
            </div>
            <div>
              <h4>Status</h4>
              <p>
                Status <span>Activo</span>
              </p>
            </div>
          </div>
          <div className="card-inf">
            <div>
              <h4>Relatórios Gerados</h4>
              <p>
                <strong>10/50</strong> este mês
              </p>
            </div>
            <div>
              <h4>Uso Mensal</h4>
              <div className="progress-bar">
                <span id="usoBar"></span>
              </div>
              <p>48%</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button>
            <i className="bi bi-gear"></i> Alterar Plano{" "}
          </button>
          <button>
            <i className="bi bi-pencil-square"></i> Gerenciar Assinatura
          </button>
          <button>
            <i className="bi bi-clock-history"></i> Histórico de Pagamentos
          </button>
        </div>
        <div className="buttons">
          <button className="atualizar"> ATUALIZAR</button>
          <button className="atualizar">
            IR PARA <span>O SISTEMA</span>
          </button>
        </div>
      </section>
      <section className="relatorio right">
        <div className="graf-card">
          <div className="circle">
            <div className="circle-inner">
              <h2>70%</h2>
              <p>Utilizado</p>
            </div>
          </div>

          <div className="graf-info">
            <p>15 dias restantes do plano</p>
          </div>
        </div>

        <div className="alert">
          <span>Seu plano expira em 15 dias. Deseja renovar agora?</span>
          <div>
            <button className="renovar">RENOVAR AGORA</button>
            <button className="depois">Lembrar-me depois</button>
          </div>
        </div>
        <div className="stat">
          <div className="stat-item">
            <span>Relátorios Gerados</span> <span>10/50</span>
          </div>
          <div className="stat-item">
            <span>Utilizadores Activos</span> <span>8 Utilizadores</span>
          </div>
          <div className="stat-item">
            <span>Uso Mensal</span><span>48%</span>
          </div>
          <div className="stat-item">
            <span id="statBar"></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Relatorios;

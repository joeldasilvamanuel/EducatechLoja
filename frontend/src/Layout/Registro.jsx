import "./Registro.css";

function Registro() {
  return (
    <main>
      <form action="">
        <h1>CADASTRE-SE</h1>
        <div className="form-grup">
          <label htmlFor="nomeIns">NOME DA INSTITUIÇÃO:</label>
          <input type="text" id="nomeIns" name="nomeIns" className="" placeholder="" />
        </div>
        <div className="form-grup">
          <label htmlFor="email">NÚMERO DE IDENTIDADE FISCAL (NIF):</label>
          <input type="namber text" id="nif" name="nif" className="" />
        </div>
        <div className="form-grup">
          <label htmlFor="email">EMAIL:</label>
          <input type="email" id="email" name="email" className="" />
        </div>
        <div className="form-row">
          <div className="form-grup">
            <label htmlFor="password">PASSWORD:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-grup">
            <label htmlFor="password">CONFIRMAR PASSWORD:</label>
            <input type="password" id="password" name="password" />
          </div>
        </div>
        <button>CADASTRAR</button>
        <p>
          JÁ TEM CONTA? FAÇA<a href=""> LOGIN</a>
        </p>

        <div className="divider">
          <span>OU</span>
        </div>
        <p>CADASTRE-SE COM:</p>
        <div className="form-icon">
          <div className="icon">
            <a href="">
              <i class="fa bi-google"></i>
            </a>
          </div>
          <div className="icon">
            <a href="">
              <i class="fa bi-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="">
              <i class="fa bi-linkedin"></i>
            </a>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Registro;

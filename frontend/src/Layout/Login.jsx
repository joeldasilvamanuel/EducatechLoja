import "./Login.css";

function Login() {
    return (
        <main className="main">
            <form action="" className="form">
                <h1>LOGIN</h1>
                <div className="form-grupo">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" className="login-input" />
                </div>
                <div className="form-grupo">
                    <label htmlFor="password">PASSWORD</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="login-input"
                    />
                </div>
                <div className="form-roww">
                    <div>
                        <input
                            type="checkbox"
                            id="lembrar"
                            name="lembrar"
                            className="box"
                        />
                        <label htmlFor="lembrar">LEMBRAR-ME</label>
                    </div>
                    <div>
                        <a href="">ESQUECEU SUA SENHA?</a>
                    </div>
                </div>
                <button>ENVIAR</button>
                <p>
                    NÃO TEM UMA CONTA?<a href=""> CONECTA-SE</a>
                </p>
                <div className="divider">
                    <span>OU</span>
                </div>

                <p>FAÇA LOGIN COM:</p>
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

export default Login;

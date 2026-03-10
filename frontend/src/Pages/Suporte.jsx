import "./Suporte.css";

function Suporte() {
    return (
        <div className="suporte">
            <header className="suporte-header">
                <h1>SEJA BEM-VINDO AO SUPORTE DA BDZ DIGITAL TEC</h1>
                <p>POR FAVOR DEIXA O SEU FEEDBACK OU A SUA QUESTÃO</p>
            </header>

            <div className="suport-area">
                <div className="contactos">
                    <h2>Outras formas de contacto</h2>

                    <p><i className="bi bi-telephone"></i> +244 900 000 000</p>
                    <p><i className="bi bi-envelope"></i> suporte@bdzdigitaltec.com</p>
                    <p><i className="bi bi-clock"></i> Atendimento: 08h às 18h</p>
                </div>
                <div className="suporte-form">
                    <input type="text" placeholder="Seu Nome" />
                    <input type="email" placeholder="Seu Email" />

                    <select>
                        <option>Selecione o tipo de suporte</option>
                        <option>Problema Técnico</option>
                        <option>Faturação</option>
                        <option>Informações</option>
                    </select>
                </div>
                

                <textarea className="text-area"></textarea>
                <div className="suport-anexo">
                    <i className="bi bi-paperclip"></i>
                </div>
                <button className="suport-enviar">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>


            </div>
        </div>
    );
}

export default Suporte
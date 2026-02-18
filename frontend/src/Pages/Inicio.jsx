import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Inicio.css";

function Inicio() {
    const location = useLocation();

    const slides = [
        {
            img: "/tec.jpg",
            title: "EDUCA",
            highlight: "TEC",
            text: "Descubra a plataforma de educação em tecnologia mais inovadora do mercado! "
        },
        {
            img: "/inov.jpeg",
            title: "APRENDE",
            highlight: "MAIS",
            text: "Aprofunde seus conhecimentos em tecnologia e inovação com os nossos cursos especializados."
        },
        {
            img: "/oport.jpg",
            title: "INOVA",
            highlight: "ÇÃO",
            text: "Explore as últimas tendências e tecnologias emergentes. Aprenda a criar soluções inovadouras e transformar o mundo com tecnologia."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const getBackgroundColor = () => {
        if (location.pathname === "/") {
            return "#0c5a75";
        }
        return "transparent";
    };

    return (
        <div
            style={{
                backgroundColor: getBackgroundColor(),
                minHeight: "80vh",
                color: "white"
            }}
            className="principa"
        >
            <section id="home">
                <img src={slides[currentSlide].img} alt="slide" />

                <div className="home-txt">
                    <h1>
                        {slides[currentSlide].title}
                        <span>{slides[currentSlide].highlight}</span>
                    </h1>

                    <p>{slides[currentSlide].text}</p>

                    <div className="box-botton">
                        <a href="#" className="box-boot">
                            <div className="ganhar">
                                <i className="bi bi-shop-window"></i>
                            </div>
                            <div className="ganhar">
                                <p className="gan">ENTRAR NA LOJA</p>
                            </div>
                        </a>

                        <a href="#" className="box-boot">
                            <div className="ganhar">
                                <p className="gan">SABER MAIS</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bolinhas */}
                <div className="dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSlide === index ? "active" : ""}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </section>
            {/* SOBRE */}
            <section className="sobre">
                <h2>QUEM SOMOS</h2>
                <p>
                    A EDUCATEC é uma plataforma inovadora focada em soluções
                    tecnológicas para gestão escolar moderna.
                </p>
                <p>
                    Somos comprometidos com os nossos potenciais parceiros para garantir a boa funcionalidade da sua empresa e sua eficiencia
                </p>
            </section>

            {/* VANTAGENS */}
            <section className="vantagens">
                <div className="vantagem-card">
                    <i className="bi bi-laptop"></i>
                    <h3>Plataforma Online</h3>
                    <p>Acesso em qualquer lugar e dispositivo.</p>
                </div>

                <div className="vantagem-card">
                    <i className="bi bi-shield-check"></i>
                    <h3>Segurança</h3>
                    <p>Proteção total dos dados escolares.</p>
                </div>

                <div className="vantagem-card">
                    <i className="bi bi-graph-up"></i>
                    <h3>Relatórios Inteligentes</h3>
                    <p>Análises completas e automáticas.</p>
                </div>
            </section>
            {/* ESTATÍSTICAS */}
            <section className="stats">
                <div className="stat">
                    <h2>+150</h2>
                    <p>Escolas e Empresas Parceiras</p>
                </div>
                <div className="stat">
                    <h2>+20K</h2>
                    <p>Alunos Ativos</p>
                </div>
                <div className="stat">
                    <h2>99%</h2>
                    <p>Satisfação</p>
                </div>
            </section>

            {/* TESTEMUNHOS */}
            <section className="testemunhos">
                <h2>O que dizem os nossos clientes</h2>

                <div className="testemunho-card">
                    <p>
                        “A BDZ Digital Tec revolucionou completamente a nossa gestão escolar.”
                    </p>
                    <span>— Diretor Escola Horizonte</span>
                </div>

                <div className="testemunho-card">
                    <p>
                        “Simples, intuitivo e extremamente eficiente.”
                    </p>
                    <span>— Coordenador Académico</span>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="cta-final">
                <h2>Pronto para transformar a sua escola?</h2>
                <button>Começar Agora</button>
            </section>


        </div>

    );
}

export default Inicio;

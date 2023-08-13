import "./App.css";
import Header from "./components/Header";
import GithubIcon from "./assets/github.png";
import LinkedinIcon from "./assets/linkedin.png";
import About from "./components/About";
import Skills from "./components/Skills";
import TitleContainer from "./components/TitleContainer";
import ArrowUpIcon from "./assets/arrow-up.svg";

function App() {
  function handleClickScrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Header />
      <section id="home" className="container">
        <div className="heroContainer">
          <h2 className="subtitle heroSubtitle">Oi, eu sou Tayanna</h2>
          <h1 className="title">Desenvolvedora React</h1>
          <p className="bodyText textResume">
            Explore meu mundo através das palavras e descubra o que me motiva e
            me faz única. Desde minhas experiências até meus interesses, este
            site é um reflexo de quem eu sou. Seja parte da minha história
            enquanto embarcamos juntos nesta jornada virtual.
          </p>
          <div className="iconsContact">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TayAmorim"
            >
              <img className="icons" src={GithubIcon} alt="Icone do github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tayanna-amorim"
            >
              <img
                className="icons"
                src={LinkedinIcon}
                alt="Icone do linkedin"
              />
            </a>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <section id="motivation" className="container">
        <TitleContainer section="MOTIVAÇÃO" number="03" />
        <p className="bodyText textMotivation">
          A minha firme crença no poder transformador da tecnologia é o que me
          motiva a participar ativamente deste voluntariado. Acredito
          profundamente que a tecnologia pode ser uma ferramenta para gerar
          mudanças positivas em nossa sociedade. O projeto Menina de UX, com sua
          missão de promover a inclusão e visibilidade das mulheres na área
          tecnológica, ressoa fortemente com os meus próprios valores e
          objetivos.
          <p>
            {" "}
            É uma oportunidade única para mim, pois não apenas me permite
            contribuir para um propósito que acredito, mas também oferece um
            contexto onde posso aplicar minhas habilidades técnicas de maneira
            concreta, enquanto continuo aprimorando meu conhecimento.
          </p>
        </p>
      </section>
      <button onClick={handleClickScrollTop} className="buttonUp">
        <img
          className="btnTopPage"
          src={ArrowUpIcon}
          alt="Botão para voltar ao top da página"
        />
      </button>
    </>
  );
}

export default App;

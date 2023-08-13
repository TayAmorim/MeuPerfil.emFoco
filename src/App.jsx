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
          O propósito do projeto Menina de UX, que busca promover a inclusão de
          mais mulheres na área de tecnologia e evidenciar suas capacidades
          excepcionais em todos os campos, está perfeitamente em sintonia com o
          meu próprio propósito. Além disso, tenho convicção de que contribuir
          para esse projeto me proporcionará uma valiosa oportunidade para
          aplicar minhas habilidades técnicas no contexto profissional.
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

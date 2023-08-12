import "./App.css";
import Header from "./components/Header";
import GithubIcon from "./assets/github.png";
import LinkedinIcon from "./assets/linkedin.png";

function App() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="heroContainer">
          <h2 className="subtitle">Oi, eu sou Tayanna</h2>
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
    </>
  );
}

export default App;

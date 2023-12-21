import TitleContainer from "./TitleContainer";
import styles from "./Projects.module.css";
import Cobranca from "../assets/desafio-final.gif";
import Crowdfunding from "../assets/crowdfunding.gif";

const projectsCards = [
  {
    name: "CuboPag",
    img: Cobranca,
    description:
      "Projeto de cobranças eficiente e prático. Que tem como objetivo simplificar e automatizar o processo de gestão de cobranças para empresas de diversos setores.",
    link: "https://caixa-de-pancoda.netlify.app/login",
  },
  {
    name: "Crowdfunding product",
    img: Crowdfunding,
    description:
      "Este é um projeto de página de produto de crowdfunding, uma forma inovadora de financiamento coletivo, onde um projeto, ideia ou produto é apresentado a uma comunidade de pessoas interessadas.",
    link: "https://mastercraft-crowdfund.netlify.app/",
  },
];

function Projects() {
  return (
    <div id="projects" className="container">
      <TitleContainer section="PROJETOS" number="02" />

      <div className={styles.containerCard}>
        {projectsCards.map((project) => (
          <div key={project.name} className={styles.card}>
            <h2 className={`subtitleContainer ${styles.subtitle}`}>
              {project.name}
            </h2>

            <img
              className={styles.img}
              src={project.img}
              alt="Projeto aplicativo de cobrança"
            />
            <p className={`bodyText ${styles.text}`}>{project.description}</p>
            <a
              target="_blank"
              className={styles.link}
              href={project.link}
              rel="noreferrer"
            >
              Página Online
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

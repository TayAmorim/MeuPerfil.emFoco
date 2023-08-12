import Button from "./Button";
import styles from "./Skills.module.css";
import TitleContainer from "./TitleContainer";

function Skills() {
  const institutions = ["Origamid", "Cubos Academy", "DIO", "Rocketseat"];
  const skills = [
    "React.js",
    "Node.js",
    "CSS  Flexbox",
    "SQL",
    "JavaScript",
    "Git",
    "MUI",
    "HTML",
  ];

  return (
    <section className={`container ${styles.skills}`}>
      <TitleContainer number="02" section="HABILIDADES & CARREIRA" />
      <h2 className={`subtitleContainer ${styles.subtitle}`}>Instituições</h2>
      <div className={styles.containerGroup}>
        <div className={styles.groupButton}>
          {institutions.map((instit, index) => (
            <Button className="buttonActive" key={index}>
              {instit}
            </Button>
          ))}
        </div>
        <div className={styles.groupSkill}>
          {skills.map((skill, index) => (
            <div key={index} className={`${styles.card}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

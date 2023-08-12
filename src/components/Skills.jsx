import { useState } from "react";
import Button from "./Button";
import styles from "./Skills.module.css";
import TitleContainer from "./TitleContainer";

function Skills() {
  const [addedClass, setAddedClass] = useState(false);
  const institutions = ["Origamid", "Cubos Academy", "DIO", "Rocketseat"];
  const [skills, setSkills] = useState([
    {
      name: "React.js",
      status: false,
      institutions: "Origamid, Cubos Academy",
    },
    { name: "CSS  Flexbox", status: false, institutions: "Origamid" },
    { name: "HTML", status: false, institutions: "" },
    { name: "Git", status: false, institutions: "" },
    { name: "MUI", status: false, institutions: "" },
    { name: "HTML", status: false, institutions: "" },
    { name: "JavaScript", status: false, institutions: "" },
  ]);

  function handleClickInstitutions({ target }) {
    if (target.classList.contains("buttonActive")) {
      target.classList.remove("buttonActive");
      setAddedClass(false);
    }
    if (!addedClass) {
      target.classList.add("buttonActive");
      setSkills((state) => {
        return state.map((value) => {
          if (value.institutions.includes(target.innerText)) {
            return {
              ...value,
              status: true,
            };
          }
          return value;
        });
      });

      setAddedClass(true);
    }
  }

  return (
    <section className={`container ${styles.skills}`}>
      <TitleContainer number="02" section="HABILIDADES & CARREIRA" />
      <h2 className={`subtitleContainer ${styles.subtitle}`}>Instituições</h2>
      <div className={styles.containerGroup}>
        <div className={styles.groupButton}>
          {institutions.map((instit, index) => (
            <Button
              onClick={(e) => handleClickInstitutions(e)}
              className="buttonActive"
              key={index}
            >
              {instit}
            </Button>
          ))}
        </div>
        <div className={styles.groupSkill}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.status && "cardActive"} ${styles.card}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

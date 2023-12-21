import { useState } from "react";
import Button from "./Button";
import styles from "./Skills.module.css";
import TitleContainer from "./TitleContainer";

function Skills() {
  const [addedClass, setAddedClass] = useState(false);
  const institutions = [
    "Origamid",
    "Cubos Academy",
    "DIO",
    "Rocketseat",
    "Uninter",
    "Menina de UX",
  ];
  const [skills, setSkills] = useState([
    {
      name: "React.js",
      status: false,
      institutions: "Origamid, Cubos Academy, Rocketseat",
    },
    {
      name: "Tailwind CSS",
      status: false,
      institutions: "Menina de UX, Rocketseat",
    },
    {
      name: "PostgreSQL",
      status: false,
      institutions: "Cubos Academy",
    },
    { name: "Node.js", status: false, institutions: "Cubos Academy" },
    {
      name: "Git/Github",
      status: false,
      institutions: "Cubos Academy, Rocketseat, Menina de UX, Uninter",
    },
    {
      name: "JavaScript",
      status: false,
      institutions: "Origamid, Cubos Academy, DIO, Rocketseat, Uninter",
    },
    { name: "Express.js", status: false, institutions: "Cubos Academy" },
    { name: "TypeScript", status: false, institutions: "Origamid" },
  ]);

  function handleClickInstitutions({ target }) {
    if (target.classList.contains("buttonActive")) {
      target.classList.remove("buttonActive");
      setSkills((state) => {
        return state.map((value) => {
          if (value.institutions.includes(target.innerText)) {
            return {
              ...value,
              status: false,
            };
          }
          return value;
        });
      });
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
    <section id="abilities" className={`container ${styles.skills}`}>
      <TitleContainer number="03" section="HABILIDADES & CARREIRA" />
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

/* eslint-disable react/prop-types */
import styles from "./About.module.css";
import BarbellIcon from "../assets/ion_barbell.svg";
import DiceIcon from "../assets/dice.svg";
import CoffeeIcon from "../assets/coffee.svg";
import HomeIcon from "../assets/home.svg";
import BookIcon from "../assets/book.svg";
import Happy from "../assets/happy.svg";
import TitleContainer from "./TitleContainer";

function About() {
  return (
    <section id="about" className={`container ${styles.about}`}>
      <div className={styles.aboutInfo}>
        <TitleContainer number="01" section="SOBRE MIM" />
        <p className="bodyText">
          Sou uma “mãe” de pet, e minha jornada ganhou novas cores quando me
          redescobri na área da tecnologia durante o turbilhão que foi trabalhar
          durante a pandemia. Com um espírito curioso e uma determinação
          incansável, tenho trilhado um caminho em constante aprendizado e
          crescimento.
        </p>
        <p className="bodyText">
          Aprecio as coisas simples da vida e encontro grande alegria em
          momentos serenos, como desfrutar de uma tarde tranquila no aconchego
          do meu sofá, ao lado da minha adorável pequena família.
        </p>
      </div>
      <div className={styles.cardsInfo}>
        <div className={styles.cardContainer}>
          <h2 className={`subtitleContainer ${styles.cardTitle}`}>
            Gostos & Hobbies
          </h2>
          <div className={styles.cardHobbies}>
            <p>
              <img src={BarbellIcon} alt="Ícone de peso de academia" />
              Treinar
            </p>
            <p>
              <img src={DiceIcon} alt="Ícone  dado" />
              Jogar rpg com os amigos
            </p>
            <p>
              <img src={CoffeeIcon} alt="Ícone de xicara de cafe" />
              Experimentar bons cafés
            </p>
            <p>
              <img src={HomeIcon} alt="Ícone casa" />O conforto do meu lar
            </p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <h2 className={`subtitleContainer ${styles.cardTitle}`}>
            Curiosidades
          </h2>
          <div className={styles.cardCuriosities}>
            <p>
              <img src={BookIcon} alt="Icone de um livro aberto" />
              Já li 576 paginas em 3 dias
            </p>
            <p>
              <img src={Happy} alt="Ícone de biceclata com um traço no meio" />
              Gosto de fazer crochê para relaxar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

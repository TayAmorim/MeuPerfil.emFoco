/* eslint-disable react/prop-types */
import styles from "./About.module.css";
import Barbell from "../assets/ion_barbell.svg";
import Dice from "../assets/dice.svg";
import Coffee from "../assets/coffee.svg";
import Home from "../assets/home.svg";
import Book from "../assets/book.svg";
import Bike from "../assets/bike.svg";
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
              <img src={Barbell} alt="Ícone de peso de academia" />
              Treinar
            </p>
            <p>
              <img src={Dice} alt="Ícone  dado" />
              Jogar rpg com os amigos
            </p>
            <p>
              <img src={Coffee} alt="Ícone de xicara de cafe" />
              Experimentar bons cafés
            </p>
            <p>
              <img src={Home} alt="Ícone casa" />O conforto do meu lar
            </p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <h2 className={`subtitleContainer ${styles.cardTitle}`}>
            Curiosidades
          </h2>
          <div className={styles.cardCuriosities}>
            <p>
              <img src={Book} alt="Icone de um livro aberto" />
              Já li 576 paginas em 3 dias
            </p>
            <p>
              <img src={Bike} alt="Ícone de biceclata com um traço no meio" />
              Não sei andar de bicleta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

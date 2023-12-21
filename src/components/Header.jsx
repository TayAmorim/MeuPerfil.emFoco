import { useState } from "react";
import styles from "./Header.module.css";
import useMedia from "../Hooks/useMedia";

function Header() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className={styles.header}>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={styles.headerNav}>
        <ul
          className={`${mobile ? styles.navMobile : styles.navContainer} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <li>
            <a className={styles.navList} href="#home">
              <span className={styles.listNumber}>00</span>
              <p>HOME</p>
            </a>
          </li>
          <li>
            <a className={styles.navList} href="#about">
              <span className={styles.listNumber}>01</span>
              <p>SOBRE MIM</p>
            </a>
          </li>
          <li>
            <a className={styles.navList} href="#projects">
              <span className={styles.listNumber}>03</span>
              <p>PROJETOS</p>
            </a>
          </li>
          <li>
            <a className={styles.navList} href="#abilities">
              <span className={styles.listNumber}>04</span>
              <p>CARREIRA</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

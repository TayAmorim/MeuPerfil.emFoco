import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.line}></div>
      <nav className={styles.headerNav}>
        <ul className={styles.navContainer}>
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
            <a className={styles.navList} href="#abilities">
              <span className={styles.listNumber}>03</span>
              <p>CARREIRA</p>
            </a>
          </li>
          <li>
            <a className={styles.navList} href="#motivation">
              <span className={styles.listNumber}>04</span>
              <p>MOTIVAÇÃO</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

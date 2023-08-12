import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.line}></div>
      <nav className={styles.headerNav}>
        <ul className={styles.navContainer}>
          <li className={styles.navList}>
            <span className={styles.listNumber}>00</span>
            <p>HOME</p>
          </li>
          <li className={styles.navList}>
            <span className={styles.listNumber}>01</span>
            <p>SOBRE MIM</p>
          </li>
          <li className={styles.navList}>
            <span className={styles.listNumber}>03</span>
            <p>CARREIRA</p>
          </li>
          <li className={styles.navList}>
            <span className={styles.listNumber}>04</span>
            <p>MOTIVAÇÃO</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

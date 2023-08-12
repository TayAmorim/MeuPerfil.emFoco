import styles from "./TitleContainer.module.css";

function TitleContainer() {
  return (
    <div className="titleGroup">
      <h2 className={`subtitle ${styles.title} titleSection`}>
        <span className="numberSection">01</span>
        SOBRE MIM
      </h2>
    </div>
  );
}

export default TitleContainer;

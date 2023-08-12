/* eslint-disable react/prop-types */
import styles from "./TitleContainer.module.css";

function TitleContainer({ section }) {
  return (
    <div className="titleGroup">
      <h2 className={`subtitle ${styles.title} titleSection`}>
        <span className="numberSection">01</span>
        {section}
      </h2>
    </div>
  );
}

export default TitleContainer;

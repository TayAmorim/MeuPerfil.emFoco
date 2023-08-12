/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

function Button({ children, className }) {
  return <button className={` ${styles.button}`}>{children}</button>;
}

export default Button;

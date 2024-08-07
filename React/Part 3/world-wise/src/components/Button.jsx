/* eslint-disable no-unused-vars */
import styles from "./Button.module.css";

/* eslint-disable react/prop-types */
export default function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

import React from "react";
import styles from "./styles.module.css";
const Button = ({ onClick, children }) => {
  return (
    <div className={styles.btn} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;

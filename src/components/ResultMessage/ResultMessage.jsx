import React from "react";
import styles from "./styles.module.css";
const ResultMessage = ({ result, className }) => {
  return (
    <div>
      {result === true ? (
        <div className={`${className} ${styles.success}`}>Номер найден</div>
      ) : result === false ? (
        <div className={`${className} ${styles.fail}`}>Номер не найден</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultMessage;

import React from "react";
import styles from "./styles.module.css";
const ResultMessage = ({ result }) => {
  return (
    <div>
      {result && result !== null ? (
        <div className={styles.success}>Номер найден</div>
      ) : !result && result !== null ? (
        <div className={styles.fail}>Номер не найден</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultMessage;

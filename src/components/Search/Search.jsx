import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SYMBNUM } from "../constants/numberOfSymbols";

export const Search = ({ data, setResult, children, className }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);

  function onChange(e) {
    setResult(null);
    let val = e.target.value.toUpperCase();
    const regex = /[a-zA-Z]/gi;
    val = val.replaceAll(regex, "");
    setSearchValue(val);
    const length = val.length;

    if (data && length >= SYMBNUM) {
      setError(false);
      for (let item of data) {
        if (item.slice(0, length).includes(val.slice(0, length))) {
          setResult(true);
          return;
        }
        setResult(false);
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className={styles.root}>
      <div className={`${className} ${styles.field}`}>
        <input
          type="text"
          value={searchValue}
          name="search"
          onChange={onChange}
          id={styles.searchID}
          minLength={SYMBNUM}
          placeholder={"Введите значение"}
        />

        {error && (
          <div className={styles.error}>
            Минимальное количество символов: {SYMBNUM} шт. <br></br>
            Буквы только Кириллицей
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

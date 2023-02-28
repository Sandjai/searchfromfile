import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SYMBNUM } from "../constants/numberOfSymbols";

export const Search = ({ data, setResult }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);

  function onChange(e) {
    setResult(null);
    let val = e.target.value;

    const regex = /[a-zA-Z]/gi;

    val = val.replaceAll(regex, "");

    setSearchValue(val);

    if (data && val.length >= SYMBNUM) {
      setError(false);
      for (let item of data) {
        if (item.slice(0, SYMBNUM).includes(val.slice(0, SYMBNUM))) {
          setResult(true);
          return;
        }
        setResult(false);
      }
    } else {
      setError(true);
    }
  }

  //   function onKeyUp(e) {
  //     console.log("ну", new RegExp(e.target.value).test("^[а-яА-ЯёЁ0-9]+$"));
  //   }

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label>Поиск по ключу "name"</label>
        <input
          type="text"
          value={searchValue}
          name="search"
          onChange={onChange}
          id={styles.searchID}
          maxLength={SYMBNUM}
        />

        {error && (
          <div className={styles.error}>
            Необходимое количество символов: {SYMBNUM} шт. <br></br>
            Буквы только Кириллицей
          </div>
        )}
      </div>
    </div>
  );
};

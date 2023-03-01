import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Button from "../Button/Button";
import styles from "./styles.module.css";
export const Excel = ({ setExcelData, className }) => {
  /* Load sample data once */
  useEffect(() => {
    /* Starting CSV data -- change data here */
    const csv = `\
  This,is,a,Test
  வணக்கம்,สวัสดี,你好,가지마
  1,2,3,4`;

    /* Parse CSV into a workbook object */
    const wb = XLSX.read(csv, { type: "string" });

    /* Get the worksheet (default name "Sheet1") */
    const ws = wb.Sheets.Sheet1;

    /* Create HTML table */
    setExcelData(XLSX.utils.sheet_to_html(ws, { id: "js-excelTable" }));
  }, []);
  const hiddenFileInput = React.useRef(null);
  function onClick(e) {
    hiddenFileInput.current.click();
  }

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Import Button */}

      <div className={`${className} ${styles.root}`}>
        <input
          type="file"
          ref={hiddenFileInput}
          style={{ display: "none" }}
          onChange={async (e) => {
            /* get data as an ArrayBuffer */
            const file = e.target.files[0];
            const data = await file.arrayBuffer();

            /* parse and load first worksheet */
            const wb = XLSX.read(data);

            const ws = wb.Sheets[wb.SheetNames[0]];

            const values = [];

            for (let item of XLSX.utils.sheet_to_json(ws, {
              id: "js-excelTable",
            })) {
              //  console.log("item", item, item["Name"]);
              values.push(item["Name"]);
            }

            setExcelData(values);
            setLoaded(true);
          }}
        />
        <Button onClick={onClick}>
          {loaded ? "Загружено" : "Загрузить файл"}
        </Button>
      </div>

      {/* Show HTML preview */}
    </>
  );
};

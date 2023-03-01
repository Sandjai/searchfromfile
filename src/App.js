import { useState } from "react";
import { Excel } from "./components/Excel/Excel";
import { Search } from "./components/Search/Search";
import ResultMessage from "./components/ResultMessage/ResultMessage";
import styles from "./styles.module.css";
function App() {
  const [excelData, setExcelData] = useState([]);
  const [result, setResult] = useState(null);
  return (
    <div className={styles.app}>
      <div className={styles.root}>
        <Search data={excelData} setResult={setResult}>
          <Excel className={styles.btn} setExcelData={setExcelData} />
        </Search>
        <ResultMessage result={result} className={styles.resultMessage} />
      </div>
    </div>
  );
}

export default App;

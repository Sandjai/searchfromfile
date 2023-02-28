import { useState } from "react";
import { Excel } from "./components/Excel/Excel";
import { Search } from "./components/Search/Search";
import ResultMessage from "./components/ResultMessage/ResultMessage";

function App() {
  const [excelData, setExcelData] = useState([]);
  const [result, setResult] = useState(null);
  return (
    <div className="App">
      <Excel setExcelData={setExcelData} />
      <Search data={excelData} setResult={setResult} />
      <ResultMessage result={result} />
    </div>
  );
}

export default App;

import { useState } from "react";

import Headers from "./Components/Headers";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTranction from "./Components/AddTranction";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Headers />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranction />
      </div>
    </div>
  );
}

export default App;

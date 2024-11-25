import { useState } from "react";

import Headers from "./Components/Headers";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTranction from "./Components/AddTranction";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalProvider>
      <Headers />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranction />
      </div>
    </GlobalProvider>
  );
}

export default App;

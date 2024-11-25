import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from "./Transactions";

const TransactionList = () => {
  const { Transaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {Transaction.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

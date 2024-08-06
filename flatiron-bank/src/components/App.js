import React, { useState, useEffect } from "react";

import TransactionsTable from "./TransactionsTable";
import TransactionAdd from "./TransactionAdd";
import Search from "./Search";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((data) => {
        setTransactions(data);
      }, []);
  });

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, {...newTransaction, id: Date.now()}]);
  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container">
      <h1>BANK OF FLATIRON</h1>
      <h2>Recent Bank Transactions</h2>
      <Search searchItem={searchItem} setSearchItem={setSearchItem}/> 
      <TransactionsTable transactions={filteredTransactions} />
      <TransactionAdd addTransaction={addTransaction} />
      <p><em>Want to learn how you can budget your money?</em></p>
    </div>
  );
}

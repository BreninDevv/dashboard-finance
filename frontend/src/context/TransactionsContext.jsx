"use client";

import React, { createContext, useContext, useState } from "react";

const TransactionsContext = createContext(null);

export function TransactionsProvider({ children }) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function addTransaction(t) {
    setTransactions((prev) => [t, ...prev]);
    const amount = Number(t.amount);
    if (t.isExpense) setBalance((prev) => prev - amount);
    else setBalance((prev) => prev + amount);
  }

  function deleteTransaction(id) {
    const transaction = transactions.find((x) => x.id === id);
    if (transaction) {
      const amount = Number(transaction.amount);
      if (transaction.isExpense) setBalance((prev) => prev + amount);
      else setBalance((prev) => prev - amount);
    }
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <TransactionsContext.Provider
      value={{ balance, transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const ctx = useContext(TransactionsContext);
  if (!ctx) throw new Error("useTransactions must be used within TransactionsProvider");
  return ctx;
}

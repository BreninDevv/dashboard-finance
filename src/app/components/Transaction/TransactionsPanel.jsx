"use client";

import React from "react";
import Transactions from "./transactions";
import { useTransactions } from "../../../context/TransactionsContext";

export default function TransactionsPanel() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <div>
      <Transactions transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

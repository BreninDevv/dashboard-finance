"use client";

import React from "react";
import InputsValue from "./inputsValue";
import { useTransactions } from "../../context/TransactionsContext";

export default function BalanceCard({ Name = "Current Balance", Icon }) {
  const { balance, addTransaction } = useTransactions();

  return (
    <div>
      <InputsValue Name={Name} Icon={Icon} balance={balance} onAdd={addTransaction} />
    </div>
  );
}

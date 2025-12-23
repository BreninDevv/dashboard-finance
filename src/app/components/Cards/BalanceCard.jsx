"use client";

import { useLanguage } from "../../i18n/languageContext";
import React from "react";
import InputsValue from "./inputsValue";
import { useTransactions } from "../../../context/TransactionsContext";

export default function BalanceCard({ Icon }) {
  const { t } = useLanguage();
  const { balance, addTransaction } = useTransactions();

  return (
    <div>
      <div>
        <InputsValue
          Name={t.currentBalance}
          Icon={Icon}
          balance={balance}
          onAdd={addTransaction}
        />
      </div>
    </div>
  );
}

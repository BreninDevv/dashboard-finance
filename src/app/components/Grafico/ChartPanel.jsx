"use client";

import React, { useMemo } from "react";
import Graphic from "./graphic";
import { useTransactions } from "../../../context/TransactionsContext";
import { useLanguage } from "../../i18n/languageContext";

export default function ChartPanel({ data }) {
  const { transactions } = useTransactions();
  const { t } = useLanguage(); // ✅ aqui é o lugar certo

  const months = [
    t.months.jan,
    t.months.feb,
    t.months.mar,
    t.months.apr,
    t.months.may,
    t.months.jun,
    t.months.jul,
    t.months.aug,
    t.months.sep,
    t.months.oct,
    t.months.nov,
    t.months.dec,
  ];

  const chartData = useMemo(() => {
    if (data && Array.isArray(data)) return data;

    const totals = new Array(12).fill(0);

    transactions.forEach((tr) => {
      const idx = new Date(tr.date).getMonth();
      const signed = tr.isExpense ? -Number(tr.amount) : Number(tr.amount);
      totals[idx] += signed;
    });

    return months.map((m, i) => ({
      name: m,
      value: Math.round(totals[i]),
    }));
  }, [transactions, data, months]);

  return (
    <div>
      <Graphic data={chartData} />
    </div>
  );
}

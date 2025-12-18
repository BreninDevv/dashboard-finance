"use client";

import React, { useMemo } from "react";
import Graphic from "./graphic";
import { useTransactions } from "../../context/TransactionsContext";

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function ChartPanel({ data }) {
  const { transactions } = useTransactions();

  const chartData = useMemo(() => {
    if (data && Array.isArray(data)) return data;
    const totals = new Array(12).fill(0);
    transactions.forEach((t) => {
      const idx = new Date(t.date).getMonth();
      const signed = t.isExpense ? -Number(t.amount) : Number(t.amount);
      totals[idx] += signed;
    });
    return months.map((m, i) => ({ name: m, value: Math.round(totals[i]) }));
  }, [transactions, data]);

  return (
    <div>
      <Graphic data={chartData} />
    </div>
  );
}

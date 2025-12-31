"use client";

import React, { useMemo } from "react";
import Graphic from "./graphic";
import { useTransactions } from "../../../context/TransactionsContext";
import { useLanguage } from "../../i18n/languageContext";

export default function ChartPanel({ data }) {
  const { transactions } = useTransactions();
  const { t } = useLanguage();

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
    const totals = new Array(12).fill(0);

    transactions.forEach((tr) => {
      const dateValue = new Date(tr.date);

      if (!isNaN(dateValue.getTime())) {
        const idx = dateValue.getMonth();
        const amountValue = Number(tr.amount) || 0;
        const signed = tr.isExpense ? -amountValue : amountValue;
        totals[idx] += signed;
      }
    });

    return months.map((m, i) => ({
      name: m,
      value: Math.round(totals[i]),
    }));
  }, [transactions, months]);

  return (
    <div>
      <Graphic data={chartData} />
    </div>
  );
}

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const TransactionsContext = createContext(null);

export function TransactionsProvider({ children }) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/transactions`;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();

          const formatted = data.map((t) => ({
            id: t._id,
            description: t.title,
            amount: t.amount,
            category: t.category,
            isExpense: t.type === "expense",
            date: t.createdAt,
          }));

          setTransactions(formatted);

          const initialBalance = formatted.reduce((acc, curr) => {
            return curr.isExpense ? acc - curr.amount : acc + curr.amount;
          }, 0);
          setBalance(initialBalance);
        }
      } catch (error) {
        console.error("Erro ao carregar transações:", error);
      }
    };

    fetchTransactions();
  }, []);

  async function addTransaction(transactionData) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: transactionData.description || "Sem título",
          amount: transactionData.amount,
          type: transactionData.isExpense ? "expense" : "income",
          category: transactionData.category,
        }),
      });

      if (response.ok) {
        console.log("dasdsad");
        const saved = await response.json();

        const newT = {
          id: saved._id,
          description: saved.title,
          amount: saved.amount,
          category: saved.category,
          isExpense: saved.type === "expense",
          date: saved.createdAt || new Date().toISOString(),
        };

        setTransactions((prev) => [newT, ...prev]);
        setBalance((prev) =>
          newT.isExpense ? prev - newT.amount : prev + newT.amount
        );
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  }

  async function deleteTransaction(id) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setTransactions((prev) => prev.filter((t) => t.id !== id));

        const deleted = transactions.find((t) => t.id === id);
        if (deleted) {
          setBalance((prev) =>
            deleted.isExpense ? prev + deleted.amount : prev - deleted.amount
          );
        }
      } else {
        console.error(
          "O servidor recebeu o pedido mas negou o DELETE. Status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Erro na comunicação com o servidor:", error);
    }
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
  if (!ctx)
    throw new Error("useTransactions must be used within TransactionsProvider");
  return ctx;
}

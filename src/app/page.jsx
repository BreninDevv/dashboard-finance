"use client";

import React from "react";
import { TransactionsProvider } from "../context/TransactionsContext";
import Header from "./components/Header/header";
import SalaryIcon from "../app/components/icons/hand-coin-line.svg";
import ChartPanel from "./components/Grafico/ChartPanel";
import TransactionsPanel from "./components/Transaction/TransactionsPanel";
import BalanceCard from "./components/Cards/BalanceCard";
import IncomeCard from "./components/Cards/IncomeCard";
import ExpensesCard from "./components/Cards/ExpensesCard";
import RightColumn from "./components/DesiresAndTodo/RightColumn";

const Page = () => {
  return (
    <>
      <TransactionsProvider>
        <div className="font-inter ">
          <Header />
          <div className="px-2 flex flex-col gap-y-4 pt-20">
            <div className="hidden sm:grid grid-cols-3 gap-2">
              <BalanceCard Icon={SalaryIcon} />
              <IncomeCard />
              <ExpensesCard />
            </div>

            <div className="sm:hidden">
              <BalanceCard Icon={SalaryIcon} />
            </div>

            <ChartPanel />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <TransactionsPanel />
              <RightColumn />
            </div>
          </div>
        </div>
      </TransactionsProvider>
    </>
  );
};

export default Page;

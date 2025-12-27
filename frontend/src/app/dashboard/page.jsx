"use client";

import React from "react";
import { TransactionsProvider } from "../../context/TransactionsContext";
import Header from "../components/Header/header";
import SalaryIcon from "../../app/components/icons/hand-coin-line.svg";
import ChartPanel from "../components/Grafico/ChartPanel";
import TransactionsPanel from "../components/Transaction/TransactionsPanel";
import BalanceCard from "../components/Cards/BalanceCard";
import IncomeCard from "../components/Cards/IncomeCard";
import ExpensesCard from "../components/Cards/ExpensesCard";
import RightColumn from "../components/DesiresAndTodo/RightColumn";
import HeaderDesktop from "../components/Header/headerDesktop";

const Page = () => {
  return (
    <>
      <div className="flex justify-center xl:h-screen xl:items-center xl:overflow-hidden lg:h-screen lg:items-center lg:overflow-hidden lg:px-4">
        <div className="duration-500 dark:bg-[#151722] bg-[#e5e5ee]  xl:bg-gray-100 lg:bg-gray-100 w-400 h-200 mb-10 rounded-3xl flex flex-col xl:shadow-lg lg:shadow-lg">
          <div>
            <TransactionsProvider>
              <div className="lg:hidden">
                <Header />
              </div>

              <div className="font-inter max-w-[1600px] mx-auto flex flex-col px-4 min-h-screen">
                <div className="flex flex-col gap-y-4 pt-20 lg:pt-6">
                  <div className="hidden lg:block xl:block xl:py-2 xl:px-4 lg:py-2 lg:px-4">
                    <HeaderDesktop />
                  </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

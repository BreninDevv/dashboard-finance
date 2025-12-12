import React from "react";
import InputsValue from "./components/inputsValue";
import Header from "./components/header";
import SalaryIcon from "../app/components/icons/hand-coin-line.svg";
import EarningsIcon from "../app/components/icons/money-dollar-circle-line.svg";
import ExpensesIcon from "../app/components/icons/shopping-basket-line.svg";
import Graphic from "./components/graphic";
import Todo from "./components/todo";
import Desires from "./components/desires";

const Page = () => {
  return (
    <>
      <div className="font-inter ">
        <Header />
        <div className="px-2 flex flex-col gap-y-4">
          <div className="flex gap-2 overflow-scroll">
            <InputsValue Name={"Your salary"} Icon={SalaryIcon} />
            <InputsValue Name={"Your earnings"} Icon={EarningsIcon} />
            <InputsValue Name={"Your expenses"} Icon={ExpensesIcon} />
          </div>
          <Graphic />
          <Todo />
          <Desires />
        </div>
      </div>
    </>
  );
};

export default Page;

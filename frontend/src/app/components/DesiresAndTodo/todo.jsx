"use client";

import { useLanguage } from "../../i18n/languageContext";
import { useUserData } from "../../../context/userDataContext";
import React, { useState } from "react";
import Image from "next/image";
import ComponentTodo from "./componentTodo";
import RestaurantLogo from "../../components/icons/restaurant-line.svg";
import EditLogo from "../../components/icons/edit-box-line-white.svg";
import Compras from "../../components/icons/shopping-cart-2-line.svg";
import Lazer from "../../components/icons/football-line.svg";
import Transporte from "../../components/icons/bus-2-line.svg";
import Contas from "../../components/icons/money-dollar-box-line.svg";
import Right from "../../components/icons/checkbox-circle-line-white.svg";

const Todo = () => {
  const { t } = useLanguage();
  const { todos, addTodo, deleteTodo } = useUserData();

  const [on, setOn] = useState(false);
  const [taskType, setTaskType] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskPrice, setTaskPrice] = useState("");

  const icons = {
    Alimentação: RestaurantLogo,
    Transporte: Transporte,
    Contas: Contas,
    Compras: Compras,
    Lazer: Lazer,
  };

  function createTask() {
    if (!taskType || !taskName || !taskPrice) return;

    addTodo({
      task: taskName,
      type: taskType,
      price: Number(taskPrice),
    });

    setTaskType("");
    setTaskName("");
    setTaskPrice("");
    setOn(false);
  }

  return (
    <>
      <div className="group duration-500 bg-gradient-to-tl to-[#374b6e] from-[#204a99] dark:bg-gradient-to-bl dark:to-[#111827] dark:from-[#1f2937] border-[#577886] border backdrop-blur-xl w-full min-w-32 h-56 rounded-xl px-4 shadow-xl transition-all overflow-hidden">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-xl font-extrabold text-white">Todo List</h1>

          <button
            onClick={() => setOn(true)}
            className="cursor-pointer p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            <Image src={EditLogo} alt="Edit Logo" width={25} height={25} />
          </button>
        </div>

        <div className="flex flex-col gap-2 pb-4 bg-white/5 dark:border-white/5 rounded-2xl min-h-32 max-h-36 p-2 overflow-auto custom-scrollbar">
          {!todos || todos.length === 0 ? (
            <div className="text-center text-slate-500 flex flex-col items-center py-4">
              <Image
                src={Right}
                alt="Check logo"
                className="opacity-50"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium text-white">
                {t.noTasks}
              </span>
            </div>
          ) : (
            todos.map((task) => (
              <ComponentTodo
                key={task._id}
                id={task._id}
                type={icons[task.type] || Contas}
                name={task.task}
                price={task.price}
                nameType={task.type}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>

      {on && (
        <div
          className="fixed inset-0 bg-white/20 dark:bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all"
          onClick={() => setOn(false)}
        >
          <div
            className="bg-white/80 dark:bg-[#0B0E14]/90 backdrop-blur-2xl text-slate-900 dark:text-white w-full max-w-[340px] rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-white/10 overflow-hidden py-8 px-8 transform transition-all animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">
                  {t.newTask}
                </h2>
                <button
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors p-2 bg-black/5 dark:bg-white/5 rounded-full"
                  onClick={() => setOn(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 ml-1">
                    {t.taskType}
                  </p>
                  <select
                    className="w-full bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all appearance-none cursor-pointer font-medium text-slate-700 dark:text-slate-200"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                  >
                    <option value="" className="bg-white dark:bg-[#0B0E14]">
                      {t.select}
                    </option>
                    <option
                      value="Alimentação"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.food}
                    </option>
                    <option
                      value="Transporte"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.transport}
                    </option>
                    <option
                      value="Contas"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.accounts}
                    </option>
                    <option
                      value="Compras"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.purshases}
                    </option>
                    <option
                      value="Lazer"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.leisures}
                    </option>
                  </select>
                </div>

                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 ml-1">
                    {t.taskName}
                  </p>
                  <input
                    type="text"
                    placeholder={t.description}
                    className="w-full bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700 dark:text-white"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 ml-1">
                    {t.price}
                  </p>
                  <input
                    type="number"
                    placeholder="R$ 0,00"
                    className="w-full bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all placeholder:text-slate-400 font-bold text-slate-800 dark:text-white"
                    value={taskPrice}
                    onChange={(e) => setTaskPrice(e.target.value)}
                  />
                </div>
              </div>

              <button
                onClick={createTask}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl py-4 font-black shadow-lg shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all uppercase text-[10px] tracking-[0.15em] mt-2"
              >
                {t.create}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;

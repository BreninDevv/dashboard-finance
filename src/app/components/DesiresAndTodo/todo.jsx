"use client";

import React, { useState } from "react";
import Image from "next/image";
import ComponentTodo from "./componentTodo";
import RestaurantLogo from "../../components/icons/restaurant-line.svg";
import EditLogo from "../../components/icons/edit-box-line.svg";
import Compras from "../../components/icons/shopping-cart-2-line.svg";
import Lazer from "../../components/icons/football-line.svg";
import Transporte from "../../components/icons/bus-2-line.svg";
import Contas from "../../components/icons/money-dollar-box-line.svg";
import Right from "../../components/icons/checkbox-circle-line.svg";

const Todo = () => {
  const [on, setOn] = useState(false);

  const [taskType, setTaskType] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskPrice, setTaskPrice] = useState("");

  const [tasks, setTasks] = useState([]);

  const icons = {
    Alimentação: RestaurantLogo,
    Transporte: Transporte,
    Contas: Contas,
    Compras: Compras,
    Lazer: Lazer,
  };

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function createTask() {
    if (!taskType || !taskName || !taskPrice) return;

    const newTask = {
      id: Date.now(),
      type: icons[taskType],
      nameType: taskType,
      name: taskName,
      price: Number(taskPrice),
    };

    setTasks([...tasks, newTask]);

    setTaskType("");
    setTaskName("");
    setTaskPrice("");

    setOn(false);
  }

  return (
    <>
      <div className="dark:bg-[#202433] duration-500 bg-white min-w-32 h-56 dark:text-white overflow-hidden rounded-xl shadow-xl px-4 w-full">
        <div className="flex justify-between py-4">
          <h1 className="text-xl font-bold">Todo List</h1>

          <button onClick={() => setOn(true)} className="cursor-pointer">
            <Image src={EditLogo} alt="Edit Logo" width={22} />
          </button>
        </div>

        <div className="flex flex-col gap-2 pb-4 dark:bg-[#383e55] bg-[#e5e5ee] rounded-md min-h-32 max-h-36 p-2 overflow-auto">
          {tasks.length === 0 ? (
            <div className="text-center  text-gray-500 flex flex-col items-center py-4">
              <div>
                <Image src={Right} alt="Check logo" className="opacity-50" />
              </div>
              <div>
                <span>No tasks available...</span>
              </div>
            </div>
          ) : (
            tasks.map((t) => (
              <ComponentTodo
                key={t.id}
                id={t.id}
                type={t.type}
                name={t.name}
                price={t.price}
                nameType={t.nameType}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
      </div>

      {on && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 "
          onClick={() => setOn(false)}
        >
          <div
            className="dark:bg-[#202433] duration-500 dark:text-white  bg-white w-full max-w-[320px] h-auto rounded-xl shadow max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-4 gap-y-2">
              <div className="flex justify-between">
                <div>
                  <p>Task type</p>
                  <select
                    className="border rounded"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                  >
                    <option className="dark:bg-[#151722]" value="">
                      Select…
                    </option>
                    <option className="dark:bg-[#151722] " value="Alimentação">
                      Food
                    </option>
                    <option className="dark:bg-[#151722] " value="Transporte">
                      Transport
                    </option>
                    <option className="dark:bg-[#151722] " value="Contas">
                      Accounts
                    </option>
                    <option className="dark:bg-[#151722] " value="Compras">
                      Purchases
                    </option>
                    <option className="dark:bg-[#151722] " value="Lazer">
                      Leisure
                    </option>
                  </select>
                </div>

                <span
                  className="text-2xl cursor-pointer"
                  onClick={() => setOn(false)}
                >
                  X
                </span>
              </div>

              <div>
                <p>Task name</p>
                <input
                  type="text"
                  placeholder="Description..."
                  className="border rounded w-full"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>

              <div>
                <p>Price</p>
                <input
                  type="number"
                  className="border rounded w-full"
                  placeholder="R$120"
                  value={taskPrice}
                  onChange={(e) => setTaskPrice(e.target.value)}
                />
              </div>

              <div className="self-center py-2 rounded-md text-center w-20 h-8">
                <button onClick={createTask}>Create</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;

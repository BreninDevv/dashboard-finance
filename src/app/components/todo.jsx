"use client";

import React, { useState } from "react";
import Image from "next/image";
import ComponentTodo from "./componentTodo";
import RestaurantLogo from "../components/icons/restaurant-line.svg";
import EditLogo from "../components/icons/edit-box-line.svg";

const Todo = () => {
  const [on, setOn] = useState(false);

  const [taskType, setTaskType] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskPrice, setTaskPrice] = useState("");

  const [tasks, setTasks] = useState([]);

  function createTask() {
    if (!taskType || !taskName || !taskPrice) return;

    const newTask = {
      id: Date.now(),
      type: RestaurantLogo,
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
      <div className="bg-white min-w-32 h-50 overflow-hidden rounded-xl shadow px-4">
        <div className="flex justify-between py-4">
          <h1 className="text-xl font-bold">Todo List</h1>

          <button onClick={() => setOn(true)}>
            <Image src={EditLogo} alt="Edit Logo" width={22} />
          </button>
        </div>

        <div className="flex flex-col gap-2 pb-4 bg-[#e5e5ee] rounded-md min-h-30 max-h-30 p-2 overflow-auto">
          {tasks.map((t) => (
            <ComponentTodo
              key={t.id}
              type={t.type}
              name={t.name}
              price={t.price}
              nameType={t.nameType}
            />
          ))}
        </div>
      </div>

      {on && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOn(false)}
        >
          <div
            className="bg-white w-80 h-60 rounded-xl shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-4 gap-y-2">
              <div className="flex justify-between">
                <div>
                  <p>Tipo da tarefa</p>
                  <select
                    className="border rounded"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                  >
                    <option>Selecione…</option>
                    <option value="Alimentação">Alimentação</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Contas">Contas</option>
                    <option value="Compras">Compras</option>
                    <option value="Lazer">Lazer</option>
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
                <p>Nome da tarefa</p>
                <input
                  type="text"
                  className="border rounded w-full"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>

              <div>
                <p>Preço</p>
                <input
                  type="number"
                  className="border rounded w-full"
                  value={taskPrice}
                  onChange={(e) => setTaskPrice(e.target.value)}
                />
              </div>

              <div className="self-center py-2 rounded-md text-center w-20 h-8">
                <button onClick={createTask}>Criar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;

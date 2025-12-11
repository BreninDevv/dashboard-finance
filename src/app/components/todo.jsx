"use client";

import React, { useState } from "react";
import ComponentTodo from "./componentTodo";
import RestaurantLogo from "../components/icons/restaurant-line.svg";

const Todo = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <div className="bg-white min-w-32 h-50 overflow-hidden rounded-xl shadow p-3">
        <div className="flex justify-between">
          <h1>Todo List</h1>

          <div>
            <button onClick={() => setOn(true)}>Modal</button>
          </div>
        </div>
        <div>
          <ComponentTodo
            name={"Sorvete"}
            price={20}
            type={RestaurantLogo}
            nameType={"Restaurant Logo"}
          />
        </div>
      </div>

      {on && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOn(false)}
        >
          <div
            className="bg-white w-70 h-60 rounded-xl shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-4  gap-y-2">
              <div className="flex flex-row justify-between">
                <div>
                  <p>Tipo da tarefa</p>
                  <select className="border  rounded">
                    <option value="">Selecione…</option>
                    <option value="Alimentação">Alimentação</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Contas">Contas</option>
                    <option value="Compras">Compras</option>
                    <option value="Lazer">Lazer</option>
                  </select>
                </div>
                <div onClick={() => setOn(false)}>
                  <span className="text-2xl">X</span>
                </div>
              </div>
              <div>
                <p>Nome da tarefa</p>
                <input type="text" className="text-gray-400 border-2 rounded" />
              </div>
              <div>
                <p>Preço</p>
                <input
                  type="Number"
                  className="text-gray-400 border-2 rounded"
                />
              </div>
              <div className="self-center py-2  rounded-md text-center w-20 h-8">
                <button>Criar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import ComponentTodo from "./componentTodo";
import RestaurantLogo from "../components/icons/restaurant-line.svg";
import EditLogo from "../components/icons/edit-box-line.svg";

const Todo = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <div className="bg-white min-w-32 h-50 overflow-hidden rounded-xl shadow px-4">
        <div className="flex justify-between py-4">
          <h1 className="text-xl font-bold">Todo List</h1>

          <div>
            <button onClick={() => setOn(true)}>
              <Image src={EditLogo} alt="Edit Logo" width={22} />
            </button>
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
            className="bg-white w-72 h-60 rounded-xl shadow"
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
                  type="number"
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

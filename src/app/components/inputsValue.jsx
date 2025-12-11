"use client";

import Image from "next/image";
import React, { useState } from "react";

import SalaryEdit from "../components/icons/exchange-line.svg";

const InputsValue = ({ Name, Icon }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("145000");

  const formatted = new Intl.NumberFormat("en-US").format(value);

  return (
    <div className="bg-white min-w-30 max-w-70 h-40 rounded-3xl p-4 flex flex-col justify-between font-inter font-bold ">
      <div className="flex justify-between">
        <div>
          <Image src={Icon} alt="Salary Icon" width={25} height={25} />
        </div>
        <div onClick={() => setEditing(!editing)}>
          <Image
            src={SalaryEdit}
            alt="Salary Edit"
            width={25}
            height={25}
            className="opacity-45 z-0"
          />
        </div>
      </div>
      <div>
        {editing ? (
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        ) : (
          <h2 className="text-xl font-bold">${formatted}</h2>
        )}
      </div>

      <p className="text-xl text-zinc-500">{Name}</p>
    </div>
  );
};

export default InputsValue;

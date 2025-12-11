import Image from "next/image";
import React from "react";

const ComponentTodo = ({ type, name, price, nameType }) => {
  return (
    <>
      <div className="bg-[#e5e5ee] shadow w-full h-15 rounded-md flex justify-between items-center">
        <div className="flex">
          <div>
            <Image src={type} alt={nameType} />
          </div>
          <div>
            <h1>{name}</h1>
          </div>
        </div>

        <div>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default ComponentTodo;

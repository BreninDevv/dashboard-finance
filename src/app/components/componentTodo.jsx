import Image from "next/image";
import React from "react";

const ComponentTodo = ({ type, name, price, nameType }) => {
  return (
    <>
      <div className="bg-white  w-full min-h-10 rounded-md flex justify-between items-center px-2">
        <div className="flex gap-2">
          <div>
            <Image src={type} alt={nameType} />
          </div>
          <div>
            <h1>{name}</h1>
          </div>
        </div>

        <div>
          <p>R${price}</p>
        </div>
      </div>
    </>
  );
};

export default ComponentTodo;

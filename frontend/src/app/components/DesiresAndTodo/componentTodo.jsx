"use client";

import Image from "next/image";
import Trash from "../../components/icons/delete-bin-6-line.svg";

const ComponentTodo = ({ id, type, name, price, nameType, onDelete }) => {
  return (
    <div className="group flex items-center justify-between bg-[#161B22]/40 hover:bg-[#20243c] p-3 rounded-xl border border-white/5 shadow-sm transition-all duration-300 gap-3 w-full">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-8 rounded-lg bg-white/5">
          {type ? (
            <Image
              src={type}
              alt="Icon"
              width={18}
              height={18}
              className="opacity-80"
            />
          ) : (
            <div className="w-[18px] h-[18px] bg-white/5 rounded-full" />
          )}
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <p className="font-bold text-slate-100 text-sm leading-tight truncate">
            {name}
          </p>
          <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider truncate">
            {nameType}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <p className="font-black text-white text-sm whitespace-nowrap">
          R$ {price}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete && onDelete(id);
          }}
          className="p-2 rounded-lg hover:bg-red-500/10 transition-all group/btn"
        >
          <Image
            src={Trash}
            alt="Delete"
            width={16}
            height={16}
            className="opacity-20 group-hover/btn:opacity-100 transition-opacity"
          />
        </button>
      </div>
    </div>
  );
};

export default ComponentTodo;

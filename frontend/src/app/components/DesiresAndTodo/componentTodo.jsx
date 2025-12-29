import Image from "next/image";
import Trash from "../../components/icons/delete-bin-6-line.svg";

const ComponentTodo = ({ id, type, name, price, nameType, onDelete }) => {
  return (
    <div className="group flex justify-between items-center bg-[#161B22]/40 hover:bg-[#20243c] p-3 rounded-xl border border-white/5 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          <Image
            src={type}
            alt="Icon"
            width={18}
            height={18}
            className="opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="flex flex-col min-w-0">
          <p className="font-bold text-slate-100 text-sm leading-tight truncate">
            {name}
          </p>
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.1em] mt-1">
            {nameType}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-black text-white text-sm tracking-tight">
          R$ {price}
        </p>

        <button
          onClick={() => onDelete(id)}
          className="p-2 rounded-lg hover:bg-red-500/10 group/trash transition-all"
        >
          <Image
            src={Trash}
            alt="Trash"
            width={16}
            className="opacity-20 group-hover/trash:opacity-100 transition-opacity"
          />
        </button>
      </div>
    </div>
  );
};

export default ComponentTodo;

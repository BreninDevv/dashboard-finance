import Image from "next/image";
import Trash from "../../components/icons/delete-bin-6-line.svg";

const ComponentTodo = ({ id, type, name, price, nameType, onDelete }) => {
  return (
    <div className="flex justify-between items-center dark:bg-[#292d3d]  bg-white p-2 rounded shadow">
      <div className="flex items-center gap-2">
        <Image src={type} alt="Icon" width={22} height={22} />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm dark:text-white text-gray-600">{nameType}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p>R$ {price}</p>

        <button onClick={() => onDelete(id)}>
          <Image src={Trash} alt="Trash" width={20} className="opacity-50" />
        </button>
      </div>
    </div>
  );
};

export default ComponentTodo;

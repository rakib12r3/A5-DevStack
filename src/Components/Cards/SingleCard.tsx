import { CiStar } from "react-icons/ci";
import type { Icards } from "../../Type/type";

export interface SingleCardProps {
  singleCard: Icards
  stack:Icards[]

  handleAddToStack: (card: Icards) => void;
  
}

export default function SingleCard({
  singleCard,
  handleAddToStack,
  stack
}: SingleCardProps) {

  const isAdded =
  stack.filter(
    (item) => item.name === singleCard.name
  ).length > 0;

  return (
    <div>
      <div className={`p-3 rounded-2xl shadow-sm ${isAdded ? "border border-green-500 shadow-sky-500":""}`}>

        <div className="flex justify-between">

          <img
            src={singleCard.icon}
            alt=""
            className="h-[30px] w-[30px]"
          />

          <span
            className={`flex items-center justify-center rounded-[18px] w-[85px] h-[22px] text-center text-xs ${
              singleCard.badge === "Popular"
                ? "bg-blue-50 text-blue-500"
                : singleCard.badge === "Fast"
                ? "bg-orange-50 text-orange-500"
                : "bg-green-50 text-green-600"
            }`}
          >
            {singleCard.badge}
          </span>

        </div>


        <h3 className="font-bold text-[18px] my-4">
          {singleCard.name}
        </h3>


        <p className="text-[#64748B] text-sm">
          {singleCard.description}
        </p>


        <div className="divider" />


        <div className="flex justify-between items-center">

          <span className="flex items-center justify-center rounded-[25px] w-[80px] h-[20px] text-center text-xs bg-gray-100 text-[#475569]">
            {singleCard.category}
          </span>

          <p className="text-[#64748B] text-xs">
            {singleCard.difficulty}
          </p>

          <span className="flex items-center">
            <CiStar />
            <p>{singleCard.rating}</p>
          </span>

        </div>


      

        <button
          onClick={() => handleAddToStack(singleCard)} 
          className={`flex justify-center w-full rounded-[8px] cursor-pointer text-white py-1.5 mt-3 ${isAdded ? "bg-green-300" : "bg-black"}`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
}
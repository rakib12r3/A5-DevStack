import { CiStar } from "react-icons/ci"
import type { Icards } from "../../Type/type"

export interface SingleCardProps {
  singleCard: Icards
}

export default function SingleCard({ singleCard }: SingleCardProps) {

  return (
    <div className="flex justify-between ">
      {/* card */}
      <div className="p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between">
          <img src={singleCard.icon} alt="" className="h-[30px] w-[30px]" />
          <span className={`flex items-center justify-center rounded-[18px] w-[85px] h-[22px] text-center text-xs ${singleCard.badge === "Popular"
            ? "bg-blue-50 text-blue-500"
            : singleCard.badge === "Fast"
              ? "bg-orange-50 text-orange-500"
              : "bg-green-50 text-green-600"
            }`}>{singleCard.badge}</span>

        </div>
        <h3 className="font-bold text-[18px] my-4">{singleCard.name}</h3>
        <p className="text-[#64748B] text-sm">{singleCard.description}</p>

        <div className="divider" />

        <div className="flex justify-between items-center">
          <p><span className="flex items-center justify-center rounded-[25px] w-[80px] h-[20px] text-center text-xs bg-gray-100 text-[#475569] ">{singleCard.category}</span></p>
          <p className="text-[#64748B] text-xs">{singleCard.difficulty}</p>
          <span className="flex items-center">
            <CiStar/> 
            <p>{singleCard.rating}</p>
          </span>
        </div>
        <div className="flex justify-center bg-black rounded-[8px] text-white py-1.5 mt-7">
          <button>Add To Stack</button>
        </div>
      </div>
    </div>
  )
}
import { use, useState } from "react";
import type { Icards } from "../../Type/type";
import SingleCard from "./SingleCard";
import { ImCross } from "react-icons/im";
import { Bounce, toast } from "react-toastify";

export interface CardsProps {
  CardsPromise: Promise<Icards[]>;
}

const Cards = ({ CardsPromise }: CardsProps) => {
  const allCards = use(CardsPromise);

  const [stack, setStack] = useState<Icards[]>([]);

  const handleAddToStack = (card: Icards) => {
    const alreadyAdded = stack.filter(
      (item) => item.name === card.name
    );

    if (alreadyAdded.length > 0) {
    //  toast.warning(`${card.name} is already in your stack!`);
    toast.warn(`${card.name} is already in your stack!`, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
      return;
    }
   const newStack = [...stack, card]
    setStack(newStack);
    toast.success('Added to Stack', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

  };

  const handleRemove = (card: Icards) => {
    setStack((prevStack) =>
      prevStack.filter((item) => item.name !== card.name)
    );
    toast.info(`${card.name} removed from stack!`, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from stack!", {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    
  };

  return (
    // <div className="container mx-auto flex gap-6">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6">


      {/* <div className="grid grid-cols-3 gap-4 flex-1"> */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">

        {allCards.map((singleCard) => (
          <SingleCard
            key={singleCard.name}
            singleCard={singleCard}
            handleAddToStack={handleAddToStack} 
            stack={stack}
          />
        ))}

      </div>


      <div className="w-[250px] shrink-0 sticky top-20 h-fit">

        <div className="p-5 rounded-2xl shadow-sm border">

          <h2 className="font-bold text-lg">
            Your Stack
          </h2>

          <p className="text-sm text-gray-400 mb-4">{stack.length === 0 ? 'No technology selected yet': `${stack.length} Technology Selected`}
            
          </p>


          {stack.length === 0 ? (

            <div className="h-[80px] border border border-slate-200 rounded-xl flex items-center justify-center">
              <p className="text-sm text-gray-300">
                Your stack is empty.
              </p>
            </div>

          ) :


            <div className="space-y-2">

              {stack.map((card) => (

                <div
                  key={card.name}
                  className="flex items-center justify-between border rounded-lg p-3"
                >

                  <div className="flex items-center gap-2">

                    <img
                      src={card.icon}
                      alt=''
                      className="w-7 h-7"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        {card.name}
                      </p>

                      <p className="text-[10px] text-gray-400">
                        {card.category}
                      </p>
                    </div>

                  </div>




                  <button
                    onClick={() => handleRemove(card)}
                    className="text-gray-400 text-xl cursor-pointer"
                  >
                    <ImCross />
                  </button>

                </div>

              ))}

            </div>}




          <button
            onClick={handleRemoveAll}
            className="w-full border border-red-300 text-red-500 rounded-lg py-2 mt-10 cursor-pointer"
          >
            Remove All
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cards;
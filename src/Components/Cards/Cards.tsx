import { use, useState } from "react";
import type { Icards } from "../../Type/type";
import SingleCard from "./SingleCard";
import { ImCross } from "react-icons/im";

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
      return;
    }

    setStack((prevStack) => [...prevStack, card]);
  };

  const handleRemove = (card: Icards) => {
    setStack((prevStack) =>
      prevStack.filter((item) => item.name !== card.name)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="container mx-auto flex gap-6">

      
      <div className="grid grid-cols-3 gap-4 flex-1">

        {allCards.map((singleCard) => (
          <SingleCard
            key={singleCard.name}
            singleCard={singleCard}
            handleAddToStack={handleAddToStack}
          />
        ))}

      </div>


      <div className="w-[250px] shrink-0 sticky top-20 h-fit">

        <div className="p-5 rounded-2xl shadow-sm border">

          <h2 className="font-bold text-lg">
            Your Stack
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            {stack.length} Technology Selected
          </p>




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

          </div>


       

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
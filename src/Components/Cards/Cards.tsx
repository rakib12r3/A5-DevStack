import { use } from "react";
import type { Icards } from "../../Type/type";
import SingleCard from "./SingleCard";

export interface CardsProps {
  CardsPromise: Promise<Icards[]>
}

const Cards = ({ CardsPromise }: CardsProps) => {

  const allCards = use(CardsPromise)
  console.log(allCards);
  
  
  return (
    <>
    <div className="flex container mx-auto">
<div className="grid grid-cols-3 gap-3 mx-auto mt-30px">
  {allCards.map((singleCard,index) => <SingleCard key={index} singleCard={singleCard}/>)}
</div>

<div></div>

</div>
</>

  )
}

export default Cards;
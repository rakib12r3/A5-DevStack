import { Suspense, useState } from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import type { Icards } from "./Type/type"
import Cards from "./Components/Cards/Cards"

const CardFetch = async():Promise<Icards[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {

  const [CardsPromise] = useState(()=>CardFetch()) 

  return (
    <>
      <Nav/>
      <Banner/>

      <Suspense fallback={<p>Processing...</p>}>
          <Cards CardsPromise={CardsPromise}/>
      </Suspense>
     
    </>
  )
}

export default App

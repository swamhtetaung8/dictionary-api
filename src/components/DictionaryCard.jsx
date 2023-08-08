import { useState } from "react"
import Header from "./Header"
import Result from "./Result"
import SearchForm from "./SearchForm"

const DictionaryCard = () => {
  const [currentWord,setCurrentWord] = useState("");
    console.log(currentWord)
  return (
    <div className="w-full lg:w-1/2 md:w-2/3">
      <Header/>
      <SearchForm setCurrentWord={setCurrentWord}/>
      <Result currentWord={currentWord}/>
    </div>
  )
}

export default DictionaryCard

import { useEffect, useState } from "react"
import {AiFillPlayCircle,AiOutlineLoading} from "react-icons/ai"
import {FiExternalLink} from "react-icons/fi"
const Result = ({currentWord}) => {
  const [audio,setAudio] = useState();
  useEffect(()=>{
    setAudio(new Audio(currentWord[0]?.phonetics?.find(el=>el.audio!=="").audio))
  },[currentWord])
  return (
    <>
    {currentWord ? (
      <div>
      <div className="flex items-center justify-between">
        <div className="my-5 space-y-5">
          <h1 className="text-5xl font-bold">{currentWord[0]?.word}</h1>
          <p className="text-[#9D4DDA] text-lg">{currentWord[0]?.phonetic}</p>
        </div>
        <button onClick={()=>audio.play()} className=""><AiFillPlayCircle className="text-6xl text-[#EAD1FA]"/></button>
      </div>
      {currentWord[0]?.meanings?.map(meaning => (
        <div key={meaning.partOfSpeech} className="mb-10">
          <div  className="flex items-center gap-3 mb-5">
          <p className="font-semibold ">{meaning?.partOfSpeech}</p>
          <hr className="w-full text-black bg-black"/>
          </div>
          <p className="text-gray-500 ">Meaning</p>
          <ul className="my-3 space-y-2 list-disc list-inside">
          {
            meaning.definitions.map(definition => (
              <li key={definition.definition}>{definition.definition}</li>
            ))
          }
          </ul>
          {meaning.synonyms.length !== 0 && (
            <>
              <div className="flex items-start gap-5 mt-10">
                <p className="text-gray-500 ">Synonyms </p>
                <p className="divide-x-2 divide-double divide-[#9D4DDA]">{meaning?.synonyms.map(synonym => (
                  <span key={synonym} className="text-[#9D4DDA] font-bold px-2"> {synonym}</span>
                ))}</p> 
              </div>
            </>
          )}
          
          
        </div>
      ))}
      <hr />
      {
        currentWord[0]?.sourceUrls?.map(source=>(
          <p key={source} className="mt-5 text-gray-500">Source <a className="ml-5 text-black underline" target="_blank" href={source}>{source}<FiExternalLink className="inline ml-3"/></a></p>
        ))
      }
    </div>
    ):(
      <AiOutlineLoading className="block mx-auto mt-16 text-6xl animate-spin"/>
    )}
    </>
  )
}

export default Result

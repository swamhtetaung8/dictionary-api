import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {CiSearch} from "react-icons/ci";

const SearchForm = ({setCurrentWord}) => {
  const [userSearch,setUserSearch] = useState("keyboard");
  const searchBtn = useRef();
  const handleSearch = async(e) =>{
    e.preventDefault();
    const {data} = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userSearch}`);
    setCurrentWord(data);
  }

  useEffect(()=>{
    searchBtn.current.click()
  },[])

  return (
    <div>
       <div className="mx-auto my-12 ">
            <form onSubmit={handleSearch} className="flex items-center text-black bg-[#F5F5F5] border rounded-md pe-4">
                <input 
                    type="text"
                    value={userSearch}
                    onChange={e=>setUserSearch(e.target.value)}
                    className="w-full p-2.5 ml-2 bg-transparent outline-none"
                />
                <button ref={searchBtn} ><CiSearch className=" text-[#9D4DDA] text-2xl"/></button>
            </form>
        </div>
    </div>
  )
}

export default SearchForm

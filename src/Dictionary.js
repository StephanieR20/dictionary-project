import React, {useState} from "react";
import "./Dictionary.css"


export default function Dictionary(){

    let [keyWord, setKeyword] = useState("");

  function Search(event){
      event.preventDefault();
      alert(`Searching for ${keyWord} definition`)

  }

  function handleKeywordChange(event){
      setKeyword(event.target.value);

  }
    return(
        <div className="Dictionary">
          <form onSubmit={Search}>
              <input type="Search" onChange={handleKeywordChange}/>
             </form>
        </div>
    );
}
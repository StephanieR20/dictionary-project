import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props){

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos]= useState (null);


    function handleDictionaryResponse(response){
      console.log(response.data[0]);

      setResults(response.data[0]);
    }

    function handlePexelsResponse(response){

      setPhotos(response.data.photos)
    }
    function search(){
       let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
      axios.get(apiUrl).then(handleDictionaryResponse);

      const pexelsApiKey="563492ad6f91700001000001046bbd5a65da4a8bb86f4e59fe8edc07";

      const pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`

      const headers = { Authorization : `Bearer ${pexelsApiKey}`} 
      axios.get(pexelsApiUrl, {headers: headers} ).then(handlePexelsResponse);
    }

  function handleSubmit(event){
      event.preventDefault();
      search();
  }

  function handleKeywordChange(event){
      setKeyword(event.target.value);

  }
  function load(){
    setLoaded(true);
    search();
  }

  if (loaded) {
     return(
        <div className="Dictionary">
         <section> 
          <h1>What word do you want to look up?</h1>
          <form className="search-form" onSubmit={handleSubmit}>
              <input placeholder="Search for a word" type="Search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
             </form> 
             <div className="hint">
               words you have search: verb, twilight, semidarkness, npm, animation....
             </div>
             </section>
             <Results results={results}/>
            <Photos photos={photos}/>
        </div>
    );
     }else{
    load();
    return "Loading...";
     }
    }
  

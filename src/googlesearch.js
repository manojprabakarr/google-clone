import React,{useState,useEffect} from 'react';
import API_KEY from './key'


const CONTEXT_KEY = "def91196f26be1b0b";

const GoogleSearch = (term) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.log(result);
          })
          .catch((err) => console.log(err.message));
      };
  
      fetchData();
    }, [term]);
  
    return { data };
  };
  
  export default GoogleSearch;
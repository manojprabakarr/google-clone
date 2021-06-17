import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../Stateprovider';
import {actionTypes} from '../reducer'



function Search({ hideButtons = false }) {
  const[{},dispatch]=useStateValue()
  const history = useHistory();
  const[input,setinput]=useState("")
  



  const Searchengine =(e)=> {
    e.preventDefault();
    console.log(input)

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    
    history.push("/search")

  }

  return (
    <form className="flex flex-col items-center   w-4/5">
         <div  className="flex w-full hover:shadow-lg mt-5 focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        
            <SearchIcon  className="h-5 mr-3 text-gray-500" />
            <input  className="focus:outline-white "           
             type ="text"
             value={input}
             onChange={(e)=>setinput(e.target.value)}/>

        </div>

        {hideButtons ? (
          <div>
            
           
          </div>
               
          
           ):(   
            <div className="flex flex-col justify-center mt-10 sm:space-y-0 sm:flex-row sm:space-x-4">   
              <button className=" btn" type="submit"  onClick={Searchengine}  >
               Google Search
              </button>
             <button className="btn" type="submit"  onClick={Searchengine}  >
             I'm feeling lucky
            </button>
           </div>)}
      
    </form>
  );
}

export default Search;

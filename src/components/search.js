import React from 'react';
import SearchIcon from '@material-ui/icons/Search';



function search({ hideButtons = false }) {
  return (
    <form className="flex flex-col items-center   w-4/5">
         <div  className="flex w-full hover:shadow-lg mt-5 focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        
            <SearchIcon  className="h-5 mr-3 text-gray-500" />
            <input  className="focus:outline-white "           
             type ="text"/>

        </div>

        {hideButtons ? (
          <div>
           
          </div>
               
          
           ):(   
            <div className="flex flex-col justify-center mt-10 sm:space-y-0 sm:flex-row sm:space-x-4">   
              <button className=" btn"  >
               Google Search
              </button>
             <button className="btn" >
             I'm feeling lucky
            </button>
           </div>)}
      
    </form>
  );
}

export default search;

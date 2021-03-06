import React from 'react';
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from '@material-ui/core'
import Search from './search'
import {Link} from 'react-router-dom'



function Home() {
  return (
    <div className="flex flex-col h-screen">
     
        <header className="flex w-full p-5 justify-end  text-base font-light">
          <div className="flex space-x-4 items-center">
          <Link  to="/Images">Images</Link>
          <Link   to="/email">Gmail</Link>
          <AppsIcon />
          <Avatar />


          </div>

         </header>


         <div className="flex flex-col items-center mt-36 " >

           <img 
           src="https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-cricket-2017-6753651837108767-2xa.gif" 
           alt=""
           width="300px"
           height="100px"/>


           <Search/>
          

          
         </div>


         <footer className="flex w-full bg-gray-100  justify-between fixed bottom-0  md:flex-col">
           <div className="flex space-x-4 items-center  ">
             <Link to="/about">About</Link>
             <Link to="/ad">Advertising</Link>
             <Link to="/business">Business</Link>

           </div>

           <div className="flex justify-end  space-x-4 items-center">
           <Link to="/privacy">Privacy</Link>
             <Link to="/terms">Terms</Link>
             <Link to="/settings">Settings</Link>

           </div>


         </footer>
        
        

      
       
         
           
       
      
  </div>
  );
}

export default Home;

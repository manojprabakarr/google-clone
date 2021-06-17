import React from 'react';
import Search from './search'
import {Avatar} from '@material-ui/core'
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Link} from 'react-router-dom'
import Googlesearch from '../googlesearch'
import {useStateValue} from '../Stateprovider'
//import  Response from '../response'


function Searchpage() {
  const[{term},dispatch]=useStateValue();

  //live api call
  const {data} =Googlesearch(term);

  //const data =  Response;
  console.log(data);
  return (
    <div className="">


      <div className="flex  justify-between mr-4 ml-5 items-center sticky">
       
       <Link to="/">
        <img 
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt=""
        width="100px"
        height="100px"
        style={{objectFit:"contain",marginTop:"18px"}}/></Link>

        <div className="flex-1 items-center">
          <Search hideButtons/>

        </div>

        <div className="flex items-center justify-end space-x-4">
        
         <AppsIcon/>
         <Avatar/>


        </div>

      </div>
      
      <div className="flex justify-between items-center mt-8 ml-80 text-gray-500  text-base font-lights ">

       
        <div className="flex space-x-4">
        <div className="no-underline">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="no-underline">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="no-underline">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="no-underline">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="no-underline">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="no-underline">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>


        </div>

        <div className=" flex flex-1 ml-12 space-x-4">
          <div>
            <Link to="/settings">Settings</Link>
          </div>

          <div>
            <Link to="/tools">Tools</Link>
          </div>

        </div>


      </div>
        <hr className="bg-gray-400"/>

        {true && (
      <div  className="mt-4 ml-20   w-screen">
        <p  style={{color:"grey"}}className="text-base"> About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}s) for tesla </p>

            {data?.items.map((item) => (
        <div key={item.cacheId} className="w-screen m-36">
          <a  className="text-indigo-900 underline" href={item.link}>{item.displayLink}</a>
          <a className="font-medium   text-indigo-600 underline"  href={item.link}>
                <h2 className=" text-lg no-underline">{item.title}</h2>
              </a >


              <p className="text-base">{item.snippet}</p>

        </div>
            ))}


      </div>

        )}
      
    </div>
  );
}

export default Searchpage;

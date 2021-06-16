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

function Searchpage() {
  return (
    <div className="">


      <div className="flex  justify-between mr-4 ml-5 items-center sticky">

        <img 
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt=""
        width="100px"
        height="100px"
        style={{objectFit:"contain",marginTop:"18px"}}/>

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
                <a href="/all">All</a>
              </div>
              <div className="no-underline">
                <DescriptionIcon />
                <a href="/news">News</a>
              </div>
              <div className="no-underline">
                <ImageIcon />
                <a href="/images">Images</a>
              </div>
              <div className="no-underline">
                <LocalOfferIcon />
                <a href="/shopping">Shopping</a>
              </div>
              <div className="no-underline">
                <RoomIcon />
                <a href="/maps">maps</a>
              </div>
              <div className="no-underline">
                <MoreVertIcon />
                <a href="/more">more</a>
              </div>


        </div>

        <div className=" flex flex-1 ml-12 space-x-4">
          <div>
            <a href="/settings">Settings</a>
          </div>

          <div>
            <a href="/tools">Tools</a>
          </div>

        </div>


      </div>
        <hr className="bg-gray-400"/>


      <div  className="mt-8 ml-20 mb-20  max-w-screen-sm">
        <p style={{color:"#70757a"}}className="text-base"> </p>


        <div className="m-40">
          <a href="/">link</a>
          <a className="font-medium mt-2 mb-4 no-underline" href="item.link">
                <h2 className="font-medium mt-2 mb-4 no-underline"></h2>
              </a>


              <p className=""></p>

        </div>



      </div>

      
      
    </div>
  );
}

export default Searchpage;

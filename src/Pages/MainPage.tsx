import React, { useState } from "react";
import Scrollbar from "../Components/Scrollbar";
import PageContent from "../Components/PageContent";
import "../App.css";
import { observer } from "mobx-react";
import contentStore from "../Helpers/contentStore";
import { DarkModeToggle } from "../Components/DarkModeToggle";
import { ZoomToggle } from "../Components/ZoomToggle";

import {
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const MainPage = () => {
  const [mode, setMode] = useState(false);
  return (
    <div className="App " data-theme={mode ? "dark" : "light"}>
      <div className=" fixed-header flex justify-around items-center sticky w-full top-0 relative">
        <div className="flex ">
          <h1 style={{color:"var(--title)"}} className="font-bold  items-center header-title">
            Home Gym Essentials
          </h1>
          <div>
            <img
              className=""
              src="https://static.thenounproject.com/png/4630576-200.png"
              width={40}
            />
          </div>
        </div>

        <div className="flex items-center toggle-buttons w-52 justify-around absolute right-36  rounded-lg">
          <DarkModeToggle cb={()=>setMode(!mode)} />

          <ZoomToggle  cb={()=>contentStore.setZoomOn(!contentStore.zoomOn)}/>

         
        </div>
      </div>

      <div className="flex relative">
        <Scrollbar />
        <PageContent />
      </div>
      <div className="h-[50px] flex footer justify-center items-center  relative">
        <span className="font-light text-base" style={{color:"var(--primary-text-colour)"}} >Published by Abraham</span>
        <div className="social-media-links absolute right-[50px]">
          <a style={{ color: "var(--social-icon)" }}>
            <Instagram className="mr-8" fontSize="large" />
          </a>
          <a style={{ color: "var(--social-icon)" }}>
            <Twitter className="mr-8" fontSize="large" />
          </a>
          <a style={{ color: "var(--social-icon)" }}>
            <YouTube className="mr-8" fontSize="large" />
          </a>
          <a style={{ color: "var(--social-icon)" }}>
            <LinkedIn className="mr-8" fontSize="large" />
          </a>
          <a style={{ color: "var(--social-icon)" }}>
            <GitHub className="" fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default observer(MainPage);

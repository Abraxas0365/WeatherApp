import React, { useState } from "react";
import Datetime from "./datetimecard";

const Header = () => {

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <div className="mt-4 p-4 bg-[#0f0f0f]/30 rounded-lg backdrop-blur-sm w-screen">
          <h1 className="text-[clamp(2rem,2vw,3rem)] font-bold animate-pulse drop-shadow-2xl text-slate-100 text-center md:text-left">
            Weather Thingy
          </h1>
        </div>
        <div className="mt-4 md:w-1/5 flex justify-center">
          <Datetime />
        </div>
      </div>

      
    </>
  );
};

export default Header;

import React, { useEffect, useState } from "react";

const Background = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#3d3d3d] via-[#277353] to-[#354549] text-white flex items-start justify-start">
        <div>
          <h1 className="text-6xl font-bold animate-pulse drop-shadow-2xl">
            Ay Weather?
          </h1>
        </div>
      </div>
    </>
  );
};

export default Background;

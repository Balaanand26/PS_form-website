import React from "react";
import hvideo from "/videos/hero.mp4";

const Header = () => {
  return (
    <>
      <div className="bg-blue-800 text-white text-center p-4 font-semibold text-sm md:text-base">
        <p>
          Explore the latest discounts and seasonal sales on great games and
          add-ons for PS5 and PS4. Play has No Limits
        </p>
      </div>
      <div className="relative w-full h-screen overflow-hidden shadow-xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={hvideo} type="video/mp4" />
        </video>
        <div className="relative Z-10 text-white flex gap-5 items-center justify-end mt-28 mr-8  md:mt-24 md:mr-24 animate-fade-in">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl ">SUMMER</h1>
            <h1 className="font-bold text-5xl md:text-7xl mb-4 ">SALES</h1>
            <p className="text-gray-200 text-sm md:text-base">
              Great games, big savings! Shop a huge range of discounts on
            </p>
            <p className="text-gray-200 text-sm md:text-base">
              digital games and add-ons at PlayStation Store
            </p>
            <button className="px-6 py-2 bg-transparent border-2 border-blue-700 rounded-full mt-4 cursor-pointer hover:bg-blue-800 text-sm md:text-base">
              See the deals
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

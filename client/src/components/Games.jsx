import React from "react";
import god from "../assets/images/god.jpeg";
import ds2 from "../assets/images/ds2.jpeg";
import gta from "../assets/images/gta.jpg";
import bl from "../assets/images/bl.jpeg";
import re from "../assets/images/re.jpg"

const gameData = [
  {
    image: ds2,
    title: "In Death Stranding 2: On The Beach",
    desc: `Sam embarks on a new journey, traversing a world beset by otherworldly enemies and challenging landscapes, to connect a fractured society and save humanity from extinction, questioning whether connection is truly a desirable path.`,
  },
  {
    image: gta,
    title: "Grand Theft Auto VI",
    desc: `Jason Duval, who worked for local drugrunners in the Leonida Keys after serving in the Army; and Lucia Caminos, the series's first non-optional female protagonist, who was imprisoned at Leonida Penitentiary after fighting for her family from Liberty City.`,
  },
  {
    image: bl,
    title: "borderlands 4",
    desc: `Vault Hunters journey to the planet Kairos, six years after Elpis's arrival, to confront the oppressive dictator, the Timekeeper, and his Order, while searching for alien treasures amidst chaos and civil uprisings`,
  },
  {
    image: re,
    title: "Resident Evil Requiem",
    desc: `centers around FBI technical analyst Grace Ashcroft, who investigates a series of mysterious deaths at the Wrenwood Hotel, the same location where her mother died eight years prior.The game explores the aftermath of the Raccoon City outbreak, 30 years after the events of Resident Evil 3">
`,
  },
  
];

const Games = () => {
  return (
    <section className="bg-gray-900 mt-4 py-4">
      <div className="  text-center text-white py-10">
        <p className="font-bold text-3xl mb-2">Pre-order and Wishlist Upcoming PS5 Games</p>
        <p className="font-semibold text-2xl text-blue-500">Play has No Limits</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-4 py-5">
        {gameData.map((game, index) => (
          <div key={index} className="bg-blue-700 rounded-2xl p-4 min-w-80 ">
            <img src={game.image} alt="" className="rounded-2xl w-full " />
            <p className="font-bold text-xl text-white mt-3">{game.title}</p>
            <p className="text-white text-sm mt-2 mb-4">{game.desc}</p>
            <div className="flex space-x-4">
              <button className="text-white px-3 py-1 border-2 border-white rounded-full hover:bg-white hover:text-blue-800">
                Find out more
              </button>
              <button className="text-blue-800 bg-white px-3 py-1 border-2 border-blue-800 rounded-full hover:bg-transparent hover:text-white hover:border-white">
                Pre-Order
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-5">
        <button className="text-white font-semibold text-lg border-2 py-1 px-6 rounded-full hover:bg-white hover:text-blue-800">See more</button>
      </div>
    </section>
  );
};

export default Games;

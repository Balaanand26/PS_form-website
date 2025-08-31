import React, { useRef } from "react";
import b1 from "../assets/images/b1.jpg";
import bg from "../assets/images/bg.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const bannerData = [
  {
    image: b1,
    title: "PlayStation Plus Essential",
    desc: "New games to play each month, online multiplayer, and more benefits available with all plans.",
  },
  {
    image: b2,
    title: "PlayStation Plus Extra",
    desc: "Download and play hundreds of PS5 and PS4 games from the Game Catalogue, on top of all benefits from Playstation Plus Essentials",
  },
  {
    image: b3,
    title: "PlayStation Plus Deluxe",
    desc: "Enjoy all the PlayStation Plus benefits from the Extra and Essential Plans, Plus exclusive benefits like game trials.",
  },
  {
    image: b4,
    title: "",
    desc: "",
  },
  {
    image: b1,
    title: "PlayStation Plus Deluxe",
    desc: "Enjoy all the PlayStation Plus benefits plus exclusive streaming and classics catalogue.",
  },
];

const Banner = () => {
  const sliderRef = useRef(null);

  const slideRight = () => {
    const slider = sliderRef.current;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScrollLeft - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const slideLeft = () => {
    const slider = sliderRef.current;
    if (slider.scrollLeft <= 0) {
      slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  return (
    <section
      className="mt-2 w-full h-screen bg-cover bg-center bg-no-repeat mb-2"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-white text-center pt-10">
        <h2 className="text-4xl font-bold">Discover PlayStation Plus</h2>
        <p className="mt-4 text-lg mb-14">
          Play hundreds of incredible PS5, PS4 and classic games.
        </p>
      </div>

      {/* Slider container */}
      <div className="relative">
        {/* Left button */}
        <button
          onClick={slideLeft}
          className="absolute left-0 top-[40%] z-10 bg-blue-600 text-white p-4 rounded-full shadow-md"
        >
          <FaAngleLeft></FaAngleLeft>
        </button>

        {/* Cards */}
        <a href="">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth gap-6 px-6 py-6 pr-6 scrollbar-hide"
          >
            {bannerData.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="min-w-[80%] sm:min-w-[60%] md:min-w-[50%] border-2 bg-black bg-opacity-80 rounded-2xl shadow-lg relative overflow-hidden hover:border-blue-700 hover:translate-y-3"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-72 object-cover"
                />
                <div className="absolute bottom-6 left-6 text-white max-w-[70%]">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </a>

        {/* Right button */}
        <button
          onClick={slideRight}
          className="absolute right-0 top-[40%] z-10 bg-blue-600 text-white p-4 rounded-full shadow-md"
        >
          <FaAngleRight></FaAngleRight>
        </button>
      </div>
    </section>
  );
};

export default Banner;

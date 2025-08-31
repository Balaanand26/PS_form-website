import React from "react";
import console from "../assets/images/console.jpg";
import headpho from "../assets/images/headphone.jpg";
import ear from "../assets/images/ear.jpg";
import cont from "../assets/images/cont.jpg";
import tancos from "../assets/images/tancons.jpg";
import acont from "../assets/images/acont.jpg";

const productData = [
  {
    image: console,
    textColor: "text-white",
    bgColor: "bg-black",
    title: "PlayStation 5 Console",
    buttonTextColor: "text-white",
    buttonBorder: "border-white",
    headingColor: "text-white",
    bgHover: "bg-white",
    textHover: "text-black"
  },
  {
    image: headpho,
    textColor: "text-black",
    bgColor: "bg-white",
    title: "PULSE Elite™ Wireless Headset",
    buttonTextColor: "text-black",
    buttonBorder: "border-black",
    headingColor: "text-black",
    bgHover: "bg-black",
    textHover: "text-white"
  },
  {
    image: ear,
    textColor: "text-black",
    bgColor: "bg-white",
    title: "PULSE Explore™ Wireless Earbuds",
    buttonTextColor: "text-black",
    buttonBorder: "border-black",
    headingColor: "text-black",
    bgHover: "bg-black",
    textHover: "text-white"
  },
  {
    image: cont,
    textColor: "text-white",
    bgColor: "bg-black",
    title: "DualSense Edge™ Wireless Controller",
    buttonTextColor: "text-white",
    buttonBorder: "border-white",
    headingColor: "text-white",
    bgHover: "bg-white",
    textHover: "text-black"
  },
  {
    image: tancos,
    textColor: "text-white",
    bgColor: "bg-black",
    title: "PlayStation Portal™ Remote Player",
    buttonTextColor: "text-white",
    buttonBorder: "border-white",
    headingColor: "text-white",
    bgHover: "bg-white",
    textHover: "text-black"
  },
  {
    image: acont,
    textColor: "text-black",
    bgColor: "bg-white",
    title: "Access™ Controller",
    buttonTextColor: "text-black",
    buttonBorder: "border-black",
    headingColor: "text-black",
    bgHover: "bg-black",
    textHover: "text-white"
  },
];

const Products = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-4 px-4 py-2">
        {productData.map((product, index) => (
          <div
            key={index}
            className="relative w-full h-screen mt-2 shadow overflow-hidden"
          >
            <img
              src={product.image}
              alt="PS5 & accessories"
              className={`w-full h-screen object-contain absolute top-0 left-0 z-[-1] ${product.bgColor}`}
            />

            <div className="relative flex flex-col items-center justify-end text-center h-screen bottom-12 px-4">
              <p className={`font-bold text-xl md:text-3xl ${product.headingColor}`}>
                {product.title}
              </p>
              <div className="mt-8">
                <button
                  className={`font-semibold px-6 py-2 border-2 ${product.buttonBorder} rounded-full hover:${product.bgHover} hover:${product.textHover} mr-4 ${product.buttonTextColor} text-sm md:base`}
                >
                  Check out the list
                </button>
                <button className="font-semibold px-6 py-2 border-2 border-white rounded-full bg-blue-600 text-white hover:bg-blue-800 hover:text-white hover:border-blue-800 text-sm md:base">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

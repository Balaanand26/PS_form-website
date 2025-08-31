import React from "react";
import {
  FaPlaystation,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const footerData = [
  {
    title: "About",
    items: [
      "About SIE",
      "Careers",
      "PlayStation Studios",
      "PlayStation Productions",
      "Corporate",
      "History of PlayStation",
    ],
  },
  {
    title: "Products",
    items: ["PS5", "PS4", "PS VR2", "PS Plus", "Accessories", "Games"],
  },
  {
    title: "Values",
    items: [
      "Environment",
      "Accessibility",
      "Online safety",
      "Diversity, equity & inclusion",
    ],
  },
  {
    title: "Support",
    items: [
      "Support hub",
      "PlayStation Safety",
      "PSN Status",
      "PlayStation Repairs",
      "Password reset",
    ],
  },
  {
    title: "Resources",
    items: [
      "PSN terms of service",
      "PS Store cancellation policy",
      "Age ratings",
      "Health warning",
      "Developers",
      "Glossary",
      "Official licensing programme",
    ],
  },
  {
    title: "Connect",
    items: ["iOS app", "Android APP"],
    icons: [FaFacebookF, FaTwitter, FaInstagram, FaYoutube],
  },
];

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white text-sm">
      <div className="px-24 pt-10 ">
        <div className="border-b border-blue-300">
          <ul className="text-white flex justify-start items-center gap-4 px-6 mb-4">
            <li>
              <FaPlaystation className="text-6xl "></FaPlaystation>
            </li>
            <li className="text-4xl font-semibold">PlayStation</li>
          </ul>
        </div>
        <div className="mx-auto py-10 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 border-b border-blue-300">
          
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-3">{section.title}</h3>
              <ul className="text-base space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>

              {section.icons && (
                <div className="flex space-x-3 mt-4">
                  {section.icons.map((Icon, idx) => (
                    <Icon
                      key={idx}
                      className="text-xl hover:text-gray-300 cursor-pointer"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto px-4 py-6 border-b border-blue-300">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            
            <p className="text-sm text-white">
              © 2025 Sony Interactive Entertainment Europe Limited (SIEE) <br />
              All content, games titles, trade names and/or trade dress,
              trademarks, artwork and associated imagery are trademarks and/or
              copyright material of their respective owners.{" "}
              <span className="underline cursor-pointer">More info</span>
            </p>
          </div>
        </div>

        <div className="text-sm mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            🌍 <span>India</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white">
            <span className="hover:underline cursor-pointer">Legal</span>
            <span className="hover:underline cursor-pointer">
              Privacy policy
            </span>
            <span className="hover:underline cursor-pointer">
              Website terms of use
            </span>
            <span className="hover:underline cursor-pointer">Site Map</span>
            <span className="hover:underline cursor-pointer">
              Cookies Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Software Usage Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

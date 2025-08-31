import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars, FaSearch, FaPlaystation } from "react-icons/fa";

const navLink = [
  {
    name: "Games",
    href: "#",
  },
  {
    name: "PS5",
    href: "#",
  },
  {
    name: "PS4",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Accessories",
    href: "#",
  },
  {
    name: "News",
    href: "#",
  },
  {
    name: "Stores",
    href: "#",
  },
  {
    name: "Support",
    href: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white p-4 font-semibold border-b shadow sticky top-0 z-40">
      <div>
        <ul className="flex justify-between items-center px-6">
          <div className="md:hidden">
            <li className="text-2xl ">
              <FaBars />
            </li>
          </div>
          <div className="flex space-x-10 ">
            <li>
              <a href="" className="text-4xl">
                <FaPlaystation></FaPlaystation>
              </a>
            </li>

            {navLink.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-blue-500 hidden md:block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </div>
          <div className="flex flex-row gap-6 items-center">
            <li>
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-2 border-gray-500 rounded-full px-3 py-1 hidden md:block"
              />
            </li>
            <li className="md:hidden text-2xl">
              <FaSearch />
            </li>
            <li>
              <button className=" bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer hover:bg-blue-800 ">
                <Link to="/" className="  font-semibold">
                  Log Out
                </Link>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

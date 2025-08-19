import { useState } from "react";
import { NavLink } from "react-router";
import ball from "/asset/images/Vector.png";
import logo from "/asset/Petals.svg";
import Hanburger from "/asset/images/Hanburger.png";
import { FaArrowRight } from "react-icons/fa";
import path1 from "/asset/images/path (1).png";
import path2 from "/asset/images/path (2).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Team", path: "/team" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    {
      name: (
        <p className="sm:bg-[#CBEA7B] sm:p-2 sm:rounded-lg flex sm:justify-center sm:items-center sm:text-black font-urbanistsemibold">
          Contact Us
        </p>
      ),
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-[#1A3129] shadow-md fixed top-0 left-0 w-full z-50 text-white">
      <div className="bg-[#234338] w-[90%] h-[40px] md:h-[25px] mx-auto flex md:justify-between justify-center items-center mt-2 rounded-sm text-[12px]">
        <img src={path1} alt="ball" className=" w-25 ml-[5%] hidden md:block" />
        <div className="flex justify-center items-center 2xl:text-[18px] sm:text-[16px] text-[14px]">
          <img src={ball} alt="ball" className="w-4 h-4 mr-1" />
          <p className="font-urbanistsemibold ">
            Join Our Personalized Nutrtion Demo For Free
          </p>
          <FaArrowRight className="ml-3" />
        </div>
        <img src={path2} alt="ball" className="w-25 mr-[5%] hidden md:block" />
      </div>
      <hr className="text-gray-700 mt-2 " />
      <div className="max-w-[90%] mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex font-bold  justify-center items-center space-x-2 text-white text-[20px]">
            <img src={logo} alt="logo" className="w-7" />
            <p>Nutritionist</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-4 sm:justify-center sm:items-center text-white 2xl:text-[18px] sm:text-[14px] ">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-[#F6FBE9]0 ${
                    isActive ? "text-[#CBEA7B] font-urbanistsemibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <img src={Hanburger} alt="Hanburger icon" className="w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed top-30 right-0 flex flex-col items-start w-[60%] 2xl:text-[18px] md:text-[14px] md:hidden backdrop-blur-md bg-[#1A3129]/50  p-8  space-y-[10%] transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block hover:text-green-950 ${
                  isActive ? "text-[#CBEA7B] font-urbanistsemibold" : ""
                }`
              }
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

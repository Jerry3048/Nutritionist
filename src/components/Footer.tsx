import { Link } from "react-router";
import logo from "/asset/Petals.svg"
import { FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";
// import logo from "/assets/icon.svg";


function Footer() {
    const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricePage" },
    { name: "Blog", path: "/blog" },
    { name:"Contact", path: "/contact" },
  ];

  
  return (
    <div className="bg-[#1A3129] shadow-md  text-white min-h-[100px] pb-3">


     <div className="">
        <div className="max-w-[90%] mx-auto ">
          <div className="flex items-center justify-between h-16">
           
            <div className="flex font-bold  justify-center items-center space-x-2 text-white text-[20px]">
                <img
              src= {logo}
              alt="logo" 
              className="w-7"
             
            />
              <p>Nutritionist</p>
            </div>

  
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 justify-center items-center text-white 2xl:text-[18px] md:text-[14px] ">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  {item.name}
                </Link>
              ))}
            </div>
  
            <div className="flex items-center space-x-2 2xl:text-[18px] md:text-[14px] font-urbanistmedium">
              <p >Go To Top</p>  <a
                href="#home"
                className="bg-[#25453a] shadow-black w-7 h-7 rounded-full flex justify-center items-center 2xl:text-[18px] md:text-[14px]"
              >
                <FaArrowUp />
              </a>
            </div>
          </div>
  
           <div className="md:hidden flex justify-between items-center text-white text-[12px] ">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  {item.name}
                </Link>
              ))}
            </div>
        </div>

      <div className="bg-[#25453a] shadow-black flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto p-4 rounded-lg text-[12px] md:text-[14px] 2xl:text-[18px] font-urbanistmedium mt-5 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:space-x-6 w-full md:w-[60%]">
          <p className="flex items-center justify-center rounded-lg p-2 border border-[#4f5b31] flex-1 mb-3 md:mb-0">
            <FaPhoneAlt className="text-[#CBEA7B] mr-2" />
            +9191813232309
          </p>
          <p className="flex items-center justify-center rounded-lg p-2 border border-[#4f5b31] flex-1 mb-3 md:mb-0">
            <FaEnvelope className="text-[#CBEA7B] mr-2" />
            hello@squareup.com
          </p>
          <p className="flex items-center justify-center rounded-lg p-2 border border-[#4f5b31] flex-1">
            <FaMapMarkerAlt className="text-[#CBEA7B] mr-2" />
            somewhere in the world
          </p>
        </div>
        <p className="text-center md:text-right w-full md:w-auto">
          © 2023 Nutritionist. All rights reserved.
        </p>
      </div>

        
     </div>
    </div>
  )
}

export default Footer
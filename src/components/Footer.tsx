import { Link } from "react-router";
import logo from "/asset/images/logo.png"
import { FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";

function Footer() {
    const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Process", path: "/process" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name:"Contact", path: "/contact" },
  ];

  
  return (
    <div className="bg-[#1A3129] shadow-md  text-white min-h-[100px] pb-3">

     <div className="w-[90%] mx-auto">
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
            <div className="hidden sm:flex space-x-4 justify-center items-center text-white 2xl:text-[18px] sm:text-[14px] ">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  {item.name}
                </Link>
              ))}
            </div>
  
            <div className="flex items-center space-x-2 2xl:text-[18px] sm:text-[14px] font-urbanistmedium">
               <p >Go To Top</p> <Link className="bg-[#25453a] shadow-black w-7 h-7 rounded-full flex justify-center items-center 2xl:text-[18px] sm:text-[14px]"  to="/home"><FaArrowUp/></Link>
            </div>
          </div>
  
           <div className="sm:hidden flex justify-between items-center text-white text-[12px] ">
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

        <div className="bg-[#25453a] shadow-lg w-[90%] mx-auto p-4 rounded-lg text-[12px] sm:text-[14px] 2xl:text-[18px] font-urbanistmedium mt-5">
          <div className="sm:flex justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 gap-3 text-white">
              {/* Phone */}
              <p className="flex items-center gap-2 bg-[#2f5d4a] px-4 py-2 rounded-lg border border-[#4f5b31]">
                <span className="bg-[#CBEA7B] text-[#25453a] p-1.5 rounded-full">
                  <FaPhoneAlt size={14} />
                </span>
                +91 91813 232309
              </p>

              {/* Email */}
              <p className="flex items-center gap-2 bg-[#2f5d4a] px-4 py-2 rounded-lg border border-[#4f5b31]">
                <span className="bg-[#CBEA7B] text-[#25453a] p-1.5 rounded-full">
                  <FaEnvelope size={14} />
                </span>
                hello@squareup.com
              </p>

              {/* Location */}
              <p className="flex items-center gap-2 bg-[#2f5d4a] px-4 py-2 rounded-lg border border-[#4f5b31]">
                <span className="bg-[#CBEA7B] text-[#25453a] p-1.5 rounded-full">
                  <FaMapMarkerAlt size={14} />
                </span>
                Somewhere in the world
              </p>
            </div>

            {/* Copyright */}
            <p className="text-gray-300 text-center sm:text-right">
              © 2023 Nutritionist. All rights reserved.
            </p>
          </div>
        </div>
        
     </div>
    </div>
  )
}

export default Footer
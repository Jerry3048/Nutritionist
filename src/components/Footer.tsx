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
               <p >Go To Top</p> <Link className="bg-[#25453a] shadow-black w-7 h-7 rounded-full flex justify-center items-center 2xl:text-[18px] md:text-[14px]"  to="/home"><FaArrowUp/></Link>
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

        <div className="bg-[#25453a] shadow-black md:flex justify-between items-center  w-[90%] mx-auto p-2 pb-0 rounded-lg text-[12px] 2xl:text-[18px] md:text-[14px] font-urbanistmedium space-y-3 mt-5">
           <div className="md:flex space-x-4 justify-between items-center space-y-3 md:space-y-0  lg:w-[60%]">
              <p className="flex space-x-1 justify-center items-center  h-[40px] rounded-lg p-2 border-1  border-[#4f5b31] w-full "><span className="text-[#CBEA7B] mr-1"><FaPhoneAlt/></span>+9191813232309</p>
              <p className="flex space-x-1 justify-center items-center h-[40px] rounded-lg p-2 border-1 border-[#4f5b31] w-full"><span className="text-[#CBEA7B] mr-1"><FaEnvelope/></span>hello@squareup.com</p>
              <p className="flex space-x-1 justify-center items-center h-[40px]  rounded-lg p-2 border-1 border-[#4f5b31] w-full"><span className="text-[#CBEA7B] mr-1"><FaMapMarkerAlt/></span>somewhere in the world</p>
           </div>
           <p className="flex justify-center items-center ml-4">© 2023 Nutritionist. All rights reserved.</p>
        </div>

        
     </div>
    </div>
  )
}

export default Footer
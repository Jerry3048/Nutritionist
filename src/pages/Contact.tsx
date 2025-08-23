import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "/asset/images/Icon Container.png";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
        <div id="home"> <Header /></div>
        <div className="relative w-[90%] bg-[#F6FBE9] flex items-center justify-center mx-auto rounded-t-lg mt-40 border-1 border-[#F6FBE9]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13'%3E%3Ctext x='50%25' y='50%25' dy='.35em' text-anchor='middle' font-size='9' fill='rgba(0,190,0,0.85)'%3E+%3C/text%3E%3C/svg%3E")
            `,
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0))",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0))",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-[#F6FBE9]"></div>

        <div className="relative z-10 text-center w-[80%] mx-auto mb-10">
          <img
            src={logo}
            alt="logo"
            className="mx-auto m-10 w-20 h-20 object-contain"
          />
          <h1 className="text-3xl font-urbanistbold text-green-900">
            Contact Us
          </h1>
          <p className="mt-2">
         We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods.
          </p>
        </div>
      </div>
    <div className="bg-[#1A3129] text-white flex justify-center items-center w-[90%] mx-auto rounded-b-lg font-urbanistmedium p-4">
        <div className="md:flex justify-between items-center w-[80%] gap-4 space-y-3 md:space-y-0">
            <p className="flex flex-col items-center justify-center bg-[#234338] rounded-lg p-3 flex-1 text-center">
            <FaPhoneAlt className="text-[#CBEA7B] mb-1" />
            +9191813232309
            </p>
            <p className="flex flex-col items-center justify-center bg-[#234338] rounded-lg p-3 flex-1 text-center">
            <FaEnvelope className="text-[#CBEA7B] mb-1" />
            hello@squareup.com
            </p>
            <p className="flex flex-col items-center justify-center bg-[#234338] rounded-lg p-3 flex-1 text-center">
            <FaMapMarkerAlt className="text-[#CBEA7B] mb-1" />
            somewhere in the world
            </p>
        </div>
    </div>
    <ContactForm/>
    <div className="md:flex justify-center space-x-4 items-center  bg-[#F6FBE9] w-[90%] md:h-[150px] mx-auto m-5 text-center md:text-left p-7 rounded-lg">
       <div className="space-y-3">
          <h1 className="flex  font-urbanistsemibold text-[18px] sm:text-[20px] 2xl:text-[24px] ">Are you ready to embark on a transformative journey towards better health and wellness?</h1>
          <p className="md:max-w-[90%] text-[15px] 2xl:text-[20px] font-urbanistmedium">Join us at Nutritionist and let us guide you on the path to a healthier and happier you..</p>
       </div>
        <div className="p-5 md:p-0 md:w-[20%]">
           <button className="bg-[#CBEA7B] p-2 text-[15px] rounded-md w-full font-urbanistmedium">Join Us Now</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "/asset/images/Icon Container.png";
import Procedures from "../components/Procedures";

function Process() {
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

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-[#F6FBE9]"></div>

            {/* Content layer (text + image) */}
            <div className="relative z-10 text-center  w-[80%] mx-auto mb-10">
                <img
                src={logo}
                alt="logo"
                className="mx-auto m-10 w-20 h-20 object-contain"
                />
                <h1 className="text-3xl font-urbanistbold text-green-900">Your Journey to Health and Wellness</h1>
                <p className="mt-2">At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:</p> 
            </div>                   
        </div>
        <Procedures/>
        <div className="md:flex justify-center space-x-4 items-center  bg-[#F6FBE9] w-[90%] md:h-[150px] mx-auto m-5 text-center md:text-left p-7 rounded-lg mt-10">
            <div className="space-y-3">
                <h1 className="flex  font-urbanistsemibold text-[18px] sm:text-[20px] 2xl:text-[24px] justify-center items-center ">Are you ready to embark on a transformative journey towards better health and wellness?</h1>
                <p className="md:max-w-[90%] text-[15px] 2xl:text-[20px] font-urbanistmedium">Join us at Nutritionist and let us guide you on the path to a healthier and happier you.</p>
            </div>
            <div className="p-5 md:p-0 md:w-[20%]">
            <button className="bg-[#CBEA7B] p-2 text-[15px] rounded-md w-full font-urbanistmedium">Join Us Now</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Process
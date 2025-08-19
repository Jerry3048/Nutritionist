import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "/asset/images/Icon Container.png";

function Process() {
  return (
    <div>
        <Header/>
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
           <h1 className="flex justify-center text-3xl font-urbanistbold text-green-900">
            How it Works
          </h1>
          <p className="text-center text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistmedium w-[70%] mx-auto">
           We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works
          </p>

        <Footer/>
    </div>
  )
}

export default Process
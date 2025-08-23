import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "/asset/images/Icon Container.png";
import PricingPage from "../components/PricingPage";
import PriceFeatures from "../components/PriceFeatures";
import FAQPage from "../components/Faq";

function PricePage() {
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
                <h1 className="text-3xl font-urbanistbold text-green-900">Our Pricing</h1>
                <p className="mt-2">At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle</p> 
            </div>                   
        </div>
        <PricingPage showSize ={false} showHeading ={false}/>
        <PriceFeatures/>
        <FAQPage/>
        <Footer/>
    </div>
  )
}

export default PricePage
import Header from "../components/Header";
import Footer from "../components/Footer";
import face from "/asset/images/face.png";
import CustomerStack from "../components/CustomerStack";
import Features from "../components/Features";
import Blog from "../components/BlogandTestimony";
import PricingPage from "../components/PricingPage";

function Home() {
  return (
    <div className="">
     <div id="home"> <Header /></div>
      <div className=" mt-[120px] sm:mt-[100px]">
        <div className="sm:flex ">
          <div className="relative">
            <img
              src={face}
              alt="ball"
              className=" h-full w-[2000px] relative rounded-b-4xl sm:rounded-b-none"
            />
            <div className=" sm:hidden flex justify-center items-center absolute  left-0 right-0 bottom-[-15%]">
              <CustomerStack />
            </div>
          </div>

          <div className="sm:mt-12 sm:ml-5 space-y-1 mt-20">
            <p className=" items-center text-sm underline underline-offset-4 decoration-[#CBEA7B] flex justify-center sm:justify-start font-urbanistbold 2xl:text-[28px] sm:text-[22px] text-[18px]">
              Transform your ❤️ Health with
            </p>
            <p className="text-2xl font-urbanistbold md:max-w-[60%] w-[90%] mx-auto sm:mx-0 flex justify-center items-center sm:justify-start text-center sm:text-left md:text-[58px] sm:text-[48px] text-[38px] ">
              Personalized Nutrition Coaching
            </p>
            <p className="2xl:text-[18px] sm:text-[16px]  text-[14px] text-center sm:text-left w-[90%] mx-auto sm:w-full font-urbanistmedium">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>

            <div className="flex space-x-5 mt-4 justify-center items-center sm:justify-start font-urbanistsemibold">
              <button className=" 2xl:text-[18px] text-[14px]  bg-[#CBEA7B] p-2 rounded-lg">
                Get Started Today
              </button>
              <button className=" 2xl:text-[18px] text-[14px]">
                Book a Demo
              </button>
            </div>
            <div className="hidden  sm:block">
              <CustomerStack />
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Blog />
      <PricingPage showFeatures={false} showSize={true} showPremium={false} />
      <Footer />
    </div>
  );
}

export default Home;

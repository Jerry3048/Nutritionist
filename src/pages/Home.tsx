import Header from "../components/Header";
import Footer from "../components/Footer";
import face from "/asset/face.png";
import CustomerStack from "../components/CustomerStack";
import Features from "../components/Features";

function Home() {
  return (
    <div className="">
      <Header />
      <div className=" mt-[120px] sm:mt-[100px]">
        <div className="sm:flex ">
          <p className="relative">
            <img
              src={face}
              alt="ball"
              className=" sm:min-h-[330px] w-full relative"
            />
            <div className=" sm:hidden flex justify-center items-center absolute  left-0 right-0 bottom-[-8%]">
              <CustomerStack />
            </div>
          </p>

          <div className="sm:mt-12 sm:ml-5 space-y-1 mt-10">
            <p className=" items-center text-sm underline underline-offset-4 decoration-[#CBEA7B] flex justify-center sm:justify-start">
              Transform your ❤️ Health with
            </p>
            <p className="text-2xl font-semibold md:max-w-[50%] max-w-[60%] mx-auto sm:mx-0 flex justify-center items-center sm:justify-start text-center sm:text-left">
              Personalized Nutrition Coaching
            </p>
            <p className="text-[13px] text-center sm:text-left w-[90%] mx-auto sm:w-full">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>

            <div className="flex space-x-5 mt-4 justify-center items-center sm:justify-start">
              <button className=" text-[9px] md:text[12px] bg-[#CBEA7B] p-2 rounded-lg">
                Get Started Today
              </button>
              <button className=" text-[9px] md:text[12px]">Book a Demo</button>
            </div>
            <div className="hidden  sm:block">
              <CustomerStack />
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default Home;

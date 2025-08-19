import Header from "../components/Header";
import Footer from "../components/Footer";
import Biglogo from "/asset/images/biglogo.png";
import Archievements from "../components/Archievement.tsx"
import OurStory from "../components/OurStory.tsx";

function About() {
  return (
    <div className="">
      <Header />
      <div className="w-[90%] mx-auto space-y-10">
        <div className="h-[40vh] mt-[150px]">
          <img src={Biglogo} alt={Biglogo} className=" w-full h-full" />
        </div>
        <div className="bg-[#F6FBE9] p-4 rounded-lg mb-10">
          <h1 className="flex justify-center font-urbanistbold text-[28px] sm:text-[38px]">
            Welcome to nutritionist
          </h1>
          <div className="text-center text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistmedium">
            <p>
              Your trusted source for personalized nutrition coaching. Our
              mission is to help you achieve your weight loss and health goals
              through tailored nutrition plans and expert guidance. We
              understand that every individual is unique, and that's why we
              believe in providing personalized solutions that fit your
              lifestyle and preferences.
            </p>
            <p>
              With our team of qualified nutritionists and dietitians, we are
              dedicated to empowering you with the knowledge and tools you need
              to make lasting changes. Whether you want to shed those extra
              pounds, improve your overall well-being, or develop a healthier
              relationship with food, we are here to support you every step of
              the way. At Nutritionist, we believe that healthy eating should be
              enjoyable and sustainable. We emphasize the importance of balanced
              nutrition, focusing on whole foods and mindful eating practices.
              Our approach is rooted in scientific research and evidence-based
              strategies, ensuring that you receive the most up-to-date and
              accurate information.
            </p>
            <p>
              Join our community of individuals committed to transforming their
              lives through nutrition. Take control of your health, boost your
              energy levels, and discover the joy of nourishing your body with
              wholesome foods. We are here to guide you towards a healthier,
              happier you.
            </p>
          </div>
        </div>


      </div>
      <OurStory/>
      <Archievements/>
      <div className="md:flex justify-center space-x-4 items-center  bg-[#F6FBE9] w-[90%] md:h-[150px] mx-auto m-5 text-center md:text-left p-7 rounded-lg">
       <div className="space-y-3">
          <h1 className="flex  font-urbanistsemibold text-[18px] sm:text-[20px] 2xl:text-[24px] "> We Are Proud of Our Achievements</h1>
          <p className="md:max-w-[90%] text-[15px] 2xl:text-[20px] font-urbanistmedium">But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.</p>
       </div>
        <div className="p-5 md:p-0 md:w-[20%]">
           <button className="bg-[#CBEA7B] p-2 text-[15px] rounded-md w-full font-urbanistmedium">Book a Demo</button>
        </div>
      </div>
      <Footer />
      
      
    </div>
  );
}

export default About;

import type { ReactNode } from "react";
import {
  FaLeaf,         // nutrition (leaf)
  FaUtensils,     // cutlery
  FaCertificate,
  FaDumbbell   // certificate or diploma
} from "react-icons/fa";
import { MdSchool, MdEventNote } from "react-icons/md"; // education & planning

interface items {
    icon:ReactNode;
    label:string;
    description:string;

}

export default function NutritionIcons() {
  const items:items[] = [
    { icon: <FaLeaf />, label: "Personalized Nutrition Plans", description:"Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best."  },

    { icon: <FaUtensils />, label: "Food Tracking and Analysis",  description: "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations"},

    { icon: <MdEventNote />, label: "Meal Planning and Recipes",  description:"Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals." },

    { icon: <MdSchool />, label: "Guidance from Certified Nutritionists",  description:"Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals." },

    { icon: <FaCertificate />, label: "Nutritional Education and Workshops", description:"Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success" },

     { icon: <FaDumbbell />, label: "Lifestyle and Behavior Coaching", description:"Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way." },
  ];

  return (

      <div className="space-y-2 mt-30 w-[90%] mx-auto">
        <h1 className="flex justify-center items-center font-urbanistbold 2xl:text-[48px] sm:text-[38px] text-[28px] ">Features</h1>
        <p className="text-[18px] sm:text-[16px]  2xl:text-[14px] flex justify-center items-center mb-8 text-center font-urbanistmedium">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col text-gray-800 space-y-2 bg-green-50 p-4 rounded-md">
             <div className="flex items-center space-x-1">
                  <div className=" bg-[#CBEA7B] p-2 text-[18px] rounded-md">{item.icon}</div>
                  <span className=" font-urbanistsemibold text-[18px] sm:text-[20px] 2xl:text-[24px] ">{item.label}</span>
             </div>
             <p className="font-urbanistmedium text-[14px] sm:text-[16px] 2xl:text-[18px] ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
import type { ReactNode } from "react";
import {
  FaLeaf, // nutrition (leaf)
  FaUtensils, // cutlery

} from "react-icons/fa";
import { MdSchool, MdEventNote } from "react-icons/md"; // education & planning

interface items {
  icon: ReactNode;
  label: string;
  description: string;
}

export default function NutritionIcons() {
  const items: items[] = [
    {
      icon: <FaLeaf />,
      label: "10,000+ Transformations",
      description:
        "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.",
    },

    {
      icon: <FaUtensils />,
      label: "Positive Client Reviews",
      description:
        "We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.",
    },

    {
      icon: <MdEventNote />,
      label: "Collaborate With Top Health Experts.",
      description:
        "Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.",
    },

    {
      icon: <MdSchool />,
      label: "Recognition for Excellence",
      description:
        "Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.",
    },
  ];

  return (
    <div className="space-y-2 mt-10 w-[90%] mx-auto">
      <h1 className="flex justify-center items-center font-u 2xl:text-[48px] sm:text-[38px] text-[25px] ">
        Company Achievements
      </h1>
      <p className="text-[18px] sm:text-[16px]  2xl:text-[14px] flex justify-center items-center mb-8 text-center font-urbanistmedium">
       At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col  space-y-2 3xl:bg-[#E5F5BD] p-4 rounded-md"
          >
            <div className="flex items-center space-x-1">
              <div className=" bg-[#CBEA7B] p-2 text-[18px] rounded-md">
                {item.icon}
              </div>
              <span className=" font-urbanistsemibold text-[18px] sm:text-[20px] 2xl:text-[24px] ">
                {item.label}
              </span>
            </div>
            <p className="font-urbanistmedium text-[14px] sm:text-[16px] 2xl:text-[18px] ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

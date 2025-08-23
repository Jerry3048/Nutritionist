import type { ReactNode } from "react";
import {
  FaTrophy,
  FaShoppingBasket,
  FaShieldAlt,
  FaHeadphones,
  FaFlagCheckered,
  FaBatteryFull,
  FaUtensils,
} from "react-icons/fa";
import { AiFillPushpin } from "react-icons/ai";
import { MdSchool, MdEventNote } from "react-icons/md";

interface Item {
  id: string;
  icon: ReactNode;
  label: string;
  description: string;
}

function Procedures() {
  const items: Item[] = [
    {
      id: "01",
      icon: <FaFlagCheckered />,
      label: "Initial Consultation",
      description:
        "We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements.",
    },
    {
      id: "02",
      icon: <FaShoppingBasket />,
      label: "Assessing Your Needs",
      description:
        "Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.",
    },
    {
      id: "03",
      icon: <MdEventNote />,
      label: "Personalized Nutrition Plan",
      description:
        "Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals.",
    },
    {
      id: "04",
      icon: <FaUtensils />,
      label: "Meal Planning and Recipes",
      description:
        "To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.",
    },
    {
      id: "05",
      icon: <FaHeadphones />,
      label: "Ongoing Support",
      description:
        "Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance.",
    },
    {
      id: "06",
      icon: <FaShieldAlt />,
      label: "Progress Tracking",
      description:
        "We encourage you to track your progress using our user-friendly mobile app or website tools. You can log meals, monitor your weight, and track physical activity.",
    },
    {
      id: "07",
      icon: <AiFillPushpin />,
      label: "Regular Check-ins",
      description:
        "We will schedule regular check-ins to review your progress, address any concerns, and make adjustments to your nutrition plan.",
    },
    {
      id: "08",
      icon: <MdSchool />,
      label: "Education and Resources",
      description:
        "Along the way, we will provide educational resources — articles, guides, and videos — to empower you with knowledge about nutrition.",
    },
    {
      id: "09",
      icon: <FaBatteryFull />,
      label: "Fine-Tuning and Adjustments",
      description:
        "As your journey progresses and your goals evolve, we will fine-tune your nutrition plan to ensure it aligns with your changing needs.",
    },
    {
      id: "10",
      icon: <FaTrophy />,
      label: "Sustainable Lifestyle Habits",
      description:
        "Our certified nutritionists will support you in building habits that last, ensuring long-term health and wellness.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-16 space-y-12">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-urbanistbold text-green-900">
          How it Works
        </h1>
        <p className="text-[14px] sm:text-[16px] 2xl:text-[18px] font-urbanistmedium text-gray-700">
          We provide a step-by-step guide on how to get started on your journey
          towards better health and nutrition. We make it simple to navigate our
          platform and access the resources you need to achieve your goals.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div
            key={idx}
             className={`relative flex flex-col  rounded-lg p-6 ${idx > 3 ? "hidden md:flex" : ""}`}
          >
            {/* Step Number */}
            <div className="absolute -top-8  text-[62px] font-urbanistsemibold text-[#468671]">
              {item.id}
            </div>

            {/* Card Content */}
            <div className="relative bg-[#F6FBE9] rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-4 ">
                    <div className="bg-[#CBEA7B] p-2 rounded-md">
                        {item.icon}
                    </div>
                    <h2 className="font-urbanistsemibold text-lg sm:text-xl 2xl:text-2xl text-gray-800">
                        {item.label}
                    </h2>
                    </div>
        
                    <p className="font-urbanistmedium text-sm sm:text-base 2xl:text-lg text-gray-600 leading-relaxed">
                    {item.description}
                    </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Procedures;
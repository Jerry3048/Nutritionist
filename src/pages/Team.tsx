import { useState, type JSX } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "/asset/images/Icon Container.png";
import WorkersCard from "../components/WorkersCard";

type TabKey =
  | "Management Team"
  | "Nutritionists and Dietitians"
  | "Customer Support Team"
  | "Marketing and Communications"
  | "Technology and Development";

function Team() {
  const [activeTab, setActiveTab] = useState<TabKey>("Management Team");

  const navItems: { name: TabKey }[] = [
    { name: "Management Team" },
    { name: "Nutritionists and Dietitians" },
    { name: "Customer Support Team" },
    { name: "Marketing and Communications" },
    { name: "Technology and Development" },
  ];

  // Dummy content for each tab — replace with your own team components
  const tabContent: Record<TabKey, JSX.Element> = {
    "Management Team": <WorkersCard team="management" />,
    "Nutritionists and Dietitians": <WorkersCard team="nutritionists" />,
    "Customer Support Team": <WorkersCard team="support" />,
    "Marketing and Communications": <WorkersCard team="marketing" />,
    "Technology and Development": <WorkersCard team="tech" />,
  };

  return (
    <div>
       <div id="home"> <Header /></div>

      {/* Hero section */}
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
            Meet Our Team of Experts
          </h1>
          <p className="mt-2">
            At Nutritionist, we bring together professionals across diverse
            specialties. Click a tab below to meet each of our dedicated teams.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#1A3129] text-white w-[90%] mx-auto min-h-[70px] flex justify-center items-center rounded-b-lg mb-5">
        <div className="flex justify-between items-center text-white text-[12px] w-[90%] mx-auto font-urbanistmedium 2xl:text-[18px] xl:text-[14px] overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`px-4 py-2 whitespace-nowrap rounded-md transition-all ${
                activeTab === item.name
                  ? "bg-[#25453a]"
                  : "hover:bg-[#356554]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="w-[90%] mx-auto">{tabContent[activeTab]}</div>

      {/* CTA Section */}
      <div className="md:flex justify-center space-x-4 items-center bg-[#F6FBE9] w-[90%] md:h-[150px] mx-auto m-5 text-center md:text-left p-7 rounded-lg mt-10">
        <div className="space-y-3">
          <h1 className="flex font-urbanistsemibold text-[18px] sm:text-[20px] 2xl:text-[24px] justify-center items-center">
            Join Our Team
          </h1>
          <p className="md:max-w-[90%] text-[15px] 2xl:text-[20px] font-urbanistmedium">
            We are always on the lookout for talented individuals who are
            enthusiastic about making a difference. Explore our career
            opportunities and join us in our mission to help people achieve
            their health and wellness goals.
          </p>
        </div>
        <div className="p-5 md:p-0 md:w-[20%]">
          <button className="bg-[#CBEA7B] p-2 text-[15px] rounded-md w-full font-urbanistmedium">
            Apply Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Team;
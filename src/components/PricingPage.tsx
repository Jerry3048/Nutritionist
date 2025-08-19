import { useState } from "react";

function PricingPage({ showFeatures = true, showSize = true }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "$19",
        size: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        name: "Premium",
        price: "$49",
        size: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      },
      {
        name: "Ultimate",
        price: "$99",
        size: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
        ],
      },
    ],
    yearly: [
      {
        name: "Basic",
        price: "$199",
        size: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        name: "Premium",
        price: "$499",
        size: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      },
      {
        name: "Ultimate",
        price: "$999",
        size: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
        ],
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto py-12">
      <h1 className="text-4xl font-urbanistbold text-center mb-6">
        Our Pricing
      </h1>
      <p className="flex justify-center items-center font-urbanistmedium mb-10 text-gray-500 text-[14px] sm:text[16px] 2xl:text-[18px] text-center">
        We outline our flexible and affordable options to support you on your
        journey to optimal health and nutrition. We believe that everyone
        deserves access to personalized nutrition guidance and resources
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-2 space-x-4 border-1 border-[#cbf092] p-2 w-[200px] h-cover mx-auto">
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            billingCycle === "monthly"
              ? "bg-[#356554] text-white"
              : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            billingCycle === "yearly"
              ? "bg-[#356554] text-white"
              : "text-gray-500"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>
      <p className="flex justify-center items-center font-urbanistmedium mb-10 text-gray-500 text-[14px] sm:text[16px] 2xl:text-[18px]">
        save 50% on Yearly
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans[billingCycle].map((plan, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#F6FBE9] p-6 flex flex-col justify-between"
          >
            <h2 className="text-xl font-urbanistbold">{plan.name} plan</h2>
            {showSize && (
              <p className="flex items-center font-urbanistmedium mb-10 text-gray-500 text-[14px] sm:text[16px] 2xl:text-[18px]">
                save 50% on Yearly
              </p>
            )}
            {showSize && (
              <p className="text-gray-500 mb-4 text-[14px] sm:text[16px] 2xl:text-[18px]">
                {plan.size}
              </p>
            )}
            <p className="text-4xl font-urbanistbold mb-4 flex items-center text-[#356554]">
              {plan.price}
              <span className="text-gray-500 text-sm">/month</span>
            </p>

            {/* Only show features if showFeatures is true */}
            {showFeatures && (
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            )}

            <button className="bg-[#CBEA7B] py-2 px-4 rounded-lg font-urbanistsemibold hover:bg-[#a7e114]">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;

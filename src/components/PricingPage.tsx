import { useState } from "react";

function PricingPage({ showFeatures = true, showSize = true, showHeading = true, showPremium = true}) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "$19",
        size: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
        features: ["Personalized nutrition plan tailored to your goals and dietary preferences."
          , "Access to our mobile app for convenient meal tracking and progress monitoring.", "Email support to address your questions and concerns.","Regular check-ins with a dedicated nutritionist to review your progress and provide guidance."
        ],
      },
      {
        name: "Premium",
        price: "$49",
        size: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
        features: ["All the features included in the Basic Plan.", "One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.", "Recipe recommendations and meal planning assistance.", "Priority email support for quicker responses to your inquiries.", "Educational resources and guides to deepen your understanding of nutrition and healthy habits."],
      },
      {
        name: "Ultimate",
        price: "$99",
        size: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
        features: [
          "All the features included in the Plus Plan.",
          "Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.",
          "Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.",
          "Customized meal plans and recipe suggestions based on your preferences and nutritional needs.",
          "Priority email and phone support for immediate assistance.",
        ],
      },
    ],
    yearly: [
      {
        name: "Basic",
        price: "$199",
        size: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
        features: ["Personalized nutrition plan tailored to your goals and dietary preferences."
          , "Access to our mobile app for convenient meal tracking and progress monitoring.", "Email support to address your questions and concerns.","Regular check-ins with a dedicated nutritionist to review your progress and provide guidance."
        ],
      },
      {
        name: "Premium",
        price: "$499",
        size: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
        features: ["All the features included in the Basic Plan.", "One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.", "Recipe recommendations and meal planning assistance.", "Priority email support for quicker responses to your inquiries.", "Educational resources and guides to deepen your understanding of nutrition and healthy habits."],
      },
      {
        name: "Ultimate",
        price: "$999",
        size: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
        features: [
          "All the features included in the Plus Plan.",
          "Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.",
          "Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.",
          "Customized meal plans and recipe suggestions based on your preferences and nutritional needs.",
          "Priority email and phone support for immediate assistance.",
        ],
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto py-12">

      {showHeading &&(
      <div>
              <h1 className="text-4xl font-urbanistbold text-center mb-6">
            Our Pricing
          </h1>
          <p className="flex justify-center items-center font-urbanistmedium mb-10 text-gray-500 text-[14px] sm:text[16px] 2xl:text-[18px] text-center">
            We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources
          </p>
      </div>
      )}
      

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
            className="rounded-2xl h-fit bg-[#F6FBE9] p-6"
          >
            <h2 className="text-xl font-urbanistbold">{plan.name} plan</h2>
            <p className="flex items-center font-urbanistmedium mb-6 text-gray-500 text-[14px] sm:text[16px] 2xl:text-[18px]">
              Up to 50% off on Yearly Plan
            </p>

            {showSize && (
              <p className="text-gray-500 mb-4 text-[14px] sm:text[16px] 2xl:text-[18px]">
                {plan.size}
              </p>
            )}

            <p className="text-4xl font-urbanistbold mb-4 flex items-center text-[#356554]">
              {plan.price}
              <span className="text-gray-500 text-sm">/month</span>
            </p>

            {showFeatures && (
              <ul className="space-y-2 mb-6 bg-[#f1ffce] rounded-lg">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-600 border-b-2 border-[#eafbc9] p-4"
                  >
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            )}

            
        {showPremium && plan.name === "Ultimate" && (
        <div className="bg-[#234338] text-white p-3 rounded-lg text-center mb-4">
          The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.
        </div>
      )}

            <button className="bg-[#CBEA7B] py-2 px-4 rounded-lg font-urbanistsemibold hover:bg-[#a7e114] w-full">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;

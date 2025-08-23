import { useState,useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import logo from "/asset/Petals.svg"; // Example logo icon

const faqs = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you’re not satisfied with your purchase, you can request a refund within 30 days of your order date.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Your billing will be adjusted accordingly.",
  },
  {
    question: "Is customer support included?",
    answer:
      "Absolutely! All our plans include 24/7 customer support via chat and email.",
  },
  {
    question: "Do you offer discounts for yearly billing?",
    answer:
      "Yes, choosing yearly billing saves you 20% compared to monthly payments.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [question, setQuestion] = useState("");
   const [toast, setToast] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 const handleAsk = () => {
    if (question.trim()) {
      setToast(`Your question has been submitted: "${question}"`);
      setQuestion("");
    }
  };

  // Auto-hide toast after 3s
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);
  return (
    <div className="w-[90%] mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* FAQ Section */}
      <div className="md:col-span-2">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-urbanistbold text-[#234338] mb-4">
            FAQ
          </h1>
          <p className="text-gray-600 text-lg">
            We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 bg-[#F6FBE9] rounded-lg border-[#eafbc9] border-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-[90%] mx-auto border-b-2 border-[#eafbc9] pb-4"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center text-left focus:outline-none w-full py-4"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaTimes className="text-white bg-[#234338] text-4xl p-3 rounded-lg" />
                ) : (
                  <FaPlus className="text-white bg-[#234338] text-4xl p-3 rounded-lg" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="text-gray-600 text-[15px] mt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ask Question Section */}
      <div className="bg-[#F6FBE9] rounded-lg shadow-lg p-6 flex flex-col justify-between">
         <div className="flex justify-center items-center space-x-2 text-white text-[20px]">
            <img src={logo} alt="logo" className="w-30" />
          </div>

        <div className="mb-4 flex-1 justify-center items-center text-center ">
        <h2 className="text-4xl font-bold text-[#234338] mb-4">Ask your question</h2>
        <p>Feel Free to Ask questions on anytime</p>
        </div>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="w-full p-3 rounded-lg text-gray-800 mb-4 border-[#eafbc9] border-2  focus:outline-0 "
          rows={4}
        />
        <button
          onClick={handleAsk}
          className="bg-[#CBEA7B] text-[#234338] font-semibold px-4 py-3 rounded-lg hover:bg-[#b8dc63] transition"
        >
          Submit
        </button>
      </div>
       {toast && (
        <div className="fixed bottom-40 right-0 transform -translate-x-1/2 bg-[#234338] text-white px-6 py-3 rounded-lg shadow-lg ">
          {toast}
        </div>
      )}

    </div>
  );
}

export default FAQPage;
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show toast
    setShowToast(true);

    // Hide after 3 seconds
    setTimeout(() => setShowToast(false), 3000);

    // Clear form
    setFormData({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className=" bg-[#F6FBE9] w-[90%] mx-auto mt-5 md:flex justify-center items-center rounded-lg">
      <div className="rounded-2xl w-full max-w-lg p-8 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
         <div className="flex justify-between items-center space-x-3">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  required
                  className="w-full bg-[#EEF8D3] rounded-lg px-4 py-2 focus:outline-0 border-[#eafbc9] border-2"
                />
              </div>
    
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#EEF8D3] rounded-lg px-4 py-2 focus:outline-0 border-[#eafbc9] border-2"
                />
              </div>
         </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-[#EEF8D3] rounded-lg px-4 py-2 focus:outline-0 border-[#eafbc9] border-2"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full bg-[#EEF8D3] rounded-lg px-4 py-2 focus:outline-0 border-[#eafbc9] border-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#CBEA7B] text-[#234338] font-semibold px-4 py-3 rounded-lg hover:bg-[#b8dc63] transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>

    
    
        <div className="w-[100%]  flex flex-col mr-4">
        {/* Map */}
        <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509232!2d144.9537363159046!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzE0LjAiRQ!5e0!3m2!1sen!2sus!4v1617752453564!5m2!1sen!2sus"
            className="w-full h-[300px] border-0 rounded-lg mx-auto"
            allowFullScreen={true}
            loading="lazy"
        ></iframe>

        {/* Social Icons */}
        <div className="flex justify-end mt-4 space-x-2 w-full pr-4">
            <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CBEA7B] p-2 text-[18px] rounded-md"
            >
            <FaFacebook />
            </a>
            <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CBEA7B] p-2 text-[18px] rounded-md"
            >
            <FaTwitter />
            </a>
            <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CBEA7B] p-2 text-[18px] rounded-md"
            >
            <FaLinkedin />
            </a>
        </div>
        </div>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 right-0 transform -translate-x-1/2 bg-[#234338] text-white px-6 py-3 rounded-lg shadow-lg ">
          ✅ Thank you! Your message has been sent.
        </div>
      )}
    </div>
  );
}

export default ContactForm;
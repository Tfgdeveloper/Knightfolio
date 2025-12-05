import React, { useState } from "react";
import { useNavigate, Link } from "react-router";

const ContactFooter= () => {
  const navigate = useNavigate();

  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
   
    message: "",
    page_url: window.location.href, 
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.glenfallpublications.com/api/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      
      // Redirect to thank you page after successful submission
      navigate("/thank-you");
    } catch (error) {
      alert("Failed to send form: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full space-y-4 space-x-2 flex flex-col justify-center items-center">
     
      <div className="w-full mb-3">
        <label 
          htmlFor="name" 
          className="block mb-0 text-[18px] font-semibold text-gray-700 text-left"
        >
          Name <span className="text-red-500 text-[12px]">*</span>
        </label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter Your Name"
          title="Please enter your full name (first and last name, letters only)"
           className="w-full border border-[#B2B2B2] px-3 py-3 text-black md:text-[16px] text-[12px] rounded outline-none focus:border-[#FEC325] focus:ring-2 focus:ring-[#FEC325]/40 transition-all duration-200"
        />
      </div>
        <div className="w-full mb-3">
        <label 
          htmlFor="name" 
          className="block mb-0 text-[18px] font-semibold text-gray-700 text-left"
        >
         Phone  <span className="text-red-500 text-[12px]">*</span>
        </label>
        
        <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Your Phone Number"
 
        title="Enter a valid US number in this format: +1 123 456 7890"
        
                 className="w-full border border-[#B2B2B2] px-3 py-4 text-black md:text-[16px] text-[12px] rounded outline-none focus:border-[#FEC325] focus:ring-2 focus:ring-[#FEC325]/40 transition-all duration-200"/>
      </div>
      <div className="w-full mb-3">
        <label 
          htmlFor="name" 
          className="block mb-0 text-[18px] font-semibold text-gray-700 text-left"
        >
          Email <span className="text-red-500 text-[12px]">*</span>
        </label>
        
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter Your Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Please enter a valid email address"
                   className="w-full border border-[#B2B2B2] px-3 py-4 text-black md:text-[16px] text-[12px] rounded outline-none focus:border-[#FEC325] focus:ring-2 focus:ring-[#FEC325]/40 transition-all duration-200"/>
      </div>
    
    

      <div className="w-full mb-3">
        <label 
          htmlFor="name" 
          className="block mb-0 text-lg font-semibold text-gray-700 text-left"
        >
          Message <span className="text-red-500 text-[12px]">*</span>
        </label>
      
      <textarea
        rows="4"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Tell us about your book project"
        pattern=".{10,}"
        title="Please enter at least 10 characters"
        className="w-full border border-[#B2B2B2] px-3 py-4 text-black md:text-[16px] text-[12px] rounded outline-none focus:border-[#FEC325] focus:ring-2 focus:ring-[#FEC325]/40 transition-all duration-200"/>
      </div>
        

      <button
        type="submit"
        className="text md:text-[18px] text-[14px] w-full bg-[#FEC325] hover:bg-white text-black  font-bold py-3 px-8 rounded-lg border-2 border-white hover:border-[#FEC325]"
      >
        Send
      </button>
    </form>
  );
};

export default ContactFooter;

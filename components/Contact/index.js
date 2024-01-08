import React, { useState } from "react";
import dynamic from "next/dynamic";
import contact from "../../public/assets-json/contact.json";
import { toast, Toaster } from "react-hot-toast";
import { client } from "../../lib/client";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormIncomplete = Object.values(formData).some(
      (value) => value === ""
    );
    if (isFormIncomplete) {
      return toast.error("Please fill all details");
    }

    setLoading(true);

    try {
      console.log("Form Data:", formData);
      const response = await fetch("/api/saveContactDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        throw new Error("Failed to save form data");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
      toast.error("Failed to send messagae. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-[90%] select-none mx-auto  text-white text-center">
      <h1 className="mb-[5vh] text-[5vh]">Contact</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-row items-center">
          <Lottie
            animationData={contact}
            className="w-[90vw] mx-auto md:w-[35vw]"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="w-[80vw] md:w-[40vw] mx-auto md:py-[6vh] ml-[2vh]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-start"
            >
              <h2 className="text-left text-[2.8vh] md:text-[3.3vh] font-normal text-neutral-200">You can drop a message for any tech related queries, I will reach out you soon</h2>
              <div className="mt-[6vh] border-2 border-black">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="text-white bg-transparent border border-gray-500 text-[2.3vh] w-full p-[1vh] focus:outline-none"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-[4vh] border-2 border-black">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="text-white bg-transparent border border-gray-500 text-[2.3vh] w-full p-[1vh] focus:outline-none"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-[4vh] border-2 border-black">
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="text-white bg-transparent border border-gray-500 text-[2.3vh] w-full p-[1vh] focus:outline-none"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-[4vh] border-2 border-black">
                <input
                  type="text"
                  placeholder="Enter Message"
                  className="text-white bg-transparent border border-gray-500 text-[2.3vh] w-full p-[1vh] focus:outline-none"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-[4vh] flex flex-row text-white text-[2.2vh] font-semibold">
                <button
                  type="submit"
                  className={`btngradient p-[1.5vh] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

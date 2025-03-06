import React, { useState } from "react";
import dummyImage from "../assets/images/dummyImg.png"; // Replace with actual image
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    name: "John Doe",
    image: dummyImage,
  },
  {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    name: "Sarah Smith",
    image: dummyImage,
  },
  {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    name: "Michael Brown",
    image: dummyImage,
  },
  {
    text: "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    name: "Emily Davis",
    image: dummyImage,
  },
];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="bg-white py-12 px-6 w-full flex flex-col lg:flex-row justify-center items-start gap-16">
      {/* Contact Form */}
      <div className="w-full max-w-md">
        <h2 className="text-[50px] font-afterglow text-[#003A60]">Contact Us</h2>
        <form className="mt-4">
          <label className="block font-lato text-[17px] text-[#43413E] mb-2">
            Your Name (required)
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <label className="block font-lato text-[17px] text-[#43413E] mt-4 mb-2">
            Your Email (required)
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <label className="block font-lato text-[17px] text-[#43413E] mt-4 mb-2">
            Your Message
          </label>
          <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[#004225] text-white rounded hover:bg-[#002b18] transition-all"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-2xl relative">
        <h2 className="text-[50px] font-afterglow text-[#003A60]">
          Testimonials
        </h2>

        <div className="flex gap-6 overflow-hidden mt-4">
          {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            return (
              <div
                key={index}
                className="border-l border-gray-300 pl-6 w-1/2 flex flex-col"
              >
                <p className="text-[14px] font-lato text-[#43413E]">
                  {testimonials[index].text}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <span className="text-[#003A60] font-semibold">
                    {testimonials[index].name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow Buttons */}
        <div className="absolute bottom-0 right-0 flex gap-3 mt-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

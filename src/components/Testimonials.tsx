import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Gaurav kumar is one of the most talented FrontEnd Desinger I've worked with. His attention to detail and problem-solving skills are exceptional.",
    author: "Rajesh Kumar ",
    role: "Chief Manager , Client",
    avatar:
      "https://cdn.vectorstock.com/i/1000v/41/91/avatar-default-user-profile-icon-simple-flat-grey-vector-57234191.jpg",
  },
  {
    quote:
      "Working with Gaurav kumar was a game-changer for our project. He delivered ahead of schedule and exceeded our expectations.",
    author: "Madhu Sharma",
    role: "Cental Vigilance Commision, Director",
    avatar:
      "https://cdn.vectorstock.com/i/1000v/41/91/avatar-default-user-profile-icon-simple-flat-grey-vector-57234191.jpg",
  },
  {
    quote:
      "Gaurav's expertise in user interface Desinging helped us rebuild our entire frontend with a much better user experience.",
    author: "Rajeev",
    role: "Team Manager",
    avatar:
      "https://cdn.vectorstock.com/i/1000v/41/91/avatar-default-user-profile-icon-simple-flat-grey-vector-57234191.jpg",
  },
  {
    quote:
      "Not only is Gaurav Kumar a talented UI designer, but he also has an incredible eye for detail and user experience.",
    author: "Shashank",
    role: "Senior Developer, Team",
    avatar:
      "https://cdn.vectorstock.com/i/1000v/41/91/avatar-default-user-profile-icon-simple-flat-grey-vector-57234191.jpg",
  },
];

export default function Testimonials() {
  const [slide, setSlide] = useState(0);

  const previous = () => {
    setSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setSlide((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <section
      className="py-10 "
      style={{
        background:
          "linear-gradient( 270deg, rgb(4, 17, 26) 0%, rgb(7, 45, 53) 50%, rgb(4, 17, 26) 100% ",
      }}
    >
      <div className="mb-4 text-center">
        <p className="text-lg font-bold text-white-200 mb-4">What people say</p>
        <h3 className="text-3xl md:text-3xl font-bold text-teal-400">
          Kinds words from{" "}
          <span className="text-white text-sans italic">
            amazing <br /> people.
          </span>
        </h3>
      </div>
      <div className="relative shadow-[4px_4px_4px_0px_#000] p-5 w-xl pt-5 bg-white/50 rounded-xl m-auto mt-10 ">
        <span className="absolute -top-4 left-4 rounded-2xl bg-teal-600">
          <Quote size={30} className="p-2" />
        </span>
        <p className="text-black mt-4 transition-all">
          {testimonials[slide].quote}
        </p>
        <div className="flex gap-4 mt-3">
          <img
            src={testimonials[slide].avatar}
            className="rounded-full w-15 h-15 object-cover"
            alt="Author Image"
          />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-black font-sans">
              {testimonials[slide].author}
            </p>
            <p className="text-black/100 text-sm">{testimonials[slide].role}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center mt-5">
        <button
          className="p-2 bg-cyan-800 rounded-full shadow-[0px_0px_2px_0px_#fff] cursor-pointer transition-all hover:bg-cyan-700 hover:shadow-[0px_0px_2px_1px_#fff]"
          onClick={previous}
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, indx) => (
            <button
              className={`w-2 h-2 bg-white/20 rounded-full transition-all ${indx === slide ? "w-6 bg-cyan-400 rounded-xl" : ""}`}
            />
          ))}
        </div>
        <button
          className="p-2 bg-cyan-800 rounded-full shadow-[0px_0px_2px_0px_#fff] cursor-pointer transition-all hover:bg-cyan-700  hover:shadow-[0px_0px_2px_1px_#fff]"
          onClick={next}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

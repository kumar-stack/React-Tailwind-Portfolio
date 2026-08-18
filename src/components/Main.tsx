import Button from "./Button";
import { ArrowRight, Download } from "lucide-react";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import "../App.css";
import Contact from "./ContactMe";

export default function Main() {
  const List = [
    "Html5",
    "Css3",
    "Bootstrap5",
    "JavaScript",
    "JQuerry",
    "Git",
    "React",
    "TailwindCss",
    "TypeScript",
  ];

  return (
    <div
      className="relative min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('/Images/hero-bg.jpg')",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-2xl bg-white absolute opacity-80"
            style={{
              animation: `particles ${15 + Math.random() * 10}s ease-in-out infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen w-full">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 grid items-center gap-20 md:grid-cols-2 max-sm:gap-15 px-4 md:px-10 lg:px-20 max-md:px-2 max-md:mt-10">
          <div className="relative z-10">
            <span className="desg ml-0 flex items-center max-w-max glass relative sm:text-[12px] sm:rounded-[1px] max-sm:mt-50 ">
              <span className="w-2 h-2 rounded-2xl bg-teal-900 inline-block animate-pulse mr-2 align-middle " />
              Software Engineer - React Specialist
            </span>

            <h2 className="text-white max-md:text-xl max-md:text-center max-lg:text-2xl max-xl:text-3xl text-7xl font-bold font-sans  tracking-wider mt-4 max-md:tracking-normal">
              Crafting <span className="text-teal-700">digital</span> <br />
              experience with
              <span className="text-white italic font-light font-serif text-4xl inline-block max-md:text-m max-md:ml-[2px]">
                precision.
              </span>
            </h2>

            <p className="text-gray-300  my-5 text-[20px] max-md:text-xl max-md:mx-4 max-md:text-justify max-md:mt-4 max-md:mb-10">
              Hi, I'm Gaurav Kumar - a software engineer specializing in React,
              Tailwindcss and TypeScript. I build scalable, performant web
              applications that users love.
            </p>

            <div className="mt-3 flex gap-5 flex-wrap max-md:mt-0">
              <Button>
                Contact Me <ArrowRight size={18} />
              </Button>

              <button className="relative flex items-center gap-2 overflow-hidden rounded-xl px-5 py-1.5 text-white backdrop-blur transition-all duration-300 hover:scale-[1.03] cursor-pointer max-md:pt-0">
                <span className="absolute -inset-full origin-center -z-10 animate-[spin_2.5s_linear_infinite] bg-green-900" />
                <span className="absolute inset-px -z-10 rounded-[11px] bg-slate-950/80 backdrop-blur-xl transition-all duration-300" />
                <span className="relative z-10">Download</span>
                <Download size={18} />
              </button>
            </div>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end max-md:pb-30 ">
            <div className="p-5 shadow-[0px_0px_5px_0px_#fff] rounded-2xl relative">
              <img
                src="/Images/profile3.jpg"
                className="w-[420px] h-[520px] rounded-xl object-cover object-top max-xl:w-[320px] max-xl:h-[420px] max-md:w-[290px] max-md:h-[200px]"
                alt="profile Image"
              />

              <div
                className="absolute -top-8 -left-5 flex gap-2 flex-col glass"
                style={{ borderRadius: "10px" }}
              >
                <span className="inline-block text-blue-300 w-2 h-2">5</span>
                <span className="inline-block font-mono text-sm">
                  Years Exp.
                </span>
              </div>

              <div
                className="absolute -bottom-2 -right-1 glass"
                style={{ borderRadius: "8px" }}
              >
                <span className="w-2 h-2 bg-green-300 animate-pulse inline-block mr-3 rounded-xl"></span>
                <span>Available for Work</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 overflow-hidden w-full max-md:-bottom-45 ">
          <p className="ml-20 mb-8 text-gray-200 font-bold max-md:mb-4">
            Technologies I work with :
          </p>
          <div className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_90%,transparent)] w-[80%] m-auto overflow-hidden">
            <div className="flex w-max animate-[marquee_25s_linear_infinite] text-white/50 cursor-pointer">
              {[...List, ...List].map((lst, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-white align-middle">*</span>
                  <span className="px-20 hover:text-teal-700">{lst}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg,rgba(4, 17, 26, 1) 0%, rgba(7, 45, 53, 1) 50%)",
        }}
      >
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

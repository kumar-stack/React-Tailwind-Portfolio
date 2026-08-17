import { ArrowUpRight } from "lucide-react";
import React from "react";

const projectsList = [
  {
    id: "0",
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visua",
    image: "/ProjectsIMages/project1.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScrip", "JQuery"],
    link: "https://www.gailonline.com/",
    github: "#",
  },
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment",
    image: "/ProjectsIMages/project2.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScrip", "JQuery"],
    link: "#",
    github: "#",
  },
  {
    id: "2",
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create bet",
    image: "/ProjectsIMages/project3.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "SASS"],
    link: "#",
    github: "#",
  },
  {
    id: "3",
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking and project coordination.",
    image: "/ProjectsIMages/project4.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScrip", "SASS"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="project">
      <div className="py-10 ">
        <div className="text-center mb-10">
          <span className="text-xl text-teal-400">FEATURED WORK</span>
          <h2 className="text-5xl text-teal-700">
            Projects that <span className="text-white">makes an impact.</span>
          </h2>
          <span className="w-[60%] mx-auto font-normal text-gray-300">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real worlds problems
          </span>
        </div>

        <div>
          <div className="grid px-15 max-md:grid-cols-1 grid-cols-2 gap-10 max-md:gap-5 max-md:px-5 md:h-auto">
            {projectsList.map((prj, id) => (
              <div
                key={id}
                className="relative overflow-hidden aspect-video hover:shadow-[0px_0px_1px_0px_#fff] rounded-2xl duration-1000 transition-transform group-hover:scale-104 group  "
              >
                <div className=" overflow-hidden bg-white/10 backdrop-blur-2xl  h-full flex flex-col gap-1 ">
                  {
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-full h-[80%] max-md:h-[150px]  overflow-hidden object-cover group-hover:scale-110 transition-all"
                    />
                  }
                  <div className="px-3 py-5 ">
                    <p
                      key={id}
                      className="flex justify-between mb-3 font-extrabold text-lg"
                    >
                      {projectsList[id].title}
                      <ArrowUpRight />
                    </p>
                    <span className="text-white/60 text-sm font-normal mb-2 inline-block">
                      {prj.description}
                    </span>
                    <div className="flex flex-wrap gap-5 py-2">
                      {projectsList[2].tags.map((tag) => (
                        <span className="flex items-center cursor-pointer gap-2 rounded-2xl px-4 py-1 shadow-[0px_0px_1px_0px_#fff] text-white bg-teal -500 backdrop-blur-lg hover:bg-white/20 ">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

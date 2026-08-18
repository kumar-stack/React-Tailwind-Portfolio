import { ArrowUpRight } from "lucide-react";

const projectsList = [
  {
    id: "0",
    title: "Gailonline",
    description:
      "GAIL (India) Limited is India's leading natural gas company, with a robust and diversified presence across the entire natural gas value chain and beyond.",
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
    title: "Vendor Zone",
    description:
      " It centralizes procurement-related information, guidelines, and vendor development initiatives.",
    image: "/ProjectsIMages/project3.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "SASS"],
    link: "#",
    github: "#",
  },
  {
    id: "3",
    title: "Gail CGD Portal",
    description:
      "GAIL’s digital ecosystem is a set of online platforms that support GAIL’s CGD business.",
    image: "/ProjectsIMages/project4.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScrip", "SASS"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-10">
      <div className="py-10 ">
        <div className="text-center mb-10 ">
          <span className="text-xl text-teal-400 max-md:text-sm">
            FEATURED WORK
          </span>
          <h2 className="text-3xl text-teal-700 md:text-3xl font-bold leading-tight max-md:text-xl">
            Projects that <span className="text-white">makes an impact.</span>
          </h2>
          <span className="w-[60%] mx-auto font-normal text-gray-300">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real worlds problems
          </span>
        </div>

        <div>
          <div className="grid px-15 md:px-10 max-md:grid-cols-1 grid-cols-2 gap-10 max-md:gap-5 max-md:px-5 md:h-auto">
            {projectsList.map((prj, id) => (
              <div
                key={id}
                className="relative overflow-hidden aspect-video hover:shadow-[0px_0px_1px_0px_#fff] rounded-2xl duration-1000 transition-transform group-hover:scale-104 group max-md:h-[380px] lg:h-full max-md:max-w-full max-lg:aspect-auto"
              >
                <div
                  key={id}
                  className=" overflow-hidden bg-white/10 backdrop-blur-2xl  h-full flex flex-col gap-1 "
                >
                  {
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-full h-[80%] max-md:h-[800px] max-md:w-full overflow-hidden object-cover group-hover:scale-110 transition-all"
                    />
                  }
                  <div className="px-3 py-5 max-md:py-1">
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
                      {prj.tags.map((tag, indx) => (
                        <span
                          key={indx}
                          className="flex items-center cursor-pointer gap-2 rounded-2xl px-4 py-1 shadow-[0px_0px_1px_0px_#fff] text-white backdrop-blur-lg hover:bg-white/20 max-md:text-sm"
                        >
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

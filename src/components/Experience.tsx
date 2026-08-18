const experiences = [
  {
    period: "2023 – Present",
    role: "Senior Frontend Engineer",
    company: "Coforge Limited",
    description: "Leading frontend architecture for a suite products..",
    technologies: [
      "React",
      "TailwindCss",

      "HTML5",
      "CSS3",
      "Bootstrap",
      "Git",
      "Sass",
    ],
    current: true,
  },
  {
    period: "2021 – 2023",
    role: "Frontend Engineer",
    company: "Binsar E-solutions",
    description: "Specialized in building Rental Websites for client.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Git", "Sass"],
    current: false,
  },
  {
    period: "2020 – 2021",
    role: "Training",
    company: "NA",
    description: "NA",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-md:px-2 md:p-10 scroll-mt-10 max-md:py-10"
      style={{
        background:
          "linear-gradient(180deg,rgba(4, 17, 26, 1) 0%, rgba(7, 45, 53, 1) 50%)",
      }}
    >
      <div className="mb-4">
        <p className="text-md font-bold text-white-200 mb-4 max-md:text-sm">
          CAREER JOURNEY :
        </p>
        <h3 className="text-3xl md:text-3xl font-bold leading-tight max-md:text-xl">
          <span className="text-teal-400">Experience that </span>
          speaks Volumes.
        </h3>

        <p className="text-gray-300 py-2">
          A timeline of my professional growth, from curious beginner to senior
          engineer of team and building products as scale.
        </p>
      </div>
      <div className={`grid grid-cols-2 max-md:grid-cols-1 relative`}>
        <div className="w-1 rounded-full absolute max-md:left-0 left-1/2 top-0 bottom-0 bg-gradient-to-b from-teal-600 via-teal-500  to-transparent h-full md:-translate-x-1/2  " />
        <div>
          {experiences.map((exp, indx) => (
            <div
              className={`max-md:max-w-[95%] ${indx % 2 === 0 ? "text-right max-md:text-left md:pl-1 max-md:pl-5" : "pl-[104%] text-left max-md:pl-1"}`}
            >
              <div className="w-3 h-3 bg-white/20 backdrop-blur-2xl absolute ring-2 rounded-2xl -translate-x-1/2 left-[50%] max-md:left-0.5 ring-white" />
              <div className="p-4 my-4 bg-white/5 backdrop-blur-3xl shadow-[3px_3px_4px_0px_#79797982] rounded-md md:w-xs lg:w-md 2xl:w-2xl">
                <span className="text-cyan-500 text=xs">{exp.period}</span>
                <p className="text-xl font-sans ">{exp.role}</p>
                <h2 className="text-white/40 ">{exp.company}</h2>
                <p className="text-white/40">{exp.description}</p>

                <div
                  className={`flex  gap-2 flex-wrap max-md:mt-4 ${indx % 2 === 0 ? "justify-end max-md:justify-start" : "justify-start text-start"}`}
                >
                  {exp.technologies.map((tech) => (
                    <span className="text-gray-200 border border-gray-400 bg-gray-600 relative backdrop-blur-2xl px-2 rounded-2xl">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export default function About() {
  return (
    <section className="w-full text-white px-4 md:px-10 lg:px-20 py-16">
      <div className="  mx-auto grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-2xl font-bold text-white-200 mb-4">About Me:</p>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-teal-400">Building the future,</span>
            one <br />
            component at a time.
          </h3>

          <p className="text-gray-300 py-2">
            I'm a passionate software engineer with over 5 years of experience
            crafting digital products that make a difference. My journey started
            with a curiosity for how things work on the web and it has evolved
            into a deep expertise in modern frontend technologies.
          </p>

          <p className="text-gray-300 py-2">
            I specialize in React, Next.js, and TypeScript, building everything
            from sleek landing pages to complex enterprise applications. My
            approach combines technical excellence with a keen eye for design
            and user experience.
          </p>

          <p className="text-gray-300 py-2 ">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-15 ">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-lg"
                >
                  <Icon className="text-teal-400 mb-3" size={28} />
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
          <p className="bg-white/10 text-white my-4 p-4 rounded-md backdrop-blur-sm shadow-2xl">
            My mission is to create digital experiences that are not just
            functional, but truly delightful - products that users love to use
            and developers love to maintain.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Ecommerce Computer Store",
    description: "Fullstack ecommerce platform for selling laptops and accessories.",
    image: "/portfolio/ecommerce.png",
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Event Management Platform",
    description: "Event booking system with payment integration.",
    image: "/portfolio/events.png",
    stack: ["React", "Redux", "Express"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Business Landing Page",
    description: "Modern responsive landing page for startups.",
    image: "/portfolio/landing.png",
    stack: ["Next.js", "Tailwind"],
    live: "#",
    github: "#",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2A1870]">Portfolio</h2>
          {/* <p className="text-[#2A1870] mt-2 font-semibold">
            Some projects I have built using modern web technologies.
          </p> */}
          <p className="text-black font-bold">
            Coming Soon
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              
              {/* Image */}
              {/* <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div> */}

              {/* Content */}
              <div className="p-5">

                {/* <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {project.description}
                </p> */}

                {/* Tech Stack */}
                {/* <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* Links */}
                {/* <div className="flex gap-4 mt-4">
                  <Link
                    href={project.live}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Live
                  </Link>

                  <Link
                    href={project.github}
                    className="text-sm font-medium text-gray-700 hover:underline"
                  >
                    GitHub
                  </Link>
                </div> */}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
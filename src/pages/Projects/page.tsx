import {Github, ExternalLink, Cpu, Server, FileCode, Code2, TabletSmartphoneIcon, Laptop} from "lucide-react";
import olova from "@/assets/projects/olova-B0FjVVEL.png";
import portfolio from "@/assets/projects/Annotation 2025-03-20 155334.png";
import codekori from "@/assets/projects/codekori.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";
import PortfolioCard from "@/components/PortfolioCard";
import {SiGraphql, SiMongodb, SiPostgresql} from "react-icons/si";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const projects = [
    {
      icon: Laptop,
      title: "Profili",
      description:
          "",
      tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
      links: {
        github: "https://github.com/olovajs/olova",
        demo: "#",
      },
      image: olova,
      featured: true,
      category: 1,
      color: 'red'
    },
    {
      icon: Code2,
      title: "EQUIMONDO",
      description:
        "Olova.js is a lightweight JavaScript library for building modern, reactive, and dynamic web applications. It features a simple, component-based architecture, enabling developers to create reusable and interactive UI elements with minimal code and overhead.",
      tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
      links: {
        github: "https://github.com/olovajs/olova",
        demo: "https://olova.js.org/",
      },
      image: olova,
      featured: true,
      category: 1,
      color: 'text-blue-400'
    },
    {
      icon: TabletSmartphoneIcon,
      title:
        "Wellbeing",
      description:
        "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
      links: {
        github: "https://github.com/seraprogrammer/portfolio",
        demo: "#",
      },
      image: portfolio,
      featured: true,
      category: 1,
      color: 'text-blue-400'
    },
    {
      icon: Code2,
      title:
        "Nutislab",
      description:
        "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [
        {
          name: "Node.js",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Python",
          icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },      ],
      links: {
        github: "https://github.com/seraprogrammer/CodeKori",
        demo: "https://codekori.js.org/",
      },
      image: codekori,
      featured: true,
      category: 1,
      color: 'text-purple-400'
    },
    {
      icon: Code2,
      title:
          "Cromdn",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: ["React", "Tailwind CSS", "Portfolio", "Typescript"],
      links: {
        github: "https://github.com/seraprogrammer/CodeKori",
        demo: "https://codekori.js.org/",
      },
      image: codekori,
      featured: true,
      category: 2,
      color: 'red'
    },
    {
      icon: Code2,
      title:
          "Optique distribution",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: ["React", "Tailwind CSS", "Portfolio", "Typescript"],
      links: {
        github: "https://github.com/seraprogrammer/CodeKori",
        demo: "https://codekori.js.org/",
      },
      image: codekori,
      featured: true,
      category: 2,
      color: 'text-purple-400'
    },
    {
      icon: Code2,
      title:
          "Lascensoriste",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
      links: {
        github: "https://github.com/seraprogrammer/CodeKori",
        demo: "https://codekori.js.org/",
      },
      image: codekori,
      featured: true,
      category: 2,
      color: 'text-purple-400'
    },
    {
      icon: Code2,
      title:
          "SmartHR",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
      links: {
        github: "https://github.com/seraprogrammer/CodeKori",
        demo: "https://codekori.js.org/",
      },
      image: codekori,
      featured: true,
      category: 1,
      color: 'text-purple-400'
    },
    {
      icon: Code2,
      title:
          "Nutislab",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
      links: {
        github: "https://github.com/seraprogrammer/CodeKori",
        demo: "https://codekori.js.org/",
      },
      image: codekori,
      featured: true,
      color: 'text-purple-400'
    },
  ];

  return (
      <div
          className={`pt-40 min-h-screen p-8 ${
              isDarkMode
                  ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100"
                  : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
          }`}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <h2>Web Development</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects
                .filter((project) => project.category === 1)
                .map((project, index) => (
                    <PortfolioCard
                        key={index}
                        title={project.title}
                        skills={project.tags}
                        isDark={isDarkMode}
                        description={project.description}
                        image={project.image}
                        icon={project.icon}
                        color={project.color}
                    >
                      {/* optional children */}
                    </PortfolioCard>
                ))}
          </div>

          <h2>Machine learning | Deep learning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects
                .filter((project) => project.category === 2)
                .map((project, index) => (
                    <PortfolioCard
                        key={index}
                        title={project.title}
                        skills={project.tags}
                        color="from-emerald-400 to-cyan-500"
                        isDark={isDarkMode}
                        description={project.description}
                        image={project.image}
                        icon={Cpu}
                    >
                      {/* optional children */}
                    </PortfolioCard>
                ))}
          </div>
        </div>
      </div>
  );
};

export default ProjectShowcase;

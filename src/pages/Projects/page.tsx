import {Github, ExternalLink, Cpu, Server, FileCode, Code2, TabletSmartphoneIcon, Laptop} from "lucide-react";
import olova from "@/assets/projects/olova-B0FjVVEL.png";
import equimondo from "@/assets/projects/equimondo.png";
import wellbeing from "@/assets/projects/wellbeing.png";
import cromdn from "@/assets/projects/cromdn.png";
import nutislab from "@/assets/projects/nutislab.png";
import lascensoriste from "@/assets/projects/nutislab.png";
import botanical from "@/assets/projects/botanical.png";
import parcus from "@/assets/projects/parcus.png";
import linkaura from "@/assets/projects/linkaura.jpg";


import portfolio from "@/assets/projects/Annotation 2025-03-20 155334.png";
import codekori from "@/assets/projects/codekori.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";
import PortfolioCard from "@/components/PortfolioCard";
import {SiGraphql, SiMongodb, SiPostgresql, SiPython, SiRedux} from "react-icons/si";
import {FaWordpress} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";

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
   /* {
      icon: Code2,
      title: "Profili",
      description:
          "Is a web plateform to generate website portfolio with resume parser and a drag and drop system",
      tags: [
        {
          name: "Node.js",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Flask",
          icon: <SiPython className="w-4 h-4 text-[#4584b6]" />,
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
          name: "React JS",
          icon: <SiRedux className="w-4 h-4 text-[#764ABC]" />,
        },
      ],
      links: {
        github: "https://github.com/olovajs/olova",
        demo: "#",
      },
      image: olova,
      featured: true,
      category: 1,
      color: 'text-purple-400',
      cms:''
    },*/
    {
      icon: Code2,
      title: "EQUIMONDO",
      description:
        "A web plateform dedicated to manage equesterian centers",
      tags: [
        {
          name: "Php",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "HTML",
          icon: <SiPython className="w-4 h-4 text-[#4584b6]" />,
        },
        {
          name: "Css",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
      links: {
        github: "https://github.com/equimondo1/",
        demo: "https://alpha.equimondo.fr/",
      },
      image: equimondo,
      featured: true,
      category: 1,
      color: 'text-blue-400',
      cms:''
    },
    {
      icon: Code2,
      title:
        "Wellbeing",
      description:
        "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
      links: {
        github: "https://github.com/seraprogrammer/portfolio",
        demo: "#",
      },
      image: wellbeing,
      featured: true,
      category: 1,
      color: 'text-blue-400',
      cms:''
    },
    {
      icon: Code2,
      title:
        "Nutislab",
      description:
        "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [
        {
          name: "Angular",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Laravel",
          icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "MySQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "REST APIs",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
              ],
      links: {
        github: "https://github.com/FarahKa/nutislabFront",
        demo: "https://dashboad.nutislab.com/",
      },
      image: nutislab,
      featured: true,
      category: 1,
      color: 'text-purple-400',
      cms:''
    },
    {
      icon: Code2,
      title:
          "Cromdn",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [
        {
          name: "Html",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "CSS",
          icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "MySQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Laravel",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
      links: {
        github: "https://github.com/Ryhanee/CROMDN",
        demo: "https://cromdn.business-mania.services/",
      },
      image: cromdn,
      featured: true,
      category: 1,
      color: 'text-purple-400',
      cms:''
    },
    {
      icon:'' ,
      title:
          "Linkaura",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [
        {
          name: "Html",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "CSS",
          icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "Flask",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Machine learning",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
      links: {
        github: "#",
        demo: "#",
      },
      image: linkaura,
      featured: true,
      category: 2,
      color: 'text-purple-400',
      cms: <FaWordpress className="w-4 h-4 text-[#E10098]" />
    },
    {
      icon: '',
      title:
          "Lascensoriste",
      description:
          "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "CSS",
          icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "jQuery",
          icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" />,
        },
      ],
      links: {
        github: "#",
        demo: "https://lascensoriste.tn/",
      },
      image: lascensoriste,
      featured: true,
      category: 2,
      color: 'text-purple-400',
      cms: <FaWordpress className="w-4 h-4 text-[#E10098]" />
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
      color: 'text-purple-400',
      cms:''
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
      color: 'text-purple-400',
      category: 1,
      cms:''
    },
  ];
// TODO
  //FIX DESCRIPTIONS AND LINKS AND IMAGES AND ICONS
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
                        cms={project.cms}
                        category={project.category}
                        links={project.links}
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

import {
  Server,
  FileCode,
  Code2 } from "lucide-react";

import equimondo from "@/assets/projects/equimondo.jpg.jpg";
import wellbeing from "@/assets/projects/wellbeing.png";
import cromdn from "@/assets/projects/cromdn.png";
import nutislab from "@/assets/projects/nutislab.png";
import lascensoriste from "@/assets/projects/lascensoriste-1.jpg.jpg";
import botanical from "@/assets/projects/botanical.png";
import linkaura from "@/assets/projects/linkaura.jpg";
import optic from "@/assets/projects/optique-distibution.jpg";
import eyeverda from "@/assets/projects/eyeverda.jpg";
import marship from "@/assets/projects/marship.jpg";
import craftech from "@/assets/projects/craftech.jpg";
import no_image from "@/assets/projects/Image-not-found.png"

import { useTheme } from "@/provider/page";
import PortfolioCard from "@/components/PortfolioCard";
import {
  SiGraphql,
  SiJquery, SiLaravel,
  SiMongodb,
  SiMysql, SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiServerless
} from "react-icons/si";
import {FaWordpress} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";
import {useState} from "react";

// const MacOsButtons = () => (
//   <div className="flex gap-2 mb-4">
//     <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
//     <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
//     <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
//   </div>
// );

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [activeTab, setActiveTab] = useState("apps"); // 'apps' or 'websites'

  const tabClasses = (tab: string) =>
      `px-4 py-2 rounded-t-md text-sm font-medium transition ${
          activeTab === tab
              ? isDarkMode
                  ? "bg-slate-800 text-white"
                  : "bg-white text-gray-900 shadow"
              : isDarkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
      }`;

  const projects = [
    {
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
        github: "https://github.com/Ryhanee/profili",
        demo: "#",
      },
      image: no_image,
      featured: true,
      category: 1,
      color: 'text-purple-400',
      cms:''
    },
    {
      icon: Code2,
      title: "EQUIMONDO",
      description:
        "Web application designed to meet the specific needs of equestrian centres. It's built with Php, providing a clean and professional look",
      tags: [
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "jQuery",
          icon: <SiJquery className="w-4 h-4 text-[#4584b6]" />,
        },
        {
          name: "Ajax",
          icon: <SiJquery className="w-4 h-4 text-[#47A248]" />,

        },
        {
          name: "REST APIs",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },

        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#764ABC]" />,
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
      description:"Mobile application: a marketplace for reserving beauty & care services, it contain AI features to detect skin problems and recommendation systems ",
      tags: [
        {
          name: "React Native",
          icon: <SiReact className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#4584b6]" />,
        },
        {
          name: "REST APIs",
          icon: <SiServerless className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Node JS",
          icon: <SiNodedotjs className="w-4 h-4 text-[#764ABC]" />,
        },
        {
          name: "Amazon EC2",
          icon: <Server className="w-4 h-4 text-[#764ABC]" />,
        },
      ],
      links: {
        github: "https://github.com/Ryhanee/wellness-backend",
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
        "Web application dedicated to manage orthodontists and their clients needs. Built with Laravel, Angular and MySQL as database.",
      tags: [
        {
          name: "Laravel",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Angular",
            icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "MySQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "REST APIs",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
      ]
      ,

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
          "Web application dedicated to manage and filter tunisian dentists based on multiple features. Built with laravel and MySQL as database",
      tags: [
        {
          name: "Laravel",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
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
      icon:Code2,
      title:
          "Linkaura",
      description:
          "An API of an intelligent instagram influencers based on specific inputs. Built with Flask, ML models and mongodb as database",
      tags: [
        {
          name: "Flask",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Machine learning",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Mongo DB",
          icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
      links: {
        github: "https://github.com/Ryhanee/linkaura",
        demo: "#",
      },
      image: linkaura,
      featured: true,
      category: 1,
      color: 'text-purple-400',
      cms:''
    },
    {
      icon: FaWordpress,
      title:
          "Lascensoriste",
      description:
          "E-commerce website to sell elevators elements.",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#3776AB]" />,
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
      icon: FaWordpress,
      title:
          "Marship",
      description:
          "Website of MARSHIP a freight forwarding company based in Morocco.",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#3776AB]" />,
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
        demo: "https://marship.parcus.fr/en/home/",
      },
      image: marship,
      featured: true,
      category: 2,
      color: 'text-purple-400',
      cms:''
    },
    {
      icon: FaWordpress,
      title:
          "Botanical",
      description: "E-commerce website for a tunisian brand to sell natural based products.",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#3776AB]" />,
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
        demo: "https://botanical-collection.com/",
      },
      image: botanical,
      featured: true,
      color: 'text-purple-400',
      category: 2,
      cms:''
    },
    {
      icon: FaWordpress,
      title:
          "Atelier la fabrique",
      description:
          "Website for an architecture to present his services",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#3776AB]" />,
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
        demo: "https://atelierlafabrique.fr/",
      },
      image: no_image,
      featured: true,
      color: 'text-purple-400',
      category: 2,
      cms:''
    },

    {
      icon: FaWordpress,
      title:
          "CRAFTECH",
      description:
          "A website of a digital agency that represent's it's services.",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#3776AB]" />,
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
        demo: "http://craftech-digital.com/",
      },
      image: craftech,
      featured: true,
      color: 'text-purple-400',
      category: 2,
      cms:''
    },
    {
      icon: FaWordpress,
      title:
          "Optic distribution",
      description:
          "A website to represent a company which sell ophtalmological materials.",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#3776AB]" />,
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
        demo: "https://optiquedistribution.net/",
      },
      image: optic,
      featured: true,
      color: 'text-purple-400',
      category: 2,
      cms:''
    },

    {
      icon: Code2,
      title:
          "Simulateur",
      description:
          "Web tool to calculate the cost of a digital service based on client choices with AI features to analyse client extra services, Built with React JS and Laravel.",
      tags: [
        {
          name: "React JS",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#3776AB]" />,
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
        github: "https://github.com/Ryhanee/simulateur-craftech",
        demo: "#"
      },
      image: no_image,
      featured: true,
      color: 'text-purple-400',
      category: 1,
      cms:''
    },
    {
      icon: FaWordpress,
      title:
          "Eyeverda",
      description:
          "A Tunisia's first digital hub dedicated to sustainable innovation and the green economy!",
      tags: [
        {
          name: "Wordpress",
          icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <SiPhp className="w-4 h-4 text-[#3776AB]" />,
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
        demo: "https://eyeverda.com/",
      },
      image: eyeverda,
      featured: true,
      color: 'text-purple-400',
      category: 2,
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

        <div className="text-center mb-8">
          <h1
              className={`text-4xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
              } bg-clip-text text-transparent bg-gradient-to-r ${
                  isDarkMode
                      ? "from-[#0A409B] to-[#47088F]"
                      : "from-[#0A409B] to-[#47088F]"
              }`}
          >
            My Recent projects
          </h1>
        </div>

        <div className="text-center">
          <div
              className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${
                  isDarkMode ? "bg-white/5" : "bg-black/5"
              } backdrop-blur-sm border ${
                  isDarkMode ? "border-white/10" : "border-black/10"
              }`}
          >
          <span
              className={`text-sm font-medium tracking-wider uppercase ${
                  isDarkMode ? "text-blue-300" : "text-blue-600"
              }`}
          >
            Projects of the year
          </span>
            <span
                className={`inline-block w-1.5 h-1.5 rounded-full ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-500"
                } animate-pulse`}
            ></span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 my-2 md:my-0">
          {/* Tabs */}
          <div className="flex space-x-4 border-b border-slate-300 dark:border-slate-700">
            <button className={tabClasses("apps")} onClick={() => setActiveTab("apps")}>
              Web Applications | APIs
            </button>
            <button className={tabClasses("websites")} onClick={() => setActiveTab("websites")}>
              Websites
            </button>
          </div>

          {/* Tab content */}
          {activeTab === "apps" && (
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
                            links={project.links}
                        />
                    ))}
              </div>
          )}

          {activeTab === "websites" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects
                    .filter((project) => project.category === 2)
                    .map((project, index) => (
                        <PortfolioCard
                            key={index}
                            title={project.title}
                            skills={project?.tags}
                            color={project.color}
                            isDark={isDarkMode}
                            description={project.description}
                            image={project.image}
                            icon={project.icon}
                            links={project.links}
                        />
                    ))}
              </div>
          )}
        </div>
      </div>
  );
};

export default ProjectShowcase;

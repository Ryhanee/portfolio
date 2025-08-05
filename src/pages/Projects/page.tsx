import {
  Github,
  ExternalLink,
  Cpu,
  Server,
  FileCode,
  Code2,
  TabletSmartphoneIcon,
  Laptop,
  ServerIcon
} from "lucide-react";
import olova from "@/assets/projects/olova-B0FjVVEL.png";
import equimondo from "@/assets/projects/equimondo.png";
import wellbeing from "@/assets/projects/wellbeing.png";
import cromdn from "@/assets/projects/cromdn.png";
import nutislab from "@/assets/projects/nutislab.png";
import lascensoriste from "@/assets/projects/nutislab.png";
import botanical from "@/assets/projects/botanical.png";
import parcus from "@/assets/projects/parcus.png";
import linkaura from "@/assets/projects/linkaura.jpg";

import Projects from "../../Services/projects";


import portfolio from "@/assets/projects/Annotation 2025-03-20 155334.png";
import codekori from "@/assets/projects/codekori.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";
import PortfolioCard from "@/components/PortfolioCard";
import {
  SiGraphql,
  SiJquery,
  SiMongodb,
  SiMysql, SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiServerfault, SiServerless
} from "react-icons/si";
import {FaWordpress} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";
import {useState} from "react";

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
  const [activeTab, setActiveTab] = useState("apps"); // 'apps' or 'websites'

  const tabClasses = (tab) =>
      `px-4 py-2 rounded-t-md text-sm font-medium transition ${
          activeTab === tab
              ? isDarkMode
                  ? "bg-slate-800 text-white"
                  : "bg-white text-gray-900 shadow"
              : isDarkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
      }`;

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
                      ? "from-blue-400 via-purple-400 to-pink-400"
                      : "from-blue-600 via-purple-600 to-pink-600"
              }`}
          >
            My Recent project
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
            Technologies I work with
          </span>
            <span
                className={`inline-block w-1.5 h-1.5 rounded-full ${
                    isDarkMode ? "bg-blue-400" : "bg-blue-500"
                } animate-pulse`}
            ></span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
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
                            cms={project.cms}
                            category={project.category}
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
                            color="from-emerald-400 to-cyan-500"
                            isDark={isDarkMode}
                            description={project.description}
                            image={project.image}
                            icon={Cpu}
                        />
                    ))}
              </div>
          )}
        </div>
      </div>
  );
};

export default ProjectShowcase;

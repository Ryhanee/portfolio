import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/provider/page";
import { Marquee } from "@/components/magicui/marquee";
import {
    Code2,
    Paintbrush,
    Database,
    Layout,
    Cpu,
    Cloud,
    Sparkles,
    Layers,
    GitBranch,
    Server,
    Globe,
    FileCode,
    Figma,
    Github,
    CloudCog, Tags, ExternalLink,
} from "lucide-react";

import { FaDocker, FaLinux } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiGraphql,
    SiJest,
    SiWebpack,
    SiRedux,
    SiFirebase,
    SiVercel,
    SiVite,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";

//TODO
// FIX LINKS
interface Project {
    name: string;
    icon: React.ReactNode;
}

interface Link {
    demo: string;
    github: string;
}


interface PortfolioCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    skills: Project[];
    color: string;
    isDark: boolean;
    description: string;
    image: string;
    links: Link
}

const PortfolioCard = ({
                       icon: Icon,
                       title,
                       skills,
                       color,
                       isDark,
                       description,
                        image,
                        category,
                        links

                   }: PortfolioCardProps) => (
    <Card
        className={`group relative overflow-hidden ${
            isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/90 border-gray-200"
        } hover:scale-[1.02] transition-all duration-300 hover:shadow-xl ${
            isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
        }`}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
        <img src={image}
             alt={title}
             className="aspect-3/2 w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75" />

        <CardContent className="p-6 relative z-10">

            <div className="flex items-center gap-4 mb-6">

                <div
                    className={`p-3 rounded-xl ${
                        isDark ? "bg-gray-800/50" : "bg-gray-100"
                    } ${color} group-hover:scale-110 transition-transform duration-300`}
                >


                        <Icon className="w-8 h-8" />
                                 </div>
                <h3
                    className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                        isDark ? "from-white to-gray-400" : "from-gray-900 to-gray-600"
                    }`}
                >
                    {title}
                </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className={`group/badge relative ${
                            isDark
                                ? "bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
                        } flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                            isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
                        }`}
                    >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
                        <span className="font-medium">{skill.name}</span>
                    </Badge>
                ))}
                <div className="text-white line-clamp-3"><p
                    className={`border-l-2 border-teal-500 pl-3 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >{description}</p></div>
            </div>
        </CardContent>
        <div className="flex gap-4">

            {
                links?.github != '' && <a
                    href={(links?.github || "#")}
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github size={22} />
                </a>
            }

            {
                links?.demo && <a
                    href={(links?.github || "#")}
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink size={22} />
                </a>
            }

        </div>
    </Card>
);

export default PortfolioCard;

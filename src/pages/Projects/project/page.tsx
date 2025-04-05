import {Github, ExternalLink, Cpu, Server, FileCode} from "lucide-react";
import olova from "@/assets/projects/olova-B0FjVVEL.png";
import portfolio from "@/assets/projects/Annotation 2025-03-20 155334.png";
import codekori from "@/assets/projects/codekori.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";
import PortfolioCard from "@/components/PortfolioCard";
import {SiGraphql, SiMongodb, SiPostgresql} from "react-icons/si";

const Project = () =>
{
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";

    return (<h2>Hello</h2>);
}

export default Project;

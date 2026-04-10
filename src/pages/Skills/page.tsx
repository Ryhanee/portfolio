import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { Marquee } from "@/components/magicui/marquee";
import {
  Code2,
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
  CloudCog,
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
  SiVite,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import {Helmet} from "react-helmet-async";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: Skill[];
}

const translations = {
  en: {
    metaTitle: "Full-Stack Developer & Data Scientist Skills | React, Node.js, Python | Rihane Dalhoum – Tunis",
    metaDesc: "Explore Rihane Dalhoum's full technical stack: React, Next.js, Angular, Node.js, PHP, Python, PostgreSQL, MongoDB, Docker, Machine Learning and more. Full-stack developer & data scientist based in Tunis, Tunisia — available for remote projects worldwide.",
    keywords: "full-stack developer Tunis, data scientist Tunisia, React developer, Node.js developer, Python developer, freelance developer Tunisia, web development skills, machine learning engineer, remote developer Africa",
    heading: "My Tech Stack",
    subtitle: "Technologies I work with",
    categories: [
      "Frontend Development",
      "Backend Development",
      "Data Science",
      "UI/UX Design",
      "Cloud & DevOps",
      "Tools & Technologies",
    ],
  },
  fr: {
    metaTitle: "Compétences Développeuse Full-Stack & Data Scientist | React, Node.js, Python | Rihane Dalhoum – Tunis",
    metaDesc: "Découvrez les compétences techniques de Rihane Dalhoum : React, Next.js, Angular, Node.js, PHP, Python, PostgreSQL, MongoDB, Docker, Machine Learning et plus. Développeuse full-stack & data scientist à Tunis, Tunisie — disponible pour des projets à distance.",
    keywords: "développeuse full-stack Tunis, data scientist Tunisie, développeuse React, développeuse Node.js, développeuse Python, freelance développeuse Tunisie, compétences développement web, machine learning, développeuse remote Afrique",
    heading: "Mes compétences",
    subtitle: "Technologies que j'utilise",
    categories: [
      "Développement Frontend",
      "Développement Backend",
      "Data Science",
      "Design UI/UX",
      "Cloud & DevOps",
      "Outils & Technologies",
    ],
  },
} as const;

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
  color: string;
  isDark: boolean;
}

const SkillCard = ({
  icon: Icon,
  title,
  skills,
  color,
  isDark,
}: SkillCardProps) => (
  <Card
    className={`group relative overflow-hidden ${
      isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/90 border-gray-200"
    } hover:scale-[1.02] transition-all duration-300 hover:shadow-xl ${
      isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl ${
            isDark ? "bg-gray-800/50" : "bg-gray-100"
          } ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h2
          className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            isDark ? "from-white to-gray-400" : "from-gray-900 to-gray-600"
          }`}
        >
          {title}
        </h2>
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
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { lang } = useLang();
  const tx = translations[lang];

  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: tx.categories[0],
      color: "text-blue-400",
      skills: [
        {
          name: "React",
          icon: <FileCode className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "React Native",
          icon: <FileCode className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Next.js",
          icon: <RiNextjsLine className="w-4 h-4 text-white" />,
        },
        {
          name: "Angular 18",
          icon: <FileCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Database,
      title: tx.categories[1],
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Php",
          icon: <Server className="w-4 h-4 text-[#4F5B93]" />,
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
        },
      ],
    },
    {
      icon: Layout,
      title: tx.categories[2],
      color: "text-purple-400",
      skills: [
        {
          name: "Machine learning",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Deep learning",
          icon: <Layers className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Pandas",
          icon: <Sparkles className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Scikit-learn",
          icon: <Sparkles className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Tensorflow",
          icon: <Sparkles className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Power BI",
          icon: <Sparkles className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: tx.categories[3],
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <Figma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Wireframing",
          icon: <Layers className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <Sparkles className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: tx.categories[4],
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <CloudCog className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "CI/CD",
          icon: <GitBranch className="w-4 h-4 text-[#2088FF]" />,
        },
        {
          name: "Kubernetes",
          icon: <Globe className="w-4 h-4 text-[#326CE5]" />,
        },
        { name: "Git", icon: <Github className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: tx.categories[5],
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "IntelliJ",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Android Studio",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "Webpack",
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },

  ];

  const skillsJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": tx.metaTitle,
    "description": tx.metaDesc,
    "inLanguage": lang === "en" ? "en-US" : "fr-FR",
    "url": "https://ryhane.craftech-digital.com/skills",
    "mainEntity": {
      "@type": "Person",
      "name": "Rihane Dalhoum",
      "jobTitle": lang === "en" ? "Full-Stack Developer & Data Scientist" : "Développeuse Full-Stack & Data Scientist",
      "url": "https://ryhane.craftech-digital.com",
      "email": "dalhoumrihane@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": lang === "en" ? "Tunis, Tunisia" : "Tunis, Tunisie",
        "addressCountry": "TN",
      },
      "knowsAbout": [
        "React", "Next.js", "Angular", "TypeScript", "Tailwind CSS",
        "Node.js", "PHP", "Python", "PostgreSQL", "MongoDB", "GraphQL",
        "Machine Learning", "Deep Learning", "Pandas", "TensorFlow",
        "Docker", "AWS", "CI/CD", "Figma",
      ],
      "sameAs": [
        "https://www.linkedin.com/in/rihane-dalhoum/",
        "https://github.com/Rihanee",
      ],
    },
  });

  return (
      <>
        <Helmet>
          <title>{tx.metaTitle}</title>
          <meta name="description" content={tx.metaDesc} />
          <meta name="keywords" content={tx.keywords} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ryhane.craftech-digital.com/skills" />
          <link rel="alternate" hrefLang="en" href="https://ryhane.craftech-digital.com/skills" />
          <link rel="alternate" hrefLang="fr" href="https://ryhane.craftech-digital.com/skills" />
          <link rel="alternate" hrefLang="x-default" href="https://ryhane.craftech-digital.com/skills" />
          <meta name="geo.region" content="TN" />
          <meta name="geo.placename" content="Tunis, Tunisia" />
          <meta name="geo.position" content="36.8065;10.1815" />
          <meta name="ICBM" content="36.8065, 10.1815" />
          <meta property="og:title" content={tx.metaTitle} />
          <meta property="og:description" content={tx.metaDesc} />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content="https://ryhane.craftech-digital.com/skills" />
          <meta property="og:locale" content={lang === "en" ? "en_US" : "fr_FR"} />
          <meta property="og:locale:alternate" content={lang === "en" ? "fr_FR" : "en_US"} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={tx.metaTitle} />
          <meta name="twitter:description" content={tx.metaDesc} />
          <script type="application/ld+json">{skillsJsonLd}</script>
        </Helmet>

    <main
      className={`lg:pt-0 flex flex-col items-center justify-center ${
        isDark ? "bg-[#090F1C] text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen flex items-center justify-center`}
    >
      <div className="mt-30 text-center mb-8">
        <h1
          className={`text-4xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          } bg-clip-text text-transparent bg-gradient-to-r ${
            isDark
              ? "from-[#0A409B] to-[#47088F]"
              : "from-[#0A409B] to-[#47088F]"
          }`}
        >
          {tx.heading}
        </h1>
      </div>

      <div className="text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${
            isDark ? "bg-white/5" : "bg-black/5"
          } backdrop-blur-sm border ${
            isDark ? "border-white/10" : "border-black/10"
          }`}
        >
          <span
            className={`text-sm font-medium tracking-wider uppercase ${
              isDark ? "text-blue-300" : "text-blue-600"
            }`}
          >
            {tx.subtitle}
          </span>
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${
              isDark ? "bg-blue-400" : "bg-blue-500"
            } animate-pulse`}
          ></span>
        </div>
      </div>

      <section className="relative w-full overflow-hidden py-8">
        <div
          className={`w-full ${
            isDark ? "bg-white/5" : "bg-black/5"
          } backdrop-blur-lg border-y ${
            isDark ? "border-white/10" : "border-black/10"
          } shadow-lg`}
        >
          <div className="relative">
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  : "bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
              } opacity-50 animate-pulse`}
            ></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-background opacity-20"></div>
            <Marquee
              pauseOnHover
              className="[--duration:25s] py-6 hover:opacity-80 transition-opacity"
              repeat={3}
            >
              <div className="flex items-center gap-8 px-4">
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <FileCode className="w-8 h-8 text-[#61DAFB]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <RiNextjsLine className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiTypescript className="w-8 h-8 text-[#3178C6]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiTailwindcss className="w-8 h-8 text-[#38B2AC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <Server className="w-8 h-8 text-[#339933]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiPostgresql className="w-8 h-8 text-[#336791]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiMongodb className="w-8 h-8 text-[#47A248]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiGraphql className="w-8 h-8 text-[#E10098]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <Figma className="w-8 h-8 text-[#F24E1E]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <Layout className="w-8 h-8 text-[#38B2AC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <CloudCog className="w-8 h-8 text-[#FF9900]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <FaDocker className="w-8 h-8 text-[#2496ED]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <TbBrandVscode className="w-8 h-8 text-[#007ACC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiRedux className="w-8 h-8 text-[#764ABC]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiFirebase className="w-8 h-8 text-[#FFCA28]" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-gray-800/50" : "bg-white/80"
                  } backdrop-blur-sm transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20`}
                >
                  <SiVite className="w-8 h-8 text-[#646CFF]" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 ${
            isDark
              ? "bg-gradient-to-r from-[#090F1C] via-[#090F1C]/90 to-transparent"
              : "bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent"
          } z-10`}
        ></div>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-1/3 ${
            isDark
              ? "bg-gradient-to-l from-[#090F1C] via-[#090F1C]/90 to-transparent"
              : "bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent"
          } z-10`}
        ></div>
      </section>
      <section className="container mx-auto px-4 py-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              isDark={isDark}
            />
          ))}
        </div>
      </section>
    </main>
        </>
  );
};

export default SkillsSection;

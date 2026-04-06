import {
  Server,
  FileCode,
  Code2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Terminal,
} from "lucide-react";

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
import parcus from "@/assets/projects/parcus.jpg";
import tuniship from "@/assets/projects/tuniship.jpg";
import sotumar from "@/assets/projects/sotumar.jpg";
import no_image from "@/assets/projects/Image-not-found.png";

import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import {
  SiGraphql,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiServerless,
} from "react-icons/si";
import { FaWordpress, FaGithub } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const translations = {
  en: {
    helmetTitle: "Projects – Rihane Dalhoum | Web Development Portfolio",
    helmetDesc: "Selected web development projects built with React, Wordpress, React Native, Node.js, PHP and Laravel.",
    sectionLabel: "Portfolio",
    headingStart: "Selected ",
    headingColored: "Works.",
    subtitle:
      "An editorial curation of digital solutions where aesthetics meet technical performance. Explore my latest projects.",
    galleryTitle: "Project Gallery",
    gallerySubtitle: "Editorial Selection",
    tab1: "Websites | CMS",
    tab2: "Web Apps | APIs",
    curatorLabel: "Curator Profile",
    curatorRole: "Full-Stack Dev",
    prev: "Previous",
    next: "Next",
    ctaHeadingStart: "Ready to elevate your ",
    ctaHeadingColored: "digital vision?",
    ctaSubtitle:
      "I collaborate with ambitious brands to create experiences that redefine their market. Let's build something great.",
    ctaBtn1: "Start a project",
    ctaBtn2: "View skills",
  },
  fr: {
    helmetTitle: "Projets – Rihane Dalhoum | Portfolio Développement Web",
    helmetDesc: "Projets web sélectionnés réalisés avec React, WordPress, React Native, Node.js, PHP et Laravel.",
    sectionLabel: "Portfolio",
    headingStart: "Travaux ",
    headingColored: "Sélectionnés.",
    subtitle:
      "Une curation éditoriale de solutions numériques où l'esthétique rencontre la performance technique. Explorez mes dernières réalisations.",
    galleryTitle: "Project Gallery",
    gallerySubtitle: "Sélection Éditoriale",
    tab1: "Sites | CMS",
    tab2: "Web Apps | APIs",
    curatorLabel: "Profil Curateur",
    curatorRole: "Développeur Full-Stack",
    prev: "Précédent",
    next: "Suivant",
    ctaHeadingStart: "Prêt à élever votre ",
    ctaHeadingColored: "vision digitale ?",
    ctaSubtitle:
      "Je collabore avec des marques ambitieuses pour créer des expériences qui redéfinissent leur marché.",
    ctaBtn1: "Démarrer un projet",
    ctaBtn2: "Voir les compétences",
  },
} as const;

const ITEMS_PER_PAGE = 4;

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];
  const [activeTab, setActiveTab] = useState<"websites" | "apps">("websites");
  const [currentPage, setCurrentPage] = useState(1);

  const projects = [
    {
      icon: Code2,
      title: "EQUIMONDO",
      description:
        "Web application designed to meet the specific needs of equestrian centres. Built with PHP, providing a clean and professional look.",
      tags: [
        { name: "Php", icon: <SiPhp className="w-4 h-4 text-[#339933]" /> },
        { name: "jQuery", icon: <SiJquery className="w-4 h-4 text-[#4584b6]" /> },
        { name: "Ajax", icon: <SiJquery className="w-4 h-4 text-[#47A248]" /> },
        { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#764ABC]" /> },
      ],
      links: { github: "https://github.com/equimondo1/", demo: "https://alpha.equimondo.fr/" },
      image: equimondo,
      featured: true,
      category: 1,
      color: "text-blue-400",
      cms: "",
    },
    {
      icon: Code2,
      title: "Wellbeing",
      description:
        "Mobile marketplace for reserving beauty & care services. Contains AI features to detect skin problems and a recommendation system.",
      tags: [
        { name: "React Native", icon: <SiReact className="w-4 h-4 text-[#339933]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#4584b6]" /> },
        { name: "REST APIs", icon: <SiServerless className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Node JS", icon: <SiNodedotjs className="w-4 h-4 text-[#764ABC]" /> },
        { name: "Amazon EC2", icon: <Server className="w-4 h-4 text-[#764ABC]" /> },
      ],
      links: { github: "https://github.com/Ryhanee/wellness-backend", demo: "#" },
      image: wellbeing,
      featured: true,
      category: 1,
      color: "text-blue-400",
      cms: "",
    },
    {
      icon: Code2,
      title: "Nutislab",
      description:
        "Web application dedicated to managing orthodontists and their clients. Built with Laravel, Angular and MySQL.",
      tags: [
        { name: "Laravel", icon: <Server className="w-4 h-4 text-[#339933]" /> },
        { name: "Angular", icon: <Server className="w-4 h-4 text-[#339933]" /> },
        { name: "MySQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
      ],
      links: { github: "https://github.com/FarahKa/nutislabFront", demo: "https://dashboad.nutislab.com/" },
      image: nutislab,
      featured: true,
      category: 1,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: Code2,
      title: "Cromdn",
      description:
        "Web application to manage and filter Tunisian dentists based on multiple features. Built with Laravel and MySQL.",
      tags: [
        { name: "Laravel", icon: <Server className="w-4 h-4 text-[#339933]" /> },
        { name: "HTML", icon: <Server className="w-4 h-4 text-[#339933]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "MySQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "https://github.com/Ryhanee/CROMDN", demo: "https://cromdn.business-mania.services/" },
      image: cromdn,
      featured: true,
      category: 1,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: Code2,
      title: "Profili",
      description:
        "Web platform to generate portfolio websites with a resume parser and a drag-and-drop system.",
      tags: [
        { name: "Node.js", icon: <Server className="w-4 h-4 text-[#339933]" /> },
        { name: "Flask", icon: <SiPython className="w-4 h-4 text-[#4584b6]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "React JS", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
      ],
      links: { github: "https://github.com/Ryhanee/profili", demo: "#" },
      image: no_image,
      featured: true,
      category: 1,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: Code2,
      title: "Linkaura",
      description:
        "API for intelligent Instagram influencer matching based on specific inputs. Built with Flask, ML models and MongoDB.",
      tags: [
        { name: "Flask", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "Machine Learning", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      ],
      links: { github: "https://github.com/Ryhanee/linkaura", demo: "#" },
      image: linkaura,
      featured: true,
      category: 1,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: Code2,
      title: "Simulateur",
      description:
        "Web tool to calculate the cost of a digital service based on client choices, with AI features to analyse extra services. Built with React JS and Laravel.",
      tags: [
        { name: "React JS", icon: <SiReact className="w-4 h-4 text-[#339933]" /> },
        { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#3776AB]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
      ],
      links: { github: "https://github.com/Ryhanee/simulateur-craftech", demo: "#" },
      image: no_image,
      featured: true,
      category: 1,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Lascensoriste",
      description: "E-commerce website to sell elevator elements. Complete digital identity overhaul focusing on UX and B2B conversion.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://lascensoriste.tn/" },
      image: lascensoriste,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: <FaWordpress className="w-4 h-4 text-[#E10098]" />,
    },
    {
      icon: FaWordpress,
      title: "Marship",
      description: "Website for MARSHIP, a freight forwarding company based in Morocco. Clean, professional corporate presence.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://marship.parcus.fr/en/home/" },
      image: marship,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "CRAFTECH",
      description: "Website for a digital agency showcasing its full range of digital services and expertise.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "http://craftech-digital.com/" },
      image: craftech,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Optic Distribution",
      description: "Website for a company selling ophthalmological materials. Focus on product showcase and lead generation.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://optiquedistribution.net/" },
      image: optic,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Tuniship",
      description: "Website for a logistics freight company. Clean corporate branding with service-focused architecture.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://tuniship.net/" },
      image: tuniship,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Sotumar",
      description: "Corporate website for a logistics freight company. Streamlined service presentation and contact flow.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://sotumar.net/" },
      image: sotumar,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Parcus",
      description: "Website for a digital services company showcasing their solutions and attracting new clients.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://parcus.fr/" },
      image: parcus,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Botanical",
      description: "E-commerce website for a Tunisian brand selling natural-based beauty and wellness products.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://botanical-collection.com/" },
      image: botanical,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Atelier la fabrique",
      description: "Website for an architecture studio to present their portfolio and services to potential clients.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://atelierlafabrique.fr/" },
      image: no_image,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
    {
      icon: FaWordpress,
      title: "Eyeverda",
      description: "Tunisia's first digital hub dedicated to sustainable innovation and the green economy.",
      tags: [
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
      ],
      links: { github: "#", demo: "https://eyeverda.com/" },
      image: eyeverda,
      featured: true,
      category: 2,
      color: "text-purple-400",
      cms: "",
    },
  ];

  const filtered = projects.filter((p) =>
    activeTab === "websites" ? p.category === 2 : p.category === 1
  );
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const pageItems = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const pageEnd = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);

  const showingText =
    lang === "en"
      ? `Showing ${pageStart}–${pageEnd} of ${totalItems} projects`
      : `Affichage ${pageStart}–${pageEnd} sur ${totalItems} projets`;

  const handleTabChange = (tab: "websites" | "apps") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  const pageNums = getPageNumbers();

  const paginationButtons = (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className={cn(
          "p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed",
          isDark
            ? "text-[#ccc3d4] hover:bg-[#272a2e] hover:text-[#e1e2e8]"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        )}
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex items-center gap-1 mx-1">
        {pageNums.map((p, i) =>
          p === "..." ? (
            <span
              key={`dots-${i}`}
              className={cn("px-2 text-sm", isDark ? "text-[#4a4452]" : "text-gray-400")}
            >
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => setCurrentPage(p as number)}
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center font-['Space_Grotesk'] font-bold text-sm transition-all",
                currentPage === p
                  ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057]"
                  : isDark
                    ? "text-[#ccc3d4] hover:bg-[#272a2e] hover:text-[#e1e2e8]"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className={cn(
          "p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed",
          isDark
            ? "text-[#ccc3d4] hover:bg-[#272a2e] hover:text-[#e1e2e8]"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        )}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{tx.helmetTitle}</title>
        <meta name="description" content={tx.helmetDesc} />
      </Helmet>

      <div
        className={cn(
          "min-h-screen pt-20",
          isDark ? "bg-[#111418] text-[#e1e2e8]" : "bg-white text-gray-900"
        )}
      >
        {/* Hero */}
        <header className="px-8 max-w-7xl mx-auto pt-16 mb-16">
          <span
            className={cn(
              "font-['Inter'] text-[10px] uppercase tracking-[0.2em] mb-4 block",
              isDark ? "text-[#71d5e4]" : "text-teal-600"
            )}
          >
            {tx.sectionLabel}
          </span>
          <h1 className="font-['Space_Grotesk'] text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            {tx.headingStart}
            <span className={isDark ? "text-[#d6baff]" : "text-violet-600"}>
              {tx.headingColored}
            </span>
          </h1>
          <p
            className={cn(
              "font-['Manrope'] text-xl max-w-2xl leading-relaxed",
              isDark ? "text-[#ccc3d4]" : "text-gray-600"
            )}
          >
            {tx.subtitle}
          </p>
        </header>

        {/* Sidebar + content */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-8 gap-12 pb-24">
          {/* Sidebar (desktop only) */}
          <aside
            className={cn(
              "hidden lg:flex flex-col w-64 shrink-0 h-[calc(100vh-120px)] sticky top-24 rounded-xl p-6 space-y-8 shadow-2xl",
              isDark
                ? "bg-[#191c20] shadow-black/30"
                : "bg-gray-50 border border-gray-200 shadow-gray-200/60"
            )}
          >
            <div className="space-y-1">
              <h3
                className={cn(
                  "font-['Space_Grotesk'] font-bold text-lg tracking-tight",
                  isDark ? "text-[#e1e2e8]" : "text-gray-900"
                )}
              >
                {tx.galleryTitle}
              </h3>
              <p
                className={cn(
                  "font-['Inter'] uppercase tracking-widest text-[10px]",
                  isDark ? "text-[#4a4452]" : "text-gray-400"
                )}
              >
                {tx.gallerySubtitle}
              </p>
            </div>

            <nav className="space-y-3">
              <button
                onClick={() => handleTabChange("websites")}
                className={cn(
                  "flex items-center gap-3 w-full rounded-lg p-3 transition-all duration-300 hover:translate-x-1",
                  activeTab === "websites"
                    ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057]"
                    : isDark
                      ? "text-[#ccc3d4] hover:bg-[#272a2e]"
                      : "text-gray-500 hover:bg-gray-100"
                )}
              >
                <Globe size={18} className="flex-shrink-0" />
                <span className="font-['Inter'] uppercase tracking-widest text-[10px] font-bold text-left">
                  {tx.tab1}
                </span>
              </button>

              <button
                onClick={() => handleTabChange("apps")}
                className={cn(
                  "flex items-center gap-3 w-full rounded-lg p-3 transition-all duration-300 hover:translate-x-1",
                  activeTab === "apps"
                    ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057]"
                    : isDark
                      ? "text-[#ccc3d4] hover:bg-[#272a2e]"
                      : "text-gray-500 hover:bg-gray-100"
                )}
              >
                <Terminal size={18} className="flex-shrink-0" />
                <span className="font-['Inter'] uppercase tracking-widest text-[10px] font-bold text-left">
                  {tx.tab2}
                </span>
              </button>
            </nav>

            <div
              className={cn(
                "mt-auto pt-6 border-t",
                isDark ? "border-[#4a4452]/30" : "border-gray-200"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-['Space_Grotesk'] font-bold text-sm shrink-0",
                    isDark ? "bg-[#272a2e] text-[#d6baff]" : "bg-violet-100 text-violet-700"
                  )}
                >
                  RD
                </div>
                <div>
                  <p
                    className={cn(
                      "text-xs font-bold font-['Space_Grotesk']",
                      isDark ? "text-[#e1e2e8]" : "text-gray-900"
                    )}
                  >
                    {tx.curatorLabel}
                  </p>
                  <p
                    className={cn(
                      "text-[10px] font-['Inter']",
                      isDark ? "text-[#ccc3d4]" : "text-gray-500"
                    )}
                  >
                    {tx.curatorRole}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Content area */}
          <div className="flex-1 min-w-0">
            {/* Mobile tabs */}
            <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 mb-8">
              <button
                onClick={() => handleTabChange("websites")}
                className={cn(
                  "whitespace-nowrap px-6 py-3 rounded-full font-['Inter'] text-xs uppercase font-bold tracking-widest transition-all",
                  activeTab === "websites"
                    ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057]"
                    : isDark ? "bg-[#272a2e] text-[#ccc3d4]" : "bg-gray-100 text-gray-600"
                )}
              >
                {tx.tab1}
              </button>
              <button
                onClick={() => handleTabChange("apps")}
                className={cn(
                  "whitespace-nowrap px-6 py-3 rounded-full font-['Inter'] text-xs uppercase font-bold tracking-widest transition-all",
                  activeTab === "apps"
                    ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057]"
                    : isDark ? "bg-[#272a2e] text-[#ccc3d4]" : "bg-gray-100 text-gray-600"
                )}
              >
                {tx.tab2}
              </button>
            </div>

            {/* Top pagination */}
            <div
              className={cn(
                "flex items-center justify-between pb-6 mb-8 border-b",
                isDark ? "border-[#4a4452]/20" : "border-gray-200"
              )}
            >
              {paginationButtons}
              <p
                className={cn(
                  "hidden sm:block font-['Inter'] text-[10px] uppercase tracking-[0.2em]",
                  isDark ? "text-[#4a4452]" : "text-gray-400"
                )}
              >
                {showingText}
              </p>
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {pageItems.map((project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className={cn("group space-y-6", index >= 2 && "md:translate-y-12")}
                >
                  {/* Image container */}
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-500",
                      isDark
                        ? "bg-[#191c20] hover:bg-[#323539]"
                        : "bg-gray-100 hover:bg-gray-200"
                    )}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111418]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        {project.links.demo !== "#" && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-[#d6baff] flex items-center justify-center text-[#280057] shadow-xl hover:scale-110 transition-transform"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.links.github !== "#" && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-[#272a2e] flex items-center justify-center text-[#e1e2e8] border border-[#4a4452]/20 shadow-xl hover:scale-110 transition-transform"
                          >
                            <FaGithub size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card meta */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={`${tag.name}-${ti}`}
                          className={cn(
                            "px-3 py-1 rounded-full font-['Inter'] text-[10px] uppercase tracking-wider",
                            isDark ? "bg-[#272a2e]" : "bg-gray-100",
                            ti === 0
                              ? isDark ? "text-[#71d5e4]" : "text-teal-600"
                              : isDark ? "text-[#ccc3d4]" : "text-gray-500"
                          )}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <h3
                      className={cn(
                        "font-['Space_Grotesk'] text-3xl font-bold",
                        isDark ? "text-[#e1e2e8]" : "text-gray-900"
                      )}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={cn(
                        "font-['Manrope'] leading-relaxed",
                        isDark ? "text-[#ccc3d4]" : "text-gray-600"
                      )}
                    >
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom pagination */}
            <div
              className={cn(
                "mt-24 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6",
                isDark ? "border-[#4a4452]/20" : "border-gray-200"
              )}
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg font-['Space_Grotesk'] font-medium text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                    isDark
                      ? "text-[#ccc3d4] hover:bg-[#272a2e] hover:text-[#e1e2e8]"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <ChevronLeft size={16} />
                  {tx.prev}
                </button>

                <div className="flex items-center gap-1 mx-2">
                  {pageNums.map((p, i) =>
                    p === "..." ? (
                      <span
                        key={`dots-b-${i}`}
                        className={cn("px-2 text-sm", isDark ? "text-[#4a4452]" : "text-gray-400")}
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={`b-${p}`}
                        onClick={() => setCurrentPage(p as number)}
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center font-['Space_Grotesk'] font-bold text-sm transition-all",
                          currentPage === p
                            ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057]"
                            : isDark
                              ? "text-[#ccc3d4] hover:bg-[#272a2e] hover:text-[#e1e2e8]"
                              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                        )}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg font-['Space_Grotesk'] font-medium text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                    isDark
                      ? "text-[#ccc3d4] hover:bg-[#272a2e] hover:text-[#e1e2e8]"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  {tx.next}
                  <ChevronRight size={16} />
                </button>
              </div>

              <p
                className={cn(
                  "font-['Inter'] text-[10px] uppercase tracking-[0.2em]",
                  isDark ? "text-[#4a4452]" : "text-gray-400"
                )}
              >
                {showingText}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section
          className={cn(
            "py-32 px-8 border-t",
            isDark ? "border-[#4a4452]/20 bg-[#111418]" : "border-gray-200 bg-gray-50"
          )}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className={cn(
                  "font-['Space_Grotesk'] text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8",
                  isDark ? "text-[#e1e2e8]" : "text-gray-900"
                )}
              >
                {tx.ctaHeadingStart}
                <span className={isDark ? "text-[#71d5e4]" : "text-teal-600"}>
                  {tx.ctaHeadingColored}
                </span>
              </h2>
              <p
                className={cn(
                  "font-['Manrope'] text-xl mb-12 max-w-lg leading-relaxed",
                  isDark ? "text-[#ccc3d4]" : "text-gray-600"
                )}
              >
                {tx.ctaSubtitle}
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="/contact"
                  className={cn(
                    "px-10 py-5 font-['Space_Grotesk'] font-bold rounded-lg shadow-2xl hover:opacity-90 transition-all",
                    isDark
                      ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057] shadow-[#d6baff]/20"
                      : "bg-gradient-to-br from-violet-500 to-violet-800 text-white shadow-violet-500/20"
                  )}
                >
                  {tx.ctaBtn1}
                </a>
                <a
                  href="/skills"
                  className={cn(
                    "px-10 py-5 border font-['Space_Grotesk'] font-bold rounded-lg transition-all",
                    isDark
                      ? "border-[#4a4452]/30 text-[#b2c5ff] hover:bg-[#272a2e]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {tx.ctaBtn2}
                </a>
              </div>
            </div>

            {/* Decorative panel */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <div
                className={cn(
                  "absolute inset-0",
                  isDark
                    ? "bg-gradient-to-br from-[#47088f]/40 via-[#272a2e] to-[#003b42]/40"
                    : "bg-gradient-to-br from-violet-200 via-gray-100 to-teal-100"
                )}
              />
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <span
                  className={cn(
                    "font-['Space_Grotesk'] text-[8rem] font-bold tracking-tighter",
                    isDark ? "opacity-[0.06] text-[#d6baff]" : "opacity-[0.08] text-violet-400"
                  )}
                >
                  RD
                </span>
              </div>
              <div className="absolute inset-0 bg-[#d6baff]/5 mix-blend-overlay" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectShowcase;

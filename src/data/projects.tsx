import { Server, FileCode, Code2 } from "lucide-react";
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
import { FaWordpress } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import React from "react";

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

export interface ProjectTag {
  name: string;
  icon: React.ReactNode;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectEntry {
  icon: React.ElementType;
  title: string;
  slug: string;
  description: string;
  categoryLabel: string;
  tags: ProjectTag[];
  links: { github: string; demo: string };
  image: string;
  hasHeroImage: boolean;
  featured: boolean;
  category: 1 | 2;
  color: string;
  cms: React.ReactNode;
  challenge: { heading: string; body: string[] };
  solution: { heading: string; body: string[] };
  stats: ProjectStat[];
  role: string;
  year: string;
  status: string;
}

// WordPress tag shared helper
const wpTags: ProjectTag[] = [
  { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
  { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
  { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
  { name: "jQuery", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
];

export const projects: ProjectEntry[] = [
  /* ── WEB APPS (category 1) ── */
  {
    icon: Code2,
    title: "EQUIMONDO",
    slug: "equimondo",
    description:
      "Web application designed to meet the specific needs of equestrian centres. Built with PHP, providing a clean and professional look.",
    categoryLabel: "Equestrian | Web Application",
    tags: [
      { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#339933]" /> },
      { name: "jQuery", icon: <SiJquery className="w-4 h-4 text-[#4584b6]" /> },
      { name: "Ajax", icon: <SiJquery className="w-4 h-4 text-[#47A248]" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#764ABC]" /> },
    ],
    links: { github: "https://github.com/equimondo1/", demo: "https://alpha.equimondo.fr/" },
    image: equimondo,
    hasHeroImage: true,
    featured: true,
    category: 1,
    color: "text-blue-400",
    cms: "",
    challenge: {
      heading: "Digitising the operational backbone of equestrian centres.",
      body: [
        "Equestrian centres relied on paper-based systems for managing horses, schedules, memberships, and competitions. Fragmented processes caused repeated errors and significant administrative overhead.",
        "The goal was a comprehensive web application that centralised all centre operations—horse registrations, lesson scheduling, member profiles—in one accessible platform.",
      ],
    },
    solution: {
      heading: "A full-stack PHP web application for end-to-end centre management.",
      body: [
        "Built with PHP and jQuery, Equimondo delivers a modular management system covering horse registrations, riding lesson scheduling, and competition tracking.",
        "RESTful API integration enables real-time data synchronisation across user roles—managers, instructors, and members each see a tailored dashboard.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Live",
  },
  {
    icon: Code2,
    title: "Wellbeing",
    slug: "wellbeing",
    description:
      "Mobile marketplace for reserving beauty & care services. Contains AI features to detect skin problems and a recommendation system.",
    categoryLabel: "Health & Beauty | Mobile Application",
    tags: [
      { name: "React Native", icon: <SiReact className="w-4 h-4 text-[#339933]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#4584b6]" /> },
      { name: "REST APIs", icon: <SiServerless className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "Node JS", icon: <SiNodedotjs className="w-4 h-4 text-[#764ABC]" /> },
      { name: "Amazon EC2", icon: <Server className="w-4 h-4 text-[#764ABC]" /> },
    ],
    links: { github: "https://github.com/Ryhanee/wellness-backend", demo: "#" },
    image: wellbeing,
    hasHeroImage: true,
    featured: true,
    category: 1,
    color: "text-blue-400",
    cms: "",
    challenge: {
      heading: "Building a marketplace for beauty and wellness in the mobile-first era.",
      body: [
        "The beauty and care services sector lacked a unified booking platform in the region. Consumers navigated fragmented provider directories and relied on manual booking processes with no personalisation.",
        "The objective was a marketplace application that streamlined discovery, booking, and personalised service recommendations—all in one mobile experience.",
      ],
    },
    solution: {
      heading: "An AI-powered React Native marketplace with a scalable Node.js backend.",
      body: [
        "Developed a cross-platform mobile application featuring an AI skin analysis module using computer vision to detect skin conditions and match users to appropriate beauty services.",
        "A collaborative filtering recommendation engine increases session depth and booking conversion, backed by a Node.js API on Amazon EC2 for real-time performance at scale.",
      ],
    },
    stats: [
      { value: "+35%", label: "Session Depth" },
      { value: "2×", label: "Booking Rate" },
    ],
    role: "Full-Stack Developer",
    year: "2023",
    status: "In Development",
  },
  {
    icon: Code2,
    title: "Nutislab",
    slug: "nutislab",
    description:
      "Web application dedicated to managing orthodontists and their clients. Built with Laravel, Angular and MySQL.",
    categoryLabel: "Healthcare | Web Application",
    tags: [
      { name: "Laravel", icon: <Server className="w-4 h-4 text-[#339933]" /> },
      { name: "Angular", icon: <Server className="w-4 h-4 text-[#339933]" /> },
      { name: "MySQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
    ],
    links: { github: "https://github.com/FarahKa/nutislabFront", demo: "https://dashboad.nutislab.com/" },
    image: nutislab,
    hasHeroImage: true,
    featured: true,
    category: 1,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Eliminating the administrative burden from orthodontic practice management.",
      body: [
        "Orthodontists managed patient records, appointment schedules, and treatment plans across disconnected spreadsheets and paper files—creating friction at every stage of the care journey.",
        "The goal was a unified digital platform that would give clinicians back the time spent on administrative tasks and provide patients with a clearer view of their treatment.",
      ],
    },
    solution: {
      heading: "A Laravel + Angular practice management platform with a GraphQL API.",
      body: [
        "Built a full-stack web application with Angular for the clinical interface and Laravel as the API layer, connected via a GraphQL schema for efficient and flexible data querying.",
        "Role-based access control ensures practitioners, administrative staff, and patients each interact with a tailored, appropriately scoped view of the platform.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Live",
  },
  {
    icon: Code2,
    title: "Cromdn",
    slug: "cromdn",
    description:
      "Web application to manage and filter Tunisian dentists based on multiple features. Built with Laravel and MySQL.",
    categoryLabel: "Healthcare Directory | Web Application",
    tags: [
      { name: "Laravel", icon: <Server className="w-4 h-4 text-[#339933]" /> },
      { name: "HTML", icon: <Server className="w-4 h-4 text-[#339933]" /> },
      { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
      { name: "MySQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
    ],
    links: { github: "https://github.com/Ryhanee/CROMDN", demo: "https://cromdn.business-mania.services/" },
    image: cromdn,
    hasHeroImage: true,
    featured: true,
    category: 1,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Giving patients a smarter way to find the right dentist in Tunisia.",
      body: [
        "Patients seeking dental care in Tunisia had no reliable way to filter practitioners by location, specialisation, availability, or patient ratings. The discovery process was fragmented and time-consuming.",
        "CROMDN was tasked with building a searchable dental directory that empowered patients to make informed healthcare choices with confidence.",
      ],
    },
    solution: {
      heading: "A Laravel-powered dental directory with advanced filtering and practitioner profiles.",
      body: [
        "Developed a multi-criteria filtering engine—allowing patients to search by city, specialisation, and consultation type—backed by a robust Laravel application and MySQL database.",
        "A dentist profile management module enables practitioners to maintain up-to-date listings, manage their specialisations, and handle patient inquiries directly through the platform.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Live",
  },
  {
    icon: Code2,
    title: "Profili",
    slug: "profili",
    description:
      "Web platform to generate portfolio websites with a resume parser and a drag-and-drop system.",
    categoryLabel: "Developer Tools | Web Application",
    tags: [
      { name: "Node.js", icon: <Server className="w-4 h-4 text-[#339933]" /> },
      { name: "Flask", icon: <SiPython className="w-4 h-4 text-[#4584b6]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "React JS", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
    ],
    links: { github: "https://github.com/Ryhanee/profili", demo: "#" },
    image: no_image,
    hasHeroImage: false,
    featured: true,
    category: 1,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Removing the technical barrier from portfolio creation.",
      body: [
        "Talented professionals lacked the technical skills to build impressive portfolio websites from scratch. Existing solutions either required coding knowledge or produced generic, template-based results with no personalisation.",
        "The challenge was to create a platform where uploading a CV was all it took to generate a professional, personalised web portfolio in minutes.",
      ],
    },
    solution: {
      heading: "A CV-to-portfolio generator with AI parsing and drag-and-drop customisation.",
      body: [
        "Built with React on the frontend and a Node.js/Flask backend, Profili parses uploaded CV documents using NLP to extract structured data—skills, experience, and projects—automatically populating the portfolio.",
        "A drag-and-drop editor enables users to customise their generated portfolio with zero code, while a MongoDB backend stores configurations for persistent editing across sessions.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer / AI Engineer",
    year: "2023",
    status: "In Development",
  },
  {
    icon: Code2,
    title: "Linkaura",
    slug: "linkaura",
    description:
      "API for intelligent Instagram influencer matching based on specific inputs. Built with Flask, ML models and MongoDB.",
    categoryLabel: "MarTech | API / Machine Learning",
    tags: [
      { name: "Flask", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      { name: "Machine Learning", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
    ],
    links: { github: "https://github.com/Ryhanee/linkaura", demo: "#" },
    image: linkaura,
    hasHeroImage: true,
    featured: true,
    category: 1,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Automating influencer discovery for data-driven marketing teams.",
      body: [
        "Marketing teams spent hours manually screening Instagram profiles to identify influencers whose audience demographics matched campaign targets. The process was slow, inconsistent, and difficult to scale.",
        "Linkaura was conceived as an intelligent API that could surface the most relevant influencers from a dataset based on structured campaign inputs—removing human bias and reducing research time dramatically.",
      ],
    },
    solution: {
      heading: "A Flask-based ML API for intelligent Instagram influencer matching.",
      body: [
        "Developed a RESTful API in Flask integrating trained machine learning models to score influencer profiles against campaign parameters—niche, engagement rate, audience size, and demographic fit.",
        "MongoDB serves as the profile database, enabling fast retrieval and continuous model retraining as new influencer data is ingested over time.",
      ],
    },
    stats: [],
    role: "ML Engineer / Backend Developer",
    year: "2023",
    status: "Completed",
  },
  {
    icon: Code2,
    title: "Simulateur",
    slug: "simulateur",
    description:
      "Web tool to calculate the cost of a digital service based on client choices, with AI features to analyse extra services. Built with React JS and Laravel.",
    categoryLabel: "Business Tools | Web Application",
    tags: [
      { name: "React JS", icon: <SiReact className="w-4 h-4 text-[#339933]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#3776AB]" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#3776AB]" /> },
      { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
    ],
    links: { github: "https://github.com/Ryhanee/simulateur-craftech", demo: "#" },
    image: no_image,
    hasHeroImage: false,
    featured: true,
    category: 1,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Giving clients a transparent way to estimate digital project costs.",
      body: [
        "CRAFTECH's sales process depended on time-consuming manual estimates, with clients frequently surprised by final quotes. A faster, more transparent estimation tool was urgently needed.",
        "The goal was to build an interactive simulator that guided clients through service selection and produced real-time cost estimates, with an AI layer to interpret custom requirements.",
      ],
    },
    solution: {
      heading: "A React + Laravel cost simulator with AI-powered requirements analysis.",
      body: [
        "Built a step-by-step React configurator with a Laravel backend handling pricing logic and an AI module that interprets free-text client requirements and maps them to cost components.",
        "The self-service estimation tool qualifies leads, sets expectations early, and reduces the average sales cycle time for CRAFTECH's digital services division.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },

  /* ── WEBSITES (category 2) ── */
  {
    icon: FaWordpress,
    title: "Lascensoriste",
    slug: "lascensoriste",
    description:
      "E-commerce website to sell elevator elements. Complete digital identity overhaul focusing on UX and B2B conversion.",
    categoryLabel: "E-Commerce | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://lascensoriste.tn/" },
    image: lascensoriste,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: <FaWordpress className="w-4 h-4 text-[#E10098]" />,
    challenge: {
      heading: "Establishing a credible digital presence for a specialist elevator supplier.",
      body: [
        "The client operated primarily through print and referral channels, with a dated website unable to showcase their product range or capture B2B leads effectively.",
        "The objective was to transform their online identity into a conversion-focused platform that speaks directly to procurement managers and building contractors.",
      ],
    },
    solution: {
      heading: "A WordPress e-commerce site built for B2B trust and catalogue exploration.",
      body: [
        "Developed a custom WordPress theme with WooCommerce integration, featuring filterable product categories and a bulk request-for-quote flow designed for professional buyers.",
        "A precise, technical visual language—clean typography, structured layout—conveys expertise and builds confidence with the B2B audience.",
      ],
    },
    stats: [
      { value: "3×", label: "Catalogue Reach" },
      { value: "+40%", label: "Lead Growth" },
    ],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Marship",
    slug: "marship",
    description:
      "Website for MARSHIP, a freight forwarding company based in Morocco. Clean, professional corporate presence.",
    categoryLabel: "Maritime Logistics | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://marship.parcus.fr/en/home/" },
    image: marship,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Projecting global credibility for a Morocco-based freight forwarder.",
      body: [
        "MARSHIP serves an international client base but lacked a digital presence that matched the scope of their operations. Their previous site offered no bilingual support and failed to surface key service offerings.",
        "The goal was to design a site that positioned MARSHIP as a trusted, globally-minded logistics partner.",
      ],
    },
    solution: {
      heading: "A bilingual WordPress site with structured service presentation.",
      body: [
        "Built a multilingual (EN/FR) WordPress platform with dedicated service pages, a structured contact routing system, and an emphasis on clarity for international visitors.",
        "The design language—authoritative and structured—was chosen to communicate reliability and professionalism across cultures and geographies.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "CRAFTECH",
    slug: "craftech",
    description:
      "Website for a digital agency showcasing its full range of digital services and expertise.",
    categoryLabel: "Digital Agency | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "http://craftech-digital.com/" },
    image: craftech,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Building a digital agency's showcase that reflects its own expertise.",
      body: [
        "CRAFTECH needed a website that didn't just list services but actively demonstrated design capability and technical depth to attract enterprise clients.",
        "The challenge was to create a platform that would differentiate CRAFTECH from the many generic agency sites in the region.",
      ],
    },
    solution: {
      heading: "A visual-first WordPress site that leads with results, not just services.",
      body: [
        "Designed a portfolio-forward WordPress site with animated service sections, client case study cards, and a clear conversion funnel leading to a consultation CTA.",
        "The aesthetic—dark, bold, high-contrast—was intentionally chosen to differentiate CRAFTECH and signal design ambition from the first scroll.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Optic Distribution",
    slug: "optic-distribution",
    description:
      "Website for a company selling ophthalmological materials. Focus on product showcase and lead generation.",
    categoryLabel: "Medical Equipment | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://optiquedistribution.net/" },
    image: optic,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Bringing an ophthalmological equipment distributor online with clarity.",
      body: [
        "The client needed to transition from catalogue-based sales to a digital showroom capable of presenting technical products to a medical professional audience.",
        "The challenge was balancing product density with usability for buyers who prioritise specification accuracy over visual polish.",
      ],
    },
    solution: {
      heading: "A WordPress product showcase tailored to medical procurement workflows.",
      body: [
        "Built a structured product catalogue on WordPress with filterable equipment categories, detailed spec sheets, and a streamlined inquiry flow designed for B2B medical buyers.",
        "The design emphasises clarity and trust—essential values in the medical equipment sector where purchasing decisions are high-stakes.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Tuniship",
    slug: "tuniship",
    description:
      "Website for a logistics freight company. Clean corporate branding with service-focused architecture.",
    categoryLabel: "Freight Logistics | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://tuniship.net/" },
    image: tuniship,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Modernising the web presence of a growing Tunisian logistics company.",
      body: [
        "Tuniship was expanding its freight operations but lacked a digital presence that matched its ambitions. The existing site failed to communicate service scope or capture inbound business inquiries.",
        "The objective was a professional platform that would inspire confidence in potential shipping partners across the region.",
      ],
    },
    solution: {
      heading: "A clean corporate WordPress site that leads with trust and service clarity.",
      body: [
        "Designed and developed a structured WordPress site with dedicated service pages, a partner-focused messaging framework, and a streamlined contact system.",
        "The visual identity—authoritative, structured—was designed to build credibility with B2B logistics buyers from first impression.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Sotumar",
    slug: "sotumar",
    description:
      "Corporate website for a logistics freight company. Streamlined service presentation and contact flow.",
    categoryLabel: "Maritime Freight | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://sotumar.net/" },
    image: sotumar,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Creating a digital anchor for a maritime freight operator.",
      body: [
        "Sotumar required a website that would position them as a reliable freight partner in a competitive maritime logistics market, reaching commercial clients across the region.",
        "The site needed to articulate their service range clearly while remaining accessible to a broad range of potential clients.",
      ],
    },
    solution: {
      heading: "A structured WordPress platform built for service clarity and B2B trust.",
      body: [
        "Developed a focused WordPress site with clearly delineated service sections, partner-facing messaging, and a contact system designed to qualify leads efficiently.",
        "Clean layout, professional typography, and a restrained colour palette communicate stability and operational expertise.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Parcus",
    slug: "parcus",
    description:
      "Website for a digital services company showcasing their solutions and attracting new clients.",
    categoryLabel: "Digital Services | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://parcus.fr/" },
    image: parcus,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Helping a digital services firm stand out in a crowded market.",
      body: [
        "Parcus offers a broad range of digital solutions but struggled to differentiate their value proposition online. A generic template-based site was failing to attract the quality of clients they sought.",
        "The challenge was to create a site that positions Parcus as a strategic partner, not just another vendor.",
      ],
    },
    solution: {
      heading: "A consultancy-positioned WordPress site that leads with outcomes.",
      body: [
        "Redesigned the Parcus web presence around client outcomes and case evidence, using structured service storytelling and a bold visual identity.",
        "The result is a site that speaks directly to decision-makers seeking capable, strategic digital partners—not generalist freelancers.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Botanical",
    slug: "botanical",
    description:
      "E-commerce website for a Tunisian brand selling natural-based beauty and wellness products.",
    categoryLabel: "E-Commerce | WordPress / WooCommerce",
    tags: wpTags,
    links: { github: "#", demo: "https://botanical-collection.com/" },
    image: botanical,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Launching an artisan Tunisian beauty brand into e-commerce.",
      body: [
        "Botanical needed an online store that captured the organic, handcrafted essence of their natural beauty products while driving conversions in a competitive wellness market.",
        "The challenge was balancing brand warmth with e-commerce functionality—product discovery, cart UX, and trust-building—without losing the artisan feel.",
      ],
    },
    solution: {
      heading: "A WooCommerce store that makes product storytelling central to purchase.",
      body: [
        "Built on WordPress with WooCommerce, the store centres immersive product narratives—ingredient stories, brand values, and lifestyle imagery—making them integral to the shopping journey.",
        "The experience was optimised for mobile-first browsing with a streamlined checkout flow designed to reduce abandonment at every step.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Atelier la fabrique",
    slug: "atelier-la-fabrique",
    description:
      "Website for an architecture studio to present their portfolio and services to potential clients.",
    categoryLabel: "Architecture | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://atelierlafabrique.fr/" },
    image: no_image,
    hasHeroImage: false,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Giving an architecture studio a digital portfolio worthy of its work.",
      body: [
        "The studio's portfolio existed primarily in physical form—brochures and in-person presentations. Their digital presence did not reflect the quality or range of their architectural projects.",
        "The goal was to create a minimal, typography-driven digital showcase that lets the architecture speak for itself.",
      ],
    },
    solution: {
      heading: "A minimal WordPress site built around large-format photography and editorial typography.",
      body: [
        "Developed a custom WordPress theme prioritising full-bleed imagery, refined whitespace, and a restrained typographic system that mirrors the precision of the studio's architectural language.",
        "The result is a portfolio that serves as a strong first impression for prospective clients, partners, and competitions.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    icon: FaWordpress,
    title: "Eyeverda",
    slug: "eyeverda",
    description:
      "Tunisia's first digital hub dedicated to sustainable innovation and the green economy.",
    categoryLabel: "Green Economy | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://eyeverda.com/" },
    image: eyeverda,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Launching Tunisia's first digital hub for sustainable innovation.",
      body: [
        "Eyeverda set out to create a first-of-its-kind platform connecting sustainable startups, green economy resources, and innovation networks in Tunisia.",
        "The challenge was building a site that felt both authoritative and accessible—technical enough for investors, inspiring enough for entrepreneurs and change-makers.",
      ],
    },
    solution: {
      heading: "A mission-driven WordPress platform for Tunisia's green innovation ecosystem.",
      body: [
        "Built a content-rich WordPress site with structured resource directories, event listings, and ecosystem mapping features tailored to the sustainable innovation community.",
        "The visual identity—verdant and energetic—was designed to signal growth, optimism, and environmental consciousness from the very first impression.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
];

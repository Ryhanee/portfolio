import { Server, FileCode, Code2 } from "lucide-react";
import {
  SiGraphql,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql, SiPrestashop,
  SiPython,
  SiReact,
  SiRedux,
  SiServerless,
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import React from "react";

import equimondo from "@/assets/projects/equimondo.jpg.jpg";
import equimondo1 from "@/assets/projects/equi-event.png";
import equimondo2 from "@/assets/projects/equi-event-rec.png";
import equimondo3 from "@/assets/projects/equi-synchro.png";

import wellbeing from "@/assets/projects/wellbeing.png";
import cromdn from "@/assets/projects/cromdn-off.png";
import cromdn1 from "@/assets/projects/cromdn1.png";
import cromdn2 from "@/assets/projects/cromdn2.png";
import cromdn3 from "@/assets/projects/cromdn3.png";

import nutislab from "@/assets/projects/nutislab.png";
import nutislab1 from "@/assets/projects/nutis1.jpg";
import nutislab2 from "@/assets/projects/nutis2.jpg";
import nutislab3 from "@/assets/projects/nutis3.jpg";

import lascensoriste from "@/assets/projects/lascensoriste-1.jpg";
import botanical from "@/assets/projects/botanical.png";
import linkaura from "@/assets/projects/linkaura.jpg";
import optic from "@/assets/projects/optique-distibution.jpg";
import optic_boutique from "@/assets/projects/optique-boutique.jpg";

import eyeverda from "@/assets/projects/eyeverda.jpg";
import marship from "@/assets/projects/marship.jpg";

import craftech from "@/assets/projects/craftech.jpg";

import parcus from "@/assets/projects/parcus.jpg";

import tuniship from "@/assets/projects/tuniship.jpg";

import sotumar from "@/assets/projects/sotumar.jpg";

import no_image from "@/assets/projects/Image-not-found.png";
import service22 from "@/assets/projects/22services.png";
import assist from "@/assets/projects/assist.jpg";
import trovana from "@/assets/projects/trovana.png";
import e_sim from "@/assets/projects/22sim.jpg";
import atelier from "@/assets/projects/atelier-la-fabrique.jpg";
import nfc from "@/assets/projects/nfc-offf.png";
import nfc1 from "@/assets/projects/nfc1.png";
import nfc2 from "@/assets/projects/nfc2.png";
import nfc3 from "@/assets/projects/nfc3.png";

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
  description_fr: string;
  categoryLabel: string;
  tags: ProjectTag[];
  links: { github: string; demo: string };
  image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  hasHeroImage: boolean;
  featured: boolean;
  category: 1 | 2;
  color: string;
  cms: React.ReactNode;
  challenge: { heading: string; body: string[] };
  challenge_fr: { heading: string; body: string[] };
  solution: { heading: string; body: string[] };
  solution_fr: { heading: string; body: string[] };
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
    title: "EQUIMONDO",
    icon: Code2,
    slug: "equimondo",
    description:
      "Full-featured equestrian centre management platform (v2) with multi-gateway online payments (Stripe, Paygreen, Monetico), transactional emails via Brevo & Amazon SES, GoCardless bank reconciliation, and a React Native WebView mobile companion.",
    description_fr:
      "Plateforme complète de gestion de centres équestres (v2) avec paiements en ligne multi-gateway (Stripe, Paygreen, Monetico), emails transactionnels via Brevo & Amazon SES, réconciliation bancaire GoCardless et application mobile React Native WebView.",
    categoryLabel: "Equestrian | Web Application",
    tags: [
      { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#339933]" /> },
      { name: "React Native", icon: <SiReact className="w-4 h-4 text-[#61DBFB]" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#764ABC]" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "Stripe", icon: <Server className="w-4 h-4 text-[#635BFF]" /> },
    ],
    links: { github: "https://github.com/equimondo1/", demo: "https://alpha.equimondo.fr/" },
    image: equimondo,
    hasHeroImage: true,
    featured: true,
    category: 1,
    color: "text-blue-400",
    cms: "",
    challenge: {
      heading: "Unifying the full operational and financial stack of equestrian centres.",
      body: [
        "Equestrian centres relied on fragmented tools for managing horses, schedules, memberships, and finances. Version 1 solved the operational core; version 2 tackled the financial layer—multi-gateway online payments, bank reconciliation, and automated communication.",
        "The goal was a seamless end-to-end platform where a centre manager could process bookings, collect payment via Stripe, Paygreen, or Monetico, sync bank statements via GoCardless, and send automated emails—without leaving the dashboard.",
      ],
    },
    challenge_fr: {
      heading: "Unifier l'ensemble de la stack opérationnelle et financière des centres équestres.",
      body: [
        "Les centres équestres utilisaient des outils fragmentés pour gérer chevaux, plannings, adhésions et finances. La v1 a résolu le cœur opérationnel ; la v2 s'est attaquée à la couche financière — paiements en ligne multi-gateway, réconciliation bancaire et communication automatisée.",
        "L'objectif était une plateforme de bout en bout où un gestionnaire de centre pouvait traiter les réservations, encaisser les paiements via Stripe, Paygreen ou Monetico, synchroniser les relevés bancaires via GoCardless et envoyer des emails automatiques sans quitter le tableau de bord.",
      ],
    },
    solution: {
      heading: "A PHP + React Native platform with multi-gateway payments and automated financial workflows.",
      body: [
        "Integrated three payment gateways—Stripe, Paygreen, and Monetico—with a unified transaction dashboard. GoCardless automates direct debit reconciliation with real-time bank sync, eliminating manual spreadsheet reconciliation.",
        "Brevo and Amazon SES power automated transactional emails (booking confirmations, payment receipts, reminders). A React Native WebView mobile companion gives managers full dashboard access on the go.",
      ],
    },
    solution_fr: {
      heading: "Une plateforme PHP + React Native avec paiements multi-gateway et workflows financiers automatisés.",
      body: [
        "Intégration de trois passerelles de paiement — Stripe, Paygreen et Monetico — avec un tableau de bord unifié des transactions. GoCardless automatise la réconciliation des prélèvements avec synchronisation bancaire en temps réel, éliminant les tableurs manuels.",
        "Brevo et Amazon SES alimentent les emails transactionnels automatisés (confirmations de réservation, reçus de paiement, rappels). Une application mobile React Native WebView donne aux gestionnaires un accès complet au tableau de bord en déplacement.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Live",
    image1: equimondo1,
    image2: equimondo2,
    image3: equimondo3,
  },
  {
    title: "NFC Cards",
    icon: Code2,
    slug: "nfc-cards",
    description:
      "B2B & B2C NFC digital card management platform enabling professionals and brands to create, manage, and share dynamic online profiles via NFC technology.",
    description_fr:
      "Plateforme de gestion de cartes NFC digitales B2B & B2C permettant aux professionnels et aux marques de créer, gérer et partager des profils en ligne dynamiques via la technologie NFC.",
    categoryLabel: "Digital Identity | Web Application",
    tags: [
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-[#339933]" /> },
      { name: "React JS", icon: <SiReact className="w-4 h-4 text-[#61DBFB]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
    ],
    links: { github: "https://github.com/Ryhanee/NFC", demo: "#" },
    image: nfc,
    hasHeroImage: false,
    featured: true,
    category: 1,
    color: "text-blue-400",
    cms: "",
    challenge: {
      heading: "Replacing physical business cards with a scalable, trackable digital identity solution.",
      body: [
        "Physical business cards are single-use, non-trackable, and wasteful. Professionals and brands needed a smarter way to share contact information and online profiles—one that could be updated instantly and measured for engagement.",
        "The platform had to serve both individual professionals (B2C) and organisations managing cards for entire teams (B2B), with a clean, intuitive UX for both use cases and robust multi-tenant data isolation.",
      ],
    },
    challenge_fr: {
      heading: "Remplacer les cartes de visite physiques par une solution d'identité digitale évolutive et mesurable.",
      body: [
        "Les cartes de visite physiques sont à usage unique, impossibles à suivre et peu écologiques. Les professionnels et les marques avaient besoin d'un moyen plus intelligent de partager leurs coordonnées et profils en ligne — actualisable instantanément et mesurable en termes d'engagement.",
        "La plateforme devait servir à la fois les professionnels individuels (B2C) et les organisations gérant des cartes pour des équipes entières (B2B), avec une UX claire pour les deux cas d'usage et une isolation robuste des données multi-tenant.",
      ],
    },
    solution: {
      heading: "A Node.js + React.js NFC card management platform with dual B2B/B2C flows.",
      body: [
        "Built a full-stack platform where users create dynamic digital profiles linked to NFC cards. A tap of the card opens a personalised landing page with contact details, social links, portfolio content, and custom CTAs—all updateable in real time from the dashboard.",
        "The B2B dashboard enables organisations to manage cards across their entire team, control branding consistency, and track profile views and engagement per card. PostgreSQL handles robust multi-tenant data management with full audit trails.",
      ],
    },
    solution_fr: {
      heading: "Une plateforme Node.js + React.js de gestion de cartes NFC avec des parcours B2B et B2C distincts.",
      body: [
        "Construction d'une plateforme full-stack où les utilisateurs créent des profils digitaux dynamiques liés à des cartes NFC. Un simple tap de la carte ouvre une page personnalisée avec coordonnées, liens sociaux, portfolio et CTAs sur mesure — tous actualisables en temps réel depuis le tableau de bord.",
        "Le tableau de bord B2B permet aux organisations de gérer les cartes de toute leur équipe, contrôler la cohérence de la marque et suivre les vues de profils et l'engagement par carte. PostgreSQL assure une gestion multi-tenant robuste avec traçabilité complète.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2024",
    status: "In Development",
    image1: nfc1,
    image2: nfc2,
    image3: nfc3
  },
  {
    title: "Nutislab",
    icon: Code2,
    slug: "nutislab",
    description:
      "Practice management platform for orthodontists and dental labs — featuring Angular frontend, role-based access control, manufacturing status tracking, and a 3D device preview module.",
    description_fr:
      "Plateforme de gestion de cabinet pour orthodontistes et laboratoires dentaires — avec frontend Angular, contrôle d'accès basé sur les rôles, suivi du statut de fabrication et module de prévisualisation 3D des appareils.",
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
      heading: "Connecting orthodontic practices and dental labs through a unified digital workflow.",
      body: [
        "Orthodontists and their dental lab partners operated in silos—treatment plans, device orders, and manufacturing status were communicated by phone and email, creating delays and costly miscommunications at every stage of patient care.",
        "The platform needed to serve multiple distinct user roles (practitioners, lab technicians, patients, admins) with appropriate data scopes, and provide a visual way to preview devices before lab production began.",
      ],
    },
    challenge_fr: {
      heading: "Connecter les cabinets orthodontiques et les laboratoires dentaires via un workflow digital unifié.",
      body: [
        "Les orthodontistes et leurs laboratoires partenaires fonctionnaient en silos — plans de traitement, commandes d'appareils et statuts de fabrication étaient communiqués par téléphone et email, créant des délais et des erreurs coûteuses à chaque étape du parcours patient.",
        "La plateforme devait servir plusieurs rôles utilisateurs distincts (praticiens, techniciens de laboratoire, patients, admins) avec des périmètres de données appropriés, et offrir un moyen visuel de prévisualiser les appareils avant le lancement de la production en laboratoire.",
      ],
    },
    solution: {
      heading: "A Laravel + Angular platform with role-based workflows and 3D device visualisation.",
      body: [
        "Built a full-stack application with Angular powering the clinical interface and Laravel as the GraphQL API layer. Role-based access control ensures each user type—practitioner, lab technician, admin, patient—sees only their relevant workflow and data scope.",
        "A 3D device preview module enables orthodontists to review appliance designs before approving lab production, reducing revision cycles. A manufacturing status tracker gives all parties real-time visibility into production progress, replacing phone calls with a single source of truth.",
      ],
    },
    solution_fr: {
      heading: "Une plateforme Laravel + Angular avec workflows par rôle et visualisation 3D des appareils.",
      body: [
        "Construction d'une application full-stack avec Angular pour l'interface clinique et Laravel comme couche API GraphQL. Le contrôle d'accès basé sur les rôles garantit que chaque type d'utilisateur — praticien, technicien, admin, patient — ne voit que son workflow et son périmètre de données pertinents.",
        "Un module de prévisualisation 3D des appareils permet aux orthodontistes de valider les designs avant d'approuver la production en laboratoire, réduisant les cycles de révision. Un tracker de statut de fabrication donne à toutes les parties une visibilité en temps réel, remplaçant les appels téléphoniques par une source de vérité unique.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Live",
    image1: nutislab1,
    image2: nutislab2,
    image3: nutislab3
  },
  {
    title: "Cromdn",
    icon: Code2,
    slug: "cromdn",
    description:
      "Comprehensive dental directory and practice management system for Tunisian orthodontists — featuring complex tariff calculations, payment tracking, and advanced analytics dashboards.",
    description_fr:
      "Répertoire dentaire complet et système de gestion de cabinet pour les orthodontistes tunisiens — avec calculs tarifaires complexes, suivi des paiements et tableaux de bord analytiques avancés.",
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
      heading: "Automating complex dental pricing and financial tracking for Tunisia's orthodontic practices.",
      body: [
        "Tunisian dental practices relied on manual calculations for complex treatment tariffs and tracked patient payments across paper ledgers. Errors were frequent, financial visibility was near zero, and reporting was impossible.",
        "CROMDN needed to deliver both a patient-facing directory and a practitioner-facing management layer—covering tariff computation, instalment payment tracking, and statistical reporting from a single platform.",
      ],
    },
    challenge_fr: {
      heading: "Automatiser les calculs tarifaires complexes et le suivi financier des cabinets orthodontiques tunisiens.",
      body: [
        "Les cabinets dentaires tunisiens s'appuyaient sur des calculs manuels pour des tarifs de traitement complexes et suivaient les paiements patients sur des registres papier. Les erreurs étaient fréquentes, la visibilité financière quasi nulle et le reporting impossible.",
        "CROMDN devait offrir à la fois un répertoire orienté patients et une couche de gestion pour les praticiens — calcul des tarifs, suivi des paiements échelonnés et reporting statistique, au sein d'une seule plateforme.",
      ],
    },
    solution: {
      heading: "A Laravel platform combining a patient directory with a full financial management layer.",
      body: [
        "Built a dual-purpose Laravel application: a multi-criteria patient directory (city, specialisation, rating) and a practice back-office featuring automated tariff calculation engines, instalment payment tracking, and an analytics dashboard.",
        "The statistics module gives practice managers real-time visibility into revenue, outstanding payments, and patient flow—replacing spreadsheets and paper ledgers with a single source of financial truth.",
      ],
    },
    solution_fr: {
      heading: "Une plateforme Laravel combinant répertoire patients et gestion financière complète.",
      body: [
        "Construction d'une application Laravel à double vocation : un répertoire patients multi-critères (ville, spécialisation, avis) et un back-office cabinet avec moteurs de calcul automatisé des tarifs, suivi des paiements échelonnés et tableau de bord analytique.",
        "Le module statistiques donne aux gestionnaires une visibilité en temps réel sur les revenus, les impayés et le flux de patients — remplaçant tableurs et registres papier par une source de vérité financière unique.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Live",
    image1:cromdn1,
    image2:cromdn2,
    image3:cromdn3
  },
  {
    title: "Wellbeing",
    icon: Code2,
    slug: "wellbeing",
    description:
        "Cross-platform beauty & wellness marketplace built with React Native — featuring AI skin analysis, a recommendation engine, an integrated e-wallet, and dual B2C consumer and B2B provider dashboards.",
    description_fr:
        "Marketplace beauté & bien-être cross-platform en React Native — avec analyse de peau par IA, moteur de recommandations, e-wallet intégré et tableaux de bord B2C consommateurs et B2B prestataires distincts.",
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
      heading: "Building a two-sided beauty marketplace with AI personalisation and integrated payments.",
      body: [
        "The beauty and wellness market lacked a unified mobile platform serving both consumers booking services and professionals managing their business. Personalisation was absent, payments were fragmented, and providers had no analytics tooling.",
        "The platform needed to simultaneously address consumer discovery and booking, provider business management, and an AI layer that turned passive browsing into personalised service recommendations.",
      ],
    },
    challenge_fr: {
      heading: "Construire une marketplace beauté biface avec personnalisation IA et paiements intégrés.",
      body: [
        "Le marché de la beauté et du bien-être manquait d'une plateforme mobile unifiée servant à la fois les consommateurs réservant des services et les professionnels gérant leur activité. La personnalisation était absente, les paiements fragmentés et les prestataires n'avaient aucun outil analytique.",
        "La plateforme devait simultanément adresser la découverte et la réservation pour les consommateurs, la gestion d'activité pour les prestataires, et une couche IA transformant la navigation passive en recommandations de services personnalisées.",
      ],
    },
    solution: {
      heading: "A React Native marketplace with AI skin analysis, e-wallet, and B2B provider dashboards.",
      body: [
        "Developed a cross-platform mobile application with separate B2C and B2B flows. Consumers access an AI skin analysis module powered by computer vision to identify skin conditions and receive matched service and product recommendations via a collaborative filtering engine.",
        "An integrated e-wallet handles payments, refunds, and loyalty credits. The B2B provider dashboard gives beauty professionals real-time booking management, revenue tracking, and customer analytics—all within the same application, backed by a Node.js API on Amazon EC2.",
      ],
    },
    solution_fr: {
      heading: "Une marketplace React Native avec analyse de peau par IA, e-wallet et tableaux de bord B2B prestataires.",
      body: [
        "Développement d'une application mobile cross-platform avec des parcours B2C et B2B distincts. Les consommateurs accèdent à un module d'analyse de peau par IA (computer vision) pour identifier les conditions cutanées et recevoir des recommandations personnalisées via un moteur de filtrage collaboratif.",
        "Un e-wallet intégré gère les paiements, remboursements et crédits de fidélité. Le tableau de bord B2B donne aux professionnels de la beauté une gestion en temps réel des réservations, du chiffre d'affaires et des analytics clients — au sein de la même application, portée par une API Node.js sur Amazon EC2.",
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
    title: "Profili",
    icon: Code2,
    slug: "profili",
    description:
      "AI-powered recruitment platform featuring NLP CV analysis, automated chatbot and video-bot interviews, intelligent candidate pre-selection, analytics dashboards, and an AI portfolio generator for shortlisted candidates.",
    description_fr:
      "Plateforme de recrutement propulsée par l'IA — avec analyse de CV par NLP, entretiens automatisés via chatbot et video-bot, pré-sélection intelligente des candidats, tableaux de bord analytiques et générateur de portfolio IA pour les candidats présélectionnés.",
    categoryLabel: "HR Tech | Web Application",
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
      heading: "Removing the manual bottleneck from high-volume recruitment pipelines.",
      body: [
        "Recruiters spending 80% of their time on initial screening—reading CVs, scheduling first calls, and conducting repetitive qualification interviews—had little capacity left for high-value tasks like cultural assessment and final selection.",
        "The platform needed to automate the full top-of-funnel: CV ingestion, structured interview, candidate scoring, and shortlist generation, while remaining fair and explainable to all stakeholders.",
      ],
    },
    challenge_fr: {
      heading: "Supprimer le goulot d'étranglement manuel des pipelines de recrutement à fort volume.",
      body: [
        "Les recruteurs passant 80 % de leur temps en screening initial — lecture de CV, planification des premiers appels, entretiens de qualification répétitifs — n'avaient que peu de capacité pour les tâches à haute valeur comme l'évaluation culturelle et la sélection finale.",
        "La plateforme devait automatiser l'intégralité du haut du funnel : ingestion des CV, entretien structuré, scoring des candidats et génération de shortlists, tout en restant équitable et explicable pour toutes les parties prenantes.",
      ],
    },
    solution: {
      heading: "A full-stack AI recruitment platform with NLP CV parsing, chatbot/video-bot interviews, and automated pre-selection.",
      body: [
        "Built with Node.js and a Flask NLP microservice, Profili ingests uploaded CVs, extracts structured data (skills, experience, education), and scores candidates against job requirements automatically. Shortlisted candidates are invited to a chatbot interview or a video-bot session for asynchronous assessment.",
        "A pre-selection engine ranks candidates by composite score (CV match + interview performance) and surfaces results to recruiters via an analytics dashboard. An AI portfolio generator creates personalised professional portfolios for top candidates, giving recruiters richer context before final interviews.",
      ],
    },
    solution_fr: {
      heading: "Une plateforme de recrutement IA full-stack avec parsing NLP, entretiens chatbot/video-bot et pré-sélection automatisée.",
      body: [
        "Construite avec Node.js et un microservice Flask NLP, Profili ingère les CV uploadés, extrait les données structurées (compétences, expérience, formation) et score automatiquement les candidats selon les exigences du poste. Les candidats présélectionnés sont invités à un entretien chatbot ou une session video-bot pour une évaluation asynchrone.",
        "Un moteur de pré-sélection classe les candidats par score composite (matching CV + performance entretien) et remonte les résultats aux recruteurs via un tableau de bord analytique. Un générateur de portfolio IA crée des portfolios professionnels personnalisés pour les meilleurs candidats, offrant aux recruteurs un contexte enrichi avant les entretiens finaux.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer / AI Engineer",
    year: "2023",
    status: "In Development",
  },
  {
    title: "Linkaura",
    icon: Code2,
    slug: "linkaura",
    description:
      "Machine learning API for intelligent Instagram content creator matching — using Decision Tree and Random Forest models to predict partnership success and match brands with the right influencers.",
    description_fr:
      "API de machine learning pour la mise en relation intelligente avec les créateurs de contenu Instagram — utilisant des modèles Decision Tree et Random Forest pour prédire le succès des partenariats et matcher les marques aux bons influenceurs.",
    categoryLabel: "MarTech | API / Machine Learning",
    tags: [
      { name: "Python", icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: "Machine Learning", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "Flask", icon: <Server className="w-4 h-4 text-[#336791]" /> },
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
      heading: "Predicting influencer partnership success with machine learning.",
      body: [
        "Marketing teams manually screened hundreds of Instagram profiles for each campaign, with no predictive signal for partnership performance. Decisions were gut-driven, results were inconsistent, and scaling was impossible.",
        "The goal was an API that could predict the likelihood of a successful brand-creator collaboration—not just filter by follower count or engagement rate, but model the actual success probability based on historical patterns.",
      ],
    },
    challenge_fr: {
      heading: "Prédire le succès des partenariats avec les influenceurs grâce au machine learning.",
      body: [
        "Les équipes marketing passaient au crible manuellement des centaines de profils Instagram pour chaque campagne, sans signal prédictif sur la performance du partenariat. Les décisions étaient intuitives, les résultats incohérents et la scalabilité impossible.",
        "L'objectif était une API capable de prédire la probabilité de succès d'une collaboration marque-créateur — pas seulement de filtrer par nombre d'abonnés ou taux d'engagement, mais de modéliser la probabilité de succès réelle sur la base de patterns historiques.",
      ],
    },
    solution: {
      heading: "A Flask ML API using Decision Tree and Random Forest for creator-brand match scoring.",
      body: [
        "Built a Flask RESTful API integrating trained Decision Tree and Random Forest classifiers to score Instagram creator profiles against campaign parameters—predicting partnership success based on niche alignment, audience quality, and historical engagement patterns.",
        "MongoDB stores creator profiles and model training data, enabling continuous retraining as new partnership outcome data is collected. The API returns ranked match scores, giving marketing teams a data-driven shortlist in seconds rather than hours.",
      ],
    },
    solution_fr: {
      heading: "Une API Flask ML utilisant Decision Tree et Random Forest pour le scoring de compatibilité marque-créateur.",
      body: [
        "Construction d'une API Flask RESTful intégrant des classificateurs Decision Tree et Random Forest entraînés pour évaluer les profils de créateurs Instagram — en prédisant le succès du partenariat sur la base de l'alignement de niche, de la qualité de l'audience et des patterns d'engagement historiques.",
        "MongoDB stocke les profils de créateurs et les données d'entraînement, permettant un réentraînement continu au fur et à mesure que de nouvelles données sur les résultats des partenariats sont collectées. L'API retourne des scores de compatibilité classés, offrant aux équipes marketing une shortlist basée sur les données en quelques secondes.",
      ],
    },
    stats: [],
    role: "ML Engineer / Backend Developer",
    year: "2023",
    status: "Completed",
  },
  {
    title: "Simulateur",
    icon: Code2,
    slug: "simulateur",
    description:
      "Interactive digital project cost simulator with an AI layer — built with React.js, Laravel, and a Flask NLP module that analyses free-text client comments to extract and score service requirements.",
    description_fr:
      "Simulateur interactif de coûts de projets digitaux avec couche IA — construit avec React.js, Laravel et un module Flask NLP qui analyse les commentaires en texte libre des clients pour extraire et scorer les exigences en services.",
    categoryLabel: "Business Tools | Web Application",
    tags: [
      { name: "React JS", icon: <SiReact className="w-4 h-4 text-[#339933]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#3776AB]" /> },
      { name: "Flask", icon: <SiPython className="w-4 h-4 text-[#4584b6]" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#3776AB]" /> },
    ],
    links: { github: "https://github.com/Ryhanee/simulateur-craftech", demo: "#" },
    image: no_image,
    hasHeroImage: false,
    featured: true,
    category: 1,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Automating cost qualification from unstructured client requirements.",
      body: [
        "CRAFTECH's sales cycle started with lengthy discovery calls to translate vague client requirements into structured project scopes. Manual estimation was slow, inconsistent, and created friction before the first line of code was written.",
        "The goal was a self-service tool that could take a client's free-text description of their project, analyse it with NLP, and produce an accurate, transparent cost estimate—without human intervention for the initial qualification.",
      ],
    },
    challenge_fr: {
      heading: "Automatiser la qualification des coûts à partir d'exigences clients non structurées.",
      body: [
        "Le cycle de vente de CRAFTECH démarrait par de longs appels de découverte pour transformer des exigences vagues en périmètres de projets structurés. L'estimation manuelle était lente, incohérente et créait des frictions avant même la première ligne de code.",
        "L'objectif était un outil en libre-service capable de prendre la description en texte libre d'un client, de l'analyser avec le NLP et de produire une estimation de coût précise et transparente — sans intervention humaine pour la qualification initiale.",
      ],
    },
    solution: {
      heading: "A React + Laravel + Flask simulator that turns client comments into structured cost estimates.",
      body: [
        "Built a step-by-step React configurator where clients select services and describe custom requirements in plain text. A Flask NLP module processes the free-text comments, extracts service signals, and maps them to cost components stored in a MySQL database via Laravel.",
        "The self-service estimation tool qualifies leads, sets expectations early, and surfaces high-intent prospects to the CRAFTECH team automatically—reducing the average sales cycle length and improving proposal accuracy.",
      ],
    },
    solution_fr: {
      heading: "Un simulateur React + Laravel + Flask qui transforme les commentaires clients en estimations de coûts structurées.",
      body: [
        "Construction d'un configurateur React pas à pas où les clients sélectionnent des services et décrivent leurs besoins spécifiques en texte libre. Un module Flask NLP traite les commentaires, extrait les signaux de services et les associe aux composants de coût stockés dans MySQL via Laravel.",
        "L'outil de qualification en libre-service pré-éduque les leads, pose les attentes tôt et remonte automatiquement les prospects à haute intention à l'équipe CRAFTECH — réduisant la durée du cycle de vente et améliorant la précision des propositions.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },

  /* ── WEBSITES (category 2) ── */

  {
    title: "Tuniship",
    icon: FaWordpress,
    slug: "tuniship",
    description:
        "Corporate website for a freight logistics company enhanced with an integrated pro chatbot for instant client support and an interactive billing simulator for transparent freight cost estimation.",
    description_fr:
        "Site corporate pour une société de transport maritime enrichi d'un chatbot pro intégré pour le support client instantané et d'un simulateur de facturation interactif pour une estimation transparente des coûts de fret.",
    categoryLabel: "Freight Logistics | WordPress",
    tags: [
      ...wpTags,
      { name: "Chatbot", icon: <Server className="w-4 h-4 text-[#00A67E]" /> },
    ],
    links: { github: "#", demo: "https://tuniship.net/" },
    image: tuniship,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Modernising a freight company's web presence while reducing support friction.",
      body: [
        "Tuniship was expanding its freight operations but lacked a digital presence that matched its ambitions. Beyond the basic corporate site, clients needed instant access to freight cost estimates and immediate answers to logistical queries.",
        "The objective was a professional platform with self-service tools that would reduce inbound sales calls, inspire confidence in logistics partners, and generate qualified leads.",
      ],
    },
    challenge_fr: {
      heading: "Moderniser la présence web d'une société de fret tout en réduisant les frictions de support.",
      body: [
        "Tuniship développait ses opérations de fret mais manquait d'une présence digitale à la hauteur de ses ambitions. Au-delà du site corporate de base, les clients avaient besoin d'un accès instantané aux estimations de coûts de fret et de réponses immédiates à leurs questions logistiques.",
        "L'objectif était une plateforme professionnelle dotée d'outils en libre-service qui réduiraient les appels commerciaux entrants, inspireraient confiance aux partenaires logistiques et généreraient des leads qualifiés.",
      ],
    },
    solution: {
      heading: "A WordPress corporate site with an embedded pro chatbot and interactive billing simulator.",
      body: [
        "Built a structured WordPress site with dedicated service pages and partner-focused messaging. An integrated pro chatbot provides instant answers to common logistics questions—routes, transit times, documentation—reducing the load on the operations team.",
        "A billing simulator allows clients to estimate freight costs based on cargo parameters directly on the site, turning a common pre-sales inquiry into a self-service conversion tool.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress corporate avec chatbot pro intégré et simulateur de facturation interactif.",
      body: [
        "Construction d'un site WordPress structuré avec des pages de services dédiées et un messaging orienté partenaires. Un chatbot pro intégré fournit des réponses instantanées aux questions logistiques courantes — routes, délais de transit, documentation — réduisant la charge de l'équipe opérationnelle.",
        "Un simulateur de facturation permet aux clients d'estimer les coûts de fret selon les paramètres de leur cargaison directement sur le site, transformant une question courante de pré-vente en outil de conversion en libre-service.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    title: "Trovana",
    icon: FaWordpress,
    slug: "trovana",
    description:
        "Corporate website for Trovana, a leading digital solutions provider specializing in e-goods and modern electronic services.",
    description_fr:
        "Site corporate pour Trovana, fournisseur de solutions digitales spécialisé dans les biens numériques et les services électroniques modernes.",
    categoryLabel: "Digital Solutions | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://www.troveana.com/" },
    image: trovana,
    hasHeroImage: false,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Establishing Trovana as a leading digital solutions brand in the e-goods market.",
      body: [
        "Trovana operates in the fast-moving e-goods and electronic services space and needed a digital presence that immediately communicated market leadership, trustworthiness, and the breadth of their service catalogue.",
        "The goal was a site that could serve both B2B partners and individual consumers, positioning Trovana as the definitive platform for modern electronic services.",
      ],
    },
    challenge_fr: {
      heading: "Positionner Trovana comme leader de solutions digitales sur le marché des biens numériques.",
      body: [
        "Trovana opère sur le marché dynamique des biens numériques et des services électroniques et avait besoin d'une présence digitale communiquant immédiatement le leadership, la fiabilité et l'étendue de son catalogue de services.",
        "L'objectif était un site capable de servir à la fois les partenaires B2B et les consommateurs individuels, positionnant Trovana comme la plateforme de référence pour les services électroniques modernes.",
      ],
    },
    solution: {
      heading: "A brand-forward WordPress site that leads with Trovana's market positioning.",
      body: [
        "Designed a bold, conversion-optimised WordPress site structured around Trovana's core service categories—e-goods, digital vouchers, and electronic services—with clear pathways for both business and consumer visitors.",
        "The visual identity—dynamic, modern, high-energy—signals market leadership and differentiates Trovana in a category where trust and immediacy are the decisive purchase factors.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress centré sur la marque qui affirme le positionnement de marché de Trovana.",
      body: [
        "Conception d'un site WordPress audacieux et optimisé pour la conversion, structuré autour des catégories de services phares de Trovana — biens numériques, vouchers digitaux et services électroniques — avec des parcours clairs pour les visiteurs B2B et consommateurs.",
        "L'identité visuelle — dynamique, moderne, haute énergie — signale le leadership marché et différencie Trovana dans une catégorie où la confiance et l'immédiateté sont les facteurs d'achat décisifs.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Optic Distribution",
    icon: SiPrestashop,
    slug: "optic-distribution",
    description:
        "E-commerce boutique for an ophthalmological products distributor featuring real-time currency synchronisation by country, multiple payment gateways, and integrated delivery management.",
    description_fr:
        "Boutique e-commerce pour un distributeur de produits d'ophtalmologie avec synchronisation de devise en temps réel par pays, passerelles de paiement multiples et gestion de livraison intégrée.",
    categoryLabel: "Medical E-Commerce | WordPress",
    tags: [
      { name: "Prestashop", icon: <SiPrestashop className="w-4 h-4 text-[#339933]" /> },
      { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "CSS", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
      { name: "javascript", icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" /> },
    ],
    links: { github: "#", demo: "https://boutique.optiquedistribution.net/" },
    image: optic_boutique,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Building an international e-commerce experience for a specialist medical products distributor.",
      body: [
        "The client distributed ophthalmological products across multiple markets with different currencies and payment preferences. A generic catalogue site was not enough—they needed a full e-commerce experience that handled international complexity seamlessly.",
        "The challenge was building a platform that felt local to buyers in different countries, with their native currency, preferred payment methods, and reliable delivery options—while maintaining the technical clarity expected in the medical sector.",
      ],
    },
    challenge_fr: {
      heading: "Construire une expérience e-commerce internationale pour un distributeur spécialisé en produits médicaux.",
      body: [
        "Le client distribuait des produits d'ophtalmologie sur plusieurs marchés avec des devises et préférences de paiement différentes. Un simple catalogue en ligne ne suffisait pas — il fallait une expérience e-commerce complète gérant la complexité internationale de manière transparente.",
        "Le défi était de construire une plateforme perçue comme locale par les acheteurs de différents pays, avec leur devise native, leurs modes de paiement préférés et des options de livraison fiables — tout en maintenant la clarté technique attendue dans le secteur médical.",
      ],
    },
    solution: {
      heading: "A WooCommerce boutique with currency sync by country, multi-gateway payments, and delivery management.",
      body: [
        "Built a full WooCommerce store with real-time currency synchronisation based on visitor country, allowing international buyers to see prices in their local currency automatically. Multiple payment gateways were integrated to accommodate regional payment preferences.",
        "An integrated delivery management module handles shipping rules, carrier selection, and order tracking—giving both the client and their customers full visibility into the fulfilment process from checkout to delivery.",
      ],
    },
    solution_fr: {
      heading: "Une boutique WooCommerce avec synchronisation de devise par pays, paiements multi-gateway et gestion de livraison.",
      body: [
        "Construction d'une boutique WooCommerce complète avec synchronisation de devise en temps réel selon le pays du visiteur, permettant aux acheteurs internationaux de voir les prix dans leur devise locale automatiquement. Plusieurs passerelles de paiement ont été intégrées pour accommoder les préférences régionales.",
        "Un module de gestion de livraison intégré gère les règles d'expédition, la sélection des transporteurs et le suivi des commandes — offrant au client et à ses acheteurs une visibilité complète sur le processus de fulfillment du checkout à la livraison.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    title: "CRAFTECH",
    icon: FaWordpress,
    slug: "craftech",
    description:
        "Website for CRAFTECH, a digital creation agency showcasing its full range of digital solutions—from custom web development to e-commerce and SaaS applications.",
    description_fr:
        "Site web pour CRAFTECH, agence de création de solutions digitales présentant sa gamme complète — du développement web sur mesure à l'e-commerce et aux applications SaaS.",
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
    challenge_fr: {
      heading: "Construire la vitrine d'une agence digitale à la hauteur de son propre savoir-faire.",
      body: [
        "CRAFTECH avait besoin d'un site qui ne se contente pas de lister des services, mais démontre activement ses capacités design et sa profondeur technique pour attirer des clients entreprise.",
        "Le défi était de créer une plateforme qui différencie CRAFTECH des nombreux sites d'agences génériques dans la région.",
      ],
    },
    solution: {
      heading: "A visual-first WordPress site that leads with results, not just services.",
      body: [
        "Designed a portfolio-forward WordPress site with animated service sections, client case study cards, and a clear conversion funnel leading to a consultation CTA.",
        "The aesthetic—dark, bold, high-contrast—was intentionally chosen to differentiate CRAFTECH and signal design ambition from the first scroll.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress visuel-first qui met les résultats en avant, pas seulement les services.",
      body: [
        "Conception d'un site WordPress centré sur le portfolio, avec des sections de services animées, des cartes d'études de cas clients et un funnel de conversion clair menant à un CTA de consultation.",
        "L'esthétique — sombre, audacieuse, fort contraste — a été intentionnellement choisie pour différencier CRAFTECH et signaler l'ambition design dès le premier scroll.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Completed",
  },
  {
    title: "Sotumar",
    icon: FaWordpress,
    slug: "sotumar",
    description:
        "Corporate website for a logistics freight company. Streamlined service presentation and contact flow.",
    description_fr:
        "Site corporate pour une société de fret maritime. Présentation simplifiée des services et parcours de contact optimisé.",
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
    challenge_fr: {
      heading: "Créer un ancrage digital pour un opérateur de fret maritime.",
      body: [
        "Sotumar avait besoin d'un site positionnant l'entreprise comme un partenaire fret fiable dans un marché logistique maritime concurrentiel, touchant des clients commerciaux dans toute la région.",
        "Le site devait articuler clairement la gamme de services tout en restant accessible à un large éventail de clients potentiels.",
      ],
    },
    solution: {
      heading: "A structured WordPress platform built for service clarity and B2B trust.",
      body: [
        "Developed a focused WordPress site with clearly delineated service sections, partner-facing messaging, and a contact system designed to qualify leads efficiently.",
        "Clean layout, professional typography, and a restrained colour palette communicate stability and operational expertise.",
      ],
    },
    solution_fr: {
      heading: "Une plateforme WordPress structurée pour la clarté des services et la confiance B2B.",
      body: [
        "Développement d'un site WordPress ciblé avec des sections de services clairement délimitées, un messaging orienté partenaires et un système de contact conçu pour qualifier efficacement les leads.",
        "Mise en page épurée, typographie professionnelle et palette chromatique sobre communiquent stabilité et expertise opérationnelle.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Completed",
  },
  {
    title: "Marship",
    icon: FaWordpress,
    slug: "marship",
    description:
      "Website for MARSHIP, a freight forwarding company based in Morocco. Clean, professional corporate presence.",
    description_fr:
      "Site web pour MARSHIP, un transitaire basé au Maroc. Présence corporate propre et professionnelle.",
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
    challenge_fr: {
      heading: "Projeter une crédibilité internationale pour un transitaire basé au Maroc.",
      body: [
        "MARSHIP sert une clientèle internationale mais manquait d'une présence digitale à la hauteur de l'envergure de ses opérations. L'ancien site n'offrait aucun support bilingue et ne mettait pas en valeur les offres de services clés.",
        "L'objectif était de concevoir un site positionnant MARSHIP comme un partenaire logistique de confiance, tourné vers l'international.",
      ],
    },
    solution: {
      heading: "A bilingual WordPress site with structured service presentation.",
      body: [
        "Built a multilingual (EN/FR) WordPress platform with dedicated service pages, a structured contact routing system, and an emphasis on clarity for international visitors.",
        "The design language—authoritative and structured—was chosen to communicate reliability and professionalism across cultures and geographies.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress bilingue avec une présentation structurée des services.",
      body: [
        "Construction d'une plateforme WordPress multilingue (EN/FR) avec des pages de services dédiées, un système de routage des contacts structuré et une emphase sur la clarté pour les visiteurs internationaux.",
        "Le langage visuel — autoritaire et structuré — a été choisi pour communiquer fiabilité et professionnalisme à travers les cultures et géographies.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    title: "Lascensoriste",
    icon: FaWordpress,
    slug: "lascensoriste",
    description:
        "E-commerce website to sell elevator elements. Complete digital identity overhaul focusing on UX and B2B conversion.",
    description_fr:
        "Site e-commerce pour la vente d'éléments d'ascenseurs. Refonte complète de l'identité digitale axée sur l'UX et la conversion B2B.",
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
    challenge_fr: {
      heading: "Établir une présence digitale crédible pour un fournisseur spécialisé en ascenseurs.",
      body: [
        "Le client opérait principalement via des canaux print et le bouche-à-oreille, avec un site obsolète incapable de présenter sa gamme de produits ou de capter efficacement des leads B2B.",
        "L'objectif était de transformer son identité en ligne en une plateforme axée sur la conversion, s'adressant directement aux responsables achats et aux entrepreneurs du bâtiment.",
      ],
    },
    solution: {
      heading: "A WordPress e-commerce site built for B2B trust and catalogue exploration.",
      body: [
        "Developed a custom WordPress theme with WooCommerce integration, featuring filterable product categories and a bulk request-for-quote flow designed for professional buyers.",
        "A precise, technical visual language—clean typography, structured layout—conveys expertise and builds confidence with the B2B audience.",
      ],
    },
    solution_fr: {
      heading: "Un site e-commerce WordPress conçu pour la confiance et l'exploration catalogue B2B.",
      body: [
        "Développement d'un thème WordPress personnalisé avec intégration WooCommerce, comprenant des catégories produits filtrables et un parcours de demande de devis en gros conçu pour les acheteurs professionnels.",
        "Un langage visuel précis et technique — typographie épurée, mise en page structurée — transmet l'expertise et instaure la confiance auprès de l'audience B2B.",
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
    title: "Optic Distribution",
    icon: FaWordpress,
    slug: "optic-distribution",
    description:
        "E-commerce boutique for an ophthalmological products distributor featuring real-time currency synchronisation by country, multiple payment gateways, and integrated delivery management.",
    description_fr:
        "Boutique e-commerce pour un distributeur de produits d'ophtalmologie avec synchronisation de devise en temps réel par pays, passerelles de paiement multiples et gestion de livraison intégrée.",
    categoryLabel: "Medical E-Commerce | WordPress",
    tags: [
      { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#339933]" /> },
      { name: "WooCommerce", icon: <Server className="w-4 h-4 text-[#96588A]" /> },
      { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#3776AB]" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
    ],
    links: { github: "#", demo: "https://optiquedistribution.net/" },
    image: optic,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Building an international e-commerce experience for a specialist medical products distributor.",
      body: [
        "The client distributed ophthalmological products across multiple markets with different currencies and payment preferences. A generic catalogue site was not enough—they needed a full e-commerce experience that handled international complexity seamlessly.",
        "The challenge was building a platform that felt local to buyers in different countries, with their native currency, preferred payment methods, and reliable delivery options—while maintaining the technical clarity expected in the medical sector.",
      ],
    },
    challenge_fr: {
      heading: "Construire une expérience e-commerce internationale pour un distributeur spécialisé en produits médicaux.",
      body: [
        "Le client distribuait des produits d'ophtalmologie sur plusieurs marchés avec des devises et préférences de paiement différentes. Un simple catalogue en ligne ne suffisait pas — il fallait une expérience e-commerce complète gérant la complexité internationale de manière transparente.",
        "Le défi était de construire une plateforme perçue comme locale par les acheteurs de différents pays, avec leur devise native, leurs modes de paiement préférés et des options de livraison fiables — tout en maintenant la clarté technique attendue dans le secteur médical.",
      ],
    },
    solution: {
      heading: "A WooCommerce boutique with currency sync by country, multi-gateway payments, and delivery management.",
      body: [
        "Built a full WooCommerce store with real-time currency synchronisation based on visitor country, allowing international buyers to see prices in their local currency automatically. Multiple payment gateways were integrated to accommodate regional payment preferences.",
        "An integrated delivery management module handles shipping rules, carrier selection, and order tracking—giving both the client and their customers full visibility into the fulfilment process from checkout to delivery.",
      ],
    },
    solution_fr: {
      heading: "Une boutique WooCommerce avec synchronisation de devise par pays, paiements multi-gateway et gestion de livraison.",
      body: [
        "Construction d'une boutique WooCommerce complète avec synchronisation de devise en temps réel selon le pays du visiteur, permettant aux acheteurs internationaux de voir les prix dans leur devise locale automatiquement. Plusieurs passerelles de paiement ont été intégrées pour accommoder les préférences régionales.",
        "Un module de gestion de livraison intégré gère les règles d'expédition, la sélection des transporteurs et le suivi des commandes — offrant au client et à ses acheteurs une visibilité complète sur le processus de fulfillment du checkout à la livraison.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    title: "22 Services",
    icon: FaWordpress,
    slug: "22-services",
    description:
        "Corporate website for 22 Services, a digital solutions company presenting its full range of services and expertise to B2B clients.",
    description_fr:
        "Site corporate pour 22 Services, société de solutions digitales présentant sa gamme complète de services et son expertise aux clients B2B.",
    categoryLabel: "Digital Solutions | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "#" },
    image: service22,
    hasHeroImage: false,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Building a credible digital presence for a growing digital solutions company.",
      body: [
        "22 Services needed a professional website that could clearly communicate their service portfolio to business clients and generate qualified inbound leads.",
        "The objective was a platform that positioned the company as a trusted digital partner—one that decision-makers would choose with confidence over less established competitors.",
      ],
    },
    challenge_fr: {
      heading: "Établir une présence digitale crédible pour une société de solutions digitales en croissance.",
      body: [
        "22 Services avait besoin d'un site professionnel capable de communiquer clairement son portefeuille de services aux clients entreprises et de générer des leads entrants qualifiés.",
        "L'objectif était une plateforme positionnant l'entreprise comme un partenaire digital de confiance — que les décideurs choisiraient en confiance face à des concurrents moins établis.",
      ],
    },
    solution: {
      heading: "A service-forward WordPress site built to attract and convert B2B prospects.",
      body: [
        "Designed and developed a structured WordPress site with dedicated service pages, client-focused messaging, and clear conversion pathways leading to consultation CTAs.",
        "The design language—professional and approachable—was chosen to communicate expertise and build trust with decision-makers from the first visit.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress orienté services, conçu pour attirer et convertir les prospects B2B.",
      body: [
        "Conception et développement d'un site WordPress structuré avec des pages de services dédiées, un messaging orienté client et des parcours de conversion clairs menant à des CTAs de consultation.",
        "Le langage visuel — professionnel et accessible — a été choisi pour communiquer l'expertise et instaurer la confiance auprès des décideurs dès la première visite.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2024",
    status: "Completed",
  },
  {
    title: "22SIM",
    icon: FaWordpress,
    slug: "22-sim",
    description:
        "Presentation website for 22SIM, an e-SIM service provider offering seamless digital connectivity without physical SIM cards.",
    description_fr:
        "Site de présentation pour 22SIM, fournisseur de services e-SIM offrant une connectivité digitale transparente sans carte SIM physique.",
    categoryLabel: "Telecom | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://22sim.com/" },
    image: e_sim,
    hasHeroImage: false,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Communicating the value of eSIM technology to a broad consumer audience.",
      body: [
        "The eSIM concept is still novel for many consumers. 22SIM needed a website that clearly explained the technology's benefits—no physical SIM, instant activation, global connectivity—without overwhelming technical jargon.",
        "The challenge was to design a site that educated, reassured, and converted visitors into customers across a range of digital literacy levels.",
      ],
    },
    challenge_fr: {
      heading: "Communiquer la valeur de la technologie eSIM à un large public de consommateurs.",
      body: [
        "Le concept d'eSIM est encore novateur pour beaucoup de consommateurs. 22SIM avait besoin d'un site expliquant clairement les avantages de la technologie — pas de SIM physique, activation instantanée, connectivité mondiale — sans jargon technique écrasant.",
        "Le défi était de concevoir un site qui éduque, rassure et convertit les visiteurs en clients, quel que soit leur niveau de maîtrise du digital.",
      ],
    },
    solution: {
      heading: "A clean, benefit-led WordPress site that simplifies eSIM adoption.",
      body: [
        "Built a focused WordPress site centred on benefit-driven messaging: freedom from physical SIM cards, instant setup, and seamless international connectivity. Each page was structured to answer the key objections of hesitant buyers.",
        "The visual design—modern, light, and approachable—signals tech-forward thinking while remaining fully accessible to non-technical audiences.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress épuré, axé sur les bénéfices, qui simplifie l'adoption de l'eSIM.",
      body: [
        "Construction d'un site WordPress ciblé centré sur un messaging orienté bénéfices : liberté vis-à-vis des SIM physiques, configuration instantanée et connectivité internationale transparente. Chaque page a été structurée pour répondre aux principales objections des acheteurs hésitants.",
        "Le design visuel — moderne, épuré et accessible — signale une approche tech-forward tout en restant pleinement compréhensible pour les audiences non techniques.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Assist 22SIM",
    icon: FaWordpress,
    slug: "assist-22-sim",
    description:
        "Customer support portal for 22SIM featuring filterable help articles connected to an external API and an integrated AI chatbot for instant user assistance.",
    description_fr:
        "Portail de support client pour 22SIM avec des articles d'aide filtrables connectés à une API externe et un chatbot IA intégré pour une assistance utilisateur instantanée.",
    categoryLabel: "Support Portal | WordPress",
    tags: [
      ...wpTags,
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "Chatbot", icon: <Server className="w-4 h-4 text-[#00A67E]" /> },
    ],
    links: { github: "#", demo: "#" },
    image: assist,
    hasHeroImage: false,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Scaling customer support for an eSIM provider without scaling the support team.",
      body: [
        "As 22SIM's user base grew, so did the volume of repetitive support inquiries. The team needed a self-service support hub that could deflect common tickets, surface relevant help articles instantly, and provide 24/7 assistance.",
        "The solution had to integrate with an existing external knowledge base API while layering an intelligent chatbot to handle queries that articles alone couldn't resolve.",
      ],
    },
    challenge_fr: {
      heading: "Faire évoluer le support client d'un fournisseur eSIM sans augmenter les effectifs.",
      body: [
        "Au fur et à mesure que la base d'utilisateurs de 22SIM grandissait, le volume de demandes de support répétitives augmentait aussi. L'équipe avait besoin d'un hub de support en libre-service capable de déflexionner les tickets courants, de faire remonter rapidement les articles pertinents et d'offrir une assistance 24h/24.",
        "La solution devait s'intégrer à une API de base de connaissances externe existante tout en ajoutant un chatbot intelligent pour traiter les requêtes que les articles seuls ne pouvaient pas résoudre.",
      ],
    },
    solution: {
      heading: "A WordPress support portal with external API-powered articles and an embedded AI chatbot.",
      body: [
        "Built a support portal on WordPress with a filterable article library dynamically populated via an external API—ensuring content stays in sync with the product team's knowledge base without manual duplication.",
        "An integrated AI chatbot handles real-time user queries, routing complex cases to human agents while resolving the majority of common issues autonomously—significantly reducing support ticket volume.",
      ],
    },
    solution_fr: {
      heading: "Un portail de support WordPress avec articles alimentés par API externe et chatbot IA intégré.",
      body: [
        "Construction d'un portail de support sur WordPress avec une bibliothèque d'articles filtrable alimentée dynamiquement via une API externe — garantissant que le contenu reste synchronisé avec la base de connaissances de l'équipe produit sans duplication manuelle.",
        "Un chatbot IA intégré traite les requêtes utilisateurs en temps réel, orientant les cas complexes vers des agents humains tout en résolvant la majorité des problèmes courants de manière autonome — réduisant significativement le volume de tickets.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2024",
    status: "Completed",
  },

  {
    title: "Parcus",
    icon: FaWordpress,
    slug: "parcus",
    description:
      "Website for Parcus, a communication and digital marketing agency showcasing their creative solutions and expertise to attract new clients.",
    description_fr:
      "Site web pour Parcus, agence de communication et marketing digital présentant ses solutions créatives et son expertise pour attirer de nouveaux clients.",
    categoryLabel: "Communication Agency | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://parcus.fr/" },
    image: parcus,
    hasHeroImage: true,
    featured: true,
    category: 2,
    color: "text-purple-400",
    cms: "",
    challenge: {
      heading: "Positioning a communication agency as a creative and strategic authority.",
      body: [
        "Parcus offers a broad range of communication and digital marketing solutions but struggled to differentiate their value proposition online. The agency's existing presence did not reflect the quality of the creative work they delivered.",
        "The challenge was to create a site that positions Parcus as a strategic communication partner—not just another creative supplier in a saturated market.",
      ],
    },
    challenge_fr: {
      heading: "Positionner une agence de communication comme une autorité créative et stratégique.",
      body: [
        "Parcus propose un large éventail de solutions de communication et de marketing digital mais peinait à différencier sa proposition de valeur en ligne. La présence existante de l'agence ne reflétait pas la qualité du travail créatif livré.",
        "Le défi était de créer un site positionnant Parcus comme un partenaire de communication stratégique — pas simplement un autre prestataire créatif dans un marché saturé.",
      ],
    },
    solution: {
      heading: "A consultancy-positioned WordPress site that leads with creative authority.",
      body: [
        "Redesigned the Parcus web presence around creative impact and measurable results, using structured service storytelling, campaign case studies, and a confident visual identity.",
        "The result is a site that speaks directly to marketing directors and brand managers seeking a capable, strategic communication partner.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress positionné en conseil créatif qui affirme l'autorité de la marque.",
      body: [
        "Refonte de la présence web de Parcus autour de l'impact créatif et des résultats mesurables, avec un storytelling de services structuré, des études de cas de campagnes et une identité visuelle affirmée.",
        "Le résultat est un site qui s'adresse directement aux directeurs marketing et responsables de marque cherchant un partenaire de communication compétent et stratégique.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    title: "Botanical",
    icon: FaWordpress,
    slug: "botanical",
    description:
      "E-commerce website for a Tunisian brand selling natural-based beauty and wellness products.",
    description_fr:
      "Site e-commerce pour une marque tunisienne de produits de beauté et bien-être naturels.",
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
    challenge_fr: {
      heading: "Lancer une marque de beauté artisanale tunisienne dans l'e-commerce.",
      body: [
        "Botanical avait besoin d'une boutique en ligne qui capture l'essence organique et artisanale de ses produits de beauté naturels tout en générant des conversions dans un marché du bien-être concurrentiel.",
        "Le défi était d'équilibrer la chaleur de la marque avec les fonctionnalités e-commerce — découverte produit, UX du panier, création de confiance — sans perdre l'âme artisanale.",
      ],
    },
    solution: {
      heading: "A WooCommerce store that makes product storytelling central to purchase.",
      body: [
        "Built on WordPress with WooCommerce, the store centres immersive product narratives—ingredient stories, brand values, and lifestyle imagery—making them integral to the shopping journey.",
        "The experience was optimised for mobile-first browsing with a streamlined checkout flow designed to reduce abandonment at every step.",
      ],
    },
    solution_fr: {
      heading: "Une boutique WooCommerce qui fait du storytelling produit le cœur de l'achat.",
      body: [
        "Construite sur WordPress avec WooCommerce, la boutique centre des narrations produit immersives — histoires d'ingrédients, valeurs de marque, imagerie lifestyle — les intégrant au parcours d'achat.",
        "L'expérience a été optimisée pour la navigation mobile-first avec un parcours de paiement simplifié conçu pour réduire l'abandon à chaque étape.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2022",
    status: "Completed",
  },
  {
    title: "Atelier la fabrique",
    icon: FaWordpress,
    slug: "atelier-la-fabrique",
    description:
      "Website for an architecture studio to present their portfolio and services to potential clients.",
    description_fr:
      "Site web pour un cabinet d'architecture afin de présenter son portfolio et ses services aux clients potentiels.",
    categoryLabel: "Architecture | WordPress",
    tags: wpTags,
    links: { github: "#", demo: "https://atelierlafabrique.fr/" },
    image: atelier,
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
    challenge_fr: {
      heading: "Offrir à un cabinet d'architecture un portfolio digital à la hauteur de son travail.",
      body: [
        "Le portfolio du cabinet existait principalement sous forme physique — brochures et présentations en personne. Sa présence digitale ne reflétait ni la qualité ni l'étendue de ses projets architecturaux.",
        "L'objectif était de créer un showcase digital minimal, axé sur la typographie, laissant l'architecture parler d'elle-même.",
      ],
    },
    solution: {
      heading: "A minimal WordPress site built around large-format photography and editorial typography.",
      body: [
        "Developed a custom WordPress theme prioritising full-bleed imagery, refined whitespace, and a restrained typographic system that mirrors the precision of the studio's architectural language.",
        "The result is a portfolio that serves as a strong first impression for prospective clients, partners, and competitions.",
      ],
    },
    solution_fr: {
      heading: "Un site WordPress minimaliste construit autour de la photographie grand format et de la typographie éditoriale.",
      body: [
        "Développement d'un thème WordPress personnalisé privilégiant les images plein-écran, les espaces blancs raffinés et un système typographique maîtrisé qui reflète la précision du langage architectural du cabinet.",
        "Le résultat est un portfolio offrant une première impression forte aux clients, partenaires et concours potentiels.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },
  {
    title: "Eyeverda",
    icon: FaWordpress,
    slug: "eyeverda",
    description:
      "Tunisia's first digital hub dedicated to sustainable innovation and the green economy.",
    description_fr:
      "Premier hub digital tunisien dédié à l'innovation durable et à l'économie verte.",
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
    challenge_fr: {
      heading: "Lancer le premier hub digital tunisien pour l'innovation durable.",
      body: [
        "Eyeverda ambitionne de créer une plateforme inédite connectant startups durables, ressources de l'économie verte et réseaux d'innovation en Tunisie.",
        "Le défi était de construire un site à la fois autoritaire et accessible — suffisamment technique pour les investisseurs, suffisamment inspirant pour les entrepreneurs et les acteurs du changement.",
      ],
    },
    solution: {
      heading: "A mission-driven WordPress platform for Tunisia's green innovation ecosystem.",
      body: [
        "Built a content-rich WordPress site with structured resource directories, event listings, and ecosystem mapping features tailored to the sustainable innovation community.",
        "The visual identity—verdant and energetic—was designed to signal growth, optimism, and environmental consciousness from the very first impression.",
      ],
    },
    solution_fr: {
      heading: "Une plateforme WordPress engagée pour l'écosystème d'innovation verte tunisien.",
      body: [
        "Construction d'un site WordPress riche en contenu avec des répertoires de ressources structurés, des listings d'événements et des fonctionnalités de cartographie de l'écosystème adaptées à la communauté de l'innovation durable.",
        "L'identité visuelle — verdoyante et dynamique — a été conçue pour signaler croissance, optimisme et conscience environnementale dès la première impression.",
      ],
    },
    stats: [],
    role: "Full-Stack Developer",
    year: "2023",
    status: "Completed",
  },

];

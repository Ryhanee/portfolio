import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Terminal,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

const translations = {
  en: {
    helmetTitle: "Web Development Portfolio | WordPress, React, eCommerce & SaaS Projects | Rihane Dalhoum",
    helmetDesc: "Explore 17 web development projects by Rihane Dalhoum — high-converting WordPress websites, eCommerce platforms, React web applications, SaaS tools, and machine learning APIs. Full-stack developer available for remote projects worldwide.",
    helmetKeywords: "web development portfolio, WordPress developer projects, React developer portfolio, eCommerce projects, full-stack developer work, SaaS development portfolio, lead generation websites, remote web developer projects",
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
    helmetTitle: "Portfolio Développement Web | WordPress, React, eCommerce & SaaS | Rihane Dalhoum",
    helmetDesc: "Découvrez 17 projets web de Rihane Dalhoum — sites WordPress à forte conversion, plateformes eCommerce, applications React, outils SaaS et APIs machine learning. Développeuse full-stack disponible pour des projets à distance dans le monde entier.",
    helmetKeywords: "portfolio développement web, projets développeur WordPress, portfolio développeur React, projets eCommerce, travaux développeur full-stack, portfolio développement SaaS, sites web génération leads, projets développeur remote",
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
                  ? "bg-gradient-to-br from-[#7F22FE] to-[#47088f] text-white"
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

  const siteUrl = "https://ryhane.craftech-digital.com";

  const projectsJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": tx.helmetTitle,
        "description": tx.helmetDesc,
        "url": `${siteUrl}/projects`,
        "inLanguage": lang === "en" ? "en-US" : "fr-FR",
        "author": {
          "@type": "Person",
          "name": "Rihane Dalhoum",
          "url": siteUrl,
          "jobTitle": lang === "en" ? "Full-Stack Web Developer & Data Scientist" : "Développeuse Web Full-Stack & Data Scientist",
        },
      },
      {
        "@type": "ItemList",
        "name": lang === "en" ? "Web Development Projects by Rihane Dalhoum" : "Projets de développement web par Rihane Dalhoum",
        "numberOfItems": projects.length,
        "itemListElement": projects.map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": p.title,
          "description": p.description,
          "url": `${siteUrl}/projects/${p.slug}`,
          "item": {
            "@type": "CreativeWork",
            "name": p.title,
            "description": p.description,
            "url": p.links.demo !== "#" ? p.links.demo : `${siteUrl}/projects/${p.slug}`,
            "keywords": p.tags.map((t) => t.name).join(", "),
            "dateCreated": p.year,
            "creator": { "@type": "Person", "name": "Rihane Dalhoum" },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "mainEntity": lang === "en"
          ? [
              {
                "@type": "Question",
                "name": "What types of web projects has Rihane Dalhoum built?",
                "acceptedAnswer": { "@type": "Answer", "text": "Rihane has built 17+ projects including high-converting WordPress websites, eCommerce platforms with WooCommerce and PrestaShop, React and React Native web applications, SaaS tools, healthcare management systems, and machine learning APIs." },
              },
              {
                "@type": "Question",
                "name": "Can Rihane Dalhoum build a lead-generating website for my business?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Rihane specialises in building websites optimised for SEO, conversion, and lead generation. Her projects include B2B platforms, eCommerce stores, and corporate websites that have delivered measurable growth in traffic and qualified leads." },
              },
              {
                "@type": "Question",
                "name": "Does Rihane Dalhoum work on international projects?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Rihane is fully remote and has delivered web development projects for clients in Tunisia, France, Morocco, and beyond. She is open to new projects from any country." },
              },
            ]
          : [
              {
                "@type": "Question",
                "name": "Quels types de projets web Rihane Dalhoum a-t-elle réalisés ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Rihane a réalisé plus de 17 projets incluant des sites WordPress à forte conversion, des plateformes eCommerce, des applications React et React Native, des outils SaaS, des systèmes de gestion médicale et des APIs machine learning." },
              },
              {
                "@type": "Question",
                "name": "Rihane Dalhoum peut-elle créer un site web générateur de leads pour mon entreprise ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui. Rihane est spécialisée dans la création de sites web optimisés pour le SEO, la conversion et la génération de leads. Ses projets incluent des plateformes B2B, des boutiques eCommerce et des sites corporate." },
              },
              {
                "@type": "Question",
                "name": "Rihane Dalhoum travaille-t-elle sur des projets internationaux ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui. Rihane est entièrement disponible à distance et a livré des projets pour des clients en Tunisie, en France, au Maroc et au-delà. Elle est ouverte à de nouveaux projets dans n'importe quel pays." },
              },
            ],
      },
    ],
  });

  return (
    <>
      <Helmet>
        <title>{tx.helmetTitle}</title>
        <meta name="description" content={tx.helmetDesc} />
        <meta name="keywords" content={tx.helmetKeywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/projects`} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/projects`} />
        <link rel="alternate" hrefLang="fr" href={`${siteUrl}/projects`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/projects`} />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunis, Tunisia" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />
        <meta property="og:title" content={tx.helmetTitle} />
        <meta property="og:description" content={tx.helmetDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/projects`} />
        <meta property="og:locale" content={lang === "en" ? "en_US" : "fr_FR"} />
        <meta property="og:locale:alternate" content={lang === "en" ? "fr_FR" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tx.helmetTitle} />
        <meta name="twitter:description" content={tx.helmetDesc} />
        <script type="application/ld+json">{projectsJsonLd}</script>
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
          {/* Sidebar */}
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
                    ? "bg-gradient-to-br from-[#7F22FE] to-[#47088f] text-white"
                    : isDark ? "text-[#ccc3d4] hover:bg-[#272a2e]" : "text-gray-500 hover:bg-gray-100"
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
                    ? "bg-gradient-to-br from-[#7F22FE] to-[#47088f] text-white"
                    : isDark ? "text-[#ccc3d4] hover:bg-[#272a2e]" : "text-gray-500 hover:bg-gray-100"
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
                  <p className={cn("text-xs font-bold font-['Space_Grotesk']", isDark ? "text-[#e1e2e8]" : "text-gray-900")}>
                    {tx.curatorLabel}
                  </p>
                  <p className={cn("text-[10px] font-['Inter']", isDark ? "text-[#ccc3d4]" : "text-gray-500")}>
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
                  key={`${project.slug}-${index}`}
                  className={cn("group space-y-6", index >= 2 && "md:translate-y-12")}
                >
                  {/* Image with overlay actions */}
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-500",
                      isDark ? "bg-[#191c20] hover:bg-[#323539]" : "bg-gray-100 hover:bg-gray-200"
                    )}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111418]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="w-11 h-11 rounded-full bg-[#d6baff] flex items-center justify-center text-[#280057] shadow-xl hover:scale-110 transition-transform"
                          title="View Details"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                        {project.links.demo !== "#" && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-[#272a2e] flex items-center justify-center text-[#e1e2e8] border border-[#4a4452]/20 shadow-xl hover:scale-110 transition-transform"
                            title="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {project.links.github !== "#" && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-[#272a2e] flex items-center justify-center text-[#e1e2e8] border border-[#4a4452]/20 shadow-xl hover:scale-110 transition-transform"
                            title="GitHub"
                          >
                            <FaGithub size={16} />
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
                    <Link to={`/projects/${project.slug}`}>
                      <h3
                        className={cn(
                          "font-['Space_Grotesk'] text-3xl font-bold transition-colors",
                          isDark
                            ? "text-[#e1e2e8] hover:text-[#d6baff]"
                            : "text-gray-900 hover:text-violet-600"
                        )}
                      >
                        {project.title}
                      </h3>
                    </Link>
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
                            ? "bg-gradient-to-br from-[#7F22FE] to-[#47088f] text-white"
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
                <Link
                  to="/contact"
                  className={cn(
                    "px-10 py-5 font-['Space_Grotesk'] font-bold rounded-lg shadow-2xl hover:opacity-90 transition-all",
                    isDark
                      ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057] shadow-[#d6baff]/20"
                      : "bg-gradient-to-br from-violet-500 to-violet-800 text-white shadow-violet-500/20"
                  )}
                >
                  {tx.ctaBtn1}
                </Link>
                <Link
                  to="/skills"
                  className={cn(
                    "px-10 py-5 border font-['Space_Grotesk'] font-bold rounded-lg transition-all",
                    isDark
                      ? "border-[#4a4452]/30 text-[#b2c5ff] hover:bg-[#272a2e]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {tx.ctaBtn2}
                </Link>
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

import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import config from "@/config/config";
import { ArrowRight } from "lucide-react";
import HeroImg from "@/assets/rihane.jpg";
import my_resume from "@/assets/Rihane_Dalhoum_FullStack_CV.pdf";
import { useScroll, useTransform, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const translations = {
  en: {
    metaTitle: "Full-Stack Web Developer | Lead-Generating Websites & eCommerce Worldwide | Rihane Dalhoum",
    metaDesc: "Rihane Dalhoum is a full-stack web developer and data scientist specializing in high-converting websites, eCommerce platforms, and SaaS applications that generate qualified leads and drive measurable business growth. Remote-first — working with clients worldwide.",
    keywords: "full-stack web developer worldwide, lead generation website developer, WordPress developer remote, PrestaShop developer international, eCommerce developer remote, high-converting website developer, freelance web developer international, business growth website, hire web developer remote",
    badge: "Full-Stack Developer | WordPress, PrestaShop, SaaS & AI",
    headingStart: "High-Converting ",
    headingItalic: "Websites & eCommerce ",
    headingEnd: " Platforms.",
    subtitle:
      "I build high-performance websites, eCommerce platforms, and custom web applications that generate qualified leads and grow businesses. Remote-first — working with clients across Europe, North America, the Middle East, and Africa.",
    cta1: "View Projects",
    cta2: "Start a project",
    currentFocusLabel: "Current Focus",
    currentFocusValue: "Web Development, eCommerce & SaaS",
    basedInLabel: "Availability",
    basedInValue: "Remote Worldwide",
    faq: [
      {
        q: "Who is Rihane Dalhoum?",
        a: "Rihane Dalhoum is a full-stack web developer and data scientist with 7+ years of experience building lead-generating websites, eCommerce platforms, and custom SaaS applications. She works remotely with clients worldwide.",
      },
      {
        q: "What services does Rihane Dalhoum offer?",
        a: "Rihane offers full-stack web development: WordPress and PrestaShop development, custom React/Next.js web applications, eCommerce platforms, SaaS development, data science solutions, and UI/UX design — all available remotely.",
      },
      {
        q: "Can Rihane Dalhoum work on international projects?",
        a: "Yes. Rihane is fully remote and available for international projects in any country and timezone. She has delivered solutions for clients across Europe, North America, the Middle East, and Africa.",
      },
      {
        q: "How does Rihane Dalhoum help businesses grow?",
        a: "Rihane builds SEO-optimized, high-converting websites and eCommerce platforms that generate qualified leads, increase online visibility, and deliver measurable business results.",
      },
      {
        q: "What technologies does Rihane Dalhoum use?",
        a: "React, Next.js, Angular, TypeScript, Node.js, PHP, Python, WordPress, PrestaShop, PostgreSQL, MongoDB, Docker, AWS, and Machine Learning frameworks.",
      },
    ],
  },
  fr: {
    metaTitle: "Développeuse Web Full-Stack | Sites Web Générateurs de Leads & eCommerce — Projets Internationaux | Rihane Dalhoum",
    metaDesc: "Rihane Dalhoum est une développeuse web full-stack et data scientist spécialisée dans la création de sites web à forte conversion, plateformes eCommerce et applications SaaS qui génèrent des leads qualifiés et accélèrent la croissance des entreprises. Disponible à distance pour des projets partout dans le monde.",
    keywords: "développeuse web full-stack internationale, création site web génération leads, développeur WordPress remote, développeur PrestaShop international, développeur eCommerce remote, site web haute conversion, freelance développeur international, croissance business site web, recruter développeur web remote",
    badge: "Développeuse Full-Stack | WordPress, PrestaShop, SaaS & IA",
    headingStart: "Sites web ",
    headingItalic: "& plateformes",
    headingEnd: " eCommerce à forte conversion.",
    subtitle:
      "Je crée des sites web performants, plateformes eCommerce et applications web sur mesure qui génèrent des leads qualifiés et font croître les entreprises. Disponible à distance — je travaille avec des clients en Europe, Amérique du Nord, Moyen-Orient et Afrique.",
    cta1: "Voir les projets",
    cta2: "Démarrer un projet",
    currentFocusLabel: "Focus Actuel",
    currentFocusValue: "Développement Web, eCommerce & SaaS",
    basedInLabel: "Disponibilité",
    basedInValue: "Remote — Monde entier",
    faq: [
      {
        q: "Qui est Rihane Dalhoum ?",
        a: "Rihane Dalhoum est une développeuse web full-stack et data scientist avec plus de 7 ans d’expérience dans la création de sites web générateurs de leads, plateformes eCommerce et applications SaaS sur mesure. Elle travaille à distance avec des clients dans le monde entier.",
      },
      {
        q: "Quels services propose Rihane Dalhoum ?",
        a: "Rihane propose des services de développement web full-stack : WordPress et PrestaShop, applications web React/Next.js, plateformes eCommerce, développement SaaS, data science et design UI/UX — tous disponibles à distance.",
      },
      {
        q: "Rihane Dalhoum peut-elle travailler sur des projets internationaux ?",
        a: "Oui. Rihane est entièrement disponible pour des projets internationaux dans n’importe quel pays et fuseau horaire. Elle a livré des solutions pour des clients en Europe, Amérique du Nord, Moyen-Orient et Afrique.",
      },
      {
        q: "Comment Rihane Dalhoum aide-t-elle les entreprises à croître ?",
        a: "Rihane crée des sites web et plateformes eCommerce optimisés SEO et à forte conversion qui génèrent des leads qualifiés, augmentent la visibilité en ligne et livrent des résultats business mesurables.",
      },
      {
        q: "Quelles technologies utilise Rihane Dalhoum ?",
        a: "React, Next.js, Angular, TypeScript, Node.js, PHP, Python, WordPress, PrestaShop, PostgreSQL, MongoDB, Docker, AWS et frameworks de Machine Learning.",
      },
    ],
  },
} as const;

export default function Hero() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];
  const { scrollY } = useScroll();
  const bgTextX = useTransform(scrollY, [0, 800], ["0%", "-15%"]);

  const siteUrl = "https://ryhane.craftech-digital.com";

  const homeJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Rihane Dalhoum — Portfolio",
        "url": siteUrl,
        "inLanguage": lang === "en" ? "en-US" : "fr-FR",
        "description": tx.metaDesc,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".hero-subtitle"],
        },
      },
      {
        "@type": "Person",
        "name": "Rihane Dalhoum",
        "jobTitle": lang === "en" ? "Full-Stack Web Developer & Data Scientist" : "Développeuse Web Full-Stack & Data Scientist",
        "url": siteUrl,
        "email": "dalhoumrihane@gmail.com",
        "image": `${siteUrl}/rihane.jpg`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": lang === "en" ? "Tunis, Tunisia" : "Tunis, Tunisie",
          "addressCountry": "TN",
        },
        "availableLanguage": ["English", "French", "Arabic"],
        "knowsAbout": [
          "Lead Generation Websites", "eCommerce Development", "WordPress", "PrestaShop",
          "React", "Next.js", "Angular", "Node.js", "PHP", "Python", "SaaS Development",
          "SEO Optimization", "Business Growth Strategy", "Data Science", "Machine Learning",
        ],
        "sameAs": [
          "https://www.linkedin.com/in/rihane-dalhoum/",
          "https://github.com/Rihanee",
          "https://dribbble.com/rihane_dalhoum",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": lang === "en" ? "Web Development Services" : "Services de Développement Web",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": lang === "en" ? "Lead-Generating Websites" : "Sites Web Générateurs de Leads" },
              "areaServed": "Worldwide",
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": lang === "en" ? "eCommerce Development" : "Développement eCommerce" },
              "areaServed": "Worldwide",
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": lang === "en" ? "Custom Web Applications & SaaS" : "Applications Web & SaaS sur mesure" },
              "areaServed": "Worldwide",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": tx.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
    ],
  });

  return (
    <>
      <Helmet>
        <title>{tx.metaTitle}</title>
        <meta name="description" content={tx.metaDesc} />
        <meta name="keywords" content={tx.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ryhane.craftech-digital.com" />
        <link rel="alternate" hrefLang="en" href="https://ryhane.craftech-digital.com" />
        <link rel="alternate" hrefLang="fr" href="https://ryhane.craftech-digital.com" />
        <link rel="alternate" hrefLang="x-default" href="https://ryhane.craftech-digital.com" />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunis, Tunisia" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />
        <meta property="og:title" content={tx.metaTitle} />
        <meta property="og:description" content={tx.metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ryhane.craftech-digital.com" />
        <meta property="og:locale" content={lang === "en" ? "en_US" : "fr_FR"} />
        <meta property="og:locale:alternate" content={lang === "en" ? "fr_FR" : "en_US"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tx.metaTitle} />
        <meta name="twitter:description" content={tx.metaDesc} />
        <script type="application/ld+json">{homeJsonLd}</script>
      </Helmet>
    <section
      className={cn(
        "relative min-h-screen flex items-center overflow-hidden px-8 pt-20",
        isDark ? "bg-[#111418] text-[#e1e2e8]" : "bg-white text-gray-900"
      )}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Value Proposition */}
        <div className="lg:col-span-7 z-10">
          {/* Badge */}
          <div
            className={cn(
              "inline-block px-4 py-1.5 rounded-full mb-6",
              isDark ? "bg-[#272a2e]" : "bg-gray-100"
            )}
          >
            <span
              className={cn(
                "font-['Inter'] text-[10px] uppercase tracking-[0.2em]",
                isDark ? "text-[#71d5e4]" : "text-[#1A3C8B]"
              )}
            >
              {tx.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Space_Grotesk'] text-3xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            {tx.headingStart}
            <span className={cn("italic", isDark ? "text-[#d6baff]" : "text-violet-600")}>
              {tx.headingItalic}
            </span>
            {tx.headingEnd}
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "hero-subtitle font-['Manrope'] text-lg md:text-xl max-w-xl mb-10 leading-relaxed",
              isDark ? "text-[#ccc3d4]" : "text-gray-600"
            )}
          >
            {tx.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="/projects"
              className={cn(
                "px-10 py-4 rounded-md font-['Space_Grotesk'] font-bold text-base hover:opacity-90 transition-all duration-300",
                isDark
                  ? "bg-gradient-to-r from-[#d6baff] to-[#47088f] text-[#280057]"
                  : "bg-gradient-to-r from-violet-500 to-violet-800 text-white"
              )}
            >
              {tx.cta1}
            </a>
            <a
              href={my_resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 font-['Space_Grotesk'] font-medium border-b border-transparent hover:border-[#71d5e4] transition-all duration-300 py-1",
                isDark ? "text-[#b2c5ff]" : "text-violet-700"
              )}
            >
              <span>{tx.cta2}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={HeroImg}
              alt={config.information.name}
              className="w-full h-full object-cover"
            />
            {/* Glass Overlay */}
            <div
              className={cn(
                "absolute bottom-6 left-6 right-6 p-6 rounded-xl border",
                isDark
                  ? "glass-effect border-[#4a4452]/15"
                  : "bg-white/80 backdrop-blur-xl border-white/50"
              )}
            >
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#0B419B] mb-1">
                    {tx.currentFocusLabel}
                  </p>
                  <p
                    className={cn(
                      "font-['Space_Grotesk'] font-bold",
                      isDark ? "text-[#d6baff]" : "text-black-600"
                    )}
                  >
                    {tx.currentFocusValue}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#0B419B] mb-1">
                    {tx.basedInLabel}
                  </p>
                  <p
                    className={cn(
                      "font-['Space_Grotesk'] font-bold",
                      isDark ? "text-[#e1e2e8]" : "text-gray-800"
                    )}
                  >
                    {tx.basedInValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative blurs */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#47088f]/20 blur-[100px] rounded-full -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#003b42]/20 blur-[100px] rounded-full -z-10" />
        </div>
      </div>

      {/* Background parallax watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none select-none z-0 opacity-[0.04]">
        <motion.span
          style={{ x: bgTextX }}
          className="font-['Space_Grotesk'] text-[15rem] font-bold tracking-tighter text-stroke inline-block"
        >
          DEVELOPER DATA SCIENTIST FULL-STACK ENGINEER
        </motion.span>
      </div>
    </section>
    </>
  );
}

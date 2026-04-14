import { Card } from "@/components/ui/card";
import { Calendar, Code } from "lucide-react";
import { ReactNode } from "react";
import { useTheme } from "../../provider/page";
import { useLang } from "@/provider/lang";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const translations = {
  en: {
    metaTitle: "Web Development Experience | 7+ Years Building Lead-Generating Websites | Rihane Dalhoum",
    metaDesc: "Rihane Dalhoum has 7+ years of professional experience building lead-generating websites, eCommerce platforms, and custom SaaS applications. WordPress, PrestaShop, React, Node.js — based in Tunis, working remotely worldwide.",
    keywords: "web developer experience Tunis, WordPress developer career Tunisia, full-stack developer experience, eCommerce developer Tunisia, lead generation website experience, professional web developer Tunis",
    heading: "Professional Journey",
    subtitle: "Building high-performance websites and platforms that generate leads and grow businesses — one project at a time.",
    experiences: [
      {
        title: "Full-Stack Developer / CEO",
        company: "Craftech Innovation Digital",
        period: "2022 - Present",
        description: "Building high-performance websites, eCommerce platforms, and custom web applications that generate qualified leads and support measurable business growth for clients worldwide.",
      },
      {
        title: "Full-Stack Developer / Team Leader",
        company: "Parcus Digital Solutions",
        period: "2019 - 2022",
        description: "Led development of web applications and eCommerce platforms optimized for conversion and SEO. Mentored junior developers and delivered high-converting digital solutions for international clients.",
      },
      {
        title: "WordPress Developer",
        company: "TUIU S.A.R.L",
        period: "2018 - 2019",
        description: "Developed and customized WordPress websites optimized for SEO, performance, and lead generation, serving clients in Tunisia and internationally.",
      },
    ],
  },
  fr: {
    metaTitle: "Expérience en Développement Web | +7 ans de création de sites générateurs de leads | Rihane Dalhoum",
    metaDesc: "Rihane Dalhoum possède plus de 7 ans d'expérience professionnelle dans la création de sites web générateurs de leads, plateformes eCommerce et applications SaaS sur mesure. WordPress, PrestaShop, React, Node.js — basée à Tunis, disponible à distance.",
    keywords: "expérience développeur web Tunis, parcours développeur WordPress Tunisie, expérience développeur full-stack, développeur eCommerce Tunisie, expérience site web génération leads, développeur web professionnel Tunis",
    heading: "Parcours professionnel",
    subtitle: "Création de sites web et plateformes performants qui génèrent des leads et accélèrent la croissance des entreprises — un projet à la fois.",
    experiences: [
      {
        title: "Développeuse Full-Stack / CEO",
        company: "Craftech Innovation Digital",
        period: "2022 - Présent",
        description: "Création de sites web performants, plateformes eCommerce et applications web sur mesure générant des leads qualifiés et soutenant la croissance mesurable des entreprises clientes dans le monde entier.",
      },
      {
        title: "Développeuse Full-Stack / Team Leader",
        company: "Parcus Digital Solutions",
        period: "2019 - 2022",
        description: "Pilotage du développement d'applications web et de plateformes eCommerce optimisées pour la conversion et le SEO. Accompagnement des développeurs juniors et livraison de solutions digitales à forte conversion pour des clients internationaux.",
      },
      {
        title: "Développeuse WordPress",
        company: "TUIU S.A.R.L",
        period: "2018 - 2019",
        description: "Développement et personnalisation de sites WordPress optimisés pour le SEO, la performance et la génération de leads, pour des clients en Tunisie et à l'international.",
      },
    ],
  },
} as const;

export default function ProfessionalJourney() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];

  const experienceJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": tx.metaTitle,
    "description": tx.metaDesc,
    "inLanguage": lang === "en" ? "en-US" : "fr-FR",
    "url": "https://ryhane.craftech-digital.com/experience",
    "mainEntity": {
      "@type": "Person",
      "name": "Rihane Dalhoum",
      "jobTitle": lang === "en" ? "Full-Stack Web Developer & Data Scientist" : "Développeuse Web Full-Stack & Data Scientist",
      "url": "https://ryhane.craftech-digital.com",
      "email": "dalhoumrihane@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": lang === "en" ? "Tunis, Tunisia" : "Tunis, Tunisie",
        "addressCountry": "TN",
      },
      "hasOccupation": tx.experiences.map((exp) => ({
        "@type": "Role",
        "roleName": exp.title,
        "startDate": exp.period.split(" - ")[0],
        "endDate": exp.period.includes("Present") || exp.period.includes("Présent") ? undefined : exp.period.split(" - ")[1],
        "worksFor": { "@type": "Organization", "name": exp.company },
        "description": exp.description,
      })),
    },
  });

  return (
    <>
      <Helmet>
        <title>{tx.metaTitle}</title>
        <meta name="description" content={tx.metaDesc} />
        <meta name="keywords" content={tx.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ryhane.craftech-digital.com/experience" />
        <link rel="alternate" hrefLang="en" href="https://ryhane.craftech-digital.com/experience" />
        <link rel="alternate" hrefLang="fr" href="https://ryhane.craftech-digital.com/experience" />
        <link rel="alternate" hrefLang="x-default" href="https://ryhane.craftech-digital.com/experience" />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunis, Tunisia" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />
        <meta property="og:title" content={tx.metaTitle} />
        <meta property="og:description" content={tx.metaDesc} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ryhane.craftech-digital.com/experience" />
        <meta property="og:locale" content={lang === "en" ? "en_US" : "fr_FR"} />
        <meta property="og:locale:alternate" content={lang === "en" ? "fr_FR" : "en_US"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={tx.metaTitle} />
        <meta name="twitter:description" content={tx.metaDesc} />
        <script type="application/ld+json">{experienceJsonLd}</script>
      </Helmet>

    <section
      className={`${
        isDark ? "bg-[#090F1C]" : "bg-zinc-50"
      } py-16 md:py-32 min-h-screen relative overflow-hidden`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
          } bg-[size:4rem_4rem]`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-r from-[#090F1C] via-transparent to-[#090F1C]"
              : "bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50"
          }`}
        />
      </div>

      <div className="@container mx-auto max-w-5xl px-6 relative">
        <div className="text-center">
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
          <p className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {tx.subtitle}
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-8 gap-6 md:mt-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {tx.experiences.map((exp) => (
            <ExperienceCard
              key={exp.company}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              icon={<Code />}
            />
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: ReactNode;
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon,
}: ExperienceCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      className="h-full"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Card
        className={`group h-full ${
          isDark
            ? "bg-[#090F1C]/80 border-gray-700 hover:shadow-blue-500/20"
            : "bg-white/90 border-gray-200 hover:shadow-blue-500/10"
        } shadow-zinc-950/5 transition-all duration-300 hover:-translate-y-1`}
      >
        <div className="flex flex-col p-6 gap-4">
          <CardDecorator>
            <div
              className={`size-6 ${isDark ? "text-blue-400" : "text-[#7008E7]"}`}
            >
              {icon}
            </div>
          </CardDecorator>

          <div className="flex-1">
            <h2
              className={`text-xl font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
            <div className="flex flex-col gap-2 mt-1">
              <p
                className={`font-medium ${
                  isDark ? "text-blue-400" : "text-[#0b419b]"
                }`}
              >
                {company}
              </p>
              <div
                className={`flex items-center gap-1 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <Calendar className="size-4" />
                <span className="text-sm">{period}</span>
              </div>
            </div>
            <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const CardDecorator = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative mx-auto size-24 duration-200 ${
        isDark
          ? "[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] group-hover:bg-white/5 group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
          : "[--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)]"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--tw-gradient-to)_75%)] animate-pulse-slow opacity-80"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[conic-gradient(from_45deg_at_center,transparent,var(--tw-gradient-to),transparent)] animate-spin-slow opacity-40"
      />
      <div
        className={`absolute inset-0 m-auto flex size-10 items-center justify-center  bg-transparent `}
      >
        {children}
      </div>
    </div>
  );
};

import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import { Sparkles, Terminal, MousePointerClick } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { Helmet } from "react-helmet-async";

type IconComponent = React.ComponentType<LucideProps>;

interface CardIcon {
  Icon: IconComponent;
  darkColor: string;
  lightColor: string;
}

const CARD_ICONS: CardIcon[] = [
  { Icon: Sparkles, darkColor: "text-[#71d5e4]", lightColor: "text-teal-600" },
  { Icon: Terminal, darkColor: "text-[#d6baff]", lightColor: "text-violet-600" },
  { Icon: MousePointerClick, darkColor: "text-[#b2c5ff]", lightColor: "text-blue-600" },
];

const translations = {
  en: {
    sectionLabel: "Proven Experience",
    leftHeading: "Engineering Web Platforms That Drive Results.",
    rightHeading:
      "7+ Years Building Production-Ready Web & eCommerce Systems.",
    p1: "With over 7 years of experience, I design and develop production-ready websites, eCommerce platforms, and custom web applications used in real business environments.",
    p2: "I’ve worked on complex platforms including eCommerce systems, booking solutions, and SaaS applications, with a strong emphasis on clean architecture, performance optimization, and long-term reliability.",
    cards: [
      {
        title: "Lead-Driven Websites",
        desc: "Websites designed to attract, engage, and convert visitors into qualified leads.",
      },
      {
        title: "eCommerce Systems",
        desc: "High-performance online stores built for sales, scalability, and user experience.",
      },
      {
        title: "Custom Web Applications",
        desc: "Scalable platforms, SaaS tools, and business systems tailored to real operational needs.",
      },
    ],
    toolkitLabel: "The Toolkit",
    toolkit: ["Wordpress", "Prestashop", "TypeScript", "React", "Node.js", "Python", "PostgreSQL","MySQL","Docker", "GraphQL"],
    ctaBadge: "Available for new opportunities",
    ctaHeadingStart: "Ready to bring your ",
    ctaHeadingColored: "project to life?",
    ctaSubtitle:
      "Let's collaborate to transform your ideas into exceptional digital experiences, combining cutting-edge design and precision engineering.",
    ctaBtn1: "Start a project",
    ctaBtn2: "Contact me",
  },
  fr: {
    sectionLabel: "Philosophie",
    leftHeading: "Une double approche de la création digitale.",
    rightHeading:
      "Je fais le lien entre un design visuellement saisissant et un code robuste et scalable.",
    p1: "Avec une formation ancrée à la fois dans les arts et l'informatique, je ne vois pas le UI/UX et le développement Full-Stack comme des disciplines séparées. Ce sont deux faces d'une même pièce — l'interface est la promesse, le code est la livraison.",
    p2: "Je me spécialise dans la création de systèmes de design complexes, d'applications web haute performance et de prototypes interactifs qui semblent vivants. Ma mission : aucun pixel gaspillé, aucune logique redondante.",
    cards: [
      {
        title: "Stratégie UI/UX",
        desc: "Mises en page éditoriales, systèmes de design et cartographie du comportement utilisateur.",
      },
      {
        title: "Développement Full-Stack",
        desc: "Construction avec React, Next.js et Node. Architectures propres qui évoluent avec vos utilisateurs.",
      },
      {
        title: "Interaction",
        desc: "Donner vie aux designs statiques grâce aux micro-interactions et à l'accessibilité.",
      },
    ],
    toolkitLabel: "La Boîte à Outils",
    toolkit: ["TypeScript", "Tailwind CSS", "React", "Node.js", "PostgreSQL", "Python", "Docker", "GraphQL"],
    ctaBadge: "Disponible pour de nouvelles opportunités",
    ctaHeadingStart: "Prêt à donner vie à ",
    ctaHeadingColored: "votre projet ?",
    ctaSubtitle:
      "Collaborons pour transformer vos idées en expériences numériques exceptionnelles, alliant design de pointe et ingénierie de précision.",
    ctaBtn1: "Démarrer un projet",
    ctaBtn2: "Me Contacter",
  },
} as const;

export default function About() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];

  return (
    <>
      <Helmet>
        <title>Rihane Dalhoum – Full-Stack Developer & Data Scientist</title>
        <meta
          name="description"
          content="Full-stack developer creating smart, scalable web apps with React, Node.js, WordPress, PHP, and Laravel. Passionate about AI and innovative digital solutions."
        />
      </Helmet>

      {/* Gradient transition from hero */}
      <div
        className={cn(
          "h-32",
          isDark
            ? "bg-gradient-to-b from-[#111418] to-[#191c20]"
            : "bg-gradient-to-b from-white to-gray-50"
        )}
      />

      {/* About section */}
      <section
        id="about"
        className={cn(
          "py-24 px-8",
          isDark ? "bg-[#191c20] text-[#e1e2e8]" : "bg-gray-50 text-gray-900"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sticky sidebar */}
            <div className="lg:col-span-3 lg:sticky lg:top-32">
              <h2
                className={cn(
                  "font-['Inter'] text-xs uppercase tracking-[0.3em] mb-4",
                  isDark ? "text-[#71d5e4]" : "text-teal-600"
                )}
              >
                {tx.sectionLabel}
              </h2>
              <div
                className={cn("w-12 h-px mb-8", isDark ? "bg-[#71d5e4]" : "bg-teal-500")}
              />
              <p
                className={cn(
                  "font-['Space_Grotesk'] text-3xl font-bold leading-tight",
                  isDark ? "text-[#e1e2e8]" : "text-gray-900"
                )}
              >
                {tx.leftHeading}
              </p>
            </div>

            {/* Main content */}
            <div className="lg:col-span-9 space-y-16">
              <div className="max-w-3xl">
                <h3
                  className={cn(
                    "font-['Space_Grotesk'] text-4xl font-medium mb-8",
                    isDark ? "text-[#d6baff]" : "text-violet-700"
                  )}
                >
                  {tx.rightHeading}
                </h3>
                <p
                  className={cn(
                    "font-['Manrope'] text-xl leading-relaxed mb-8",
                    isDark ? "text-[#ccc3d4]" : "text-gray-600"
                  )}
                >
                  {tx.p1}
                </p>
                <p
                  className={cn(
                    "font-['Manrope'] text-xl leading-relaxed",
                    isDark ? "text-[#ccc3d4]" : "text-gray-600"
                  )}
                >
                  {tx.p2}
                </p>
              </div>

              {/* Bento cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tx.cards.map((card, i) => {
                  const { Icon, darkColor, lightColor } = CARD_ICONS[i];
                  return (
                    <div
                      key={card.title}
                      className={cn(
                        "p-8 rounded-xl border transition-colors group",
                        isDark
                          ? "bg-[#272a2e] border-[#4a4452]/10 hover:bg-[#323539]"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      )}
                    >
                      <Icon
                        className={cn(
                          "mb-6 w-8 h-8 group-hover:scale-110 transition-transform",
                          isDark ? darkColor : lightColor
                        )}
                      />
                      <h4
                        className={cn(
                          "font-['Space_Grotesk'] text-xl font-bold mb-4",
                          isDark ? "text-[#e1e2e8]" : "text-gray-900"
                        )}
                      >
                        {card.title}
                      </h4>
                      <p
                        className={cn(
                          "font-['Manrope'] text-sm leading-relaxed",
                          isDark ? "text-[#ccc3d4]" : "text-gray-500"
                        )}
                      >
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Toolkit */}
              <div>
                <p
                  className={cn(
                    "font-['Inter'] text-[10px] uppercase tracking-widest mb-6",
                    isDark ? "text-[#ccc3d4]" : "text-gray-400"
                  )}
                >
                  {tx.toolkitLabel}
                </p>
                <div className="flex flex-wrap gap-3">
                  {tx.toolkit.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "px-5 py-2 rounded-full text-xs font-['Inter'] uppercase tracking-widest",
                        isDark ? "bg-[#323539] text-[#e1e2e8]" : "bg-gray-200 text-gray-700"
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 z-0",
            isDark
              ? "bg-gradient-to-tr from-[#0b0e12] via-[#191c20] to-[#272a2e]"
              : "bg-gradient-to-tr from-gray-50 via-white to-gray-100"
          )}
        />
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] rounded-full z-0",
            isDark ? "bg-[#d6baff]/10" : "bg-violet-200/40"
          )}
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1 rounded-full border mb-8",
              isDark ? "bg-[#d6baff]/10 border-[#d6baff]/20" : "bg-violet-100 border-violet-200"
            )}
          >
            <span
              className={cn(
                "w-2 h-2 rounded-full animate-pulse",
                isDark ? "bg-[#d6baff]" : "bg-violet-500"
              )}
            />
            <span
              className={cn(
                "font-['Inter'] text-[10px] uppercase tracking-widest",
                isDark ? "text-[#d6baff]" : "text-violet-600"
              )}
            >
              {tx.ctaBadge}
            </span>
          </div>

          <h2
            className={cn(
              "font-['Space_Grotesk'] text-4xl md:text-6xl font-bold mb-8 leading-tight",
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
              "font-['Manrope'] text-xl mb-12 max-w-2xl mx-auto leading-relaxed",
              isDark ? "text-[#ccc3d4]" : "text-gray-600"
            )}
          >
            {tx.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="/contact"
              className={cn(
                "group relative px-12 py-5 rounded-xl font-['Space_Grotesk'] font-bold text-lg shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300",
                isDark
                  ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057] shadow-[#d6baff]/20"
                  : "bg-gradient-to-br from-violet-500 to-violet-800 text-white shadow-violet-500/20"
              )}
            >
              <span className="relative z-10">{tx.ctaBtn1}</span>
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="/contact"
              className={cn(
                "px-12 py-5 rounded-xl font-['Space_Grotesk'] font-bold text-lg transition-all duration-300 border",
                isDark
                  ? "glass-effect border-[#4a4452]/30 text-[#e1e2e8] hover:bg-[#323539]"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              )}
            >
              {tx.ctaBtn2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

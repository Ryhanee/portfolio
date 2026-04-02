import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import CraftechLogo from "@/assets/LOGO-craftech-f-630x230.png";
import { Paintbrush, Code2, Zap } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { Helmet } from "react-helmet-async";

type IconComponent = React.ComponentType<LucideProps>;

interface CardData {
  Icon: IconComponent;
  title: string;
  desc: string;
}

const CARD_ICONS: IconComponent[] = [Paintbrush, Code2, Zap];

const translations = {
  en: {
    sectionLabel: "PHILOSOPHY",
    leftHeading: "A dual approach to digital creation.",
    rightHeading:
      "I bridge the gap between visually arresting design and robust, scalable code.",
    p1: "Full-Stack Developer with over 7 years of experience specializing in designing and developing web and mobile solutions. Passionate about innovative technologies, artificial intelligence, and best development practices.",
    p2: "As the creator of the OlovaJS UI Framework and co-founder of Craftech, I'm dedicated to simplifying development workflows and crafting intelligent digital solutions.",
    cards: [
      {
        title: "UI/UX Strategy",
        desc: "Editorial layouts, design systems, and user behavior mapping focused on conversion and retention.",
      },
      {
        title: "Full-Stack Dev",
        desc: "Building with React, Next.js, and Node. Clean architectures that scale with your users.",
      },
      {
        title: "Interaction",
        desc: "Bringing static designs to life through purposeful motion, micro-interactions, and accessibility.",
      },
    ],
    toolkitLabel: "THE TOOLKIT",
    toolkit: [
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
    ],
    ctaBadge: "AVAILABLE FOR NEW OPPORTUNITIES",
    ctaHeading: "Ready to bring your\u00a0project to life?",
    ctaSubtitle:
      "Let's collaborate to transform your ideas into exceptional digital experiences, combining cutting-edge design and precision engineering.",
    ctaBtn1: "Start a project",
    ctaBtn2: "Contact me",
    craftechBy: "Rihane Dalhoum, Co-founder of",
  },
  fr: {
    sectionLabel: "PHILOSOPHIE",
    leftHeading: "Une double approche de la création digitale.",
    rightHeading:
      "Je fais le lien entre un design visuellement saisissant et un code robuste et scalable.",
    p1: "Développeur Full-Stack avec plus de 7 ans d'expérience spécialisé dans la conception et le développement de solutions web et mobiles. Passionné par les technologies innovantes, l'intelligence artificielle et les meilleures pratiques de développement.",
    p2: "En tant que créateur du framework UI OlovaJS et co-fondateur de Craftech, je m'engage à simplifier les workflows de développement et à créer des solutions numériques intelligentes.",
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
    toolkitLabel: "LA BOÎTE À OUTILS",
    toolkit: [
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
    ],
    ctaBadge: "DISPONIBLE POUR DE NOUVELLES OPPORTUNITÉS",
    ctaHeading: "Prêt à donner vie à\u00a0votre projet\u00a0?",
    ctaSubtitle:
      "Collaborons pour transformer vos idées en expériences numériques exceptionnelles, alliant design de pointe et ingénierie de précision.",
    ctaBtn1: "Démarrer un projet",
    ctaBtn2: "Me Contacter",
    craftechBy: "Rihane Dalhoum, Co-fondateur de",
  },
} as const;

export default function About() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];

  const cards: CardData[] = tx.cards.map((c, i) => ({
    Icon: CARD_ICONS[i],
    title: c.title,
    desc: c.desc,
  }));

  return (
    <>
      <Helmet>
        <title>Rihane Dalhoum – Full-Stack Developer & Data Scientist</title>
        <meta
          name="description"
          content="Full-stack developer creating smart, scalable web apps with React, Node.js, WordPress, PHP, and Laravel. Passionate about AI and innovative digital solutions."
        />
      </Helmet>

      {/* ── Philosophy section ── */}
      <section
        id="about"
        className={cn(
          "py-20 md:py-32",
          isDark ? "bg-[#090f1c] text-white" : "bg-white text-gray-900"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          {/* Two-column intro */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Left */}
            <div className="space-y-4">
              <p
                className={cn(
                  "text-xs font-semibold tracking-[0.2em] uppercase",
                  isDark ? "text-teal-400" : "text-teal-600"
                )}
              >
                {tx.sectionLabel}
              </p>
              <div
                className={cn(
                  "w-8 h-0.5",
                  isDark ? "bg-teal-400" : "bg-teal-600"
                )}
              />
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {tx.leftHeading}
              </h2>

              {/* Craftech attribution */}
              <div className="pt-4 flex items-center gap-3 flex-wrap">
                <cite
                  className={cn(
                    "not-italic text-sm",
                    isDark ? "text-gray-400" : "text-gray-500"
                  )}
                >
                  {tx.craftechBy}
                </cite>
                <a
                  href="http://craftech-digital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={CraftechLogo}
                    alt="Craftech"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5">
              <h3
                className={cn(
                  "text-2xl md:text-3xl font-semibold leading-snug",
                  isDark ? "text-teal-300" : "text-teal-700"
                )}
              >
                {tx.rightHeading}
              </h3>
              <p
                className={cn(
                  "leading-relaxed",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}
              >
                {tx.p1}
              </p>
              <p
                className={cn(
                  "leading-relaxed",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}
              >
                {tx.p2}
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cards.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className={cn(
                  "rounded-xl p-6 border space-y-3 transition-colors duration-200",
                  isDark
                    ? "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6",
                    isDark ? "text-violet-400" : "text-violet-600"
                  )}
                />
                <h4 className="font-semibold text-base">{title}</h4>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    isDark ? "text-gray-400" : "text-gray-500"
                  )}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Toolkit */}
          <div className="mt-12 space-y-4">
            <p
              className={cn(
                "text-xs font-semibold tracking-[0.2em] uppercase text-center",
                isDark ? "text-gray-500" : "text-gray-400"
              )}
            >
              {tx.toolkitLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {tx.toolkit.map((item) => (
                <span
                  key={item}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border",
                    isDark
                      ? "border-white/15 text-gray-300 bg-white/5"
                      : "border-gray-300 text-gray-500 bg-gray-50"
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA section ── */}
      <section
        className={cn(
          "py-24 md:py-32",
          isDark
            ? "bg-gradient-to-b from-[#090f1c] to-[#060b15]"
            : "bg-gradient-to-b from-white to-gray-50"
        )}
      >
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase border-violet-500/40 text-violet-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {tx.ctaBadge}
          </div>

          <h2
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            {tx.ctaHeading}
          </h2>

          <p
            className={cn(
              "text-base md:text-lg max-w-xl mx-auto leading-relaxed",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            {tx.ctaSubtitle}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              {tx.ctaBtn1}
            </a>
            <a
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-lg border transition-colors duration-200",
                isDark
                  ? "border-white/20 text-gray-300 hover:text-white hover:border-white/40"
                  : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400"
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

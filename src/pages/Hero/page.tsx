import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import config from "@/config/config";
import { ArrowRight } from "lucide-react";
import HeroImg from "@/assets/rihane.jpg";
import my_resume from "@/assets/Rihane_Dalhoum_FullStack_CV.pdf";
import { useScroll, useTransform, motion } from "framer-motion";

const translations = {
  en: {
    badge: "Full-Stack Engineer | WordPress, PrestaShop, SaaS & AI",
    headingStart: "High-Converting ",
    headingItalic: "Websites & eCommerce ",
    headingEnd: " Platforms.",
    subtitle:
      "I build scalable WordPress, PrestaShop and custom platforms optimized for SEO, performance, and conversion, helping businesses turn traffic into qualified leads and measurable growth.",
    cta1: "View Results",
    cta2: "Start your project",
    currentFocusLabel: "Current Focus",
    currentFocusValue: "Web Development, eCommerce & SaaS",
    basedInLabel: "Based In",
    basedInValue: "Tunisia",
  },
  fr: {
    badge: "Développeur Full-Stack & Data Scientist",
    headingStart: "Architecturer des ",
    headingItalic: "Expériences",
    headingEnd: " Digitales Intentionnelles.",
    subtitle:
      "À l'intersection du design éditorial de haute qualité et de l'ingénierie full-stack fonctionnelle. Je construis des outils pour la prochaine génération du web.",
    cta1: "Voir les projets",
    cta2: "Lire mon histoire",
    currentFocusLabel: "Focus Actuel",
    currentFocusValue: "IA & Développement",
    basedInLabel: "Basé en",
    basedInValue: "Tunisie",
  },
} as const;

export default function Hero() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];
  const { scrollY } = useScroll();
  const bgTextX = useTransform(scrollY, [0, 800], ["0%", "-15%"]);

  return (
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
                isDark ? "text-[#71d5e4]" : "text-teal-600"
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
              "font-['Manrope'] text-lg md:text-xl max-w-xl mb-10 leading-relaxed",
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
                  <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#ccc3d4] mb-1">
                    {tx.currentFocusLabel}
                  </p>
                  <p
                    className={cn(
                      "font-['Space_Grotesk'] font-bold",
                      isDark ? "text-[#d6baff]" : "text-violet-600"
                    )}
                  >
                    {tx.currentFocusValue}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#ccc3d4] mb-1">
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
  );
}

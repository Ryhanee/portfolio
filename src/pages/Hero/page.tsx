import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { cn } from "@/lib/utils";
import config from "@/config/config";
import { ArrowRight } from "lucide-react";
import HeroImg from "@/assets/rihane.jpg";
import my_resume from "@/assets/Rihane_Dalhoum_FullStack_CV.pdf";

const translations = {
  en: {
    badge: "FULL-STACK DEVELOPER",
    headingLine1: "Architecting",
    headingItalic: "Innovative",
    headingLine2: "Digital Experiences.",
    subtitle:
      "Crafting the intersection of high-end engineering aesthetics and functional full-stack development. I build tools for the next generation of the web.",
    cta1: "View Projects",
    cta2: "Read the story",
    resume: "Get Resume",
    currentFocusLabel: "CURRENT FOCUS",
    currentFocusValue: "AI & Web Dev",
    basedInLabel: "BASED IN",
    basedInValue: "Tunisia",
  },
  fr: {
    badge: "DÉVELOPPEUR FULL-STACK & DATA SCIENTIST",
    headingLine1: "Architecturer des",
    headingItalic: "Expériences",
    headingLine2: "Digitales Innovantes.",
    subtitle:
      "À l'intersection du design technique de haute qualité et du développement full-stack fonctionnel. Je construis des outils pour la prochaine génération du web.",
    cta1: "Voir les projets",
    cta2: "Lire mon histoire",
    resume: "Mon CV",
    currentFocusLabel: "FOCUS ACTUEL",
    currentFocusValue: "IA & Développement",
    basedInLabel: "BASÉ EN",
    basedInValue: "Tunisie",
  },
} as const;

export default function Hero() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];

  return (
    <>
      <div
        className={cn(
          "hero min-h-screen pt-24 relative overflow-hidden",
          isDark ? "bg-[#090f1c] text-white" : "bg-white text-gray-900"
        )}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-[5%] top-[20%] h-[400px] w-[400px] bg-gradient-to-r from-purple-900 via-indigo-800 to-cyan-900 opacity-20 blur-[120px]" />
          <div className="absolute right-[10%] top-[10%] h-[300px] w-[300px] bg-gradient-to-r from-violet-800 to-purple-900 opacity-15 blur-[100px]" />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-10" />

        <div className="container mx-auto px-6 md:px-10 py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 min-h-[85vh]">

            {/* Left — Text content */}
            <div className="md:w-1/2 w-full space-y-6">
              {/* Badge */}
              <div
                className={cn(
                  "inline-flex items-center border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase",
                  isDark
                    ? "border-white/20 text-gray-300"
                    : "border-gray-300 text-gray-500"
                )}
              >
                {tx.badge}
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span>{tx.headingLine1}</span>
                <br />
                <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
                  {tx.headingItalic}
                </em>
                <br />
                <span>{tx.headingLine2}</span>
              </h1>

              {/* Subtitle */}
              <p
                className={cn(
                  "text-base md:text-lg max-w-md leading-relaxed",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              >
                {tx.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4 flex-wrap pt-2">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  {tx.cta1}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={my_resume}
                  className={cn(
                    "inline-flex items-center gap-2 font-medium px-2 py-3 transition-colors duration-200",
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {tx.cta2}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right — Portrait card */}
            <div className="md:w-5/12 w-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 opacity-40 blur-sm" />

                {/* Card */}
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden border",
                    isDark
                      ? "border-white/10 bg-gray-900"
                      : "border-gray-200 bg-gray-50"
                  )}
                >
                  <img
                    src={HeroImg}
                    alt={config.information.name}
                    className="w-full object-cover aspect-[3/4]"
                  />

                  {/* Info overlay */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md border-t",
                      isDark
                        ? "bg-black/60 border-white/10"
                        : "bg-white/80 border-gray-200"
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p
                          className={cn(
                            "text-[10px] font-semibold tracking-widest uppercase",
                            isDark ? "text-gray-400" : "text-gray-500"
                          )}
                        >
                          {tx.currentFocusLabel}
                        </p>
                        <p
                          className={cn(
                            "text-sm font-semibold mt-0.5",
                            isDark ? "text-white" : "text-gray-900"
                          )}
                        >
                          {tx.currentFocusValue}
                        </p>
                      </div>

                      <div
                        className={cn(
                          "w-px h-8",
                          isDark ? "bg-white/20" : "bg-gray-300"
                        )}
                      />

                      <div>
                        <p
                          className={cn(
                            "text-[10px] font-semibold tracking-widest uppercase",
                            isDark ? "text-gray-400" : "text-gray-500"
                          )}
                        >
                          {tx.basedInLabel}
                        </p>
                        <p
                          className={cn(
                            "text-sm font-semibold mt-0.5",
                            isDark ? "text-white" : "text-gray-900"
                          )}
                        >
                          {tx.basedInValue}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ShootingStars />
    </>
  );
}

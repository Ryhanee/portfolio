import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router";
import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { id: "home", text: lang === "en" ? "Home" : "Accueil", path: "/" },
    { id: "skills", text: lang === "en" ? "Skills" : "Compétences", path: "/skills" },
    { id: "projects", text: lang === "en" ? "Projects" : "Projets", path: "/projects" },
    { id: "experience", text: lang === "en" ? "Experience" : "Expérience", path: "/experience" },
    { id: "contact", text: "Contact", path: "/contact" },
  ];

  const hireMeLabel = lang === "en" ? "Start a Project" : "Démarrer un Projet";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 backdrop-blur-xl",
        isDark
          ? "bg-[#111418]/70 bg-gradient-to-b from-[#111418] to-transparent"
          : "bg-white/80 border-b border-gray-100"
      )}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setActiveLink("home")}
          className={cn(
            "text-2xl font-bold tracking-tighter font-['Space_Grotesk']",
            isDark ? "text-[#D6BAFF]" : "text-violet-700"
          )}
        >
          Rihane Dalhoum
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ id, text, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => setActiveLink(id)}
              className={cn(
                "font-['Space_Grotesk'] tracking-tight transition-all duration-300",
                activeLink === id
                  ? isDark
                    ? "text-[#D6BAFF] font-bold border-b-2 border-[#71D5E4] pb-1"
                    : "text-violet-700 font-bold border-b-2 border-teal-500 pb-1"
                  : isDark
                    ? "text-slate-400 font-medium hover:text-[#71D5E4]"
                    : "text-gray-500 font-medium hover:text-violet-700"
              )}
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Desktop right controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
              "p-2 transition-colors",
              isDark ? "text-slate-400 hover:text-[#D6BAFF]" : "text-gray-500 hover:text-violet-700"
            )}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language dropdown — desktop */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangOpen((o) => !o)}
              aria-label="Select language"
              className={cn(
                "flex items-center gap-1 p-2 transition-colors",
                isDark ? "text-slate-400 hover:text-[#D6BAFF]" : "text-gray-500 hover:text-violet-700"
              )}
            >
              <Globe size={16} />
              <span className="text-xs font-['Inter'] font-bold tracking-widest uppercase">
                {lang.toUpperCase()}
              </span>
              <ChevronDown
                size={12}
                className={cn("transition-transform duration-200", isLangOpen ? "rotate-180" : "")}
              />
            </button>

            {isLangOpen && (
              <div
                className={cn(
                  "absolute right-0 top-full mt-2 w-28 rounded-xl border shadow-xl overflow-hidden",
                  isDark
                    ? "bg-[#1d2024] border-[#4a4452]/30 shadow-black/40"
                    : "bg-white border-gray-200 shadow-gray-200/60"
                )}
              >
                {(["en", "fr"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { if (l !== lang) toggleLang(); setIsLangOpen(false); }}
                    className={cn(
                      "w-full flex items-center gap-2 px-4 py-2.5 text-xs font-['Inter'] font-bold uppercase tracking-widest transition-colors",
                      l === lang
                        ? isDark
                          ? "bg-[#272a2e] text-[#D6BAFF]"
                          : "bg-violet-50 text-violet-700"
                        : isDark
                          ? "text-slate-400 hover:bg-[#272a2e] hover:text-[#e1e2e8]"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <span>{l === lang ? "●" : "○"}</span>
                    {l === "en" ? "English" : "Français"}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="/contact"
            onClick={() => setActiveLink("contact")}
            className={cn(
              "px-6 py-2.5 rounded-full font-['Space_Grotesk'] font-bold text-sm scale-95 active:scale-90 transition-transform",
              isDark
                ? "bg-gradient-to-br from-[#D6BAFF] to-[#47088F] text-[#280057]"
                : "bg-gradient-to-br from-violet-500 to-violet-800 text-white"
            )}
          >
            {hireMeLabel}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn("p-2", isDark ? "text-slate-400" : "text-gray-500")}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={cn("p-2", isDark ? "text-slate-400" : "text-gray-500")}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={cn(
            "md:hidden px-8 pb-6 flex flex-col gap-4 border-t",
            isDark ? "bg-[#111418] border-[#4A4452]/20" : "bg-white border-gray-200"
          )}
        >
          {navLinks.map(({ id, text, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => {
                setActiveLink(id);
                setIsMenuOpen(false);
              }}
              className={cn(
                "font-['Space_Grotesk'] font-medium py-2 transition-colors",
                activeLink === id
                  ? isDark ? "text-[#D6BAFF]" : "text-violet-700"
                  : isDark ? "text-slate-400" : "text-gray-500"
              )}
            >
              {text}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2">
            {/* Language options — mobile */}
            <div className="flex items-center gap-1">
              <Globe size={14} className={isDark ? "text-slate-400" : "text-gray-400"} />
              {(["en", "fr"] as const).map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className={isDark ? "text-slate-600" : "text-gray-300"}>/</span>}
                  <button
                    onClick={() => { if (l !== lang) toggleLang(); }}
                    className={cn(
                      "text-xs font-['Inter'] font-bold tracking-widest uppercase transition-colors",
                      l === lang
                        ? isDark ? "text-[#D6BAFF]" : "text-violet-700"
                        : isDark ? "text-slate-500 hover:text-slate-300" : "text-gray-400 hover:text-gray-600"
                    )}
                  >
                    {l.toUpperCase()}
                  </button>
                </span>
              ))}
            </div>
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 rounded-full font-['Space_Grotesk'] font-bold text-sm bg-gradient-to-br from-[#D6BAFF] to-[#47088F] text-[#280057]"
            >
              {hireMeLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

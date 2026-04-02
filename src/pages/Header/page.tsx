import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
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

  const navLinks = [
    { id: "home", text: lang === "en" ? "Home" : "Accueil", path: "/" },
    { id: "projects", text: lang === "en" ? "Projects" : "Projets", path: "/projects" },
    { id: "experience", text: lang === "en" ? "Experience" : "Expérience", path: "/experience" },
    { id: "contact", text: "Contact", path: "/contact" },
  ];

  const hireMeLabel = lang === "en" ? "Hire Me" : "M'embaucher";

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

          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className={cn(
              "text-xs font-['Inter'] font-bold tracking-widest uppercase transition-colors",
              isDark ? "text-slate-400 hover:text-[#D6BAFF]" : "text-gray-500 hover:text-violet-700"
            )}
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

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
            <button
              onClick={toggleLang}
              className={cn(
                "text-xs font-['Inter'] font-bold tracking-widest uppercase",
                isDark ? "text-slate-400" : "text-gray-500"
              )}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
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

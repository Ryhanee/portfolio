import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router";
import {
  Home,
  Laptop,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
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
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: Home, text: lang === "en" ? "Home" : "Accueil", path: "/" },
    { id: "skills", icon: Code, text: lang === "en" ? "Skills" : "Compétences", path: "/skills" },
    { id: "experience", icon: Briefcase, text: lang === "en" ? "Experience" : "Expérience", path: "/experience" },
    { id: "education", icon: GraduationCap, text: lang === "en" ? "Education" : "Formation", path: "/education" },
    { id: "projects", icon: Laptop, text: lang === "en" ? "Projects" : "Projets", path: "/projects" },
    { id: "contact", icon: Mail, text: "Contact", path: "/contact" },
  ];

  const hireMeLabel = lang === "en" ? "Hire Me" : "M'embaucher";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 backdrop-blur-md md:bg-transparent md:backdrop-blur-none",
        isDark ? "bg-[#090F1C]/95" : "bg-white/95"
      )}
    >
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-[#0A409B] via-[#ECF2F6] to-[#47088F] animate-gradient-x">
          <nav
            className={cn(
              "backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5",
              isDark ? "bg-[#090F1C]/90" : "bg-white/90"
            )}
          >
            {/* Mobile top bar */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link
                to="/"
                className={cn(
                  "font-bold",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                Portfolio
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className={cn("p-2", isDark ? "text-white" : "text-gray-900")}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun size={22} className="hover:text-yellow-400 transition-colors" />
                  ) : (
                    <Moon size={22} className="hover:text-blue-400 transition-colors" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={cn("p-2", isDark ? "text-white" : "text-gray-900")}
                  aria-label="Toggle menu"
                >
                  <Menu size={22} className="hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <div className={cn(isMenuOpen ? "block" : "hidden", "md:block")}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                      activeLink === id
                        ? cn(
                            isDark
                              ? "bg-white/15 text-white"
                              : "bg-gray-900/15 text-gray-900"
                          )
                        : cn(
                            isDark
                              ? "text-gray-300 hover:text-white hover:bg-white/10"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/10"
                          )
                    )}
                  >
                    <Icon
                      size={18}
                      className={cn(
                        "transition-transform",
                        activeLink === id ? "scale-110" : ""
                      )}
                    />
                    <span>{text}</span>
                  </Link>
                ))}

                {/* Theme toggle — desktop */}
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className={cn(
                    "hidden md:flex px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium transition-all duration-300 items-center gap-2",
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/10"
                  )}
                >
                  {isDark ? (
                    <Sun size={18} className="hover:text-yellow-400 transition-colors" />
                  ) : (
                    <Moon size={18} className="hover:text-blue-400 transition-colors" />
                  )}
                </button>

                {/* Language toggle */}
                <button
                  onClick={toggleLang}
                  aria-label="Toggle language"
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-200",
                    isDark
                      ? "border-white/20 text-gray-300 hover:text-white hover:border-white/40"
                      : "border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-400"
                  )}
                >
                  {lang === "en" ? "FR" : "EN"}
                </button>

                {/* Hire Me */}
                <a
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white transition-colors duration-200 text-center"
                >
                  {hireMeLabel}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}

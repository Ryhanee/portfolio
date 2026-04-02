import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";

const translations = {
  en: {
    copyright: "© 2024 Rihane Dalhoum. Crafted for the digital age.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rihane-dalhoum/" },
      { label: "Dribbble", href: "#" },
      { label: "GitHub", href: "https://github.com/Ryhanee" },
      { label: "Email", href: "/contact" },
    ],
  },
  fr: {
    copyright: "© 2024 Rihane Dalhoum. Conçu pour l'ère numérique.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rihane-dalhoum/" },
      { label: "Dribbble", href: "#" },
      { label: "GitHub", href: "https://github.com/Ryhanee" },
      { label: "Email", href: "/contact" },
    ],
  },
} as const;

export default function Footer() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];

  return (
    <footer
      className={cn(
        "w-full py-16 px-8 border-t",
        isDark ? "bg-[#191C20] border-[#4A4452]/15" : "bg-gray-50 border-gray-200"
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div
          className={cn(
            "text-lg font-bold uppercase tracking-tighter font-['Space_Grotesk']",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          Rihane Dalhoum
        </div>

        <div className="flex gap-10 flex-wrap justify-center">
          {tx.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "font-['Manrope'] text-sm uppercase tracking-widest underline-offset-8 decoration-[#71D5E4] transition-all duration-500 ease-in-out hover:underline",
                isDark ? "text-slate-500 hover:text-[#D6BAFF]" : "text-gray-400 hover:text-violet-600"
              )}
            >
              {label}
            </a>
          ))}
        </div>

        <div
          className={cn(
            "font-['Manrope'] text-xs uppercase tracking-widest",
            isDark ? "text-slate-500" : "text-gray-400"
          )}
        >
          {tx.copyright}
        </div>
      </div>
    </footer>
  );
}

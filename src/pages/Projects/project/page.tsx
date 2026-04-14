import { useParams, useNavigate, Link } from "react-router";
import {useEffect, useState} from "react";
import { ExternalLink, ArrowRight, ArrowLeft, ZoomIn, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";

const translations = {
  en: {
    backToProjects: "Back to Projects",
    technologiesUsed: "Technologies Used",
    projectStatus: "Project Status",
    role: "Role",
    year: "Year",
    theChallenge: "— The Challenge",
    theSolution: "— The Solution",
    experienceLive: "Experience the Live Build",
    viewLiveWebsite: "View Live Website",
    viewOnGithub: "View on GitHub",
    coreStatistics: "Core Statistics",
    upNext: "Up Next",
    viewProject: "View Project",
    notFound: "Project not found.",
    notFoundSub: "The project you're looking for doesn't exist.",
  },
  fr: {
    backToProjects: "Retour aux Projets",
    technologiesUsed: "Technologies Utilisées",
    projectStatus: "Statut du Projet",
    role: "Rôle",
    year: "Année",
    theChallenge: "— Le Défi",
    theSolution: "— La Solution",
    experienceLive: "Voir le Projet en Ligne",
    viewLiveWebsite: "Voir le Site",
    viewOnGithub: "Voir sur GitHub",
    coreStatistics: "Statistiques Clés",
    upNext: "Projet Suivant",
    viewProject: "Voir le Projet",
    notFound: "Projet introuvable.",
    notFoundSub: "Le projet que vous recherchez n'existe pas.",
  },
} as const;

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const idx = projects.findIndex((p) => p.slug === slug);
  const project = idx !== -1 ? projects[idx] : null;
  const nextProject = project ? projects[(idx + 1) % projects.length] : null;

  const desc = project
    ? lang === "fr" ? project.description_fr : project.description
    : "";
  const challenge = project
    ? lang === "fr" ? project.challenge_fr : project.challenge
    : { heading: "", body: [] };
  const solution = project
    ? lang === "fr" ? project.solution_fr : project.solution
    : { heading: "", body: [] };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  if (!project || !nextProject) {
    return (
      <div
        className={cn(
          "min-h-screen flex flex-col items-center justify-center gap-4",
          isDark ? "bg-[#111418] text-[#e1e2e8]" : "bg-white text-gray-900"
        )}
      >
        <p className="font-['Space_Grotesk'] text-2xl font-bold">{tx.notFound}</p>
        <p className={cn("font-['Manrope']", isDark ? "text-[#ccc3d4]" : "text-gray-500")}>
          {tx.notFoundSub}
        </p>
        <Link
          to="/projects"
          className="mt-4 px-6 py-3 bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057] rounded-lg font-['Space_Grotesk'] font-bold text-sm"
        >
          {tx.backToProjects}
        </Link>
      </div>
    );
  }

  const hasDemoLink = project.links.demo !== "#";
  const hasGithubLink = project.links.github !== "#";

  return (
    <>
      <Helmet>
        <title>{project.title} – Rihane Dalhoum</title>
        <meta name="description" content={desc} />
      </Helmet>

      <div className={cn(isDark ? "bg-[#111418] text-[#e1e2e8]" : "bg-white text-gray-900")}>

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-end pt-32 overflow-hidden">
          {/* Background */}
          {project.hasHeroImage ? (
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: isDark
                    ? "linear-gradient(to bottom, rgba(17,20,24,0.3) 0%, rgba(17,20,24,1) 88%)"
                    : "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.97) 80%)",
                }}
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 z-0"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #1a1040 0%, #111418 40%, #003b42 100%)"
                  : "linear-gradient(135deg, #ede9fe 0%, #f0fdf4 100%)",
              }}
            />
          )}

          {/* Back link */}
          <div className="absolute top-24 left-8 z-20">
            <button
              onClick={() => navigate("/projects")}
              className={cn(
                "flex items-center gap-2 font-['Inter'] text-xs uppercase tracking-widest transition-colors",
                isDark ? "text-[#ccc3d4] hover:text-[#71d5e4]" : "text-gray-500 hover:text-teal-600"
              )}
            >
              <ArrowLeft size={14} />
              {tx.backToProjects}
            </button>
          </div>

          {/* Hero content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-20">
            <div className="max-w-4xl">
              <span
                className={cn(
                  "inline-block py-1 px-4 mb-6 font-['Inter'] text-xs uppercase tracking-[0.2em] rounded-full",
                  isDark
                    ? "bg-[#272a2e] text-[#71d5e4]"
                    : "bg-[#d6baff] text-gray-700"
                )}
              >
                {project.categoryLabel}
              </span>
              <h1
                className={cn(
                  "font-['Space_Grotesk'] text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8",
                  isDark ? "text-[#d6baff]" : "text-violet-700"
                )}
              >
                {project.title}.
              </h1>
              <p
                className={cn(
                  "font-['Manrope'] text-xl md:text-2xl max-w-2xl font-light leading-relaxed",
                  isDark ? "text-[#ccc3d4]" : "text-gray-600"
                )}
              >
                {desc}
              </p>
            </div>
          </div>
        </section>

        {/* ── Meta Info ── */}
        <section className={cn("py-12", isDark ? "bg-[#111418]" : "bg-white")}>
          <div className="max-w-7xl mx-auto px-8">
            <div
              className={cn(
                "grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y",
                isDark ? "border-[#4a4452]/15" : "border-gray-200"
              )}
            >
              {/* Technologies */}
              <div>
                <p
                  className={cn(
                    "font-['Inter'] text-xs uppercase tracking-[0.15em] mb-3",
                    isDark ? "text-[#4a4452]" : "text-gray-400"
                  )}
                >
                  {tx.technologiesUsed}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={cn(
                        "px-3 py-1 rounded-full font-['Inter'] text-xs",
                        isDark
                          ? "bg-[#272a2e] text-[#ccc3d4]"
                          : "bg-gray-100 text-gray-600"
                      )}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Status */}
              <div>
                <p
                  className={cn(
                    "font-['Inter'] text-xs uppercase tracking-[0.15em] mb-3",
                    isDark ? "text-[#4a4452]" : "text-gray-400"
                  )}
                >
                  {tx.projectStatus}
                </p>
                <p className={cn("font-['Space_Grotesk'] font-medium", isDark ? "text-[#e1e2e8]" : "text-gray-900")}>
                  {project.status}
                </p>
              </div>
              {/* Role */}
              <div>
                <p
                  className={cn(
                    "font-['Inter'] text-xs uppercase tracking-[0.15em] mb-3",
                    isDark ? "text-[#4a4452]" : "text-gray-400"
                  )}
                >
                  {tx.role}
                </p>
                <p className={cn("font-['Space_Grotesk'] font-medium", isDark ? "text-[#e1e2e8]" : "text-gray-900")}>
                  {project.role}
                </p>
              </div>
              {/* Year */}
              <div>
                <p
                  className={cn(
                    "font-['Inter'] text-xs uppercase tracking-[0.15em] mb-3",
                    isDark ? "text-[#4a4452]" : "text-gray-400"
                  )}
                >
                  {tx.year}
                </p>
                <p className={cn("font-['Space_Grotesk'] font-medium", isDark ? "text-[#e1e2e8]" : "text-gray-900")}>
                  {project.year}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenge + Solution + Sticky Card ── */}
        <section className={cn("py-24 md:py-32", isDark ? "bg-[#111418]" : "bg-white")}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left: challenge + solution */}
              <div className="lg:col-span-7 space-y-24">
                {/* Challenge */}
                <div>
                  <h2
                    className={cn(
                      "font-['Inter'] text-sm uppercase tracking-widest mb-6",
                      isDark ? "text-[#71d5e4]" : "text-teal-600"
                    )}
                  >
                    {tx.theChallenge}
                  </h2>
                  <p
                    className={cn(
                      "font-['Space_Grotesk'] text-3xl md:text-4xl leading-tight font-medium mb-8",
                      isDark ? "text-[#e1e2e8]" : "text-gray-900"
                    )}
                  >
                    {challenge.heading}
                  </p>
                  <div className="space-y-5">
                    {challenge.body.map((para, i) => (
                      <p
                        key={i}
                        className={cn(
                          "font-['Manrope'] text-lg leading-relaxed max-w-prose",
                          isDark ? "text-[#ccc3d4]" : "text-gray-600"
                        )}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <h2
                    className={cn(
                      "font-['Inter'] text-sm uppercase tracking-widest mb-6",
                      isDark ? "text-[#71d5e4]" : "text-teal-600"
                    )}
                  >
                    {tx.theSolution}
                  </h2>
                  <p
                    className={cn(
                      "font-['Space_Grotesk'] text-3xl md:text-4xl leading-tight font-medium mb-8",
                      isDark ? "text-[#e1e2e8]" : "text-gray-900"
                    )}
                  >
                    {solution.heading}
                  </p>
                  <div className="space-y-5">
                    {solution.body.map((para, i) => (
                      <p
                        key={i}
                        className={cn(
                          "font-['Manrope'] text-lg leading-relaxed max-w-prose",
                          isDark ? "text-[#ccc3d4]" : "text-gray-600"
                        )}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: sticky action card + stats */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-8">
                  {/* Live Build Card */}
                  {(hasDemoLink || hasGithubLink) && (
                    <div
                      className={cn(
                        "p-8 rounded-xl border shadow-2xl",
                        isDark
                          ? "bg-[#191c20] border-[#4a4452]/10"
                          : "bg-gray-50 border-gray-200 shadow-gray-200/60"
                      )}
                    >
                      <h3
                        className={cn(
                          "font-['Space_Grotesk'] text-xl mb-6",
                          isDark ? "text-[#d6baff]" : "text-violet-700"
                        )}
                      >
                        {tx.experienceLive}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {hasDemoLink && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between bg-gradient-to-br from-violet-500 to-violet-800 text-white shadow-violet-500/20 p-4 rounded-lg font-['Space_Grotesk'] font-bold transition-all hover:translate-x-1"
                          >
                            <div className="flex items-center gap-3">
                              <ExternalLink size={18} />
                              {tx.viewLiveWebsite}
                            </div>
                            <ArrowRight
                              size={18}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </a>
                        )}
                        {hasGithubLink && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "group flex items-center justify-between p-4 rounded-lg font-['Space_Grotesk'] font-bold border transition-all hover:translate-x-1",
                              isDark
                                ? "bg-[#272a2e] border-[#4a4452]/20 text-[#b2c5ff] hover:bg-[#323539]"
                                : "bg-white border-gray-200 text-violet-700 hover:bg-gray-50"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <FaGithub size={18} />
                              {tx.viewOnGithub}
                            </div>
                            <ArrowRight
                              size={18}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  {project.stats.length > 0 && (
                    <div className="px-4">
                      <p
                        className={cn(
                          "font-['Inter'] text-[10px] uppercase tracking-[0.2em] mb-4",
                          isDark ? "text-[#4a4452]" : "text-gray-400"
                        )}
                      >
                        {tx.coreStatistics}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {project.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className={cn(
                              "p-6 rounded-xl",
                              isDark ? "bg-[#0b0e12]" : "bg-gray-100"
                            )}
                          >
                            <p
                              className={cn(
                                "font-['Space_Grotesk'] text-3xl font-bold mb-1",
                                isDark ? "text-[#71d5e4]" : "text-teal-600"
                              )}
                            >
                              {stat.value}
                            </p>
                            <p
                              className={cn(
                                "font-['Inter'] text-xs uppercase",
                                isDark ? "text-[#ccc3d4]" : "text-gray-500"
                              )}
                            >
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── Gallery ── */}
        {project.image1 != null && (
          <section className={cn("py-24", isDark ? "bg-[#191c20]" : "bg-gray-50")}>
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Large main */}
                <div
                  className={cn(
                    "md:col-span-8 overflow-hidden rounded-xl",
                    isDark ? "bg-[#1d2024]" : "bg-gray-100"
                  )}
                >
                  <button
                      type="button"
                      className="group relative w-full h-full block"
                      onClick={() => setLightboxSrc(project.image1 ?? project.image)}
                  >
                    <img
                        src={project.image1 ?? project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 aspect-[4/3]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <ZoomIn size={36} className="text-white drop-shadow-lg" />
                    </span>
                  </button>
                </div>
                {/* Sidebar: 2 crops */}
                <div className="md:col-span-4 flex flex-col gap-6">
                  <div
                    className={cn(
                      "overflow-hidden rounded-xl flex-1",
                      isDark ? "bg-[#1d2024]" : "bg-gray-100"
                    )}
                  >
                    <button
                        type="button"
                        className="group relative w-full h-full block"
                        onClick={() => setLightboxSrc(project.image2 ?? project.image)}
                    >
                      <img
                          src={project.image2 ?? project.image}
                          alt={`${project.title} detail`}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 min-h-[160px]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <ZoomIn size={28} className="text-white drop-shadow-lg" />
                      </span>
                    </button>
                  </div>
                  <div
                    className={cn(
                      "overflow-hidden rounded-xl flex-1",
                      isDark ? "bg-[#1d2024]" : "bg-gray-100"
                    )}
                  >
                    <button
                        type="button"
                        className="group relative w-full h-full block"
                        onClick={() => setLightboxSrc(project.image3 ?? project.image)}
                    >
                      <img
                          src={project.image3 ?? project.image}
                          alt={`${project.title} view`}
                          className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700 min-h-[160px]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <ZoomIn size={28} className="text-white drop-shadow-lg" />
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* ── Lightbox ── */}
        {lightboxSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxSrc}
              alt="Gallery full view"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* ── Next Project ── */}
        <section
          className={cn(
            "py-32 border-t",
            isDark ? "bg-[#111418] border-[#4a4452]/10" : "bg-white border-gray-100"
          )}
        >
          <div className="max-w-7xl mx-auto px-8 text-center">
            <p
              className={cn(
                "font-['Inter'] text-xs uppercase tracking-[0.3em] mb-8",
                isDark ? "text-[#4a4452]" : "text-gray-400"
              )}
            >
              {tx.upNext}
            </p>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group inline-block"
            >
              <h2
                className={cn(
                  "font-['Space_Grotesk'] text-5xl md:text-8xl font-bold tracking-tighter mb-6 transition-colors",
                  isDark
                    ? "text-[#e1e2e8] group-hover:text-[#d6baff]"
                    : "text-gray-900 group-hover:text-violet-600"
                )}
              >
                {nextProject.title}.
              </h2>
              <div
                className={cn(
                  "flex items-center justify-center gap-3",
                  isDark ? "text-[#71d5e4]" : "text-teal-600"
                )}
              >
                <span className="font-['Inter'] uppercase tracking-widest text-sm">
                  {tx.viewProject}
                </span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-2"
                />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

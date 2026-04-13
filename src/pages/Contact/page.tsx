import { useState, FormEvent, ChangeEvent } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/provider/page";
import { useLang } from "@/provider/lang";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const translations = {
  en: {
    helmetTitle: "Contact – Rihane Dalhoum",
    helmetDesc: "Get in touch to discuss web development projects, collaborations or freelance opportunities.",
    badge: "Available for Collaboration",
    headingStart: "Let's create something ",
    headingItalic: "remarkable",
    headingEnd: " together.",
    subtitle:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's talk.",
    detailsLabel: "Contact Details",
    emailLabel: "Email",
    emailValue: "dalhoumrihane@gmail.com",
    locationLabel: "Location",
    locationValue: "Tunis, Tunisia",
    connectLabel: "Connect",
    formLabel: "What Are We Building?",
    nameLabel: "Your Name",
    namePlaceholder: "Rihane Dalhoum",
    emailFieldLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Project idea, Collaboration, etc.",
    visionLabel: "Your Vision",
    visionPlaceholder: "Tell me about your project, goals, timeline...",
    submitBtn: "Send Message",
    successMsg: "Message sent successfully! I'll get back to you soon.",
    errorMsg: "An error occurred. Please try again.",
    validationMsg: "Please fill in all required fields correctly.",
    errorName: "Name is required",
    errorEmail: "Email is required",
    errorEmailInvalid: "Email is invalid",
    errorSubject: "Subject is required",
    errorMessage: "Message is required",
  },
  fr: {
    helmetTitle: "Contact – Rihane Dalhoum",
    helmetDesc: "Contactez-moi pour discuter de projets web, collaborations ou opportunités freelance.",
    badge: "Disponible pour Collaboration",
    headingStart: "Créons quelque chose de ",
    headingItalic: "remarquable",
    headingEnd: " ensemble.",
    subtitle:
      "Je suis toujours ouvert à discuter de nouveaux projets, idées créatives ou opportunités. Parlons-en.",
    detailsLabel: "Coordonnées",
    emailLabel: "Email",
    emailValue: "dalhoumrihane@gmail.com",
    locationLabel: "Localisation",
    locationValue: "Tunis, Tunisie",
    connectLabel: "Réseaux",
    formLabel: "Qu'allons-nous Construire ?",
    nameLabel: "Votre Nom",
    namePlaceholder: "Rihane Dalhoum",
    emailFieldLabel: "Adresse Email",
    emailPlaceholder: "vous@exemple.com",
    subjectLabel: "Sujet",
    subjectPlaceholder: "Idée de projet, Collaboration, etc.",
    visionLabel: "Votre Vision",
    visionPlaceholder: "Parlez-moi de votre projet, vos objectifs, délais...",
    submitBtn: "Envoyer le Message",
    successMsg: "Message envoyé avec succès ! Je vous répondrai bientôt.",
    errorMsg: "Une erreur est survenue. Veuillez réessayer.",
    validationMsg: "Veuillez remplir tous les champs requis correctement.",
    errorName: "Le nom est requis",
    errorEmail: "L'email est requis",
    errorEmailInvalid: "L'email est invalide",
    errorSubject: "Le sujet est requis",
    errorMessage: "Le message est requis",
  },
} as const;

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rihane-dalhoum/",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/Rihanee",
    Icon: FaGithub,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/rihane_dalhoum",
    Icon: FaDribbble,
  },
];

export default function Contact() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const tx = translations[lang];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) { tempErrors.name = tx.errorName; isValid = false; }
    if (!formData.email.trim()) {
      tempErrors.email = tx.errorEmail; isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = tx.errorEmailInvalid; isValid = false;
    }
    if (!formData.subject.trim()) { tempErrors.subject = tx.errorSubject; isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = tx.errorMessage; isValid = false; }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) { setStatus({ type: "error", msg: tx.validationMsg }); return; }

    setIsSubmitting(true);
    const form = new FormData();
    form.append("access_key", "f999c324-d5b0-4bd7-b4bc-f0e8696bb76d");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);
    form.append("to", "dalhoumrihane@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const result = await response.json();
      if (response.ok) {
        setStatus({ type: "success", msg: tx.successMsg });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus({ type: "error", msg: result.message || tx.errorMsg });
      }
    } catch {
      setStatus({ type: "error", msg: tx.errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputBase = cn(
    "w-full px-5 py-4 rounded-lg font-['Manrope'] text-sm outline-none transition-colors border",
    isDark
      ? "bg-[#272a2e] border-[#4a4452]/20 text-[#e1e2e8] placeholder-[#ccc3d4]/40 focus:border-[#71d5e4]/50"
      : "bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400"
  );

  return (
    <>
      <Helmet>
        <title>{tx.helmetTitle}</title>
        <meta name="description" content={tx.helmetDesc} />
      </Helmet>

      <main
        className={cn(
          "min-h-screen pt-20 px-8 pb-16",
          isDark ? "bg-[#111418] text-[#e1e2e8]" : "bg-white text-gray-900"
        )}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start py-16">

          {/* ── Left column ── */}
          <div className="lg:col-span-5 space-y-12">

            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border",
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
                {tx.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
              {tx.headingStart}
              <span className={cn("italic", isDark ? "text-[#71d5e4]" : "text-teal-600")}>
                {tx.headingItalic}
              </span>
              {tx.headingEnd}
            </h1>

            {/* Subtitle */}
            <p
              className={cn(
                "font-['Manrope'] text-lg leading-relaxed max-w-md",
                isDark ? "text-[#ccc3d4]" : "text-gray-600"
              )}
            >
              {tx.subtitle}
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <p
                className={cn(
                  "font-['Inter'] text-[10px] uppercase tracking-[0.3em]",
                  isDark ? "text-[#71d5e4]" : "text-teal-600"
                )}
              >
                {tx.detailsLabel}
              </p>
              <div
                className={cn("w-8 h-px -mt-4", isDark ? "bg-[#71d5e4]" : "bg-teal-500")}
              />

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <MdOutlineEmail
                    className={cn("w-5 h-5 flex-shrink-0", isDark ? "text-[#ccc3d4]" : "text-gray-400")}
                  />
                  <div>
                    <p
                      className={cn(
                        "font-['Inter'] text-[10px] uppercase tracking-widest mb-0.5",
                        isDark ? "text-[#ccc3d4]" : "text-gray-400"
                      )}
                    >
                      {tx.emailLabel}
                    </p>
                    <a
                      href="mailto:dalhoumrihane@gmail.com"
                      className={cn(
                        "font-['Manrope'] text-sm transition-colors",
                        isDark
                          ? "text-[#e1e2e8] hover:text-[#71d5e4]"
                          : "text-gray-700 hover:text-teal-600"
                      )}
                    >
                      {tx.emailValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={cn("w-5 h-5 flex-shrink-0", isDark ? "text-[#ccc3d4]" : "text-gray-400")}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    <p
                      className={cn(
                        "font-['Inter'] text-[10px] uppercase tracking-widest mb-0.5",
                        isDark ? "text-[#ccc3d4]" : "text-gray-400"
                      )}
                    >
                      {tx.locationLabel}
                    </p>
                    <p className={cn("font-['Manrope'] text-sm", isDark ? "text-[#e1e2e8]" : "text-gray-700")}>
                      {tx.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-5">
              <p
                className={cn(
                  "font-['Inter'] text-[10px] uppercase tracking-[0.3em]",
                  isDark ? "text-[#71d5e4]" : "text-teal-600"
                )}
              >
                {tx.connectLabel}
              </p>
              <div
                className={cn("w-8 h-px -mt-4", isDark ? "bg-[#71d5e4]" : "bg-teal-500")}
              />
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-['Inter'] text-xs uppercase tracking-widest transition-all duration-300",
                      isDark
                        ? "border-[#4a4452]/40 text-[#ccc3d4] hover:border-[#d6baff]/50 hover:text-[#d6baff]"
                        : "border-gray-300 text-gray-600 hover:border-violet-400 hover:text-violet-700"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: Form ── */}
          <div
            className={cn(
              "lg:col-span-7 rounded-2xl p-10 border",
              isDark
                ? "bg-[#191c20] border-[#4a4452]/15"
                : "bg-gray-50 border-gray-200"
            )}
          >
            {/* Form label */}
            <div className="mb-8">
              <p
                className={cn(
                  "font-['Inter'] text-[10px] uppercase tracking-[0.3em] mb-3",
                  isDark ? "text-[#71d5e4]" : "text-teal-600"
                )}
              >
                {tx.formLabel}
              </p>
              <div className={cn("w-8 h-px", isDark ? "bg-[#71d5e4]" : "bg-teal-500")} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  className={cn(
                    "block font-['Inter'] text-[10px] uppercase tracking-widest mb-2",
                    isDark ? "text-[#ccc3d4]" : "text-gray-500"
                  )}
                >
                  {tx.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={tx.namePlaceholder}
                  value={formData.name}
                  onChange={handleInputChange}
                  className={cn(inputBase, errors.name && "border-red-500/60")}
                />
                {errors.name && (
                  <p className="text-red-400 font-['Manrope'] text-xs mt-1.5">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  className={cn(
                    "block font-['Inter'] text-[10px] uppercase tracking-widest mb-2",
                    isDark ? "text-[#ccc3d4]" : "text-gray-500"
                  )}
                >
                  {tx.emailFieldLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={tx.emailPlaceholder}
                  value={formData.email}
                  onChange={handleInputChange}
                  className={cn(inputBase, errors.email && "border-red-500/60")}
                />
                {errors.email && (
                  <p className="text-red-400 font-['Manrope'] text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  className={cn(
                    "block font-['Inter'] text-[10px] uppercase tracking-widest mb-2",
                    isDark ? "text-[#ccc3d4]" : "text-gray-500"
                  )}
                >
                  {tx.subjectLabel}
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder={tx.subjectPlaceholder}
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={cn(inputBase, errors.subject && "border-red-500/60")}
                />
                {errors.subject && (
                  <p className="text-red-400 font-['Manrope'] text-xs mt-1.5">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  className={cn(
                    "block font-['Inter'] text-[10px] uppercase tracking-widest mb-2",
                    isDark ? "text-[#ccc3d4]" : "text-gray-500"
                  )}
                >
                  {tx.visionLabel}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder={tx.visionPlaceholder}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={cn(inputBase, "resize-none", errors.message && "border-red-500/60")}
                />
                {errors.message && (
                  <p className="text-red-400 font-['Manrope'] text-xs mt-1.5">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "group flex items-center gap-3 px-10 py-4 rounded-lg font-['Space_Grotesk'] font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed",
                  isDark
                    ? "bg-gradient-to-br from-[#d6baff] to-[#47088f] text-[#280057]"
                    : "bg-gradient-to-br from-violet-500 to-violet-800 text-white"
                )}
              >
                <span>{isSubmitting ? "..." : tx.submitBtn}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              {/* Status */}
              {status && (
                <div
                  className={cn(
                    "px-5 py-3.5 rounded-lg font-['Manrope'] text-sm border",
                    status.type === "success"
                      ? isDark
                        ? "bg-[#71d5e4]/10 border-[#71d5e4]/20 text-[#71d5e4]"
                        : "bg-teal-50 border-teal-200 text-teal-700"
                      : isDark
                        ? "bg-red-500/10 border-red-500/20 text-red-400"
                        : "bg-red-50 border-red-200 text-red-600"
                  )}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

import HeroImg from "../../assets/rihane.jpg";
import { useTheme } from "../../provider/page";
import CraftechLogo from "../../assets/craftech-c.png";
//import SkillsSection from "../Skills/page";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark"
            ? "bg-[#090f1c] text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <h2
                  className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Developer, Designer, Creator, Innovator
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Full-Stack Developer with over 7 years of experience specializing in designing and developing
                web and mobile solutions. Passionate about innovative technologies, artificial intelligence, and
                best development practices. Skilled in boosting team productivity and delivering high-quality
                outcomes.{" "}
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I’m passionate about emerging technologies, artificial intelligence,
                and crafting code that’s clean, efficient, and future-ready.
                That passion led me to create Craftech, a digital agency to create intelligent digital solutions..
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    At the heart of my work is a simple belief — technology should empower,
                    not overwhelm. And I’m here to keep building tools and experiences that
                    make that happen.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Ryhane Dalhoum, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className={`h-5 w-fit ${theme === "dark" ? "" : ""}`}
                        src={CraftechLogo}
                        alt="Craftech Logo"
                        height="20"
                        width="auto"
                      />
                      <span>Craftech</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

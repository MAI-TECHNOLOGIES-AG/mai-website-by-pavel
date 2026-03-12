import Image from "next/image";
import Link from "next/link";
import AccessForm from "./components/AccessForm";
import AdvisoryTeamSection from "./components/AdvisoryTeamSection";
import FoundingTeamSection from "./components/FoundingTeamSection";
import ParallaxHero from "./components/ParallaxHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] selection:bg-[rgb(159,143,124)]/30">

      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 2xl:max-w-screen-2xl 2xl:px-16 2xl:py-7">
          <div className="flex items-center gap-3">
            <Image src="/logo-white.svg" alt="M&AI logo" width={36} height={36} className="2xl:w-12 2xl:h-12" />
          </div>
          <a
            href="#contact"
            className="rounded-none border border-white/60 px-6 py-2 text-xs font-medium tracking-widest uppercase text-white transition-colors hover:bg-white/10 2xl:px-8 2xl:py-3 2xl:text-sm"
          >
            Request Access
          </a>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-10 pt-28 text-center sm:px-8 2xl:pt-36 [@media(min-width:2560px)]:min-h-[2160px] [@media(min-width:2560px)]:px-12 [@media(min-width:2560px)]:pb-16 [@media(min-width:2560px)]:pt-44">
          {/* Background image with parallax */}
          <ParallaxHero />
          {/* Dark overlay for text legibility - Removed as background is now black */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}

          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center 2xl:max-w-6xl [@media(min-width:2560px)]:max-w-[1800px]">
            <div>
              <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-white/60 2xl:mb-8 2xl:text-sm [@media(min-width:2560px)]:text-base">
                Stealth Fintech Innovation
              </p>

              <h1
                className="mb-6 text-[clamp(3rem,8vw,9rem)] font-light leading-[1.1] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif' }}
              >
                AI-Powered M&amp;A
              </h1>

              <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-white/50 2xl:mb-16 2xl:max-w-2xl 2xl:text-base [@media(min-width:2560px)]:max-w-3xl [@media(min-width:2560px)]:text-lg">
                We are building the future of M&amp;A infrastructure. Quietly revolutionizing the industry with advanced AI and deep tech solutions.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#contact"
                  className="border border-[rgb(159,143,124)] bg-[rgb(159,143,124)] px-10 py-3.5 text-xs font-medium tracking-widest uppercase text-white transition-colors hover:border-[rgb(140,125,107)] hover:bg-[rgb(140,125,107)] 2xl:px-14 2xl:py-5 2xl:text-sm [@media(min-width:2560px)]:px-16 [@media(min-width:2560px)]:py-6 [@media(min-width:2560px)]:text-base"
                >
                  Request Access
                </a>
                <a
                  href="#features"
                  className="border border-white/30 px-10 py-3.5 text-xs font-medium tracking-widest uppercase text-white/70 transition-colors hover:border-white/60 hover:text-white 2xl:px-14 2xl:py-5 2xl:text-sm [@media(min-width:2560px)]:px-16 [@media(min-width:2560px)]:py-6 [@media(min-width:2560px)]:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-8 grid w-full max-w-4xl grid-cols-3 gap-8 divide-x divide-white/10 px-2 text-center sm:gap-12 2xl:max-w-6xl 2xl:gap-20 [@media(min-width:2560px)]:max-w-[1900px] [@media(min-width:2560px)]:gap-28 [@media(min-width:2560px)]:pb-6">
            {[
              { value: "Stealth", label: "Current Status" },
              { value: "Fintech", label: "Industry Sector" },
              { value: "AI-First", label: "Core Technology" },
            ].map((stat) => (
              <div key={stat.label} className="px-3 py-2 sm:px-6">
                <p
                  className="text-2xl font-light tracking-tight sm:text-3xl 2xl:text-5xl [@media(min-width:2560px)]:text-6xl"
                  style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif', color: "rgb(216,199,176)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] tracking-wide text-white/50 uppercase sm:text-xs 2xl:mt-2 2xl:text-sm [@media(min-width:2560px)]:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>



        {/* Visual divider between hero and stats */}
        <div aria-hidden="true" className="relative h-10 bg-black">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgb(216,199,176)]/50 to-transparent" />
        </div>
        {/* ── Features ── */}
        <FoundingTeamSection />

        {/* Visual divider between hero and stats */}
        <div aria-hidden="true" className="relative h-10 bg-black pb-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgb(216,199,176)]/50 to-transparent" />
        </div>
        <AdvisoryTeamSection />

        {/* Visual divider between hero and stats */}
        <div aria-hidden="true" className="relative h-10 bg-black">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgb(216,199,176)]/50 to-transparent" />
        </div>
        <div className="h-15 bg-black"></div>

        {/* ── Contact Form ── */}
        <section id="contact" className="bg-[#f3f0ec] px-6 pb-32 pt-24">
          <div className="mx-auto max-w-xl 2xl:max-w-2xl">
            <div className="text-center mb-10">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[rgb(159,143,124)] 2xl:text-xs">
                Contact
              </p>
              <h2
                className="mb-3 text-4xl font-light tracking-tight text-[#1a1a1a] sm:text-5xl 2xl:text-7xl"
                style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif' }}
              >
                Get in Touch
              </h2>
              <p className="text-sm text-[#1a1a1a]/50 2xl:text-base">
                Interested in what we are building? Reach out and we&apos;ll get back to you shortly.
              </p>
            </div>

            <AccessForm />

            <p className="mt-6 text-center text-xs text-[#1a1a1a]/30">
              We respect your privacy. Zero spam, ever.
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1a1a1a]/8 bg-[#faf8f5] px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-xs text-[#1a1a1a]/35 sm:flex-row 2xl:max-w-screen-2xl 2xl:px-10 2xl:text-sm">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="M&AI" width={20} height={20} className="opacity-40" />
            <span className="font-medium text-[#1a1a1a]/45 tracking-wide">M&AI Technologies AG</span>
          </div>
          <p>© {new Date().getFullYear()} M&AI. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/imprint" className="tracking-wide transition-colors hover:text-[#1a1a1a]/70">Imprint</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

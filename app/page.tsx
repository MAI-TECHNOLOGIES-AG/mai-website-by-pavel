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
      <header className="absolute top-0 left-0 right-0 z-50">
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
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          {/* Background image with parallax */}
          <ParallaxHero />
          {/* Dark overlay for text legibility - Removed as background is now black */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}

          <div className="relative z-10 max-w-4xl 2xl:max-w-6xl">
            <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-white/60 2xl:text-sm 2xl:mb-8">
              Stealth Fintech Innovation
            </p>

            <h1
              className="mb-6 text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl 2xl:text-9xl"
              style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif' }}
            >
              AI-Powered <br />M&amp;A{" "}
              Due Diligence
            </h1>

            <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-white/50 2xl:text-base 2xl:max-w-2xl 2xl:mb-16">
              We are building the future of M&amp;A due diligence. Quietly revolutionizing the industry with advanced AI and deep tech solutions.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="border border-[rgb(159,143,124)] bg-[rgb(159,143,124)] px-10 py-3.5 text-xs font-medium tracking-widest uppercase text-white transition-colors hover:bg-[rgb(140,125,107)] hover:border-[rgb(140,125,107)] 2xl:px-14 2xl:py-5 2xl:text-sm"
              >
                Request Access
              </a>
              <a
                href="#features"
                className="border border-white/30 px-10 py-3.5 text-xs font-medium tracking-widest uppercase text-white/70 transition-colors hover:border-white/60 hover:text-white 2xl:px-14 2xl:py-5 2xl:text-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
            <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </div> */}
          {/* ── Stats bar ── */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 grid max-w-4xl grid-cols-3 gap-20 divide-x divide-white/10 px-6 text-center 2xl:max-w-6xl">
            {[
              { value: "Stealth", label: "Current Status" },
              { value: "Fintech", label: "Industry Sector" },
              { value: "AI-First", label: "Core Technology" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-2">
                <p
                  className="text-3xl font-light tracking-tight 2xl:text-5xl"
                  style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif', color: "rgb(216,199,176)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-white/50 uppercase 2xl:text-sm 2xl:mt-2">{stat.label}</p>
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

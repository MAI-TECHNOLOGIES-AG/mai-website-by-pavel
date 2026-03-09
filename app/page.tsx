import Image from "next/image";
import Link from "next/link";
import AccessForm from "./components/AccessForm";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Lightning-Fast Analysis",
    description:
      "Process thousands of documents in minutes. Generate comprehensive reports in hours, not weeks.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
    title: "Institutional-Grade Quality",
    description:
      "AI-powered analysis meets industry best practices. Nothing falls through the cracks.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Bank-Grade Security",
    description:
      "Enterprise-level encryption and security. Your data never leaves your control.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Founder's Circle Membership",
    description: "Lifetime VIP status with priority support and exclusive features unavailable to standard members.",
  },
  {
    number: "02",
    title: "Guaranteed Price Lock",
    description: "Lock in founding member pricing forever — up to 70% off future pricing.",
  },
  {
    number: "03",
    title: "Priority Platform Access",
    description: "First access to new features and unlimited processing power from day one.",
  },
  {
    number: "04",
    title: "Exclusive Bonus Package",
    description: "3 full AI-generated due diligence reports for free — worth over CHF 60,000.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080810] text-white selection:bg-indigo-500/30">
      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080810]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo-white.svg" alt="M&A.i logo" width={32} height={32} />
            {/* <span className="text-lg font-semibold tracking-tight">M&amp;A.i</span> */}
          </div>
          <a
            href="#access"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Secure Early Access
          </a>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
          {/* Glow orbs */}
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
          <div className="pointer-events-none absolute left-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-violet-600/8 blur-[100px]" />

          <div className="relative z-10 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Limited Early Access — Only 17 spots remaining
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
              AI-Powered M&amp;A{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Due Diligence
              </span>
            </h1>

            <p className="mx-auto mb-4 max-w-2xl text-xl font-medium text-white/80 sm:text-2xl">
              10x Faster. Zero Compromise.
            </p>
            <p className="mx-auto mb-10 max-w-xl text-base text-white/50">
              Transform weeks of due diligence into hours. Analyze thousands of documents instantly, delivering institutional-grade reports that give you the competitive edge.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#access"
                className="rounded-full bg-indigo-600 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                Secure Early Access Now
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/10 px-8 py-3.5 text-base font-medium text-white/70 transition-colors hover:border-white/20 hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="border-y border-white/5 bg-white/[0.02] py-10">
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-px divide-x divide-white/5 px-6 text-center">
            {[
              { value: "12×", label: "Faster than traditional DD" },
              { value: "1000s", label: "Documents processed instantly" },
              { value: "CHF 17M", label: "Average deal value" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-2">
                <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Why M&amp;A.i
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Future of M&amp;A Due Diligence
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/50">
                Join the elite group of M&amp;A professionals revolutionizing deal execution.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative bg-[#080810] p-8 transition-colors hover:bg-indigo-950/20"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                    {f.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="px-6 py-10 pb-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Early Access Member Benefits
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Exclusive advantages,{" "}
                <span className="text-white/40">only during launch</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.number}
                  className="group flex gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-7 transition-colors hover:border-indigo-500/20 hover:bg-indigo-950/10"
                >
                  <span className="shrink-0 font-mono text-sm text-indigo-500/60">{b.number}</span>
                  <div>
                    <h3 className="mb-2 font-semibold">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA / Form ── */}
        <section id="access" className="px-6 pb-32">
          <div className="mx-auto max-w-xl">
            <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/40 to-[#080810] p-10 text-center shadow-[0_0_80px_rgba(99,102,241,0.1)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12)_0%,_transparent_60%)]" />

              <div className="relative z-10">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
                  Spots filling fast
                </div>
                <h2 className="mb-2 mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Secure Your Early Access
                </h2>
                <p className="mb-8 text-sm text-white/50">
                  Limited spots available. Priority access granted on a first-come basis.
                </p>

                <AccessForm />

                <p className="mt-4 text-xs text-white/25">
                  No credit card required. Zero spam, ever.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-white/30 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-white.svg" alt="M&A.i" width={20} height={20} className="opacity-40" />
            <span className="font-medium text-white/40">M&amp;A.i</span>
          </div>
          <p>© {new Date().getFullYear()} M&amp;A.i. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white/60">Privacy</a>
            <a href="#" className="transition-colors hover:text-white/60">Terms</a>
            <Link href="/imprint" className="transition-colors hover:text-white/60">Imprint</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

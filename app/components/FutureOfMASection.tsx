const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Advanced Analytics",
    description:
      "Proprietary algorithms processing data at unprecedented speeds to deliver real-time insights.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
    title: "Enterprise Architecture",
    description:
      "Built for the most demanding financial institutions with scalability and reliability at its core.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Uncompromised Security",
    description:
      "State-of-the-art encryption and security protocols. Your data privacy is our top priority.",
  },
];

export default function FutureOfMASection() {
  return (
    <section id="features" className="bg-[#faf8f5] px-6 py-28">
      <div className="mx-auto max-w-5xl 2xl:max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[rgb(159,143,124)] 2xl:text-xs">
            Why Us
          </p>
          <h2
            className="text-4xl font-light tracking-tight text-[#1a1a1a] sm:text-5xl 2xl:text-7xl"
            style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif' }}
          >
            The Future of M&amp;A
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#1a1a1a]/50 2xl:text-base 2xl:max-w-xl">
            Join the waitlist for the next big thing in fintech.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#1a1a1a]/8 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-[#faf8f5] p-10 transition-colors hover:bg-[rgb(159,143,124)]/5 2xl:p-14"
            >
              <div
                className="mb-6 inline-flex h-10 w-10 items-center justify-center border text-[rgb(159,143,124)] 2xl:h-14 2xl:w-14"
                style={{ borderColor: "rgb(159,143,124)" }}
              >
                {f.icon}
              </div>
              <h3
                className="mb-3 text-xl font-light text-[#1a1a1a] 2xl:text-3xl"
                style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif' }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#1a1a1a]/50 2xl:text-base">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

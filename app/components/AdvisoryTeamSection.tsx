import Image from "next/image";

const advisors = [
  {
    name: "Dr. Christian Wenger - Advisor",
    description: "Enzian Labs - Co-founder & Board Member. Wenger Vieli M&A Lawyer.",
    photo: "/team/christian-wenger.jpg",
  },
  {
    name: "Samuel Widmann - BD Advisor",
    description: "Enzian Labs - Ex-Google. Exited entrepreneur acquired by Google.",
    photo: "/team/samuel-widmann.jpg",
  },
];

export default function AdvisoryTeamSection() {
  const leftColumnAdvisors = advisors.slice(0, 1);
  const rightColumnAdvisors = advisors.slice(1);

  return (
    <section id="advisory-team" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl 2xl:max-w-screen-2xl 2xl:px-10">
        <div className="mb-14 text-right">
          <h2
            className="text-4xl font-light uppercase tracking-tight text-white/50 sm:text-5xl 2xl:text-7xl"
          >
            Advisory Team
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16">
          {[leftColumnAdvisors, rightColumnAdvisors].map((columnAdvisors, index) => (
            <div key={index} className="space-y-10 md:space-y-12">
              {columnAdvisors.map((advisor) => (
                <article key={advisor.name} className="flex items-start gap-5">
                  <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-white/10 sm:h-32 sm:w-28 2xl:h-40 2xl:w-32">
                    <Image
                      src={advisor.photo}
                      alt={advisor.name}
                      fill
                      className="object-cover grayscale"
                      sizes="(min-width: 1536px) 128px, (min-width: 640px) 112px, 96px"
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-2xl font-light leading-tight text-white sm:text-3xl 2xl:text-4xl"
                      style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif' }}
                    >
                      {advisor.name}
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-white/70 2xl:max-w-md 2xl:text-base">
                      {advisor.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

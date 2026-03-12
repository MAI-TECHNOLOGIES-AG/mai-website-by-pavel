import Image from "next/image";

const teamMembers = [
  {
    name: "Jeremy Hayman - CEO",
    description:
      "Built and scaled and exited two companies, managed $600M AUM for UHNWIs, connects capital with top M&A decision-makers.",
    photo: "/team/jeremy-hayman.jpg",
  },
  {
    name: "Michelle Wiki - COO",
    description: "MLaw, LL.M., Attorney at law and M&A specialist.",
    photo: "/team/michelle-wiki.jpg",
  },
  {
    name: "Dr. Gökhan Bakir - CTO",
    description: "AI specialist, ex-Google (L9), Founder and Lead on Google Lens.",
    photo: "/team/gokhan-bakir.jpg",
  },
  {
    name: "Pavel Svitek - Head of engineering",
    description:
      "Serial CTO with a track record of building frontier technology and driving multiple successful exits.",
    photo: "/team/pavel-svitek.jpg",
  },
  {
    name: "Dr. Sharon Wulff - Head of AI",
    description:
      "Machine learning leader with a PhD from ETH Zurich who has built scalable, high-impact AI systems as a former CTO.",
    photo: "/team/sharon-wulff.jpg",
  },
  {
    name: "Antoine Fourmont-Fingal - Head of Product",
    description:
      "Experienced product leader who has scaled ecommerce and fintech products across Asia and the Middle East, driving significant growth and commercial impact.",
    photo: "/team/antoine-fourmont-fingal.jpg",
  },
];

export default function FoundingTeamSection() {
  const leftColumnMembers = teamMembers.slice(0, 3);
  const rightColumnMembers = teamMembers.slice(3);

  return (
    <section id="features" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl 2xl:max-w-screen-2xl 2xl:px-10">
        <div className="mb-14 text-right">
          <h2
            className="text-4xl font-light uppercase tracking-tight text-white/50 sm:text-5xl 2xl:text-7xl"
          // style={{ fontFamily: 'var(--font-cormorant), "Playfair Display", serif' }}
          >
            Founding Team
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16">
          {[leftColumnMembers, rightColumnMembers].map((columnMembers, index) => (
            <div key={index} className="space-y-10 md:space-y-12">
              {columnMembers.map((member) => (
                <article key={member.name} className="flex items-start gap-5">
                  <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-white/10 sm:h-32 sm:w-28 2xl:h-40 2xl:w-32">
                    <Image
                      src={member.photo}
                      alt={member.name}
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
                      {member.name}
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-white/70 2xl:max-w-md 2xl:text-base">
                      {member.description}
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

import Link from "next/link";

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-[#080810] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm text-white/60 transition-colors hover:text-white"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Imprint (Impressum)</h1>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="space-y-6 text-sm leading-relaxed text-white/70">
            <p>
              MAI Technologies is a technology company based in Switzerland that develops digital products,
              software solutions, and AI-driven services. This website is operated and maintained by MAI
              Technologies and is intended to provide information about the company&apos;s products, services,
              and technological initiatives.
            </p>

            <p>
              MAI Technologies is committed to maintaining transparency regarding its ownership, operations,
              and digital presence. The following information is provided in accordance with applicable Swiss
              legal requirements and general transparency obligations for commercial websites.
            </p>

            <p>
              The responsible entity for the content and operation of this website is MAI Technologies,
              headquartered in Switzerland. The company operates in the field of software development,
              artificial intelligence technologies, and digital platforms.
            </p>


            <div>
              <h2 className="text-base font-semibold text-white">Registered Address:</h2>
              <p className="mt-2">MAI Technologies AG, Färberstrasse 6, 8008 Zürich, Switzerland</p>
            </div>

            <p>
              The company may conduct research, development, and deployment of software systems, including
              applications involving machine learning, language technologies, and data processing solutions.
              Any information presented on this website is provided for informational purposes only and does
              not constitute a binding offer unless explicitly stated.
            </p>

            <p>
              For general inquiries, support requests, or business communications, MAI Technologies can be
              contacted via the communication channels provided on this website. The company strives to
              respond to legitimate inquiries in a timely and professional manner.
            </p>

            <p>
              The content of this website has been prepared with the greatest possible care. However, MAI
              Technologies cannot guarantee the completeness, accuracy, or timeliness of the information
              presented. The company reserves the right to modify, update, or remove content at any time
              without prior notice.
            </p>

            <p>
              MAI Technologies respects intellectual property rights and strives to ensure that all content
              published on this website complies with applicable copyright and licensing requirements. Unless
              otherwise indicated, all text, graphics, design elements, and software components on this site
              are the intellectual property of MAI Technologies.
            </p>

            <p>
              External links to third-party websites may be provided for convenience or informational
              purposes. MAI Technologies has no control over the content or practices of external websites and
              assumes no responsibility for their accuracy, legality, or policies.
            </p>

            <p>
              Users of this website are responsible for ensuring that their use of the information and
              services complies with applicable laws and regulations in their jurisdiction. MAI Technologies
              does not guarantee uninterrupted availability of the website or its services.
            </p>

            <p>
              If you believe that any content on this website violates legal rights, intellectual property
              protections, or applicable regulations, please contact MAI Technologies so that the matter can
              be reviewed and addressed promptly.
            </p>

            <p>
              MAI Technologies values transparency, responsible technology development, and compliance with
              applicable regulations. The company continually reviews its practices to ensure that its digital
              presence remains clear, trustworthy, and legally compliant.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

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

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Imprint</h1>
        <p className="mt-4 text-white/50">Legal information according to Swiss commercial register data.</p>

        <section className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <dl className="divide-y divide-white/10">
            <div className="grid gap-2 p-6 sm:grid-cols-[180px_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-white/50">Company</dt>
              <dd className="text-base text-white">MAI Technologies AG</dd>
            </div>
            <div className="grid gap-2 p-6 sm:grid-cols-[180px_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-white/50">Address</dt>
              <dd className="text-base text-white">Färberstrasse 6, 8008 Zürich</dd>
            </div>
            <div className="grid gap-2 p-6 sm:grid-cols-[180px_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-white/50">UID</dt>
              <dd className="text-base text-white">CHE-310.052.218</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}

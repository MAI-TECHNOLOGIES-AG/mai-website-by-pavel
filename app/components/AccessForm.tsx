"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-3 text-left"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
        />
        <input
          type="email"
          placeholder="Work Email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
        />
      </div>
      <input
        type="text"
        placeholder="Company Name"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
      />
      <select className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30">
        <option value="" className="bg-[#0d0d1a]">Company Type</option>
        <option value="pe" className="bg-[#0d0d1a]">Private Equity</option>
        <option value="ib" className="bg-[#0d0d1a]">Investment Bank</option>
        <option value="ma" className="bg-[#0d0d1a]">M&A Advisory</option>
        <option value="law" className="bg-[#0d0d1a]">Law Firm</option>
        <option value="fo" className="bg-[#0d0d1a]">Family Office</option>
        <option value="corp" className="bg-[#0d0d1a]">Corporate</option>
        <option value="other" className="bg-[#0d0d1a]">Other</option>
      </select>
      <textarea
        rows={4}
        placeholder="How can we help you?"
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
      />
      <button
        type="submit"
        className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
      >
        Send Message
      </button>
    </form>
  );
}

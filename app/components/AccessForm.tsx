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
          className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
        />
        <input
          type="email"
          placeholder="Work Email"
          className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
        />
      </div>
      <input
        type="text"
        placeholder="Company Name"
        className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
      />
      <select className="w-full cursor-pointer appearance-none border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a]/60 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30">
        <option value="" className="bg-white text-[#1a1a1a]">Company Type</option>
        <option value="pe" className="bg-white text-[#1a1a1a]">Private Equity</option>
        <option value="ib" className="bg-white text-[#1a1a1a]">Investment Bank</option>
        <option value="ma" className="bg-white text-[#1a1a1a]">M&amp;A Advisory</option>
        <option value="law" className="bg-white text-[#1a1a1a]">Law Firm</option>
        <option value="fo" className="bg-white text-[#1a1a1a]">Family Office</option>
        <option value="corp" className="bg-white text-[#1a1a1a]">Corporate</option>
        <option value="other" className="bg-white text-[#1a1a1a]">Other</option>
      </select>
      <textarea
        rows={4}
        placeholder="How can we help you?"
        className="w-full resize-none border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
      />
      <button
        type="submit"
        className="w-full border border-[rgb(159,143,124)] bg-[rgb(159,143,124)] px-6 py-3.5 text-xs font-medium tracking-widest uppercase text-white transition-colors hover:bg-[rgb(140,125,107)] hover:border-[rgb(140,125,107)]"
      >
        Send Message
      </button>
    </form>
  );
}

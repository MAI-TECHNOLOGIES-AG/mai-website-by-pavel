"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitState("idle");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          companyType,
          message,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setSubmitState("success");
      setFeedbackMessage("Thanks, your message has been sent.");
      setName("");
      setEmail("");
      setCompany("");
      setCompanyType("");
      setMessage("");
    } catch (error) {
      const fallback = "We could not send your message. Please try again.";
      const errorMessage = error instanceof Error ? error.message : fallback;
      setSubmitState("error");
      setFeedbackMessage(errorMessage || fallback);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="space-y-3 text-left"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          autoComplete="name"
          className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
        />
        <input
          name="email"
          type="email"
          placeholder="Work Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
          className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
        />
      </div>
      <input
        name="company"
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        required
        autoComplete="organization"
        className="w-full border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
      />
      <select
        name="companyType"
        value={companyType}
        onChange={(event) => setCompanyType(event.target.value)}
        required
        className="w-full cursor-pointer appearance-none border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a]/60 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
      >
        <option value="" className="bg-white text-[#1a1a1a]">Company Type</option>
        <option value="pe" className="bg-white text-[#1a1a1a]">Private Equity</option>
        <option value="ib" className="bg-white text-[#1a1a1a]">Investment Bank</option>
        <option value="ma" className="bg-white text-[#1a1a1a]">M&A Advisory</option>
        <option value="law" className="bg-white text-[#1a1a1a]">Law Firm</option>
        <option value="fo" className="bg-white text-[#1a1a1a]">Family Office</option>
        <option value="corp" className="bg-white text-[#1a1a1a]">Corporate</option>
        <option value="other" className="bg-white text-[#1a1a1a]">Other</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="How can we help you?"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
        maxLength={5000}
        className="w-full resize-none border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:border-[rgb(159,143,124)] focus:outline-none focus:ring-1 focus:ring-[rgb(159,143,124)]/30"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full border border-[rgb(159,143,124)] bg-[rgb(159,143,124)] px-6 py-3.5 text-xs font-medium tracking-widest uppercase text-white transition-colors hover:bg-[rgb(140,125,107)] hover:border-[rgb(140,125,107)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {submitState !== "idle" && (
        <p
          className={`text-sm ${
            submitState === "success" ? "text-black" : "text-red-300"
          }`}
        >
          {feedbackMessage}
        </p>
      )}
    </form>
  );
}

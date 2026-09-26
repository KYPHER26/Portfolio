import { FormEvent, useState } from "react";
import { Mail, Github, Linkedin, Instagram, Copy, Check, Send } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig, FORMSPREE_ENDPOINT } from "@/data/config";

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

const contactLinks = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "GitHub", href: `https://github.com/${siteConfig.githubUsername}`, icon: Github },
  {
    label: "LinkedIn",
    href: siteConfig.socials.find((s) => s.icon === "linkedin")?.href ?? "#",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: siteConfig.socials.find((s) => s.icon === "instagram")?.href ?? "#",
    icon: Instagram,
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const errors = {
    name: form.name.trim().length === 0,
    email: !/^\S+@\S+\.\S+$/.test(form.email),
    subject: form.subject.trim().length === 0,
    message: form.message.trim().length < 10,
  };
  const hasErrors = Object.values(errors).some(Boolean);
  const [touched, setTouched] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (hasErrors) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm(initialForm);
      setTouched(false);
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <section id="contact" className="py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            title="Contact"
            description="Have a project in mind, or just want to say hello?"
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <Reveal>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3.5 text-ink-dim hover:text-ink transition-colors focus-ring"
                >
                  <link.icon size={17} className="text-accent-light shrink-0" />
                  <span className="text-sm truncate">{link.label}</span>
                </a>
              ))}
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 text-xs text-ink-faint hover:text-ink transition-colors pl-1 focus-ring"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                {copied ? "Email copied" : "Copy email address"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-ink-dim mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-sm text-ink focus-ring focus:border-accent-light"
                  />
                  {touched && errors.name && (
                    <p className="text-xs text-red-400 mt-1">Please enter your name.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-ink-dim mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-sm text-ink focus-ring focus:border-accent-light"
                  />
                  {touched && errors.email && (
                    <p className="text-xs text-red-400 mt-1">Enter a valid email address.</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-ink-dim mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-sm text-ink focus-ring focus:border-accent-light"
                />
                {touched && errors.subject && (
                  <p className="text-xs text-red-400 mt-1">Please add a subject.</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-ink-dim mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-sm text-ink focus-ring focus:border-accent-light resize-none"
                />
                {touched && errors.message && (
                  <p className="text-xs text-red-400 mt-1">
                    Message should be at least 10 characters.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-light disabled:opacity-60 text-white font-medium transition-colors focus-ring"
              >
                <Send size={16} />
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400">
                  Message sent — thanks for reaching out, I'll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Try again, or email me directly at {siteConfig.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

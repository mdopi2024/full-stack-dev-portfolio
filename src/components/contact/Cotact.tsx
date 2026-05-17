"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Mail, MapPin, Phone, Send, User,
    Building2, MessageSquare,
} from "lucide-react";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { handleSendMessage } from "@/utils/sendEmail";

// ─── constants ────────────────────────────────────────────────────────────────
const EMPTY = { from_name: "", from_email: "", phone: "", company: "", message: "" };

const SOCIALS = [
    { icon: FiGithub, href: "https://github.com/mdopi2024", label: "GitHub" },
    { icon: FiFacebook, href: "https://www.facebook.com/md.opi.185576", label: "Facebook" },
    // { icon: FiLinkedin, href: "https://linkedin.com/in/mdopi", label: "LinkedIn" },
    // { icon: FiTwitter, href: "https://twitter.com/mdopi", label: "Twitter" },
];

const INFO = [
    { icon: Mail, label: "Email", value: "opikorim86@gmail.com", href: "mailto:opikorim86@gmail.com" },
    { icon: Phone, label: "Phone", value: "+880 1910-277586", href: "tel:+8801910277586" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: null },
];

// ─── stagger helper ───────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number], delay },
});

// ─────────────────────────────────────────────────────────────────────────────
export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(EMPTY);
    const formRef = useRef<HTMLDivElement>(null);
    const inView = useInView(formRef, { once: true, margin: "-80px" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        try {
            await handleSendMessage(e);
            setForm(EMPTY);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 text-white overflow-hidden">

            {/* ── Page header ── */}
            <section className="max-w-4xl mx-auto text-center mb-20">
                <motion.p {...fadeUp(0.1)} className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(34,211,238,0.5)" }}>
                    ◈ Contact
                </motion.p>

                <motion.h1
                    {...fadeUp(0.2)}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6"
                >
                    Let&apos;s Build Something{" "}
                    <span
                        className="text-transparent bg-clip-text block sm:inline"
                        style={{ backgroundImage: "linear-gradient(135deg, #22d3ee 0%, #38bdf8 50%, #818cf8 100%)" }}
                    >
                        Remarkable
                    </span>
                </motion.h1>

                <motion.p {...fadeUp(0.3)} className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
                    Have a project, idea, or opportunity? I&apos;d love to hear from you.
                    Fill in the form or reach out directly — I respond within 24 hours.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="h-px max-w-xs mx-auto mt-8 origin-left"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)" }}
                />
            </section>

            {/* ── Main content ── */}
            <div className="max-w-5xl mx-auto grid lg:grid-cols-[380px_1fr] gap-10 items-start">

                {/* ── LEFT PANEL ── */}
                <motion.aside
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col gap-6"
                >
                    {/* Availability badge */}
                    <div
                        className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full text-xs font-mono"
                        style={{
                            background: "rgba(34,211,238,0.06)",
                            border: "1px solid rgba(34,211,238,0.18)",
                            color: "#22d3ee",
                        }}
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                        Available for work
                    </div>

                    {/* Info card */}
                    <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                            background: "rgba(10,22,44,0.6)",
                            border: "1px solid rgba(34,211,238,0.1)",
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        {/* Card top accent */}
                        <div className="h-[1.5px]" style={{ background: "linear-gradient(90deg, #22d3ee, #38bdf8, transparent)" }} />

                        <div className="p-6 flex flex-col gap-5">
                            <div>
                                <h2 className="text-lg font-bold text-slate-100 mb-1">Get in touch</h2>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Open for freelance, full-time, and collaboration opportunities.
                                </p>
                            </div>

                            {/* Contact info rows */}
                            <div className="flex flex-col gap-4">
                                {INFO.map(({ icon: Icon, label, value, href }) => (
                                    <div key={label} className="flex items-center gap-3 group">
                                        <div
                                            className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                                            style={{
                                                background: "rgba(34,211,238,0.07)",
                                                border: "1px solid rgba(34,211,238,0.14)",
                                                color: "#22d3ee",
                                            }}
                                        >
                                            <Icon size={15} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-mono uppercase tracking-[0.2em] mb-0.5" style={{ color: "rgba(34,211,238,0.4)" }}>
                                                {label}
                                            </p>
                                            {href ? (
                                                <a href={href} className="text-slate-300 text-sm font-medium hover:text-cyan-300 transition-colors duration-200 no-underline">
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-slate-300 text-sm font-medium">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="h-px" style={{ background: "rgba(34,211,238,0.07)" }} />

                            {/* Socials */}
                            <div className="flex gap-3">
                                {SOCIALS.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-all duration-200 hover:scale-110"
                                        style={{
                                            background: "rgba(10,22,44,0.8)",
                                            border: "1px solid rgba(34,211,238,0.1)",
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.3)";
                                            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(34,211,238,0.15)";
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.1)";
                                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                        }}
                                    >
                                        <Icon size={15} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Response time card */}
                    <div
                        className="rounded-2xl p-5 flex items-center gap-4"
                        style={{
                            background: "rgba(34,211,238,0.04)",
                            border: "1px solid rgba(34,211,238,0.08)",
                        }}
                    >
                        <div
                            className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
                            style={{ background: "rgba(34,211,238,0.08)" }}
                        >
                            ⚡
                        </div>
                        <div>
                            <p className="text-slate-200 text-sm font-semibold">Fast response</p>
                            <p className="text-slate-500 text-xs">Usually within 24 hours</p>
                        </div>
                    </div>
                </motion.aside>

                {/* ── RIGHT — Form ── */}
                <div ref={formRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="rounded-2xl overflow-hidden"
                        style={{
                            background: "rgba(10,22,44,0.65)",
                            border: "1px solid rgba(34,211,238,0.11)",
                            backdropFilter: "blur(14px)",
                            boxShadow: "0 24px 64px -16px rgba(0,0,0,0.5)",
                        }}
                    >
                        {/* Rainbow top bar */}
                        <div className="h-[1.5px]" style={{ background: "linear-gradient(90deg, #22d3ee, #38bdf8, #818cf8)" }} />

                        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">

                            {/* Row 1: Name + Email */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <FormField label="Full Name" icon={<User size={13} />} name="from_name" placeholder="Md Opi Korim" value={form.from_name} onChange={handleChange} required />
                                <FormField label="Email Address" icon={<Mail size={13} />} name="from_email" placeholder="you@example.com" value={form.from_email} onChange={handleChange} required type="email" />
                            </div>

                            {/* Row 2: Phone + Company */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <FormField label="Phone" icon={<Phone size={13} />} name="phone" placeholder="+880 1234-567890" value={form.phone} onChange={handleChange} />
                                <FormField label="Company" icon={<Building2 size={13} />} name="company" placeholder="Your company" value={form.company} onChange={handleChange} />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-slate-500 flex items-center gap-1.5">
                                    <MessageSquare size={11} style={{ color: "rgba(34,211,238,0.5)" }} />
                                    Message
                                </label>
                                <div
                                    className="px-4 py-3 rounded-xl transition-all duration-200 focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)] focus-within:border-cyan-500/20"
                                    style={{
                                        background: "rgba(2,12,27,0.55)",
                                        border: "1px solid rgba(34,211,238,0.09)",
                                    }}
                                >
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me about your project, idea, or opportunity..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent text-slate-200 outline-none resize-none text-sm placeholder:text-slate-600 leading-relaxed"
                                    />
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                                By submitting this form, you agree that I may contact you regarding your inquiry.
                                Your information will never be shared with third parties.
                            </p>

                            {/* Submit button */}
                            <motion.button
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="relative w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 55%, #818cf8 100%)",
                                    color: "#fff",
                                    boxShadow: "0 0 28px rgba(6,182,212,0.28)",
                                    letterSpacing: "0.06em",
                                }}
                                onMouseEnter={e =>
                                    !loading && ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(6,182,212,0.48)")
                                }
                                onMouseLeave={e =>
                                    ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(6,182,212,0.28)")
                                }
                            >
                                {/* Shimmer */}
                                <span className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-[-15deg] bg-white/10 transition-transform duration-700 group-hover:translate-x-[200%]" />

                                {loading ? (
                                    <>
                                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        Sending your message…
                                    </>
                                ) : (
                                    <>
                                        <Send size={14} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

// ─── FormField ────────────────────────────────────────────────────────────────
function FormField({
    label, icon, name, placeholder, type = "text", value, onChange, required,
}: {
    label: string; icon: React.ReactNode; name: string; placeholder: string;
    type?: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-slate-500 flex items-center gap-1.5">
                <span style={{ color: "rgba(34,211,238,0.45)" }}>{icon}</span>
                {label}
            </label>
            <div
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)] focus-within:border-cyan-500/20"
                style={{
                    background: "rgba(2,12,27,0.55)",
                    border: "1px solid rgba(34,211,238,0.09)",
                }}
            >
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="w-full bg-transparent text-slate-200 text-sm outline-none placeholder:text-slate-600"
                />
            </div>
        </div>
    );
}
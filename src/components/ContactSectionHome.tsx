"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User, Building2, MessageSquare } from "lucide-react";
import { handleSendMessage } from "@/utils/sendEmail";

const EMPTY = {
    from_name: "",
    from_email: "",
    phone: "",
    company: "",
    message: "",
};

export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(EMPTY);

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
        <section id="contactSection" className="relative w-full  pb-16 sm:px-6 text-white overflow-hidden">
            <div className="relative max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-mono text-[10px] tracking-[0.4em] uppercase"
                        style={{ color: "rgba(34,211,238,0.5)" }}
                    >
                        ◈ Contact
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        Let&apos;s Work{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Together
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-sm max-w-md leading-relaxed"
                    >
                        Send me a message and I&apos;ll reply as soon as possible.
                        Open for freelance work and collaborations.
                    </motion.p>

                    <div
                        className="h-px w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

                    {/* LEFT — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-8 pl-5 md:pl-0 lg:pl-0  "
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-3">
                                Get in touch today
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                I&apos;m always open to discussing new projects, creative ideas,
                                or opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Mail size={16} />, text: "opikorim86@gmail.com" },
                                { icon: <Phone size={16} />, text: "+880 1910-277586" },
                                { icon: <MapPin size={16} />, text: "Dhaka, Bangladesh" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div
                                        className="shrink-0 p-2 rounded-lg"
                                        style={{
                                            background: "rgba(34,211,238,0.07)",
                                            border: "1px solid rgba(34,211,238,0.15)",
                                            color: "#22d3ee",
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <span className="text-slate-300 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Thin accent */}
                        <div
                            className="h-px w-16"
                            style={{ background: "linear-gradient(90deg, rgba(34,211,238,0.4), transparent)" }}
                        />
                    </motion.div>

                    {/* RIGHT — Form card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl overflow-hidden"
                        style={{
                            background: "rgba(10,22,44,0.7)",
                            border: "1px solid rgba(34,211,238,0.12)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 24px 64px -16px rgba(0,0,0,0.5)",
                        }}
                    >
                        {/* Top gradient line */}
                        <div
                            className="h-[1.5px] w-full"
                            style={{ background: "linear-gradient(90deg, #22d3ee, #38bdf8, #818cf8)" }}
                        />

                        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5">

                            {/* Name + Email */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <LabeledField label="Name" icon={<User size={14} />} name="from_name" placeholder="John Carter" value={form.from_name} onChange={handleChange} required />
                                <LabeledField label="Email" icon={<Mail size={14} />} name="from_email" placeholder="example@email.com" value={form.from_email} onChange={handleChange} required type="email" />
                            </div>

                            {/* Phone + Company */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <LabeledField label="Phone" icon={<Phone size={14} />} name="phone" placeholder="(123) 456 - 789" value={form.phone} onChange={handleChange} />
                                <LabeledField label="Company" icon={<Building2 size={14} />} name="company" placeholder="Facebook" value={form.company} onChange={handleChange} />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-slate-400">
                                    Message
                                </label>
                                <div
                                    className="flex gap-3 px-4 py-3 rounded-xl transition-all duration-200 focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)]"
                                    style={{
                                        background: "rgba(2,12,27,0.6)",
                                        border: "1px solid rgba(34,211,238,0.1)",
                                    }}
                                >
                                    <MessageSquare size={14} className="shrink-0 mt-0.5" style={{ color: "rgba(34,211,238,0.5)" }} />
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Please type your message here..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent text-slate-200 outline-none resize-none text-sm placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <motion.button
                                whileHover={{ scale: 1.01, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #818cf8 100%)",
                                    color: "#fff",
                                    boxShadow: "0 0 28px rgba(6,182,212,0.3)",
                                    letterSpacing: "0.12em",
                                }}
                                onMouseEnter={e =>
                                    !loading && ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(6,182,212,0.5)")
                                }
                                onMouseLeave={e =>
                                    ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(6,182,212,0.3)")
                                }
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send message <Send size={15} />
                                    </>
                                )}
                            </motion.button>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── LabeledField ─────────────────────────────────────────────────────────────
function LabeledField({
    label, icon, name, placeholder, type = "text", value, onChange, required,
}: {
    label: string; icon: React.ReactNode; name: string; placeholder: string;
    type?: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-slate-400">
                {label}
            </label>
            <div
                className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl transition-all duration-200 focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.2)]"
                style={{
                    background: "rgba(2,12,27,0.6)",
                    border: "1px solid rgba(34,211,238,0.1)",
                }}
            >
                <span style={{ color: "rgba(34,211,238,0.45)", flexShrink: 0 }}>{icon}</span>
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
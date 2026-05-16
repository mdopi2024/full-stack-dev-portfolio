"use client";

import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Send,
    Sparkles,
    User,
    Building2,
    Phone,
    MessageSquare,
} from "lucide-react";

import { handleSendMessage } from "@/utils/sendEmail";

export default function ContactSection() {
    return (
        <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6">

            {/* Background */}
            <div className="absolute inset-0 -z-20 bg-[#020617]" />

            {/* Glow effects */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute left-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle, rgba(34,211,238,0.18), transparent 70%)",
                }}
            />

            <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-[-120px] right-[-120px] h-[450px] w-[450px] rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)",
                }}
            />

            <div className="relative mx-auto max-w-5xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/10 mb-4">
                        <Sparkles size={14} className="text-cyan-300" />
                        <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                            Contact
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white">
                        Let’s Work Together
                    </h2>

                    <p className="text-slate-400 mt-4">
                        Send me a message and I’ll reply as soon as possible.
                    </p>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-cyan-500/10 bg-[#0b1220] overflow-hidden shadow-2xl"
                >
                    <div className="grid lg:grid-cols-2">

                        {/* LEFT SIDE */}
                        <div className="p-10 border-r border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Get In Touch
                            </h3>

                            <p className="text-slate-400 mb-10">
                                I’m open for freelance work and collaborations.
                            </p>

                            <div className="space-y-6">

                                <Info
                                    icon={<Mail size={18} />}
                                    title="Email"
                                    value="yourmail@gmail.com"
                                />

                                <Info
                                    icon={<MapPin size={18} />}
                                    title="Location"
                                    value="Dhaka, Bangladesh"
                                />

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="p-10">

                            <form
                                onSubmit={handleSendMessage}
                                className="space-y-5"
                            >

                                {/* NAME + EMAIL (FIXED) */}
                                <div className="grid md:grid-cols-2 gap-4">

                                    <Input
                                        icon={<User size={16} />}
                                        name="from_name"
                                        placeholder="Your Name"
                                    />

                                    <Input
                                        icon={<Mail size={16} />}
                                        name="from_email"
                                        type="email"
                                        placeholder="Your Email"
                                    />

                                </div>

                                {/* PHONE + COMPANY */}
                                <div className="grid md:grid-cols-2 gap-4">

                                    <Input
                                        icon={<Phone size={16} />}
                                        name="phone"
                                        placeholder="Phone"
                                    />

                                    <Input
                                        icon={<Building2 size={16} />}
                                        name="company"
                                        placeholder="Company"
                                    />

                                </div>

                                {/* MESSAGE */}
                                <div className="flex gap-3 p-4 rounded-2xl bg-[#0f172a] border border-cyan-500/10">

                                    <MessageSquare size={18} className="text-cyan-300 mt-1" />

                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Your message..."
                                        className="w-full bg-transparent text-white outline-none resize-none placeholder:text-slate-500"
                                    />
                                </div>

                                {/* BUTTON */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={16} />
                                </motion.button>

                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* INFO COMPONENT */
function Info({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 text-cyan-300">
                {icon}
            </div>

            <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                    {title}
                </p>
                <p className="text-white text-sm">{value}</p>
            </div>
        </div>
    );
}

/* INPUT COMPONENT */
function Input({
    icon,
    name,
    placeholder,
    type = "text",
}: {
    icon: React.ReactNode;
    name: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0f172a] border border-cyan-500/10">
            <div className="text-cyan-300">{icon}</div>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
            />
        </div>
    );
}
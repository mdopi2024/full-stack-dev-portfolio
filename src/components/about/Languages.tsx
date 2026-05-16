"use client";

import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";

const languages = [
    { name: "Bengali", level: "Native", percent: 100 },
    { name: "English", level: "Comfortable", percent: 70 },
    { name: "Hindi", level: "Conversational", percent: 90 },
];

export default function Languages() {
    return (
        <section
            id="languages"
            className="relative w-full py-24 px-4 sm:px-6 text-white overflow-hidden"
        >
            <div className="relative max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-mono text-[10px] tracking-[0.4em] uppercase"
                        style={{ color: "rgba(34,211,238,0.5)" }}
                    >
                        ◈ Communication
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3"
                    >
                        <FaLanguage size={30} style={{ color: "#22d3ee", flexShrink: 0 }} />
                        My{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Languages
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-sm max-w-md leading-relaxed"
                    >
                        Languages I can communicate in and use for daily interaction and development work.
                    </motion.p>

                    <div
                        className="h-px w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {languages.map((lang, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -4, scale: 1.015 }}
                            className="relative rounded-2xl p-6 overflow-hidden group cursor-default"
                            style={{
                                background: "rgba(10,22,44,0.6)",
                                border: "1px solid rgba(34,211,238,0.08)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.4)",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.22)";
                                (e.currentTarget as HTMLElement).style.boxShadow =
                                    "0 0 0 1px rgba(34,211,238,0.1), 0 20px 48px -12px rgba(6,182,212,0.18)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.08)";
                                (e.currentTarget as HTMLElement).style.boxShadow =
                                    "0 8px 32px -8px rgba(0,0,0,0.4)";
                            }}
                        >
                            {/* Corner glow */}
                            <div
                                className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500"
                                style={{ background: "#22d3ee" }}
                            />

                            {/* Sweeping top accent */}
                            <div
                                className="absolute top-0 left-0 h-[1.5px] transition-all duration-500 ease-out"
                                style={{
                                    width: "28%",
                                    background: "linear-gradient(90deg, #22d3ee, #38bdf8, transparent)",
                                }}
                            />

                            {/* Language name */}
                            <h3 className="text-base font-semibold text-slate-200">
                                {lang.name}
                            </h3>

                            {/* Level badge */}
                            <span
                                className="inline-block mt-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full tracking-wider"
                                style={{
                                    background: "rgba(34,211,238,0.07)",
                                    border: "1px solid rgba(34,211,238,0.15)",
                                    color: "rgba(34,211,238,0.8)",
                                }}
                            >
                                {lang.level}
                            </span>

                            {/* Progress bar */}
                            <div
                                className="mt-5 w-full h-1.5 rounded-full overflow-hidden"
                                style={{ background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.08)" }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percent}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.15 }}
                                    className="h-full rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #22d3ee, #38bdf8)",
                                        boxShadow: "0 0 8px rgba(34,211,238,0.4)",
                                    }}
                                />
                            </div>

                            {/* Percent */}
                            <p
                                className="mt-2.5 text-right text-xs font-mono font-bold"
                                style={{ color: "#22d3ee" }}
                            >
                                {lang.percent}%
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaFlask, FaPalette } from "react-icons/fa";

const education = [
    {
        title: "Secondary School Certificate (SSC)",
        institute: "Al-Ihsan High School",
        year: "2023",
        group: "Science",
        result: "GPA 4.11",
        icon: FaFlask,
        color: "#22d3ee",
    },
    {
        title: "Higher Secondary Certificate (HSC)",
        institute: "Kendua Govt College",
        year: "2025",
        group: "Arts",
        result: "GPA 3.83",
        icon: FaPalette,
        color: "#38bdf8",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative w-full pt-24 px-4 sm:px-6 text-white overflow-hidden"
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
                        ◈ Background
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3"
                    >
                        <FaGraduationCap
                            size={32}
                            style={{ color: "#22d3ee", flexShrink: 0 }}
                        />
                        My{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Education
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-sm max-w-md leading-relaxed"
                    >
                        My academic journey and learning background.
                    </motion.p>

                    <div
                        className="h-px w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {education.map((item, i) => {
                        const Icon = item.icon;
                        return (
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
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px rgba(34,211,238,0.1), 0 20px 48px -12px rgba(6,182,212,0.18)`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.08)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px -8px rgba(0,0,0,0.4)";
                                }}
                            >
                                {/* Corner glow */}
                                <div
                                    className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500"
                                    style={{ background: item.color }}
                                />

                                {/* Top row */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="shrink-0 p-2.5 rounded-xl"
                                            style={{
                                                background: "rgba(10,22,44,0.8)",
                                                border: "1px solid rgba(34,211,238,0.12)",
                                                color: item.color,
                                            }}
                                        >
                                            <Icon size={18} />
                                        </div>
                                        <h3 className="text-sm md:text-base font-semibold text-slate-200 leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <span
                                        className="shrink-0 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full"
                                        style={{
                                            background: "rgba(34,211,238,0.07)",
                                            border: "1px solid rgba(34,211,238,0.18)",
                                            color: item.color,
                                        }}
                                    >
                                        {item.year}
                                    </span>
                                </div>

                                {/* Details */}
                                <div className="mt-5 space-y-3 text-sm">
                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1"
                                            style={{ color: "rgba(34,211,238,0.4)" }}>
                                            Institute
                                        </p>
                                        <p className="text-slate-200 font-medium">{item.institute}</p>
                                    </div>

                                    <div className="flex justify-between gap-4">
                                        <div>
                                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1"
                                                style={{ color: "rgba(34,211,238,0.4)" }}>
                                                Group
                                            </p>
                                            <p className="text-slate-300">{item.group}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1"
                                                style={{ color: "rgba(34,211,238,0.4)" }}>
                                                Result
                                            </p>
                                            <p className="font-bold text-transparent bg-clip-text"
                                                style={{ backgroundImage: `linear-gradient(135deg, ${item.color}, #818cf8)` }}>
                                                {item.result}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated bottom line */}
                                <div
                                    className="mt-5 h-[1.5px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${item.color}, transparent)`,
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
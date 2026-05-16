"use client";

import { motion, type Variants } from "framer-motion";

/* ---------------- ICONS ---------------- */
import {
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiDocker,
    SiGo,
    SiMongodb,
    SiPostgresql,
} from "react-icons/si";

/* ---------------- SKILLS ---------------- */
const skills = [
    { name: "HTML", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", icon: SiCss, color: "#1572b6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#aaaaaa" },
    { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
];

/* ---------------- ANIMATION ---------------- */
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.06 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
    },
};

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="relative w-full py-24 px-4 sm:px-6 overflow-hidden text-white"
            style={{
                background:
                    "linear-gradient(160deg, #020c1b 0%, #041525 30%, #030e1f 60%, #020c1b 100%)",
            }}
        >
            {/* Ambient radial glows — matches ProjectShowcase */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 65%)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px]"
                    style={{
                        background:
                            "radial-gradient(ellipse at bottom right, rgba(14,165,233,0.06) 0%, transparent 65%)",
                    }}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px]"
                    style={{
                        background:
                            "radial-gradient(ellipse at left, rgba(6,182,212,0.04) 0%, transparent 65%)",
                    }}
                />
            </div>

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
                        ◈ Expertise
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        My{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Skills
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-sm max-w-lg leading-relaxed"
                    >
                        Technologies I use to build modern, scalable, and high-performance
                        web applications — from UI to infrastructure.
                    </motion.p>

                    <div
                        className="h-px w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Skills grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                    {skills.map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={item}
                                whileHover={{
                                    scale: 1.06,
                                    boxShadow: "0 0 22px rgba(34,211,238,0.18)",
                                }}
                                className="flex items-center justify-center gap-2.5 cursor-default rounded-xl px-4 py-3 text-sm text-slate-400 hover:text-cyan-300 transition-colors duration-200"
                                style={{
                                    background: "rgba(10,22,44,0.6)",
                                    border: "1px solid rgba(34,211,238,0.08)",
                                    backdropFilter: "blur(6px)",
                                }}
                            >
                                <Icon size={18} style={{ color: skill.color, flexShrink: 0 }} />
                                <span className="font-mono text-xs font-medium tracking-wide">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
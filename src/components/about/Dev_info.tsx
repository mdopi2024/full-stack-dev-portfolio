"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPrisma,
    SiMongodb, SiPostgresql, SiDocker, SiGo, SiTypescript,
} from "react-icons/si";

const techStack = [
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#aaaaaa" },
    { name: "Prisma", icon: SiPrisma, color: "#818cf8" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
];

export default function DevInfo() {
    return (
        <section
            id="dev-info"
            className="relative w-full pt-16 px-4 sm:px-6 text-white overflow-hidden"
        >
            <div className="relative max-w-6xl mx-auto">

                {/* Section label */}
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-mono text-[10px] tracking-[0.4em] uppercase"
                        style={{ color: "rgba(34,211,238,0.5)" }}
                    >
                        ◈ My Story
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        Developer{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Journey
                        </span>
                    </motion.h2>

                    <div
                        className="h-px w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Two-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                    {/* LEFT — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px]">

                            {/* Ambient glow */}
                            <div
                                className="pulse-slow absolute inset-0 rounded-full blur-2xl"
                                style={{
                                    background:
                                        "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
                                }}
                            />

                            {/* Rotating dashed ring */}
                            <div
                                className="spin-slow absolute inset-[-10px] rounded-full"
                                style={{ border: "1.5px dashed rgba(34,211,238,0.2)" }}
                            />

                            {/* Outer faint ring */}
                            <div
                                className="spin-rev absolute inset-[-26px] rounded-full"
                                style={{ border: "0.5px solid rgba(34,211,238,0.06)" }}
                            />

                            {/* Image */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full rounded-full overflow-hidden"
                                style={{
                                    border: "1.5px solid rgba(34,211,238,0.22)",
                                    boxShadow:
                                        "0 0 40px rgba(6,182,212,0.15), 0 0 0 1px rgba(34,211,238,0.08)",
                                }}
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] z-10"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #22d3ee, #38bdf8, transparent)",
                                    }}
                                />
                                <Image
                                    src="/opi.png"
                                    alt="Developer Image"
                                    fill
                                    priority
                                    className="object-cover object-right"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(34,211,238,0.06) 0%, transparent 60%)",
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                            I am a{" "}
                            <span
                                className="font-semibold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #22d3ee, #38bdf8)",
                                }}
                            >
                                Full Stack Developer
                            </span>{" "}
                            focused on building modern, scalable, and high-performance web
                            applications. I enjoy working across both frontend and backend systems.
                        </p>

                        <p className="text-slate-400 leading-relaxed text-sm">
                            My learning journey includes APIs, authentication systems, database
                            design, and building real-world scalable applications.
                        </p>

                        <p className="text-slate-400 leading-relaxed text-sm">
                            I continuously improve by building projects and exploring modern
                            technologies — always looking for the next challenge.
                        </p>

                        <div
                            className="h-px w-14 rounded-full"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(34,211,238,0.4), transparent)",
                            }}
                        />

                        {/* Tech stack */}
                        <div>
                            <h3
                                className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
                                style={{ color: "rgba(34,211,238,0.5)" }}
                            >
                                ◈ Tech Stack
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, i) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-cyan-300 transition-all duration-200 hover:scale-[1.05] cursor-default"
                                            style={{
                                                background: "rgba(10,22,44,0.6)",
                                                border: "1px solid rgba(34,211,238,0.08)",
                                                backdropFilter: "blur(6px)",
                                            }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.25)";
                                                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(34,211,238,0.1)";
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.08)";
                                                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                            }}
                                        >
                                            <Icon size={15} style={{ color: tech.color, flexShrink: 0 }} />
                                            <span className="font-mono font-medium">{tech.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
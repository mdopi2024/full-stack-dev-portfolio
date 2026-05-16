"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="relative w-full py-24 px-4 sm:px-6 text-white overflow-hidden"
            style={{
                background:
                    "linear-gradient(160deg, #020c1b 0%, #041525 30%, #030e1f 60%, #020c1b 100%)",
            }}
        >
            {/* Ambient radial glows — matches ProjectShowcase & SkillsSection */}
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

                {/* Header — centered, matches other sections */}
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-mono text-[10px] tracking-[0.4em] uppercase"
                        style={{ color: "rgba(34,211,238,0.5)" }}
                    >
                        ◈ Introduction
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        About{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Me
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

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 items-center">

                    {/* Left — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center md:justify-start"
                    >
                        <div
                            className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden"
                            style={{
                                border: "1px solid rgba(34,211,238,0.15)",
                                boxShadow:
                                    "0 0 40px rgba(6,182,212,0.08), 0 0 0 1px rgba(34,211,238,0.05)",
                            }}
                        >
                            {/* Subtle gradient overlay */}
                            <div
                                className="absolute inset-0 z-10"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(34,211,238,0.08) 0%, transparent 60%)",
                                }}
                            />
                            {/* Top accent line */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[1.5px] z-20"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #22d3ee, #38bdf8, transparent)",
                                }}
                            />
                            <Image
                                src="/opi2.jpg"
                                alt="About Me"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                    >
                        <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                            I am a{" "}
                            <span
                                className="font-semibold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, #22d3ee, #38bdf8)",
                                }}
                            >
                                Full Stack Developer
                            </span>{" "}
                            specialising in building modern, scalable, and high-performance
                            web applications. I work across both frontend and backend to
                            deliver complete end-to-end solutions.
                        </p>

                        <p className="text-slate-400 leading-relaxed text-sm">
                            On the frontend, I build responsive and interactive user interfaces
                            using{" "}
                            <span className="text-cyan-400 font-medium">React</span> and{" "}
                            <span className="text-cyan-400 font-medium">Next.js</span>. On the
                            backend, I develop secure and efficient APIs using Node.js and
                            modern backend practices.
                        </p>

                        <p className="text-slate-400 leading-relaxed text-sm">
                            I work with databases and ORMs like{" "}
                            <span className="text-cyan-400 font-medium">Prisma</span>,{" "}
                            <span className="text-cyan-400 font-medium">MongoDB</span>, and{" "}
                            <span className="text-cyan-400 font-medium">PostgreSQL</span>, as
                            well as systems-level work in{" "}
                            <span className="text-cyan-400 font-medium">Golang</span> — ensuring
                            clean data flow and production-ready architecture.
                        </p>

                        <p className="text-slate-400 leading-relaxed text-sm">
                            Currently, I am continuously improving my skills in system design,
                            backend scalability, and modern full-stack development practices.
                        </p>

                        {/* Thin accent divider */}
                        <div
                            className="h-px w-16 rounded-full"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(34,211,238,0.4), transparent)",
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
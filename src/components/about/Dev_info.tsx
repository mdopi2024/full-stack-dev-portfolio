"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Icons */
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiGo,
    SiTypescript,
} from "react-icons/si";

const techStack = [
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#aaaaaa" },
    { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
];

export default function DevInfo() {
    return (
        <section
            id="dev-info"
            className="relative w-full py-16 bg-[#0d1117] text-white overflow-hidden"
        >
            {/* background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center md:justify-start"
                >
                    <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px]">

                        {/* glow */}
                        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl animate-pulse-slow" />

                        {/* rotating border */}
                        <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin-slow" />

                        {/* IMAGE */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                        >
                            <Image
                                src="/opi.png"
                                alt="Developer Image"
                                fill
                                priority
                                className="object-cover object-right"
                            />

                            {/* shine overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-transparent" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300">
                        Developer Journey
                    </h2>

                    <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
                        I am a <span className="text-cyan-300 font-medium">Full Stack Developer</span>{" "}
                        focused on building modern, scalable and high-performance web applications.
                        I enjoy working across both frontend and backend systems.
                    </p>

                    <p className="mt-3 text-gray-400 leading-relaxed">
                        My learning journey includes APIs, authentication systems, database design,
                        and building real-world scalable applications.
                    </p>

                    <p className="mt-3 text-gray-400 leading-relaxed">
                        I continuously improve by building projects and exploring modern technologies.
                    </p>

                    {/* TECH STACK */}
                    <div className="mt-8">
                        <h3 className="text-cyan-300 font-semibold mb-4">
                            Tech Stack I Work With
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {techStack.map((tech, i) => {
                                const Icon = tech.icon;

                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#161b22] border border-cyan-500/10 text-sm text-gray-300 hover:text-cyan-300 hover:scale-[1.05] transition-all duration-300"
                                    >
                                        <Icon size={18} style={{ color: tech.color }} />
                                        {tech.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* GLOBAL STYLES */}
            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 18s linear infinite;
                }

                .animate-pulse-slow {
                    animation: pulse 4s ease-in-out infinite;
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.9;
                        transform: scale(1.08);
                    }
                }
            `}</style>
        </section>
    );
}
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

/* ---------------- ANIMATION (FIXED) ---------------- */
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.8, 0.25, 1], // ✅ FIXED TYPE ERROR
        },
    },
};

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="relative w-full py-16 bg-[#0d1117] text-white overflow-hidden"
        >
            {/* glow background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">

                {/* title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-semibold text-center text-cyan-300"
                >
                    My Skills
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-400 mt-3 max-w-xl mx-auto"
                >
                    Technologies I use to build modern, scalable and high-performance web applications.
                </motion.p>

                {/* skills grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-12  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {skills.map((skill, i) => {
                        const Icon = skill.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={item}
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: "0px 0px 25px rgba(34,211,238,0.25)",
                                }}
                                className="flex  items-center justify-center gap-3 cursor-default rounded-xl border border-cyan-500/10 bg-[#161b22] px-4 py-2.5 text-sm text-gray-300 hover:text-cyan-300 transition text-center"
                            >
                                <Icon size={20} style={{ color: skill.color }} />
                                <span>{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
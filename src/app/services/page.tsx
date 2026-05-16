"use client";

import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiDocker, SiPrisma,
} from "react-icons/si";
import { FaCode, FaDatabase, FaShieldAlt, FaRocket, FaCloud } from "react-icons/fa";

const services = [
    {
        title: "Modern Frontend Development",
        desc: "I build fast, responsive and interactive UI using React.js, Next.js and Tailwind CSS with clean component-based architecture.",
        icon: SiReact,
        color: "#61dafb",
        tags: ["React", "Next.js", "Tailwind", "UI/UX"],
    },
    {
        title: "Full Stack Web Development",
        desc: "I develop complete end-to-end applications with frontend, backend, authentication, APIs and database integration using modern full stack architecture.",
        icon: FaCode,
        color: "#22d3ee",
        tags: ["Full Stack", "Next.js", "Node.js", "APIs"],
    },
    {
        title: "Backend & API Development",
        desc: "I create scalable and secure REST APIs using Node.js, Express and Go with clean architecture and proper error handling.",
        icon: SiNodedotjs,
        color: "#339933",
        tags: ["Node.js", "Express", "Go", "REST APIs"],
    },
    {
        title: "Database Design & ORM",
        desc: "I design optimized database structures using MongoDB, PostgreSQL and Prisma ORM for high performance applications.",
        icon: FaDatabase,
        color: "#38bdf8",
        tags: ["MongoDB", "PostgreSQL", "Prisma"],
    },
    {
        title: "Authentication & Security",
        desc: "I implement secure authentication systems including JWT, role-based access control and protected APIs.",
        icon: FaShieldAlt,
        color: "#818cf8",
        tags: ["JWT", "Security", "Auth", "RBAC"],
    },
    {
        title: "Deployment & DevOps Basics",
        desc: "I deploy full stack applications using Docker, Vercel and cloud platforms with production-ready configuration.",
        icon: SiDocker,
        color: "#2496ed",
        tags: ["Docker", "Vercel", "Deployment"],
    },
    {
        title: "Performance & Optimization",
        desc: "I optimize applications for speed, SEO and scalability using modern best practices and clean architecture.",
        icon: FaRocket,
        color: "#22d3ee",
        tags: ["SEO", "Performance", "Optimization"],
    },
    {
        title: "System Integration",
        desc: "I integrate third-party APIs and build scalable systems for real-world production applications.",
        icon: FaCloud,
        color: "#38bdf8",
        tags: ["APIs", "Integration", "System Design"],
    },
];

export default function ServicesPage() {
    return (
        <section className="relative w-full py-24 px-4 sm:px-6 text-white overflow-hidden">

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
                        ◈ Services
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        What I Can{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Do
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-sm max-w-xl leading-relaxed"
                    >
                        A full stack developer specialising in modern web technologies
                        including Next.js, Node.js, Go, Prisma, and scalable backend systems.
                    </motion.p>

                    <div
                        className="h-px w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                whileHover={{ y: -4 }}
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
                                        "0 0 0 1px rgba(34,211,238,0.1), 0 20px 48px -12px rgba(6,182,212,0.16)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.08)";
                                    (e.currentTarget as HTMLElement).style.boxShadow =
                                        "0 8px 32px -8px rgba(0,0,0,0.4)";
                                }}
                            >
                                {/* Corner glow */}
                                <div
                                    className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{ background: service.color }}
                                />

                                {/* Sweeping top accent */}
                                <div
                                    className="absolute top-0 left-0 h-[1.5px] w-[28%] group-hover:w-full transition-all duration-500 ease-out"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #22d3ee, #38bdf8, transparent)",
                                    }}
                                />

                                {/* Icon + title */}
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="shrink-0 p-2.5 rounded-xl mt-0.5"
                                        style={{
                                            background: "rgba(10,22,44,0.8)",
                                            border: "1px solid rgba(34,211,238,0.12)",
                                            color: service.color,
                                        }}
                                    >
                                        <Icon size={18} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-200 leading-snug pt-1">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-slate-500 text-xs leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* Tags */}
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full tracking-wider"
                                            style={{
                                                background: "rgba(34,211,238,0.06)",
                                                border: "1px solid rgba(34,211,238,0.14)",
                                                color: "#67e8f9",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom line */}
                                <div
                                    className="mt-5 h-[1.5px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${service.color}, transparent)`,
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
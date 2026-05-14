"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiPrisma,
    SiGo,
} from "react-icons/si";

import {
    FaCode,
    FaDatabase,
    FaShieldAlt,
    FaRocket,
    FaCloud,
} from "react-icons/fa";

const services = [
    {
        title: "Modern Frontend Development",
        desc: "I build fast, responsive and interactive UI using React.js, Next.js and Tailwind CSS with clean component-based architecture.",
        icon: SiReact,
        tags: ["React", "Next.js", "Tailwind", "UI/UX"],
    },
    {
        title: "Full Stack Web Development",
        desc: "I develop complete end-to-end applications with frontend, backend, authentication, APIs and database integration using modern full stack architecture.",
        icon: FaCode,
        tags: ["Full Stack", "Next.js", "Node.js", "APIs"],
    },
    {
        title: "Backend & API Development",
        desc: "I create scalable and secure REST APIs using Node.js, Express and Go with clean architecture and proper error handling.",
        icon: SiNodedotjs,
        tags: ["Node.js", "Express", "Go", "REST APIs"],
    },
    {
        title: "Database Design & ORM",
        desc: "I design optimized database structures using MongoDB, PostgreSQL and Prisma ORM for high performance applications.",
        icon: FaDatabase,
        tags: ["MongoDB", "PostgreSQL", "Prisma"],
    },
    {
        title: "Authentication & Security",
        desc: "I implement secure authentication systems including JWT, role-based access control and protected APIs.",
        icon: FaShieldAlt,
        tags: ["JWT", "Security", "Auth", "RBAC"],
    },
    {
        title: "Deployment & DevOps Basics",
        desc: "I deploy full stack applications using Docker, Vercel and cloud platforms with production-ready configuration.",
        icon: SiDocker,
        tags: ["Docker", "Vercel", "Deployment"],
    },
    {
        title: "Performance & Optimization",
        desc: "I optimize applications for speed, SEO and scalability using modern best practices and clean architecture.",
        icon: FaRocket,
        tags: ["SEO", "Performance", "Optimization"],
    },
    {
        title: "System Integration",
        desc: "I integrate third-party APIs and build scalable systems for real-world production applications.",
        icon: FaCloud,
        tags: ["APIs", "Integration", "System Design"],
    },
];

export default function ServicesPage() {
    return (
        <section className="relative w-full py-24 bg-[#0d1117] text-white overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-cyan-300">
                        What I Can Do
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        I am a full stack developer specializing in modern web technologies
                        including Next.js, Node.js, Go, Prisma, and scalable backend systems.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative bg-[#161b22] border border-cyan-500/10 rounded-2xl p-6 overflow-hidden group"
                            >
                                {/* glow */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition" />

                                {/* icon + title */}
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-[#0d1117] border border-cyan-500/20 text-cyan-300">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* description */}
                                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 rounded-md bg-[#0d1117] border border-cyan-500/10 text-cyan-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* bottom line */}
                                <div className="mt-5 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-cyan-400" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
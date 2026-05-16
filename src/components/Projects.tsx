"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    frontendRepo: string;
    backendRepo: string;
    liveDemo: string;
}

interface ProjectShowcaseProps {
    count: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const ALL_PROJECTS: Project[] = [
    {
        id: 1,
        title: "Hotel Management System",
        description:
            "A modern and scalable hotel management platform built with Next.js App Router, featuring room booking, Stripe payments, authentication, guest management, and admin dashboard functionality.",
        image: "/projects/hotel-management.png",
        tags: [
            "Next.js",
            "TypeScript",
            "Better Auth",
            "Stripe",
        ],
        frontendRepo:
            "https://github.com/mdopi2024/B6A5-CLIENT-SIDE",
        backendRepo:
            "https://github.com/mdopi2024/B6A5-backend-server",
        liveDemo:
            "https://boshonto-totel-management-frontend.vercel.app",
    },
    {
        id: 2,
        title: "LuxeBites",
        description:
            "A full-stack meal ordering platform where customers can browse meals, place orders, track deliveries, and leave reviews, while providers and admins manage menus, orders, users, and categories through role-based dashboards.",
        image: "/projects/luxebites.png",
        tags: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "JWT",
        ],
        frontendRepo:
            "https://github.com/mdopi2024/B6A4-LUXEBUTES-CLIENT",
        backendRepo:
            "https://github.com/mdopi2024/B6A4-LUXEBUTE--SERVER",
        liveDemo:
            "https://b6-a4-frontend-client.vercel.app",
    },
    {
        id: 3,
        title: "Agri-Food Corporate",
        description:
            "Corporate website for an Algerian agri-food distributor, focused on trust-building through clear structure, strong visuals, and intuitive navigation.",
        image: "/projects/agrifood.png",
        tags: ["Next.js", "Sanity CMS", "GSAP"],
        frontendRepo: "https://github.com",
        backendRepo: "https://github.com",
        liveDemo: "https://example.com",
    },
    {
        id: 4,
        title: "Real-time Analytics",
        description:
            "High-performance analytics dashboard with live data streaming, interactive charts, and role-based access control for enterprise teams.",
        image: "/projects/analytics.png",
        tags: ["Vue 3", "FastAPI", "Redis"],
        frontendRepo: "https://github.com",
        backendRepo: "https://github.com",
        liveDemo: "https://example.com",
    },
    {
        id: 5,
        title: "Social Learning App",
        description:
            "Collaborative learning platform where students share notes, join study rooms, and track progress with gamified milestones.",
        image: "/projects/learning.png",
        tags: ["React Native", "GraphQL", "Postgres"],
        frontendRepo: "https://github.com",
        backendRepo: "https://github.com",
        liveDemo: "https://example.com",
    },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ServerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
);

// ─── Fallback placeholder ─────────────────────────────────────────────────────
const ImagePlaceholder = ({ title }: { title: string }) => (
    <div
        className="w-full h-full flex flex-col items-center justify-center gap-3"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2040 100%)" }}
    >
        <div className="flex gap-1.5 opacity-30">
            {[1, 0.6, 0.3].map((op, i) => (
                <div key={i} className="w-2 h-8 rounded-full bg-cyan-400" style={{ opacity: op }} />
            ))}
        </div>
        <span className="text-cyan-400/40 text-[10px] font-mono tracking-[0.25em] uppercase">{title}</span>
    </div>
);

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative flex flex-col rounded-2xl overflow-hidden cursor-default"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
                transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                transitionDelay: `${index * 100}ms`,
                border: hovered ? "1px solid rgba(34,211,238,0.28)" : "1px solid rgba(34,211,238,0.07)",
                boxShadow: hovered
                    ? "0 0 0 1px rgba(34,211,238,0.12), 0 24px 64px -16px rgba(6,182,212,0.22), 0 0 60px -20px rgba(6,182,212,0.12)"
                    : "0 8px 32px -8px rgba(0,0,0,0.6)",
            }}
        >
            {/* Sweeping top accent */}
            <div
                className="absolute top-0 left-0 h-[1.5px] z-10 transition-all duration-500 ease-out"
                style={{
                    width: hovered ? "100%" : "28%",
                    background: "linear-gradient(90deg, #22d3ee, #38bdf8, transparent)",
                }}
            />

            {/* Image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
                {imgError ? (
                    <ImagePlaceholder title={project.title} />
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.image}
                        alt={project.title}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050c1c] via-[#050c1c]/25 to-transparent" />

                {/* Tags centered on image */}
                <div className="absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-1.5 px-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider backdrop-blur-md"
                            style={{
                                background: "rgba(5,14,32,0.85)",
                                border: "1px solid rgba(34,211,238,0.2)",
                                color: "#67e8f9",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 gap-3 text-center">
                <div className="flex flex-col gap-1.5">
                    <h3
                        className="font-semibold text-sm leading-snug transition-colors duration-300"
                        style={{ color: hovered ? "#22d3ee" : "#e2e8f0" }}
                    >
                        {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>

                {/* Thin divider */}
                <div
                    className="h-px w-10 mx-auto rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.25), transparent)" }}
                />

                {/* Buttons: repos row + demo full-width */}
                <div className="flex flex-col gap-1.5 mt-auto">
                    <div className="flex gap-1.5">
                        <a
                            href={project.frontendRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-mono font-semibold transition-all duration-200 active:scale-95 hover:brightness-125"
                            style={{
                                border: "1px solid rgba(34,211,238,0.18)",
                                color: "#67e8f9",
                                background: "rgba(6,182,212,0.06)",
                            }}
                        >
                            <GithubIcon />
                            Frontend
                        </a>
                        <a
                            href={project.backendRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-mono font-semibold transition-all duration-200 active:scale-95 hover:brightness-125"
                            style={{
                                border: "1px solid rgba(99,179,237,0.18)",
                                color: "#93c5fd",
                                background: "rgba(56,189,248,0.06)",
                            }}
                        >
                            <ServerIcon />
                            Backend
                        </a>
                    </div>

                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-200 active:scale-95 hover:brightness-110 hover:shadow-[0_0_18px_rgba(6,182,212,0.35)]"
                        style={{
                            background: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
                            color: "#020c1b",
                        }}
                    >
                        <ExternalLinkIcon />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProjectShowcase({ count }: ProjectShowcaseProps) {
    const projects = ALL_PROJECTS.slice(0, Math.min(count, ALL_PROJECTS.length));

    const gridClass =
        count === 1
            ? "grid-cols-1 max-w-xs mx-auto"
            : count === 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                : count === 3
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

    return (
        <section
            className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{
                background:
                    "linear-gradient(160deg, #020c1b 0%, #041525 30%, #030e1f 60%, #020c1b 100%)",
            }}
        >
            {/* Ambient radial glows — no grid pattern */}
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

            <div className="relative max-w-7xl mx-auto">

                {/* Section Header — centered */}
                <div className="mb-16 flex flex-col items-center text-center gap-4">
                    <span
                        className="font-mono text-[10px] tracking-[0.4em] uppercase"
                        style={{ color: "rgba(34,211,238,0.5)" }}
                    >
                        ◈ Portfolio
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Things I&apos;ve{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #22d3ee 0%, #38bdf8 55%, #818cf8 100%)",
                            }}
                        >
                            Built
                        </span>
                    </h2>

                    <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
                        A curated selection of projects I&apos;ve designed and engineered — spanning
                        e-commerce, dashboards, and full-stack applications — each delivered with
                        a focus on clean UX and solid architecture.
                    </p>

                    <div
                        className="h-px w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)",
                        }}
                    />
                </div>

                {/* Cards Grid */}
                <div className={`grid gap-4 ${gridClass}`}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}






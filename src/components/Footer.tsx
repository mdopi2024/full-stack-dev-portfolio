"use client";

import { motion } from "framer-motion";
import { SiGithub, SiFacebook } from "react-icons/si";
import Link from "next/link";

const LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const SOCIALS = [
    { icon: SiGithub, href: "https://github.com/mdopi2024", label: "GitHub" },
    { icon: SiFacebook, href: "https://www.facebook.com/md.opi.185576", label: "Facebook" },
];

export default function Footer() {
    return (
        <footer
            className="relative w-full text-white overflow-hidden"
            style={{
                background: "linear-gradient(160deg, #020c1b 0%, #041525 30%, #030e1f 60%, #020c1b 100%)",
                borderTop: "1px solid rgba(34,211,238,0.07)",
            }}
        >
            {/* Ambient radial glows — matches all sections */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
                    style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, transparent 65%)" }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[400px]"
                    style={{ background: "radial-gradient(ellipse at bottom right, rgba(14,165,233,0.05) 0%, transparent 65%)" }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 py-16">

                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        {/* Logo — matches Navbar style */}
                        <span
                            className="text-xl font-bold tracking-tight select-none"
                            style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                        >
                            <span style={{ color: "#22d3ee" }}>&lt;</span>
                            <span className="text-slate-200">Opi</span>
                            <span style={{ color: "#22d3ee" }}>.</span>
                            <span style={{ color: "#38bdf8" }}>dev</span>
                            <span style={{ color: "#22d3ee" }}> /&gt;</span>
                        </span>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-[260px]">
                            Full Stack Developer passionate about building fast,
                            scalable, and modern web applications using React,
                            Next.js, Node.js, and more.
                        </p>

                        {/* Thin accent line */}
                        <div
                            className="h-px w-14 rounded-full"
                            style={{ background: "linear-gradient(90deg, rgba(34,211,238,0.5), transparent)" }}
                        />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3
                            className="text-[11px] font-mono uppercase tracking-[0.3em] mb-5"
                            style={{ color: "rgba(34,211,238,0.5)" }}
                        >
                            ◈ Quick Links
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {LINKS.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group relative inline-flex items-center gap-2 text-sm text-slate-400 no-underline transition-colors duration-200 hover:text-cyan-300"
                                    >
                                        {/* Arrow indicator */}
                                        <span
                                            className="text-[10px] transition-transform duration-200 group-hover:translate-x-1"
                                            style={{ color: "rgba(34,211,238,0.4)" }}
                                        >
                                            ›
                                        </span>
                                        <span>{item.name}</span>
                                        {/* Underline */}
                                        <span
                                            className="absolute left-4 -bottom-px h-px transition-all duration-300 group-hover:opacity-100 opacity-0"
                                            style={{
                                                width: "calc(100% - 1rem)",
                                                background: "linear-gradient(90deg, #22d3ee, transparent)",
                                            }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3
                            className="text-[11px] font-mono uppercase tracking-[0.3em] mb-5"
                            style={{ color: "rgba(34,211,238,0.5)" }}
                        >
                            ◈ Connect
                        </h3>

                        <div className="flex gap-3">
                            {SOCIALS.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.12, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                                        style={{
                                            background: "rgba(10,22,44,0.7)",
                                            border: "1px solid rgba(34,211,238,0.1)",
                                            backdropFilter: "blur(6px)",
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.3)";
                                            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(34,211,238,0.12)";
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.1)";
                                            (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                        }}
                                    >
                                        <Icon size={17} />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Email hint */}
                        <p className="mt-5 text-xs text-slate-500 font-mono">
                            Have a project in mind?{" "}
                            <a
                                href="mailto:your@email.com"
                                className="transition-colors duration-200 hover:text-cyan-300 no-underline"
                                style={{ color: "rgba(34,211,238,0.6)" }}
                            >
                                Let&apos;s talk →
                            </a>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="my-10 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.12), transparent)" }}
                />

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(135deg, #22d3ee, #38bdf8)" }}
                        >
                            Md Opi Korim
                        </span>
                        . All rights reserved.
                    </p>
                    <p>
                        Built with{" "}
                        <span style={{ color: "#22d3ee" }}>Next.js</span>
                        {" "}&amp;{" "}
                        <span style={{ color: "#38bdf8" }}>Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
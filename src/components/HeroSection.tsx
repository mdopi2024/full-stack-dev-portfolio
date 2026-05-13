"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Transition } from "framer-motion";

/* ── Framer Motion entrance helpers ── */
const up = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay } satisfies Transition,
});

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" as const, delay } satisfies Transition,
});

/* ── Skills ── */
const SKILLS = [
    { name: "HTML", color: "#f97316" },
    { name: "CSS", color: "#3b82f6" },
    { name: "Tailwind", color: "#06b6d4" },
    { name: "JavaScript", color: "#facc15" },
    { name: "TypeScript", color: "#60a5fa" },
    { name: "React", color: "#22d3ee" },
    { name: "Next.js", color: "#e6edf3" },
    { name: "Node.js", color: "#6dbf67" },
    { name: "Express", color: "#a3a3a3" },
    { name: "Prisma", color: "#818cf8" },
    { name: "Docker", color: "#38bdf8" },
    { name: "Golang", color: "#67e8f9" },
    { name: "BetterAuth", color: "#c084fc" },
    { name: "MongoDB", color: "#4fa846" },
    { name: "PostgreSQL", color: "#a78bfa" },
];

/*
 * Orbit icon positions — 8-point compass on 320px avatar
 * Center = (160,160), orbit radius r = 185px, icon = 46×46 (half = 23)
 *
 *  0°  top        → left:137px   top:-48px
 * 45°  top-right  → right:  6px  top:  6px
 * 90°  right      → right:-48px  top:137px
 *135°  bot-right  → right:  6px  bottom: 6px
 *180°  bottom     → left:137px   bottom:-48px
 *225°  bot-left   → left:  6px   bottom: 6px
 *270°  left       → left:-48px   top:137px
 *315°  top-left   → left:  6px   top:  6px
 */
const ORBIT = [
    {
        // 0° — Top — Tailwind CSS
        style: { top: "-48px", left: "137px" },
        animStyle: { animation: "floatA 3.2s ease-in-out infinite" },
        bg: "#0c1a24", border: "#06b6d4",
        icon: (
            <svg width="22" height="22" viewBox="0 0 54 33" fill="#06b6d4">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 12.672 33.548 15.6 40.5 15.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 2.928 33.952 0 27 0zM13.5 15.6C6.3 15.6 1.8 19.2 0 26.4c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 28.272 20.048 31.2 27 31.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 18.528 20.452 15.6 13.5 15.6z"
                />
            </svg>
        ),
    },
    {
        // 45° — Top-right — Next.js
        style: { top: "6px", right: "6px" },
        animStyle: { animation: "floatB 3.8s ease-in-out 0.4s infinite" },
        bg: "#111111", border: "#555",
        icon: (
            <svg width="22" height="22" viewBox="0 0 180 180" fill="white">
                <path d="M86.7 0a90 90 0 100 180A90 90 0 0086.7 0zm41.8 129.3L55 58.5v68.6H40V51.5h17.3l75 73.1V51.5H148v77.8h-19.5z" />
            </svg>
        ),
    },
    {
        // 90° — Right — TypeScript
        style: { top: "137px", right: "-48px" },
        animStyle: { animation: "floatC 4.1s ease-in-out 0.8s infinite" },
        bg: "#0d1828", border: "#3178c6",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24">
                <rect x="1" y="1" width="22" height="22" rx="3" fill="#3178c6" />
                <text x="4" y="17" fill="white" fontSize="10" fontWeight="800" fontFamily="monospace">TS</text>
            </svg>
        ),
    },
    {
        // 135° — Bottom-right — Prisma
        style: { bottom: "6px", right: "6px" },
        animStyle: { animation: "floatA 3.5s ease-in-out 1.2s infinite" },
        bg: "#0f0f1a", border: "#818cf8",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#818cf8">
                <path d="M1.927 16.517L11.3.63a.818.818 0 011.425.04l9.348 15.994a.818.818 0 01-.123.967l-9.348 9.028a.818.818 0 01-1.178-.01L1.99 17.468a.818.818 0 01-.063-.95zm9.747 7.107l7.915-7.648L12 3.64l-7.913 12.9 7.587 7.084z" />
            </svg>
        ),
    },
    {
        // 180° — Bottom — Node.js
        style: { bottom: "-48px", left: "137px" },
        animStyle: { animation: "floatB 3.6s ease-in-out 1.6s infinite" },
        bg: "#0d1f12", border: "#68a063",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#68a063">
                <path d="M11.998.04a.9.9 0 00-.45.115L1.34 5.908a.9.9 0 00-.45.777v11.63a.9.9 0 00.45.778l10.208 5.752a.9.9 0 00.9 0l10.208-5.752a.9.9 0 00.45-.778V6.685a.9.9 0 00-.45-.777L12.45.155a.9.9 0 00-.45-.115zM12 5.338l5.84 3.37v6.583L12 18.662l-5.84-3.37V8.709L12 5.338z" />
            </svg>
        ),
    },
    {
        // 225° — Bottom-left — Docker
        style: { bottom: "6px", left: "6px" },
        animStyle: { animation: "floatC 3.9s ease-in-out 0.2s infinite" },
        bg: "#0d1f33", border: "#2496ED",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#2496ED">
                <path d="M13.98 11.07H16.1v-2.1h-2.12v2.1zm-2.95 0h2.12v-2.1h-2.12v2.1zm-2.97 0h2.11v-2.1H8.06v2.1zm-2.95 0h2.12v-2.1H5.11v2.1zm2.95-2.13h2.12v-2.1H8.06v2.1zm2.97 0h2.12v-2.1h-2.12v2.1zm2.95 0H16.1v-2.1h-2.12v2.1zm2.97 0h2.12v-2.1h-2.12v2.1zM23.76 9.9c-.066-.051-.673-.51-1.955-.51a5.9 5.9 0 00-1.01.087c-.248-1.7-1.653-2.53-1.717-2.566l-.344-.199-.225.327a4.07 4.07 0 00-.613 1.43c-.23.97-.09 1.882.404 2.66-.596.333-1.552.413-1.745.42H.75A.75.75 0 000 12.287a11.38 11.38 0 00.692 4.062c.546 1.428 1.356 2.48 2.41 3.124 1.181.723 3.1 1.137 5.276 1.137a14.9 14.9 0 002.93-.267 12.25 12.25 0 003.823-1.388c.98-.568 1.86-1.29 2.61-2.137 1.252-1.418 1.998-2.997 2.553-4.4h.222c1.372 0 2.215-.548 2.68-1.008a3.04 3.04 0 00.706-1.047l.098-.287z" />
            </svg>
        ),
    },
    {
        // 270° — Left — JavaScript
        style: { top: "137px", left: "-48px" },
        animStyle: { animation: "floatA 3.7s ease-in-out 1.0s infinite" },
        bg: "#1f1a00", border: "#facc15",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24">
                <rect x="1" y="1" width="22" height="22" rx="3" fill="#facc15" />
                <text x="4.5" y="17" fill="#0d1117" fontSize="10" fontWeight="800" fontFamily="monospace">JS</text>
            </svg>
        ),
    },
    {
        // 315° — Top-left — PostgreSQL
        style: { top: "6px", left: "6px" },
        animStyle: { animation: "floatB 4.0s ease-in-out 0.6s infinite" },
        bg: "#0d1a2d", border: "#336791",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24">
                <text x="3" y="16" fill="#4a90d9" fontSize="11" fontWeight="900" fontFamily="monospace">PG</text>
            </svg>
        ),
    },
];

const STATS = [
    { val: "15+", label: "Skills mastered", cyan: false },
    { val: "∞", label: "Curiosity", cyan: true },
    { val: "100%", label: "Dedication", cyan: false },
];

export default function HeroSection() {
    const [typed, setTyped] = useState("");
    const fullName = "Md Opi Korim";

    /* Typewriter effect */
    useEffect(() => {
        let i = 0;
        const t = setTimeout(() => {
            const iv = setInterval(() => {
                i++;
                setTyped(fullName.slice(0, i));
                if (i >= fullName.length) clearInterval(iv);
            }, 88);
            return () => clearInterval(iv);
        }, 950);
        return () => clearTimeout(t);
    }, []);

    const parts = typed.split(" ");
    const w1 = parts[0] || "";
    const w2 = parts[1] ? " " + parts[1] : "";
    const w3 = parts[2] ? " " + parts[2] : "";

    return (
        <section
            className="relative overflow-hidden bg-[#0d1117]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
        >
            {/* ── Animated grid background ── */}
            <div
                className="grid-fade pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(#30363d 0.5px,transparent 0.5px),linear-gradient(90deg,#30363d 0.5px,transparent 0.5px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* ── Glow orbs ── */}
            <div className="pointer-events-none absolute right-[5%] bottom-[-100px] h-[480px] w-[480px] rounded-full"
                style={{ background: "radial-gradient(circle,rgba(34,211,238,0.07) 0%,transparent 70%)" }} />
            <div className="pointer-events-none absolute top-[8%] left-[-80px] h-[320px] w-[320px] rounded-full"
                style={{ background: "radial-gradient(circle,rgba(248,113,113,0.05) 0%,transparent 70%)" }} />

            {/* ── Two-column grid ── */}
            <div className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 px-[clamp(20px,5vw,52px)] pt-[100px] pb-[60px] md:grid-cols-2 md:gap-16 md:pt-[90px]">

                {/* ── LEFT COLUMN ── */}
                <div className="flex flex-col">

                    {/* "Open to opportunities" badge */}
                    <motion.div {...up(0.3)}
                        className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-[14px] py-[5px] text-[12px] text-[#22d3ee]"
                        style={{ background: "rgba(34,211,238,0.09)", border: "0.5px solid rgba(34,211,238,0.28)" }}
                    >
                        <div className="pulse-dot h-[7px] w-[7px] rounded-full bg-[#22d3ee]" />
                        Open to opportunities · Fresher
                    </motion.div>

                    {/* Role tag */}
                    <motion.div {...up(0.45)}
                        className="mb-4 w-fit rounded-[6px] border-[0.5px] border-[#30363d] bg-[#161b22] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8b949e]"
                        style={{ fontFamily: "var(--font-syne)" }}
                    >
                        Full Stack Developer
                    </motion.div>

                    {/* Hi, I'm */}
                    <motion.div {...up(0.58)}
                        className="text-[clamp(22px,3vw,35px)] font-semibold leading-[1.1] text-[#e6edf3]"
                        style={{ fontFamily: "var(--font-syne)" }}
                    >
                        Hi, I&apos;m
                    </motion.div>

                    {/* Typewriter name */}
                    <motion.div {...up(0.72)}
                        className="mb-5 min-h-[1.1em] text-[clamp(32px,5vw,40px)] font-extrabold leading-none tracking-tight"
                        style={{ fontFamily: "var(--font-syne)" }}
                    >
                        <span className="text-[#8b949e]">{w1}</span>
                        <span className="text-[#22d3ee]">{w2}</span>
                        <span className="text-[#f87171]">{w3}</span>
                        <span className="blink ml-[4px] inline-block h-[0.82em] w-[3px] align-middle bg-[#22d3ee]" />
                    </motion.div>

                    {/* Description */}
                    <motion.p {...up(0.88)}
                        className="mb-6 max-w-[460px] text-[clamp(13px,1.4vw,15.5px)] leading-[1.85] text-[#8b949e]"
                    >
                        A passionate{" "}
                        <span className="text-[#e6edf3]">Full Stack Developer</span>{" "}
                        who loves building fast, clean, and scalable web apps — from pixel-perfect frontends to
                        solid{" "}
                        <span className="text-[#e6edf3]">backend APIs</span>. Ready to bring ideas to life.
                    </motion.p>

                    {/* Skill pills */}
                    <motion.div {...up(1.0)} className="mb-7 flex flex-wrap gap-[7px]">
                        {SKILLS.map((s) => (
                            <motion.div
                                key={s.name}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.15 }}
                                className="inline-flex cursor-default items-center gap-[5px] whitespace-nowrap rounded-full bg-[#161b22] px-[11px] py-[4px] text-[12px] text-[#8b949e] transition-colors duration-200 hover:border-[#22d3ee] hover:text-[#e6edf3]"
                                style={{ border: "0.5px solid #30363d" }}
                            >
                                <div className="h-[5px] w-[5px] shrink-0 rounded-full" style={{ background: s.color }} />
                                {s.name}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div {...up(1.1)} className="mb-9 flex flex-wrap gap-3">
                        <motion.button
                            whileHover={{ y: -2, backgroundColor: "#67e8f9" }}
                            transition={{ duration: 0.18 }}
                            className="cursor-pointer whitespace-nowrap rounded-[8px] border-none bg-[#22d3ee] px-7 py-[13px] text-[14px] font-medium text-[#0d1117]"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            View Projects
                        </motion.button>
                        <motion.button
                            whileHover={{ y: -2, borderColor: "#22d3ee", color: "#22d3ee" }}
                            transition={{ duration: 0.18 }}
                            className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[8px] bg-transparent px-6 py-[13px] text-[14px] text-[#e6edf3] transition-colors duration-200"
                            style={{ border: "0.5px solid #30363d", fontFamily: "var(--font-dm-sans)" }}
                        >
                            Download CV
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div {...up(1.2)}
                        className="flex flex-wrap gap-[clamp(16px,3vw,28px)] border-t-[0.5px] border-[#30363d] pt-[22px]"
                    >
                        {STATS.map((s) => (
                            <div key={s.label}>
                                <div
                                    className="text-[clamp(18px,2vw,24px)] font-bold"
                                    style={{ fontFamily: "var(--font-syne)", color: s.cyan ? "#22d3ee" : "#e6edf3" }}
                                >
                                    {s.val}
                                </div>
                                <div className="mt-[2px] text-[11px] text-[#8b949e]">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── RIGHT COLUMN — Avatar ── */}
                <motion.div {...fadeIn(0.75)}
                    className="order-first flex items-center justify-center pb-[60px] md:order-last"
                >
                    <div className="relative h-[280px] w-[280px] md:h-[320px] md:w-[320px]">

                        {/* Spinning dashed ring */}
                        <div
                            className="spin-slow absolute inset-[-18px] rounded-full border-[1.5px] border-dashed border-[rgba(34,211,238,0.22)]"
                        />
                        {/* Spinning faint ring */}
                        <div
                            className="spin-rev absolute inset-[-40px] rounded-full border-[0.5px] border-[rgba(34,211,238,0.07)]"
                        />

                        {/* Avatar photo */}
                        <div
                            className="relative h-full w-full overflow-hidden rounded-full bg-[#161b22]"
                            style={{ border: "1.5px solid rgba(34,211,238,0.22)" }}
                        >
                            <Image
                                src="/opi.jpg"
                                alt="Md Opi Korim — Full Stack Developer"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Floating orbit icons — desktop only */}
                        {ORBIT.map((ic, i) => (
                            <div
                                key={i}
                                className="absolute hidden h-[46px] w-[46px] items-center justify-center rounded-[12px] md:flex"
                                style={{
                                    ...ic.style,
                                    ...ic.animStyle,
                                    background: ic.bg,
                                    border: `0.5px solid ${ic.border}`,
                                }}
                            >
                                {ic.icon}
                            </div>
                        ))}

                        {/* Name tag */}
                        <div
                            className="absolute bottom-[-52px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[10px] bg-[#161b22] px-5 py-2 text-center"
                            style={{ border: "0.5px solid #30363d" }}
                        >
                            <div
                                className="text-[15px] font-bold text-[#e6edf3]"
                                style={{ fontFamily: "var(--font-syne)" }}
                            >
                                Md Opi Korim
                            </div>
                            <div className="mt-[2px] text-[11px] tracking-[0.07em] text-[#22d3ee]">
                                Full Stack Developer
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll hint ── */}
            <motion.div {...fadeIn(1.6)}
                className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-[6px]"
            >
                <span className="text-[11px] tracking-[0.12em] text-[#8b949e]">scroll</span>
                <div
                    className="flex h-[34px] w-[22px] justify-center rounded-[12px] pt-[6px]"
                    style={{ border: "1.5px solid #30363d" }}
                >
                    <div className="scroll-wheel h-[7px] w-[3px] rounded-[2px] bg-[#22d3ee]" />
                </div>
            </motion.div>
        </section>
    );
}
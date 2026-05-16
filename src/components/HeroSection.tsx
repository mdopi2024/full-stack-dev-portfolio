"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { downloadResume } from "@/utils/resume";
import Link from "next/link";

// ─────────────────────────────────────────────
// Framer helpers
// ─────────────────────────────────────────────
const up = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay } satisfies Transition,
});

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay } satisfies Transition,
});

// ─────────────────────────────────────────────
// Orbit icons
// ─────────────────────────────────────────────
const ORBIT = [
    {
        label: "Tailwind CSS",
        bg: "rgba(6,182,212,0.06)", border: "rgba(6,182,212,0.25)",
        animClass: "animate-float-a",
        icon: (
            <svg width="22" height="22" viewBox="0 0 54 33" fill="#06b6d4">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 12.672 33.548 15.6 40.5 15.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 2.928 33.952 0 27 0zM13.5 15.6C6.3 15.6 1.8 19.2 0 26.4c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 28.272 20.048 31.2 27 31.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 18.528 20.452 15.6 13.5 15.6z"
                />
            </svg>
        ),
    },
    {
        label: "Next.js",
        bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.12)",
        animClass: "animate-float-b",
        icon: (
            <svg width="22" height="22" viewBox="0 0 180 180" fill="white">
                <path d="M86.7 0a90 90 0 100 180A90 90 0 0086.7 0zm41.8 129.3L55 58.5v68.6H40V51.5h17.3l75 73.1V51.5H148v77.8h-19.5z" />
            </svg>
        ),
    },
    {
        label: "TypeScript",
        bg: "rgba(49,120,198,0.08)", border: "rgba(49,120,198,0.3)",
        animClass: "animate-float-c",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24">
                <rect x="1" y="1" width="22" height="22" rx="3" fill="#3178c6" />
                <text x="4" y="17" fill="white" fontSize="10" fontWeight="800" fontFamily="monospace">TS</text>
            </svg>
        ),
    },
    {
        label: "Prisma",
        bg: "rgba(129,140,248,0.06)", border: "rgba(129,140,248,0.22)",
        animClass: "animate-float-a",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#818cf8">
                <path d="M1.927 16.517L11.3.63a.818.818 0 011.425.04l9.348 15.994a.818.818 0 01-.123.967l-9.348 9.028a.818.818 0 01-1.178-.01L1.99 17.468a.818.818 0 01-.063-.95zm9.747 7.107l7.915-7.648L12 3.64l-7.913 12.9 7.587 7.084z" />
            </svg>
        ),
    },
    {
        label: "Node.js",
        bg: "rgba(104,160,99,0.07)", border: "rgba(104,160,99,0.25)",
        animClass: "animate-float-b",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#68a063">
                <path d="M11.998.04a.9.9 0 00-.45.115L1.34 5.908a.9.9 0 00-.45.777v11.63a.9.9 0 00.45.778l10.208 5.752a.9.9 0 00.9 0l10.208-5.752a.9.9 0 00.45-.778V6.685a.9.9 0 00-.45-.777L12.45.155a.9.9 0 00-.45-.115zM12 5.338l5.84 3.37v6.583L12 18.662l-5.84-3.37V8.709L12 5.338z" />
            </svg>
        ),
    },
    {
        label: "Docker",
        bg: "rgba(36,150,237,0.07)", border: "rgba(36,150,237,0.25)",
        animClass: "animate-float-c",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#2496ED">
                <path d="M13.98 11.07H16.1v-2.1h-2.12v2.1zm-2.95 0h2.12v-2.1h-2.12v2.1zm-2.97 0h2.11v-2.1H8.06v2.1zm-2.95 0h2.12v-2.1H5.11v2.1zm2.95-2.13h2.12v-2.1H8.06v2.1zm2.97 0h2.12v-2.1h-2.12v2.1zm2.95 0H16.1v-2.1h-2.12v2.1zm2.97 0h2.12v-2.1h-2.12v2.1zM23.76 9.9c-.066-.051-.673-.51-1.955-.51a5.9 5.9 0 00-1.01.087c-.248-1.7-1.653-2.53-1.717-2.566l-.344-.199-.225.327a4.07 4.07 0 00-.613 1.43c-.23.97-.09 1.882.404 2.66-.596.333-1.552.413-1.745.42H.75A.75.75 0 000 12.287a11.38 11.38 0 00.692 4.062c.546 1.428 1.356 2.48 2.41 3.124 1.181.723 3.1 1.137 5.276 1.137a14.9 14.9 0 002.93-.267 12.25 12.25 0 003.823-1.388c.98-.568 1.86-1.29 2.61-2.137 1.252-1.418 1.998-2.997 2.553-4.4h.222c1.372 0 2.215-.548 2.68-1.008a3.04 3.04 0 00.706-1.047l.098-.287z" />
            </svg>
        ),
    },
    {
        label: "JavaScript",
        bg: "rgba(250,204,21,0.06)", border: "rgba(250,204,21,0.22)",
        animClass: "animate-float-a",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24">
                <rect x="1" y="1" width="22" height="22" rx="3" fill="#facc15" />
                <text x="4.5" y="17" fill="#0d1117" fontSize="10" fontWeight="800" fontFamily="monospace">JS</text>
            </svg>
        ),
    },
    {
        label: "PostgreSQL",
        bg: "rgba(51,103,145,0.08)", border: "rgba(74,144,217,0.25)",
        animClass: "animate-float-b",
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

// ─────────────────────────────────────────────
// HeroSection
// ─────────────────────────────────────────────
export default function HeroSection() {
    const [typed, setTyped] = useState("");
    const [cursorOn, setCursorOn] = useState(true);
    const fullName = "Md Opi Korim";

    useEffect(() => {
        let i = 0;
        const delay = setTimeout(() => {
            const iv = setInterval(() => {
                i++;
                setTyped(fullName.slice(0, i));
                if (i >= fullName.length) clearInterval(iv);
            }, 80);
            return () => clearInterval(iv);
        }, 800);
        return () => clearTimeout(delay);
    }, []);

    useEffect(() => {
        const iv = setInterval(() => setCursorOn((v) => !v), 530);
        return () => clearInterval(iv);
    }, []);

    const parts = typed.split(" ");
    const w1 = parts[0] ?? "";
    const w2 = parts[1] ? " " + parts[1] : "";
    const w3 = parts[2] ? " " + parts[2] : "";

    return (
        <section
            className="relative overflow-hidden"
            style={{
                fontFamily: "var(--font-dm-sans)",
                background: "linear-gradient(160deg, #020c1b 0%, #041525 30%, #030e1f 60%, #020c1b 100%)",
            }}
        >
            <style>{KEYFRAMES}</style>

            {/* ── Ambient radial glows — matches all sections ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
                    style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.09) 0%, transparent 65%)" }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[600px] h-[600px]"
                    style={{ background: "radial-gradient(ellipse at bottom right, rgba(14,165,233,0.06) 0%, transparent 65%)" }}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[500px]"
                    style={{ background: "radial-gradient(ellipse at left, rgba(6,182,212,0.04) 0%, transparent 65%)" }}
                />
            </div>

            {/* ── Two-column grid ── */}
            <div className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 px-[clamp(20px,5vw,52px)] pt-[100px] pb-[80px] md:grid-cols-2 md:gap-16 md:pt-[90px]">

                {/* ───────── LEFT COLUMN ───────── */}
                <div className="flex flex-col">

                    {/* Open to opportunities badge */}
                    <motion.div
                        {...up(0.3)}
                        className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-[14px] py-[5px] text-[12px] text-[#22d3ee]"
                        style={{ background: "rgba(34,211,238,0.07)", border: "1px solid rgba(34,211,238,0.18)" }}
                    >
                        <div className="h-[7px] w-[7px] rounded-full bg-[#22d3ee] animate-pulse-dot" />
                        Open to opportunities · Fresher
                    </motion.div>

                    {/* Role tag */}
                    <motion.div
                        {...up(0.45)}
                        className="mb-5 w-fit rounded-[6px] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
                        style={{
                            fontFamily: "var(--font-syne)",
                            background: "rgba(34,211,238,0.06)",
                            border: "1px solid rgba(34,211,238,0.12)",
                            color: "rgba(34,211,238,0.7)",
                        }}
                    >
                        Full Stack Developer
                    </motion.div>

                    {/* Hi, I'm */}
                    <motion.div {...up(0.58)}>
                        <span
                            className="block text-[clamp(18px,2.5vw,28px)] font-medium leading-tight"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontStyle: "italic",
                                color: "rgba(148,163,184,0.7)",
                            }}
                        >
                            Hi, I&apos;m
                        </span>

                        {/* Typewriter name */}
                        <div
                            className="mb-5 min-h-[1.15em] text-[clamp(34px,5.5vw,55px)] font-extrabold leading-none tracking-[-0.02em]"
                            style={{ fontFamily: "var(--font-syne)" }}
                        >
                            <span className="text-slate-200">{w1}</span>
                            <span
                                className="text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(135deg, #22d3ee, #38bdf8)" }}
                            >
                                {w2}
                            </span>
                            <span className="text-slate-200">{w3}</span>
                            <span
                                className="ml-[3px] inline-block h-[0.8em] w-[3px] align-middle rounded-[2px] bg-[#22d3ee] transition-opacity duration-100"
                                style={{ opacity: cursorOn ? 1 : 0 }}
                            />
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        {...up(0.75)}
                        className="mb-7 max-w-[460px] text-[clamp(13px,1.4vw,15px)] leading-[1.9] text-slate-400"
                    >
                        A passionate{" "}
                        <span className="text-slate-200 font-medium">Full Stack Developer</span>{" "}
                        who loves building fast, clean, and scalable web apps — from pixel-perfect
                        frontends to solid{" "}
                        <span className="text-slate-200 font-medium">backend APIs</span>.
                        Ready to bring ideas to life.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div {...up(0.9)} className="mb-9 flex flex-wrap gap-3">

                        {/* View Projects */}
                        <motion.button
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.16 }}
                            className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-[10px] px-6 py-[13px] text-[13.5px] font-semibold tracking-[0.01em] transition-shadow duration-300"
                            style={{
                                background: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
                                color: "#020c1b",
                                boxShadow: "0 0 24px rgba(6,182,212,0.25)",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(6,182,212,0.45)"}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(6,182,212,0.25)"}
                        >
                            <span className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-[-15deg] bg-white/15 transition-transform duration-500 group-hover:translate-x-[200%]" />
                            <svg className="relative z-10 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <path d="M8 21h8M12 17v4" />
                            </svg>
                            <span className="relative z-10"><Link href="/projects">View Projects</Link></span>
                        </motion.button>

                        {/* Download Resume */}
                        <motion.button
                            onClick={downloadResume}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.16 }}
                            className="group inline-flex cursor-pointer items-center gap-2 rounded-[10px] px-6 py-[13px] text-[13.5px] font-semibold tracking-[0.01em] text-slate-300 transition-all duration-200 hover:text-cyan-300"
                            style={{
                                border: "1px solid rgba(34,211,238,0.12)",
                                background: "rgba(34,211,238,0.04)",
                                fontFamily: "var(--font-dm-sans)",
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.08)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.12)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.04)"; }}
                        >
                            <span>Download Resume</span>
                            <svg
                                width="15" height="15" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.2"
                                className="shrink-0 transition-transform duration-200 group-hover:translate-y-[3px]"
                                aria-hidden="true"
                            >
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        {...up(1.05)}
                        className="flex flex-wrap gap-[clamp(16px,3vw,28px)] pt-[22px]"
                        style={{ borderTop: "1px solid rgba(34,211,238,0.08)" }}
                    >
                        {STATS.map((s) => (
                            <div key={s.label}>
                                <div
                                    className="text-[clamp(18px,2vw,24px)] font-bold"
                                    style={{
                                        fontFamily: "var(--font-syne)",
                                        color: s.cyan ? "#22d3ee" : "#e2e8f0",
                                    }}
                                >
                                    {s.val}
                                </div>
                                <div className="mt-[2px] text-[11px] text-slate-500">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ───────── RIGHT COLUMN ───────── */}
                <motion.div
                    {...fadeIn(0.6)}
                    className="order-first flex items-center justify-center md:order-last"
                >
                    <div className="relative flex flex-col items-center gap-5">

                        {/* Avatar + rings */}
                        <div className="relative h-[260px] w-[260px] md:h-[300px] md:w-[300px]">

                            {/* Spinning rings */}
                            <div className="animate-spin-slow absolute inset-[-18px] rounded-full"
                                style={{ border: "1.5px dashed rgba(34,211,238,0.18)" }} />
                            <div className="animate-spin-rev absolute inset-[-40px] rounded-full"
                                style={{ border: "0.5px solid rgba(34,211,238,0.06)" }} />

                            {/* Photo */}
                            <div
                                className="relative h-full w-full overflow-hidden rounded-full"
                                style={{ border: "1.5px solid rgba(34,211,238,0.2)" }}
                            >
                                {/* Cyan top accent on avatar */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] z-10"
                                    style={{ background: "linear-gradient(90deg, #22d3ee, #38bdf8, transparent)" }}
                                />
                                <Image
                                    src="/opi.jpg"
                                    alt="Md Opi Korim — Full Stack Developer"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>

                            {/* Orbit icons */}
                            <OrbitIcon ic={ORBIT[0]} pos={{ top: "-48px", left: "50%", transform: "translateX(-50%)" }} desktop />
                            <OrbitIcon ic={ORBIT[1]} pos={{ top: "10px", right: "-10px" }} desktop />
                            <OrbitIcon ic={ORBIT[2]} pos={{ top: "50%", right: "-54px", transform: "translateY(-50%)" }} desktop />
                            <OrbitIcon ic={ORBIT[3]} pos={{ bottom: "10px", right: "-10px" }} desktop />
                            <OrbitIcon ic={ORBIT[5]} pos={{ bottom: "10px", left: "-10px" }} desktop />
                            <OrbitIcon ic={ORBIT[6]} pos={{ top: "50%", left: "-54px", transform: "translateY(-50%)" }} desktop />
                            <OrbitIcon ic={ORBIT[7]} pos={{ top: "10px", left: "-10px" }} desktop />
                        </div>

                        {/* Mobile orbit row */}
                        <div className="flex flex-wrap justify-center gap-2 px-4 md:hidden">
                            {ORBIT.map((ic, i) => (
                                <div
                                    key={i}
                                    title={ic.label}
                                    className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px]"
                                    style={{
                                        background: ic.bg,
                                        border: `1px solid ${ic.border}`,
                                        animation: `${["floatA", "floatB", "floatC"][i % 3]} ${3.2 + i * 0.2}s ease-in-out ${i * 0.15}s infinite`,
                                    }}
                                >
                                    {ic.icon}
                                </div>
                            ))}
                        </div>

                        {/* Name tag */}
                        <div
                            className="rounded-[10px] px-5 py-[10px] text-center"
                            style={{
                                background: "rgba(10,22,44,0.7)",
                                border: "1px solid rgba(34,211,238,0.1)",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <div
                                className="text-[15px] font-bold text-slate-200"
                                style={{ fontFamily: "var(--font-syne)" }}
                            >
                                Md Opi Korim
                            </div>
                            <div
                                className="mt-[2px] text-[11px] tracking-[0.07em]"
                                style={{
                                    background: "linear-gradient(135deg, #22d3ee, #38bdf8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Full Stack Developer
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll hint ── */}
            <motion.div
                {...fadeIn(1.4)}
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-[6px]"
            >
                <span
                    className="text-[10px] font-mono uppercase tracking-[0.18em]"
                    style={{ color: "rgba(34,211,238,0.3)" }}
                >
                    scroll
                </span>
                <div className="flex flex-col items-center">
                    {[0, 1, 2].map((n) => (
                        <svg
                            key={n}
                            width="14" height="9" viewBox="0 0 14 9" fill="none"
                            style={{ animation: `scrollArrow 1.2s ease-in-out ${n * 0.18}s infinite`, opacity: 0 }}
                            aria-hidden="true"
                        >
                            <path d="M1 1l6 6 6-6" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

// ─────────────────────────────────────────────
// OrbitIcon helper
// ─────────────────────────────────────────────
function OrbitIcon({
    ic,
    pos,
    desktop = false,
}: {
    ic: typeof ORBIT[number];
    pos: React.CSSProperties;
    desktop?: boolean;
}) {
    return (
        <div
            title={ic.label}
            className={[
                "absolute flex h-[46px] w-[46px] items-center justify-center rounded-[12px]",
                desktop ? "hidden md:flex" : "flex",
            ].join(" ")}
            style={{
                ...pos,
                background: ic.bg,
                border: `1px solid ${ic.border}`,
                backdropFilter: "blur(6px)",
                animation: "floatA 3.4s ease-in-out infinite",
            }}
        >
            {ic.icon}
        </div>
    );
}

// ─────────────────────────────────────────────
// Keyframes
// ─────────────────────────────────────────────
const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');

  .animate-spin-slow { animation: spinSlow 18s linear infinite; }
  .animate-spin-rev  { animation: spinRev  28s linear infinite; }

  @keyframes spinSlow { to { transform: rotate(360deg);  } }
  @keyframes spinRev  { to { transform: rotate(-360deg); } }

  @keyframes floatA {
    0%,100% { transform: translateY(0px);  }
    50%      { transform: translateY(-7px); }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0px);   }
    50%      { transform: translateY(-10px); }
  }
  @keyframes floatC {
    0%,100% { transform: translateY(0px);  }
    50%      { transform: translateY(-5px); }
  }

  .animate-pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
  @keyframes pulseDot {
    0%,100% { opacity:1; transform:scale(1);    box-shadow:0 0 0 0   rgba(34,211,238,0.5); }
    50%      { opacity:.8;transform:scale(1.25); box-shadow:0 0 0 5px rgba(34,211,238,0);   }
  }

  @keyframes scrollArrow {
    0%   { opacity:0; transform:translateY(-4px); }
    40%  { opacity:1; transform:translateY(0);    }
    80%  { opacity:0; transform:translateY(4px);  }
    100% { opacity:0; transform:translateY(4px);  }
  }
`;
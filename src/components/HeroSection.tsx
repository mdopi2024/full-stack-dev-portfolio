"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { downloadResume } from "@/utils/resume";

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
// Orbit icons — 8 tech badges
// ─────────────────────────────────────────────
const ORBIT = [
    {
        label: "Tailwind CSS",
        bg: "#0c1a24", border: "#06b6d4",
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
        bg: "#111111", border: "#555",
        animClass: "animate-float-b",
        icon: (
            <svg width="22" height="22" viewBox="0 0 180 180" fill="white">
                <path d="M86.7 0a90 90 0 100 180A90 90 0 0086.7 0zm41.8 129.3L55 58.5v68.6H40V51.5h17.3l75 73.1V51.5H148v77.8h-19.5z" />
            </svg>
        ),
    },
    {
        label: "TypeScript",
        bg: "#0d1828", border: "#3178c6",
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
        bg: "#0f0f1a", border: "#818cf8",
        animClass: "animate-float-a",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#818cf8">
                <path d="M1.927 16.517L11.3.63a.818.818 0 011.425.04l9.348 15.994a.818.818 0 01-.123.967l-9.348 9.028a.818.818 0 01-1.178-.01L1.99 17.468a.818.818 0 01-.063-.95zm9.747 7.107l7.915-7.648L12 3.64l-7.913 12.9 7.587 7.084z" />
            </svg>
        ),
    },
    {
        label: "Node.js",
        bg: "#0d1f12", border: "#68a063",
        animClass: "animate-float-b",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#68a063">
                <path d="M11.998.04a.9.9 0 00-.45.115L1.34 5.908a.9.9 0 00-.45.777v11.63a.9.9 0 00.45.778l10.208 5.752a.9.9 0 00.9 0l10.208-5.752a.9.9 0 00.45-.778V6.685a.9.9 0 00-.45-.777L12.45.155a.9.9 0 00-.45-.115zM12 5.338l5.84 3.37v6.583L12 18.662l-5.84-3.37V8.709L12 5.338z" />
            </svg>
        ),
    },
    {
        label: "Docker",
        bg: "#0d1f33", border: "#2496ED",
        animClass: "animate-float-c",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#2496ED">
                <path d="M13.98 11.07H16.1v-2.1h-2.12v2.1zm-2.95 0h2.12v-2.1h-2.12v2.1zm-2.97 0h2.11v-2.1H8.06v2.1zm-2.95 0h2.12v-2.1H5.11v2.1zm2.95-2.13h2.12v-2.1H8.06v2.1zm2.97 0h2.12v-2.1h-2.12v2.1zm2.95 0H16.1v-2.1h-2.12v2.1zm2.97 0h2.12v-2.1h-2.12v2.1zM23.76 9.9c-.066-.051-.673-.51-1.955-.51a5.9 5.9 0 00-1.01.087c-.248-1.7-1.653-2.53-1.717-2.566l-.344-.199-.225.327a4.07 4.07 0 00-.613 1.43c-.23.97-.09 1.882.404 2.66-.596.333-1.552.413-1.745.42H.75A.75.75 0 000 12.287a11.38 11.38 0 00.692 4.062c.546 1.428 1.356 2.48 2.41 3.124 1.181.723 3.1 1.137 5.276 1.137a14.9 14.9 0 002.93-.267 12.25 12.25 0 003.823-1.388c.98-.568 1.86-1.29 2.61-2.137 1.252-1.418 1.998-2.997 2.553-4.4h.222c1.372 0 2.215-.548 2.68-1.008a3.04 3.04 0 00.706-1.047l.098-.287z" />
            </svg>
        ),
    },
    {
        label: "JavaScript",
        bg: "#1f1a00", border: "#facc15",
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
        bg: "#0d1a2d", border: "#336791",
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

    /* Typewriter */
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

    /* Blinking cursor */
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
            className="relative overflow-hidden bg-[#0d1117]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
        >
            <style>{KEYFRAMES}</style>

            {/* ── Grid background ── */}
            <div
                className="pointer-events-none absolute inset-0 grid-fade"
                style={{
                    backgroundImage:
                        "linear-gradient(#30363d 0.5px,transparent 0.5px),linear-gradient(90deg,#30363d 0.5px,transparent 0.5px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* ── Glow orbs ── */}
            <div
                className="pointer-events-none absolute right-[5%] bottom-[-100px] h-[480px] w-[480px] rounded-full"
                style={{ background: "radial-gradient(circle,rgba(34,211,238,0.07) 0%,transparent 70%)" }}
            />
            <div
                className="pointer-events-none absolute top-[8%] left-[-80px] h-[320px] w-[320px] rounded-full"
                style={{ background: "radial-gradient(circle,rgba(248,113,113,0.05) 0%,transparent 70%)" }}
            />

            {/* ── Two-column grid ── */}
            <div className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 px-[clamp(20px,5vw,52px)] pt-[100px] pb-[80px] md:grid-cols-2 md:gap-16 md:pt-[90px]">

                {/* ───────── LEFT COLUMN ───────── */}
                <div className="flex flex-col">

                    {/* "Open to opportunities" badge */}
                    <motion.div
                        {...up(0.3)}
                        className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-[14px] py-[5px] text-[12px] text-[#22d3ee]"
                        style={{ background: "rgba(34,211,238,0.09)", border: "0.5px solid rgba(34,211,238,0.28)" }}
                    >
                        <div className="h-[7px] w-[7px] rounded-full bg-[#22d3ee] animate-pulse-dot" />
                        Open to opportunities · Fresher
                    </motion.div>

                    {/* Role tag */}
                    <motion.div
                        {...up(0.45)}
                        className="mb-5 w-fit rounded-[6px] border-[0.5px] border-[#30363d] bg-[#161b22] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8b949e]"
                        style={{ fontFamily: "var(--font-syne)" }}
                    >
                        Full Stack Developer
                    </motion.div>

                    {/* Hi, I'm — display font */}
                    <motion.div {...up(0.58)}>
                        <span
                            className="block text-[clamp(18px,2.5vw,28px)] font-medium leading-tight text-[#8b949e]"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
                        >
                            Hi, I&apos;m
                        </span>

                        {/* Typewriter name */}
                        <div
                            className="mb-5 min-h-[1.15em] text-[clamp(34px,5.5vw,55px)] font-extrabold leading-none tracking-[-0.02em]"
                            style={{ fontFamily: "var(--font-syne)" }}
                        >
                            <span className="text-[#c9d1d9]">{w1}</span>
                            <span className="text-[#22d3ee]">{w2}</span>
                            <span className="text-[#f87171]">{w3}</span>
                            {/* cursor */}
                            <span
                                className="ml-[3px] inline-block h-[0.8em] w-[3px] align-middle rounded-[2px] bg-[#22d3ee] transition-opacity duration-100"
                                style={{ opacity: cursorOn ? 1 : 0 }}
                            />
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        {...up(0.75)}
                        className="mb-7 max-w-[460px] text-[clamp(13px,1.4vw,15px)] leading-[1.9] text-[#8b949e]"
                    >
                        A passionate{" "}
                        <span className="text-[#e6edf3] font-medium">Full Stack Developer</span>{" "}
                        who loves building fast, clean, and scalable web apps — from pixel-perfect frontends to
                        solid{" "}
                        <span className="text-[#e6edf3] font-medium">backend APIs</span>.
                        Ready to bring ideas to life.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div {...up(0.9)} className="mb-9 flex flex-wrap gap-3">

                        {/* View Projects — solid cyan */}
                        <motion.button
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.16 }}
                            className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-[10px] bg-[#22d3ee] px-6 py-[13px] text-[13.5px] font-semibold tracking-[0.01em] text-[#0d1117] shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.45)]"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                            {/* shine on hover */}
                            <span className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-[-15deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]" />
                            <svg className="relative z-10 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <path d="M8 21h8M12 17v4" />
                            </svg>
                            <span className="relative z-10">View Projects</span>
                        </motion.button>

                        {/* Download Resume — ghost */}
                        <motion.button
                            onClick={downloadResume}
                            whileHover={{ y: -2, borderColor: "#22d3ee", color: "#22d3ee" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.16 }}
                            className="group inline-flex cursor-pointer items-center gap-2 rounded-[10px] bg-transparent px-6 py-[13px] text-[13.5px] font-semibold tracking-[0.01em] text-[#e6edf3] transition-colors duration-200"
                            style={{ border: "0.5px solid #30363d", fontFamily: "var(--font-dm-sans)" }}
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

                {/* ───────── RIGHT COLUMN ───────── */}
                <motion.div
                    {...fadeIn(0.6)}
                    className="order-first flex items-center justify-center md:order-last"
                >
                    {/* Outer wrapper — extra space for orbit icons */}
                    <div className="relative flex flex-col items-center gap-5">

                        {/* Avatar + rings */}
                        <div className="relative h-[260px] w-[260px] md:h-[300px] md:w-[300px]">

                            {/* Spinning dashed ring */}
                            <div className="animate-spin-slow absolute inset-[-18px] rounded-full border-[1.5px] border-dashed border-[rgba(34,211,238,0.22)]" />
                            {/* Slow counter-spin ring */}
                            <div className="animate-spin-rev absolute inset-[-40px] rounded-full border-[0.5px] border-[rgba(34,211,238,0.07)]" />

                            {/* Photo */}
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

                            {/* ── Desktop orbit icons (absolute, around circle) ── */}
                            {/* Top */}
                            <OrbitIcon ic={ORBIT[0]} pos={{ top: "-48px", left: "50%", transform: "translateX(-50%)" }} desktop />
                            {/* Top-right */}
                            <OrbitIcon ic={ORBIT[1]} pos={{ top: "10px", right: "-10px" }} desktop />
                            {/* Right */}
                            <OrbitIcon ic={ORBIT[2]} pos={{ top: "50%", right: "-54px", transform: "translateY(-50%)" }} desktop />
                            {/* Bottom-right */}
                            <OrbitIcon ic={ORBIT[3]} pos={{ bottom: "10px", right: "-10px" }} desktop />
                            {/* Bottom */}
                            <OrbitIcon ic={ORBIT[5]} pos={{ bottom: "10px", left: "-10px" }} desktop />
                            {/* Left */}
                            <OrbitIcon ic={ORBIT[6]} pos={{ top: "50%", left: "-54px", transform: "translateY(-50%)" }} desktop />
                            {/* Top-left */}
                            <OrbitIcon ic={ORBIT[7]} pos={{ top: "10px", left: "-10px" }} desktop />
                        </div>

                        {/* ── Mobile orbit row — visible only on mobile ── */}
                        <div className="flex flex-wrap justify-center gap-2 px-4 md:hidden">
                            {ORBIT.map((ic, i) => (
                                <div
                                    key={i}
                                    title={ic.label}
                                    className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px]"
                                    style={{
                                        background: ic.bg,
                                        border: `0.5px solid ${ic.border}`,
                                        animation: `${["floatA", "floatB", "floatC"][i % 3]} ${3.2 + i * 0.2}s ease-in-out ${i * 0.15}s infinite`,
                                    }}
                                >
                                    {ic.icon}
                                </div>
                            ))}
                        </div>

                        {/* Name tag */}
                        <div
                            className="rounded-[10px] bg-[#161b22] px-5 py-[10px] text-center"
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
            <motion.div
                {...fadeIn(1.4)}
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-[6px]"
            >
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#4d5566]">scroll</span>
                {/* Animated arrow chain */}
                <div className="flex flex-col items-center">
                    {[0, 1, 2].map((n) => (
                        <svg
                            key={n}
                            width="14"
                            height="9"
                            viewBox="0 0 14 9"
                            fill="none"
                            style={{
                                animation: `scrollArrow 1.2s ease-in-out ${n * 0.18}s infinite`,
                                opacity: 0,
                            }}
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
                border: `0.5px solid ${ic.border}`,
                animation: `floatA 3.4s ease-in-out infinite`,
            }}
        >
            {ic.icon}
        </div>
    );
}

// ─────────────────────────────────────────────
// Keyframes — self-contained
// ─────────────────────────────────────────────
const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');

  /* ── Grid fade overlay ── */
  .grid-fade {
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
    opacity: 0.35;
  }

  /* ── Avatar rings ── */
  .animate-spin-slow { animation: spinSlow 18s linear infinite; }
  .animate-spin-rev  { animation: spinRev  28s linear infinite; }

  @keyframes spinSlow { to { transform: rotate(360deg);  } }
  @keyframes spinRev  { to { transform: rotate(-360deg); } }

  /* ── Orbit float ── */
  @keyframes floatA {
    0%,100% { transform: translateY(0px);   }
    50%      { transform: translateY(-7px);  }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0px);   }
    50%      { transform: translateY(-10px); }
  }
  @keyframes floatC {
    0%,100% { transform: translateY(0px);   }
    50%      { transform: translateY(-5px);  }
  }

  /* Orbit icons that combine translate + float */
  /* (We use inline animation per icon so float works with absolute positioning) */

  /* ── Live dot pulse ── */
  .animate-pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
  @keyframes pulseDot {
    0%,100% { opacity: 1; transform: scale(1);   box-shadow: 0 0 0 0 rgba(34,211,238,0.5); }
    50%      { opacity: 0.8; transform: scale(1.25); box-shadow: 0 0 0 5px rgba(34,211,238,0); }
  }

  /* ── Scroll arrows ── */
  @keyframes scrollArrow {
    0%   { opacity: 0;   transform: translateY(-4px); }
    40%  { opacity: 1;   transform: translateY(0);    }
    80%  { opacity: 0;   transform: translateY(4px);  }
    100% { opacity: 0;   transform: translateY(4px);  }
  }
`;
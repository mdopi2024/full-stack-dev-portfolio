"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface NavLinkProps {
    label: string;
    href: string;
    active: boolean;
}

interface HireBtnProps {
    fullWidth?: boolean;
}

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "#1" },
    { label: "Services", href: "#2" },
    { label: "Projects", href: "#3" },
    { label: "Contact", href: "#4" },
] as const;

// ─────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <>
            {/* ── Keyframes injected once — no tailwind.config needed ── */}
            <style>{KEYFRAMES}</style>

            <nav
                className={[
                    "fixed inset-x-0 top-0 z-[100] backdrop-blur-2xl",
                    "transition-[background,border-color,box-shadow] duration-300",
                    "navbar-enter",
                    scrolled
                        ? "bg-[rgba(13,17,23,0.38)] border-b border-[rgba(255,255,255,0.10)] shadow-[0_8px_30px_rgba(0,0,0,0.16)]"
                        : "bg-[rgba(13,17,23,0.12)] border-b border-[rgba(255,255,255,0.04)]",
                ].join(" ")}
            >
                {/* ── Main row ── */}
                <div className="flex h-16 items-center justify-between px-[clamp(20px,4vw,52px)]">

                    {/* Logo */}
                    <div
                        className="logo-enter shrink-0 select-none text-[clamp(15px,2.5vw,17px)] font-bold tracking-[0.01em]"
                        style={{ fontFamily: "var(--font-syne)" }}
                    >
                        <Link href="/" className="no-underline">
                            <span className="text-cyan-400">&lt;</span>
                            <span className="text-[#e6edf3]">Opi</span>
                            <span className="text-cyan-400">.</span>
                            <span className="text-red-400">dev</span>
                            <span className="text-cyan-400"> /&gt;</span>
                        </Link>
                    </div>

                    {/* Desktop nav links */}
                    <ul
                        className="hidden list-none items-center gap-[clamp(18px,2.5vw,30px)] md:flex"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        {LINKS.map((link, i) => (
                            <li
                                key={link.href}
                                className="nav-item-enter"
                                style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                            >
                                <NavLink
                                    label={link.label}
                                    href={link.href}
                                    active={pathname === link.href}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="cta-enter hidden md:block">
                        <HireBtn />
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1 md:hidden"
                    >
                        {[
                            menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                            null,
                            menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                        ].map((transform, n) =>
                            n === 1 ? (
                                <span
                                    key={n}
                                    className="block h-[2px] w-[22px] rounded-[2px] bg-[#e6edf3] transition-all duration-[250ms]"
                                    style={{ opacity: menuOpen ? 0 : 1 }}
                                />
                            ) : (
                                <span
                                    key={n}
                                    className="block h-[2px] w-[22px] rounded-[2px] transition-all duration-[250ms]"
                                    style={{
                                        background: menuOpen ? "#22d3ee" : "#e6edf3",
                                        transform: transform as string,
                                    }}
                                />
                            )
                        )}
                    </button>
                </div>

                {/* ── Mobile dropdown ── */}
                <div
                    className={[
                        "overflow-hidden border-t border-[rgba(255,255,255,0.05)]",
                        "bg-[rgba(13,17,23,0.25)] backdrop-blur-2xl md:hidden",
                        "transition-[max-height,opacity] duration-300 ease-in-out",
                        menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                >
                    <div
                        className="flex flex-col px-6 pb-5 pt-4"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        {LINKS.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={[
                                    "block border-b border-[rgba(255,255,255,0.05)] py-[11px]",
                                    "text-[15px] no-underline transition-colors duration-200 last:border-none",
                                    pathname === link.href ? "text-cyan-400" : "text-[#8b949e]",
                                ].join(" ")}
                                style={
                                    menuOpen
                                        ? { animation: `fadeInLeft 0.25s ease-out ${i * 0.05}s both` }
                                        : {}
                                }
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="mt-3 w-full">
                            <HireBtn fullWidth />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

// ─────────────────────────────────────────────
// NavLink — underline slides in on hover/active
// ─────────────────────────────────────────────
function NavLink({ label, href, active }: NavLinkProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative whitespace-nowrap text-[13.5px] tracking-[0.02em] no-underline transition-colors duration-200"
            style={{ color: active ? "#22d3ee" : hovered ? "#e6edf3" : "#8b949e" }}
        >
            {label}
            <span
                className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400 transition-[width] duration-[250ms] ease-out"
                style={{ width: active || hovered ? "100%" : "0%" }}
            />
        </Link>
    );
}

// ─────────────────────────────────────────────
// HireBtn — shimmer sweep + pulse ring (∞)
// ─────────────────────────────────────────────
function HireBtn({ fullWidth = false }: HireBtnProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={[
                "relative inline-flex cursor-pointer items-center justify-center gap-[7px]",
                "overflow-hidden rounded-[8px] border-[1.5px] border-cyan-400",
                "px-5 py-[9px] text-[13px] font-medium tracking-[0.03em]",
                "transition-[color,background,box-shadow] duration-300",
                fullWidth ? "w-full" : "",
            ].join(" ")}
            style={{
                fontFamily: "var(--font-dm-sans)",
                color: hovered ? "#0d1117" : "#22d3ee",
                background: hovered ? "#22d3ee" : "transparent",
                boxShadow: hovered ? "0 0 20px rgba(34,211,238,0.4)" : "none",
                // pulse ring runs only when idle
                animation: hovered ? "none" : "pulseRing 2s ease-out infinite",
            }}
        >
            {/* Shimmer sweep — hidden on hover */}
            {!hovered && (
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                        animation: "shimmer 2.2s ease-in-out infinite",
                    }}
                />
            )}

            {/* Briefcase icon */}
            <svg
                aria-hidden="true"
                className="relative z-10 shrink-0"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
            >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
            </svg>

            <span className="relative z-10">Hire Me</span>
        </button>
    );
}

// ─────────────────────────────────────────────
// Keyframes — self-contained, no config needed
// ─────────────────────────────────────────────
const KEYFRAMES = `
  /* ── Entry animations (run once on mount) ── */
  .navbar-enter   { animation: slideDown   0.65s cubic-bezier(0.22,1,0.36,1) both; }
  .logo-enter     { animation: fadeInLeft  0.40s ease-out 0.25s              both; }
  .cta-enter      { animation: fadeInRight 0.40s ease-out 0.55s              both; }
  .nav-item-enter { animation: fadeInDown  0.35s ease-out                    both; opacity: 0; }

  @keyframes slideDown {
    from { transform: translateY(-110%); opacity: 0; }
    to   { transform: translateY(0);     opacity: 1; }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(10px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  /* ── Hire Me: diagonal shimmer sweep ── */
  @keyframes shimmer {
    0%   { transform: translateX(-100%) skewX(-15deg); }
    100% { transform: translateX(350%)  skewX(-15deg); }
  }

  /* ── Hire Me: expanding pulse ring ── */
  @keyframes pulseRing {
    0%   { box-shadow: 0 0 0 0   rgba(34,211,238,0.45); }
    70%  { box-shadow: 0 0 0 8px rgba(34,211,238,0);    }
    100% { box-shadow: 0 0 0 0   rgba(34,211,238,0);    }
  }
`;
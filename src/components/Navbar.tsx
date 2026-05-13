"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Transition } from "framer-motion";

const LINKS: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

const slideDown = {
    initial: { y: -110, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } satisfies Transition,
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <motion.nav
            {...slideDown}
            className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-[18px] transition-[background,border-color] duration-300"
            style={{
                background: scrolled ? "rgba(13,17,23,0.97)" : "rgba(13,17,23,0.80)",
                borderBottom: `0.5px solid ${scrolled ? "#30363d" : "rgba(48,54,61,0.30)"}`,
                fontFamily: "var(--font-dm-sans)",
            }}
        >
            {/* ── Main row ── */}
            <div className="flex h-16 items-center justify-between px-[clamp(20px,4vw,52px)]">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 } satisfies Transition}
                    className="shrink-0 select-none text-[clamp(15px,2.5vw,17px)] font-bold tracking-[0.01em] text-[#22d3ee]"
                    style={{ fontFamily: "var(--font-syne)" }}
                >
                    <Link href="/" className="no-underline">
                        &lt;<span className="text-[#e6edf3]">Opi</span>.<span className="text-[#f87171]">dev</span> /&gt;
                    </Link>
                </motion.div>

                {/* Desktop nav links */}
                <ul className="hidden list-none items-center gap-[clamp(18px,2.5vw,30px)] md:flex">
                    {LINKS.map((link, i) => (
                        <motion.li
                            key={link.href}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.07, duration: 0.35 } satisfies Transition}
                        >
                            <NavLink
                                label={link.label}
                                href={link.href}
                                active={pathname === link.href}
                            />
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop Hire Me */}
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55, duration: 0.4 } satisfies Transition}
                    className="hidden md:block"
                >
                    <HireBtn />
                </motion.div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1 md:hidden"
                >
                    {[0, 1, 2].map((n) => (
                        <motion.span
                            key={n}
                            className="block h-[2px] w-[22px] rounded-[2px]"
                            animate={
                                menuOpen
                                    ? n === 0 ? { rotate: 45, y: 7, backgroundColor: "#22d3ee" }
                                        : n === 1 ? { opacity: 0 }
                                            : { rotate: -45, y: -7, backgroundColor: "#22d3ee" }
                                    : n === 1 ? { opacity: 1 }
                                        : { rotate: 0, y: 0, backgroundColor: "#e6edf3" }
                            }
                            transition={{ duration: 0.25 }}
                        />
                    ))}
                </button>
            </div>

            {/* ── Mobile dropdown ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" } satisfies Transition}
                        className="overflow-hidden border-t-[0.5px] border-[#30363d] bg-[rgba(13,17,23,0.98)] md:hidden"
                    >
                        <div className="flex flex-col px-6 pb-5 pt-4">
                            {LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.25 } satisfies Transition}
                                >
                                    <Link
                                        href={link.href}
                                        className="block border-b-[0.5px] border-[#21262d] py-[11px] text-[15px] no-underline transition-colors duration-200 last:border-none"
                                        style={{ color: pathname === link.href ? "#22d3ee" : "#8b949e" }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="mt-3 w-full">
                                <HireBtn fullWidth />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

/* ── Nav link with animated underline ── */
function NavLink({
    label,
    href,
    active,
}: {
    label: string;
    href: string;
    active: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative whitespace-nowrap no-underline text-[13.5px] tracking-[0.02em] transition-colors duration-200"
            style={{ color: active ? "#22d3ee" : hovered ? "#e6edf3" : "#8b949e" }}
        >
            {label}
            <motion.span
                className="absolute bottom-[-4px] left-0 h-[1px] bg-[#22d3ee]"
                animate={{ width: active || hovered ? "100%" : "0%" }}
                transition={{ duration: 0.25, ease: "easeOut" } satisfies Transition}
            />
        </Link>
    );
}

/* ── Hire Me button — fill sweep + pulse glow ── */
function HireBtn({ fullWidth = false }: { fullWidth?: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.button
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className={`hire-pulse relative inline-flex cursor-pointer items-center justify-center gap-[7px] overflow-hidden rounded-[8px] border-[1.5px] border-[#22d3ee] px-5 py-[9px] text-[13px] font-medium tracking-[0.03em] transition-colors duration-300 ${fullWidth ? "w-full" : ""}`}
            style={{
                fontFamily: "var(--font-dm-sans)",
                color: hovered ? "#0d1117" : "#22d3ee",
                background: "transparent",
                animation: hovered ? "none" : undefined,
            }}
        >
            {/* Fill sweep background */}
            <motion.span
                className="absolute inset-0 bg-[#22d3ee]"
                initial={{ x: "-101%" }}
                animate={{ x: hovered ? "0%" : "-101%" }}
                transition={{ duration: 0.34, ease: [0.4, 0, 0.2, 1] } satisfies Transition}
            />
            <svg className="relative z-10" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
            </svg>
            <span className="relative z-10">Hire Me</span>
        </motion.button>
    );
}
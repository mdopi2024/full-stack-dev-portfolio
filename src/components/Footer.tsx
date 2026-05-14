"use client";

import { motion } from "framer-motion";
import {
    SiGithub,
    SiFacebook,
} from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0d1117] text-white overflow-hidden border-t border-white/5">

            {/* glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 py-14">

                {/* top grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* brand */}
                    <div>
                        <h2 className="text-xl font-bold text-cyan-300">
                            Md Opi Korim
                        </h2>
                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                            Full Stack Developer passionate about building fast,
                            scalable and modern web applications using React, Next.js,
                            Node.js and more.
                        </p>
                    </div>

                    {/* links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-cyan-300 transition"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>

                        <div className="flex gap-4">
                            {[
                                { icon: SiGithub, link: "https://github.com/mdopi2024" },
                                { icon: SiFacebook, link: "https://www.facebook.com/home.php" },
                            ].map((social, i) => {
                                const Icon = social.icon;

                                return (
                                    <motion.a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        whileHover={{ scale: 1.15 }}
                                        className="p-3 rounded-xl bg-[#161b22] border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/30 transition"
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* divider */}
                <div className="my-10 border-t border-white/10" />

                {/* bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} <span className="text-cyan-300">Md Opi Korim</span>. All rights reserved.
                    </p>

                    <p className="mt-2 md:mt-0">
                        Built with <span className="text-cyan-300">Next.js</span> & <span className="text-cyan-300">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
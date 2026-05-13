"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="relative w-full py-24 text-white overflow-hidden "
        >
            {/* background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold text-center tracking-tight text-cyan-300"
                >
                    About Me
                </motion.h2>

                {/* MAIN GRID */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-[360px_1fr] gap-8 items-center">

                    {/* LEFT SIDE - IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent z-10" />

                            <Image
                                src="/opi2.jpg"
                                alt="About Me Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                    >
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            I am a <span className="text-cyan-400">Full Stack Developer </span>
                            passionate about building scalable, high-performance web applications
                            using <span className="text-cyan-400">React</span>,{" "}
                            <span className="text-cyan-400">Next.js</span>, and modern backend technologies.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            I work on both frontend and backend systems, building clean user interfaces,
                            efficient APIs, and well-structured databases. My focus is on delivering
                            complete end-to-end web solutions.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            Currently, I am working on MERN stack projects and continuously improving my
                            skills in scalable architecture, performance optimization, and modern web development.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
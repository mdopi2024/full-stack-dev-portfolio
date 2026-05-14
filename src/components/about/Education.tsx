"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaFlask, FaPalette } from "react-icons/fa";

const education = [
    {
        title: "Secondary School Certificate (SSC)",
        institute: "Al-Ihsan High School",
        year: "2023",
        group: "Science",
        result: "GPA 4.11",
        icon: FaFlask,
        color: "#22d3ee",
    },
    {
        title: "Higher Secondary Certificate (HSC)",
        institute: "Kendua Govt College",
        year: "2025",
        group: "Arts",
        result: "GPA 3.83",
        icon: FaPalette,
        color: "#38bdf8",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative w-full  bg-[#0d1117] text-white overflow-hidden"
        >
            {/* glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-2 text-cyan-300">
                        <FaGraduationCap size={22} />
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Education
                        </h2>
                    </div>

                    <p className="text-gray-400 mt-3 max-w-xl mx-auto">
                        My academic journey and learning background.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {education.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="relative rounded-2xl bg-[#161b22] border border-cyan-500/10 p-6 overflow-hidden group"
                            >
                                {/* glow */}
                                <div
                                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"
                                    style={{ background: item.color }}
                                />

                                {/* TOP */}
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="p-2 rounded-lg bg-[#0d1117] border border-cyan-500/20"
                                            style={{ color: item.color }}
                                        >
                                            <Icon size={20} />
                                        </div>

                                        <h3 className="text-lg md:text-xl font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <span className="text-xs px-3 py-1 rounded-full bg-[#0d1117] border border-cyan-500/20 text-cyan-300">
                                        {item.year}
                                    </span>
                                </div>

                                {/* DETAILS (FIXED VISIBILITY) */}
                                <div className="mt-5 space-y-3 text-sm">

                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wide">
                                            Institute
                                        </p>
                                        <p className="text-white font-medium">
                                            {item.institute}
                                        </p>
                                    </div>

                                    <div className="flex justify-between gap-4">
                                        <div>
                                            <p className="text-gray-400 text-xs uppercase tracking-wide">
                                                Group
                                            </p>
                                            <p className="text-gray-200">
                                                {item.group}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-gray-400 text-xs uppercase tracking-wide">
                                                Result
                                            </p>
                                            <p className="text-cyan-300 font-semibold">
                                                {item.result}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* bottom line */}
                                <div
                                    className="mt-5 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                                    style={{ background: item.color }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
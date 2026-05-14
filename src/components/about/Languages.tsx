"use client";

import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";

const languages = [
    {
        name: "Bengali",
        level: "Native",
        percent: 100,
    },
    {
        name: "English",
        level: "Comfortable",
        percent: 70,
    },
    {
        name: "Hindi",
        level: "Conversational",
        percent: 90,
    },
];

export default function Languages() {
    return (
        <section
            id="languages"
            className="relative w-full py-16 bg-[#0d1117] text-white overflow-hidden"
        >
            {/* background glow */}
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
                        <FaLanguage size={22} />
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Languages
                        </h2>
                    </div>

                    <p className="text-gray-400 mt-3 max-w-xl mx-auto">
                        Languages I can communicate in and use for daily interaction and development work.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {languages.map((lang, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="relative rounded-2xl bg-[#161b22] border border-cyan-500/10 p-6 overflow-hidden group"
                        >
                            {/* glow */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl opacity-20 group-hover:opacity-40 transition" />

                            {/* name */}
                            <h3 className="text-lg font-semibold text-white">
                                {lang.name}
                            </h3>

                            <p className="text-sm text-gray-400 mt-1">
                                {lang.level}
                            </p>

                            {/* progress bar */}
                            <div className="mt-5 w-full h-2 bg-[#0d1117] rounded-full overflow-hidden border border-cyan-500/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percent}%` }}
                                    transition={{ duration: 1 }}
                                    className="h-full bg-cyan-400 rounded-full"
                                />
                            </div>

                            {/* percent */}
                            <p className="mt-3 text-right text-sm text-cyan-300">
                                {lang.percent}%
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
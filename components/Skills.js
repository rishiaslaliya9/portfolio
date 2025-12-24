"use client";

import { motion } from "framer-motion";

const skills = [
    "React.JS", "Python", "Database Management", "C++",
    "HTML/CSS", "Neural Networks", "Problem Solving",
    "SQL", "Research", "Analytical Skills",
    "Project Management", "Adaptability"
];

export default function Skills() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My <span className="gradient-text">Skills</span>
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-4 rounded-xl text-center cursor-default hover:border-primary/50 transition-colors"
                        >
                            <span className="font-medium text-gray-300">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

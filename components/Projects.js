"use client";

import { motion } from "framer-motion";
import { Folder, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Human Face Recognition Attendance System",
        description: "Fourth year minor project using computer vision to automate attendance marking.",
        tags: ["Python", "OpenCV", "AI"]
    },
    {
        title: "Fake Product Review Detection System",
        description: "Machine learning system to identify and filter out fake e-commerce reviews.",
        tags: ["ML", "Python", "NLP"]
    },
    {
        title: "AI Hospital Management System",
        description: "Smart management system optimizing hospital resource allocation using AI.",
        tags: ["AI", "Management", "System Design"]
    },
    {
        title: "Credit Card Fraud Detection System",
        description: "Financial security system detecting anomaly patterns in transaction data.",
        tags: ["Data Science", "Algorithm", "Security"]
    }
];

export default function Projects() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected <span className="gradient-text">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-white w-6 h-6" />
                            </div>

                            <div className="mb-6 inline-block p-3 rounded-lg bg-white/5 text-primary">
                                <Folder className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

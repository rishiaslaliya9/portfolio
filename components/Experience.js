"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experienceData = [
    {
        type: "work",
        title: "Full Stack Developer Trainee",
        organization: "Aliste Technologies",
        period: "12/2022 - 02/2023",
        description: "Contributed to the end-to-end development of a full-stack web application from scratch. Implemented back-end services with Node.js and designed an interactive front-end interface."
    }
];

const educationData = [
    {
        type: "education",
        title: "B.Tech in Artificial Intelligence",
        organization: "SRM Institute of Science and Technology",
        period: "09/2020 - 10/2024",
        description: "CGPA: 7.48"
    },
    {
        type: "education",
        title: "Highschool",
        organization: "Pace Global School, Mumbai",
        period: "03/2018 - 03/2020",
        description: ""
    }
];

export default function Experience() {
    return (
        <section className="py-20 bg-white/5">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My <span className="gradient-text">Journey</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Work Experience */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Briefcase className="text-primary" /> Work Experience
                        </h3>
                        <div className="space-y-6">
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card p-6 border-l-4 border-l-primary"
                                >
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                    <p className="text-gray-400 mb-2">{item.organization}</p>
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <Calendar className="w-4 h-4 mr-2" /> {item.period}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <GraduationCap className="text-secondary" /> Education
                        </h3>
                        <div className="space-y-6">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="glass-card p-6 border-l-4 border-l-secondary"
                                >
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                    <p className="text-gray-400 mb-2">{item.organization}</p>
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <Calendar className="w-4 h-4 mr-2" /> {item.period}
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

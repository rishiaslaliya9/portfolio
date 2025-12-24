"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium tracking-wider text-accent border border-accent/20 rounded-full bg-accent/5 backdrop-blur-sm">
                        AVAILABLE FOR WORK
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        Hi, I'm <span className="gradient-text">Rishi Aslaliya</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-light">
                        Front End & AI Developer
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-8 leading-relaxed">
                        I craft user-centric and visually appealing websites. With a strong foundation in HTML, C++, and Python, I transform design concepts into seamless interactive experiences.
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                        <a href="mailto:rishiaslaliya@gmail.com" className="p-3 glass-card hover:bg-white/10 text-white rounded-full transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                        {/* Note: User didn't provide GitHub/LinkedIn URLs, using placeholders or removing if careful, but placeholders are standard for templates. I'll strictly use what's available or generic mailto. */}
                        <div className="flex items-center gap-2 text-gray-400 ml-4">
                            <MapPin className="w-4 h-4" /> Chennai, India
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="w-6 h-6 text-gray-500" />
            </motion.div>
        </section>
    );
}

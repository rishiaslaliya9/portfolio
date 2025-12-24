"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <footer className="py-20 bg-black relative border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's <span className="gradient-text">Connect</span>
                </motion.h2>

                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-6 mb-12">
                    <a href="mailto:rishiaslaliya@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>Email Me</span>
                    </a>
                    <a href="tel:+918733827454" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                        <Phone className="w-5 h-5 text-secondary" />
                        <span>+91 8733827454</span>
                    </a>
                </div>

                <div className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Rishi Aslaliya. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

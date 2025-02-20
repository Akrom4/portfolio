"use client";
import React from "react";
import Image from "next/image";
import { education } from "@/data"; // Adjust the path if needed
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { FaAward, FaUserGraduate } from "react-icons/fa6";

const Education: React.FC = () => {
    return (
        <section id="formations" className="py-20 w-full">
            <h1 className="heading text-center mb-12">
                Mes <span className="text-purple">Formations</span>
            </h1>
            <div className="max-w-5xl mx-auto space-y-10 px-4">
                {education.map((edu) => (
                    <motion.div
                        key={edu.id}
                        className="flex flex-col md:flex-row items-start gap-6 border-b border-gray-700 pb-6 hover:scale-105 transition-transform duration-300"
                    >
                        {/* Text Content */}
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="text-lg md:text-2xl font-bold text-white flex items-center gap-2">
                                <FaAward style={{ color: "#CBACF9" }} className="w-5 h-5 flex-shrink-0" />
                                <span>{edu.degree}</span>
                            </div>

                            <p className="text-gray-300 text-sm flex items-center gap-2">
                                <FaMapMarkerAlt style={{ color: "#CBACF9" }} className="w-5 h-5" />
                                {edu.institution}, {edu.location}
                            </p>
                            <p className="text-gray-400 text-sm flex items-center gap-2">
                                <FaCalendarAlt style={{ color: "#CBACF9" }} className="w-5 h-5" />
                                {edu.period}
                            </p>
                            <p className="text-gray-200 text-base flex items-center gap-2">
                                <FaUserGraduate style={{ color: "#CBACF9" }} className="w-5 h-5" />
                                {edu.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;

"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button as MovingBordersButton } from "@/components/ui/MovingBorders"; // adjust this path if needed
import { projects } from "@/data"; // adjust this path if needed
import { motion } from "framer-motion";
import { FaCircleInfo } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface ProjectsProps {
  setModalOpen: (value: boolean) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setModalOpen }) => {
  // Track the active project for the modal
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActive(null);
        setModalOpen(false);
      }
    };

    if (active) {
      // Add clickOutside listener & lock background scroll
      document.addEventListener("mousedown", handleClickOutside);
      setModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      // Remove listener & unlock background scroll
      document.removeEventListener("mousedown", handleClickOutside);
      setModalOpen(false);
      document.body.style.overflow = "";
    }

    // Cleanup on unmount or when 'active' changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [active, setModalOpen]);

  return (
    <section id="projets">
      <div className="py-20 w-full">
        <h1 className="heading text-center mb-12">
          Mes <span className="text-purple">Projets</span>
        </h1>

        {/* Projects Cards Grid */}
        <div className="flex flex-col gap-10 items-center w-full">
          {projects.map((project, id) => (
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              key={`card-${project.title}-${id}`}
              className="w-2/3 h-auto"
            >
              <MovingBordersButton
                // Random duration for fun – adjust as desired
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="cursor-pointer"
                onClick={() => setActive(project)}
              >
                <div className="p-4 grid gap-4">
                  {/* Row 1: 16:9 Image and Text */}
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full md:w-40">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.title}
                          width="640"
                          height="360"
                          className="object-cover w-auto"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2 text-center md:text-left">
                      <h2 className="text-xl md:text-2xl font-bold">
                        {project.title}
                      </h2>
                      <p className="text-sm text-left md:text-base">
                        {project.des}
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Tech Stack Icons and "En savoir plus" Button */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap items-center overflow-visible">
                      {project.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt="tech icon"
                            width={32}
                            height={32}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>
                    {/* "En savoir plus" Button */}
                    <div className="inline-flex items-center gap-2 w-fit bg-purple-600 hover:bg-purple-700 text-purple text-sm font-bold py-2 px-4 rounded">
                      En savoir plus
                      <FaCircleInfo className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </MovingBordersButton>
            </motion.div>
          ))}
        </div>

        {/* Modal for Detailed Project Information */}
        {active && (
          <div className="fixed inset-0 z-50 bg-black/50">
            {/* 
              Because we're locking the body scroll (body.style.overflow='hidden'), 
              we don't need overflow here. The modal itself will scroll if needed.
            */}
            <div className="min-h-full flex items-center justify-center p-4">
              <div
                ref={modalRef}
                className="relative bg-white dark:bg-slate-900 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Sticky top area to keep the close button visible during scroll */}
                <div className="sticky top-0 z-10 flex justify-end p-4 bg-white dark:bg-slate-900">
                  <button
                    onClick={() => setActive(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </button>
                </div>

                {/* Modal content container */}
                <div className="px-4 pb-4">
                  <h2 className="text-2xl font-bold mb-4">{active.title}</h2>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={active.img}
                      alt={active.title}
                      width="640"
                      height="360"
                      className="object-cover"
                    />
                  </div>
                  <p className="mb-4">{active.des}</p>

                  {active.technicalDetails && (
                    <div className="mb-4">
                      <h3 className="font-bold mb-2">Détails Techniques:</h3>
                      <ul className="list-disc ml-5">
                        {active.technicalDetails.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
                    <div className="flex flex-wrap items-center">
                      {active.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt="tech icon"
                            width={32}
                            height={32}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>
                    {active.link && (
                      <a
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple inline-flex items-center"
                      >
                        Voir le projet
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="ml-2"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

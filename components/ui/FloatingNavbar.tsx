"use client";
import React from "react";
import { FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa6";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Icon mapping helper
const iconMap: Record<string, JSX.Element> = {
  FaUser: <FaUser />,
  FaCode: <FaCode />,
  FaBriefcase: <FaBriefcase />,
  FaGraduationCap: <FaGraduationCap />,
  FaEnvelope: <FaEnvelope />,
};

export function FloatingNav({
  navItems,
  className,
  modalOpen,
}: {
  navItems: { name: string; link: string; icon: string }[];
  className?: string;
  modalOpen: boolean;
}) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = React.useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number" && !modalOpen) {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible && !modalOpen ? 0 : -100,
          opacity: visible && !modalOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed z-[5000] top-10 inset-x-0 mx-auto flex items-center justify-center space-x-4",
          "max-w-fit md:min-w-[70vw] lg:min-w-fit px-10 py-5 rounded-lg",
          "border border-black/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => {
          const IconComponent = iconMap[navItem.icon] ?? null;
          return (
            <Link
              key={idx}
              href={navItem.link}
              className="relative flex items-center space-x-1 dark:text-neutral-50 text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              {/* Icon on mobile only */}
              {IconComponent && <span className="block sm:hidden">{IconComponent}</span>}

              {/* Text on sm+ screens */}
              <span className="hidden sm:block text-sm cursor-pointer">
                {navItem.name}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

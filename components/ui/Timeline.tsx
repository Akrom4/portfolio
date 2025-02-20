"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  // Default offset for larger screens: from 10% of container start to 50% of container end.
  const [scrollOffset, setScrollOffset] = useState<[
    `${string} ${string}`,
    `${string} ${string}`
  ]>(["start 10%", "end 50%"]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Adjust the offset based on the viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // On mobile: use full height (from 0% to 100%)
        setScrollOffset(["start 0%", "end 100%"]);
      } else {
        // On larger screens: use the original offset
        setScrollOffset(["start 10%", "end 50%"]);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset as [
      `${number} ${number}%`,
      `${number} ${number}%`
    ],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full relative bg-transparent md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-6 md:pt-20 md:gap-10">
            {/* Left column: Timeline dot and title (period) */}
            <div className="md:sticky relative flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-purple flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white border border-purple p-2" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 font-bold text-white">
                {item.title}
              </h3>
            </div>
            {/* Right column: Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        {/* Vertical progress line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-400 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

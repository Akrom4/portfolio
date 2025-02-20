"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateProps {
  words: string;        // The string to animate
  className?: string;   // Optional additional classes
  purpleIndex?: number; // Which word (0-based) should be purple
}

export const TextGenerateEffect = ({
  words,
  className,
  purpleIndex = 0, // default to the first word if none specified
}: TextGenerateProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Animate each span with a staggered delay
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isPurple = idx === purpleIndex;
          return (
            <motion.span
              key={word + idx}
              className={
                (isPurple
                  ? "text-purple"
                  : "dark:text-white text-black") + " opacity-0"
              }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

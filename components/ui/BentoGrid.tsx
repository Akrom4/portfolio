"use client";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { stackList } from "@/data/index";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // Optional: Keep copy functionality if you want the email copy button to still work
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "fchaplain@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image Container */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className={cn("absolute right-0 -bottom-5", id === 5 && "w-full opacity-80")}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* An absolutely positioned overlay if needed */}
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Description */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#dadae4] z-10">
            {description}
          </div>

          {/* Title */}
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {/* Example: Tech stack list (id === 3) */}
          {id === 3 && (
            <div className="pt-4 grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {stackList.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 justify-center w-20 h-20 lg:w-24 lg:h-24 bg-[#10132E] rounded-lg"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                  <span className="text-xs lg:text-sm text-white opacity-80 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Example: Email Copy Button (id === 6) */}
          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email copié" : "Copier mon email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

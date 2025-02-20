"use client";
import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/**
       *  UI: Spotlights – using Aceternity UI's Spotlight component.
       */}
      <div>
        <Spotlight />
      </div>

      {/**
       *  Grid background with a radial gradient for a subtle, modern look.
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white
         dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
         absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center
         justify-center dark:bg-black-100 bg-white
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Fabrice Chaplain"
            purpleIndex={0}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <TextGenerateEffect
            words="Développeur Web"
            purpleIndex={1}
            className="text-center text-[40px] md:text-5xl lg:text-6xl -mt-2"
          />


          {/* Subheading */}
          <p className="text-center pt-4 md:pt-10 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Construisons ensemble des solutions web <span className="text-purple">modernes</span> et <span className="text-purple">intuitives</span>
          </p>

          {/* Call-to-Action Button(s) */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a href="/cv_Fabrice_Chaplain_WebDev.pdf" download>
              <MagicButton
                title="Télécharger mon C.V."
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

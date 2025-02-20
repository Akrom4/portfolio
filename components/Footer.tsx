import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          À la recherche d&apos;un développeur <span className="text-purple">motivé</span> et <span className="text-purple">compétent</span> ?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Actuellement en recherche d&apos;opportunités, je serais ravi d&apos;échanger avec vous sur la manière dont je peux contribuer à votre équipe.
        </p>
        <a href="mailto:fchaplain@gmail.com">
          <MagicButton
            title="Entrons en contact"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Fabrice Chaplain
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

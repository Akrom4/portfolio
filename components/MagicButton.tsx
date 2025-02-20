import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  Classes = "relative bg-slate-950 inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none border-2 border-white",
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  Classes?: string;
  otherClasses?: string;
}) => {
  return (
    <button
      className={Classes}
      onClick={handleClick}
    >
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-4 py-2
             bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}

        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;

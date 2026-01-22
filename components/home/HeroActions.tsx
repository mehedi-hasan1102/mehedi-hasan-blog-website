"use client";

import { Download, Mail } from "lucide-react";

const HeroActions = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("hire-me")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-5 flex flex-wrap items-center gap-4">
      <a
        href="/Resume_of_Mehedi_Hasan.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-base-content/80 hover:text-primary transition-colors"
      >
        <Download size={16} />
        Resume
      </a>

      <a
        href="#hire-me"
        onClick={handleScroll}
        className="inline-flex items-center gap-2 text-sm font-medium text-base-content/80 hover:text-primary transition-colors"
      >
        <Mail size={16} />
        Hire Me
      </a>
    </div>
  );
};

export default HeroActions;

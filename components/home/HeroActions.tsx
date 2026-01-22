"use client";

import { Download, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const HeroActions = () => {
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

      <ScrollLink
        to="hire-me"
        smooth
        duration={500}
        className="inline-flex items-center gap-2 text-sm font-medium text-base-content/80 hover:text-primary cursor-pointer transition-colors"
      >
        <Mail size={16} />
        Hire Me
      </ScrollLink>
    </div>
  );
};

export default HeroActions;

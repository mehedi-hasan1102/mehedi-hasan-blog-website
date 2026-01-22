"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <span className="ml-1">
      <Typewriter
        words={[""]}
        cursor
        cursorStyle="_"
        typeSpeed={90}
      />
    </span>
  );
}

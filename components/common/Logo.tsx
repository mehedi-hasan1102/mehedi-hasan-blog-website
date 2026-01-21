"use client";

import Link from "next/link";
import clsx from "clsx";
import { Birthstone } from "next/font/google";
import { Code2 } from "lucide-react";

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
});

interface LogoProps {
  href?: string;
  className?: string;
  showIcon?: boolean;
}

export default function Logo({
  href = "/",
  className,
  showIcon = true,
}: LogoProps) {
  return (
    <Link href={href} className={clsx("inline-flex", className)}>
      <div
        className="flex items-center gap-2 cursor-pointer select-none
                   transition-transform duration-200 ease-out
                   hover:scale-[1.03]"
      >
        {showIcon && (
          <Code2 size={22} className="text-primary" />
        )}

        <span
          className={`${birthstone.className} text-lg sm:text-2xl leading-none text-primary`}
        >
          Mehedi
          <span className="text-base-content/60"> Hasan</span>
        </span>
      </div>
    </Link>
  );
}

'use client';

import React, { memo, useMemo } from "react";
import Marquee from "react-fast-marquee";
import skillsData from "@/data/skills-list.json";

import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

/* ------------------ Types ------------------ */

type TechIcon = {
  icon: React.ElementType;
  label: string;
};

type SkillCategory = {
  category: string;
  skills: string[];
};

/* ------------------ Static Data ------------------ */

const techIconsRow1: TechIcon[] = [
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiExpress, label: "Express.js" },
];

const techIconsRow2: TechIcon[] = [
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiGit, label: "Git" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: SiJavascript, label: "JavaScript" },
];

/* ------------------ Component ------------------ */

const SkillsSection: React.FC = () => {
  const skillItems = skillsData as SkillCategory[];

  const marqueeRow1 = useMemo(() => [...techIconsRow1, ...techIconsRow1], []);
  const marqueeRow2 = useMemo(() => [...techIconsRow2, ...techIconsRow2], []);

  return (
    <section className="text-base-content font-geist max-w-3xl mx-auto pt-1">
      <div className="relative overflow-hidden rounded-lg p-4 backdrop-blur-sm">

        {/* Header */}
        <div className="text-start m-4">
          <p className="text-sm text-base-content mb-0">• Skills</p>
          <h2 className="text-2xl">
            Expertise <span className="text-base-content/60">Area</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-4 items-center mx-auto">

          {/* Marquee Icons */}
          <div className="space-y-4">
            <div className="overflow-hidden w-[288px] md:w-auto mx-auto">
              <Marquee
                direction="right"
                speed={25}
                pauseOnHover
                gradient={false}
                delay={0}
                play
              >
                <div className="flex gap-4 w-max pr-4">
                  {marqueeRow1.map(({ icon: Icon, label }, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 flex items-center justify-center rounded-md p-2
                                 hover:border-primary border border-transparent transition-colors"
                      title={label}
                    >
                      <Icon size={24} />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>

            <div className="overflow-hidden w-[288px] md:w-auto mx-auto">
              <Marquee
                direction="left"
                speed={25}
                pauseOnHover
                gradient={false}
                delay={0}
                play
              >
                <div className="flex gap-4 w-max pr-4">
                  {marqueeRow2.map(({ icon: Icon, label }, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 flex items-center justify-center rounded-md p-2
                                 hover:border-primary border border-transparent transition-colors"
                      title={label}
                    >
                      <Icon size={24} />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>

          {/* Skills List */}
          <ul className="text-sm space-y-3 tracking-wide">
            {skillItems.map(({ category, skills }) => (
              <li
                key={category}
                className="pl-4 border-l-2 border-primary/50 hover:border-primary transition-colors"
              >
                <span className="text-base-content font-medium">
                  {category}:
                </span>
                <span className="text-base-content/60">
                  {" "}{skills.join(", ")}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default memo(SkillsSection);

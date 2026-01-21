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

type TechIcon = {
  icon: React.ElementType;
  label: string;
};

type SkillCategory = {
  category: string;
  skills: string[];
};

const techIconsRow1: TechIcon[] = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiFirebase, label: "Firebase" },
];

const techIconsRow2: TechIcon[] = [
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiGit, label: "Git" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
];

const SkillsSection: React.FC = () => {
  const skillItems = skillsData as SkillCategory[];

  const marqueeRow1 = useMemo(() => [...techIconsRow1, ...techIconsRow1], []);
  const marqueeRow2 = useMemo(() => [...techIconsRow2, ...techIconsRow2], []);

  return (
    <section className="max-w-3xl mx-auto px-4 text-base-content font-geist">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold tracking-tight">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-start">
        {/* Marquee */}
        <div className="space-y-3">
          <div className="overflow-hidden w-full">
            <Marquee
              direction="right"
              speed={18}
              pauseOnHover
              gradient={false}
            >
              <div className="flex gap-4 pr-5">
                {marqueeRow1.map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 flex items-center justify-center"
                    title={label}
                  >
                    <Icon size={18} className="text-base-content/70" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          <div className="overflow-hidden w-full">
            <Marquee
              direction="left"
              speed={18}
              pauseOnHover
              gradient={false}
            >
              <div className="flex gap-4 pr-5">
                {marqueeRow2.map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 flex items-center justify-center"
                    title={label}
                  >
                    <Icon size={18} className="text-base-content/70" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* Skill list */}
        <ul className="space-y-3 text-sm leading-relaxed">
          {skillItems.map(({ category, skills }) => (
            <li key={category}>
              <span className="font-medium text-base-content">
                {category}:
              </span>
              <span className="text-base-content/60">
                {" "}{skills.join(", ")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(SkillsSection);

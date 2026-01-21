'use client';

import React from "react";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiExpress,
} from "react-icons/si";

const whatIDo = [
  {
    text: "Build modern, responsive UIs with React & Next.js",
    icon: SiNextdotjs,
  },
  {
    text: "Develop REST APIs using Node.js & Express",
    icon: SiExpress,
  },
  {
    text: "Design MongoDB schemas and implement CRUD operations",
    icon: SiMongodb,
  },
  {
    text: "Implement authentication & role-based access (JWT / Firebase)",
    icon: SiFirebase,
  },
  {
    text: "Optimize performance and user experience",
    icon: SiTailwindcss,
  },
  {
    text: "Collaborate with Git, GitHub, and version control best practices",
    icon: SiGithub,
  },
];

const WhatIDoSection: React.FC = () => {
  return (
    <section
      className="max-w-3xl mx-auto p-4 rounded-lg mt-1"
      id="what-i-do"
    >
      {/* Heading */}
      <div className="text-start m-4">
        <p className="text-sm text-base-content mb-0">• What I Do</p>
        <h2 className="text-2xl">
          Adding <span className="text-base-content/60"> Value</span>
        </h2>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {whatIDo.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 border border-primary/30 rounded-lg shadow-sm
                         transition-transform duration-200 ease-out hover:translate-x-1 hover:shadow-md"
            >
              <IconComponent size={32} className="mt-1" />
              <p className="text-base text-base-content/80">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatIDoSection;

'use client';

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import aboutDataJson from "@/data/resume.json";

/* ---------------- Types ---------------- */
interface ExperienceItem {
  title: string;
  time?: string;
  organization?: string;
  description?: string;
  profileLink?: string | null;
}

interface EducationItem {
  institution: string;
  degree: string;
  details?: string;
  credentialLink?: string | null;
}

interface AboutData {
  education: EducationItem[];
  experience: ExperienceItem[];
}

/* ---------------- Helpers ---------------- */
const initializeAboutData = (data: typeof aboutDataJson): AboutData => {
  const extractYear = (value?: string | null) =>
    parseInt(value?.match(/\d{4}/)?.[0] || "0", 10);

  return {
    education: [...data.education].sort(
      (a, b) => extractYear(b.details) - extractYear(a.details)
    ),
    experience: [...data.experience].sort(
      (a, b) => extractYear(b.time) - extractYear(a.time)
    ),
  };
};

/* ---------------- Component ---------------- */
const ResumeAboutSections: React.FC = () => {
  const [aboutData] = useState<AboutData>(() =>
    initializeAboutData(aboutDataJson)
  );

  return (
    <section className="text-base-content font-geist max-w-3xl mx-auto pt-6 px-0 space-y-8">
      {/* ================= Experience ================= */}
      <div className="relative rounded-lg p-0 backdrop-blur-sm">
        <h3 className="flex items-center gap-3 text-xl mb-4">
          Experience
        </h3>

        <ul className="space-y-4">
          {aboutData.experience.map((item, idx) => (
            <li
              key={idx}
              className="
                group p-4 rounded-lg
                transition-colors transition-shadow
                hover:bg-base-200
              "
            >
              <p className="font-medium transition-colors">
                {item.title}
              </p>

              {item.organization && (
                <p className="mt-1 text-base-content/70 transition-colors">
                  {item.organization}
                  {item.time && ` | ${item.time}`}
                </p>
              )}

              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-base-content/60 transition-colors">
                  {item.description}
                </p>
              )}

              {item.profileLink && (
                <a
                  href={item.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex mt-2 items-center gap-1 text-sm
                    text-base-content/70
                    transition-all
                    hover:text-primary
                    underline-offset-6 decoration-dashed
                    hover:underline
                  "
                >
                  View Profile
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Education ================= */}
      <div className="relative rounded-lg p-0 backdrop-blur-sm">
        <h3 className="flex items-center gap-3 text-xl mb-4">
          Education
        </h3>

        <ul className="space-y-4">
          {aboutData.education.map((edu, idx) => (
            <li
              key={idx}
              className="group p-4 rounded-lg hover:bg-base-200 transition-colors"
            >
              <p className="font-medium transition-colors">
                {edu.institution}
              </p>

              <p className="mt-1 text-base-content/70 transition-colors">
                {edu.degree}
                {edu.details && ` | ${edu.details}`}
              </p>

              {edu.credentialLink && (
                <a
                  href={edu.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex mt-2 items-center gap-1 text-sm
                    text-base-content/70
                    transition-all
                    hover:text-primary
                    underline-offset-6 decoration-dashed
                    hover:underline
                  "
                >
                  View Credential
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ResumeAboutSections;

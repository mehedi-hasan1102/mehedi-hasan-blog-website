'use client';

import React, { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import SimpleBar from "simplebar-react";
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

/* ---------------- Memoized List Item ---------------- */

const ListItem: React.FC<{
  title: string;
  details?: string;
  extra?: React.ReactNode;
}> = React.memo(({ title, details, extra }) => (
  <li
    className="
      border border-primary/30 rounded-lg p-4
      transition-all duration-200 ease-out
      hover:-translate-y-0.5 hover:shadow-md
    "
  >
    <p className="font-medium">{title}</p>

    {details && (
      <p className="text-sm text-base-content/70 mt-1">
        {details}
      </p>
    )}

    {extra}
  </li>
));

ListItem.displayName = "ListItem";

/* ---------------- Component ---------------- */

const ResumeSections: React.FC = () => {
  const aboutData = useMemo(() => initializeAboutData(aboutDataJson), []);

  return (
    <section className="text-base-content font-geist max-w-3xl mx-auto pt-1">
      <div className="grid md:grid-cols-2 gap-1">

        {/* ================= Experience ================= */}
        <div className="relative overflow-hidden rounded-lg p-4">
          <div className="text-start m-4">
            <p className="text-sm text-base-content mb-0">• Experience</p>
            <h2 className="text-2xl">
              Career <span className="text-base-content/60">Highlights</span>
            </h2>
          </div>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-4 list-none p-0">
              {aboutData.experience.map((item) => (
                <ListItem
                  key={`${item.title}-${item.organization ?? "org"}`}
                  title={item.title}
                  details={
                    item.organization
                      ? `${item.organization}${item.time ? ` | ${item.time}` : ""}`
                      : undefined
                  }
                  extra={
                    (item.description || item.profileLink) && (
                      <div className="mt-2">
                        {item.description && (
                          <p className="text-sm text-base-content/60 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {item.profileLink && (
                          <a
                            href={item.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex mt-1 group items-center gap-1 text-sm
                                       transition-colors hover:text-primary
                                       underline-offset-4 hover:underline"
                          >
                            View Profile
                            <ArrowUpRight
                              size={14}
                              className="transition-transform group-hover:translate-x-0.5"
                            />
                          </a>
                        )}
                      </div>
                    )
                  }
                />
              ))}
            </ul>
          </SimpleBar>
        </div>

        {/* ================= Education ================= */}
        <div className="relative overflow-hidden rounded-lg p-4">
          <div className="text-start m-4">
            <p className="text-sm text-base-content mb-0">• Education</p>
            <h2 className="text-2xl">
              Academic <span className="text-base-content/60">Background</span>
            </h2>
          </div>

          <SimpleBar className="max-h-[300px] pr-2">
            <ul className="space-y-4 list-none mb-0">
              {aboutData.education.map((edu) => (
                <ListItem
                  key={`${edu.institution}-${edu.degree}`}
                  title={edu.institution}
                  details={`${edu.degree}${edu.details ? ` | ${edu.details}` : ""}`}
                  extra={
                    edu.credentialLink && (
                      <a
                        href={edu.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex mt-1 group items-center gap-1 text-sm
                                   transition-colors hover:text-primary
                                   underline-offset-4 hover:underline"
                      >
                        View Credential
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </a>
                    )
                  }
                />
              ))}
            </ul>
          </SimpleBar>
        </div>

      </div>
    </section>
  );
};

export default ResumeSections;

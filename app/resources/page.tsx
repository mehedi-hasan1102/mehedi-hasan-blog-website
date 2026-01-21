'use client';

import React from "react";
import resourcesJson from "@/data/resources.json";

type ResourceItem = {
  title: string;
  href: string;
  description?: string;
};

type ResourceCategory = {
  category: string;
  items: ResourceItem[];
};

const ResourcesPage: React.FC = () => {
  const data: ResourceCategory[] = resourcesJson.resources;

  return (
    <section className="text-base-content font-geist max-w-3xl mx-auto pt-20 min-h-screen p-4 backdrop-blur-sm">
      
      {/* Header */}
      <header className="mb-8 text-start">
        <h2 className="text-3xl">Resources</h2>
        <p className="mt-4 text-sm sm:text-base text-base-content/80 leading-relaxed">
          A curated list of tools, libraries, and learning materials I frequently use.
        </p>
      </header>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((category) => (
          <section
            key={category.category}
            className="rounded-xl p-4"
          >
            <h3 className="text-lg font-medium mb-4">
              {category.category}
            </h3>

            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item.title}
                  className="group rounded-lg p-4 hover:bg-base-200 transition-colors"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      font-medium
                      text-base-content
                      group-hover:text-primary
                      group-hover:underline
                      underline-offset-4
                      transition-colors
                    "
                  >
                    {item.title}
                  </a>

                  {item.description && (
                    <p className="mt-2 text-sm text-base-content/70 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ResourcesPage;

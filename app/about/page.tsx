'use client';

import Image from "next/image";
import dynamic from "next/dynamic";

const SkillsAboutSection = dynamic(
  () => import("@/components/about/Skills-about"),
  { ssr: false }
);
const ResumeAboutSection = dynamic(
  () => import("@/components/about/Resume-about"),
  { ssr: false }
);
const GitHubAboutSection = dynamic(
  () => import("@/components/about/GitHub-about"),
  { ssr: false }
);

export default function AboutPage() {
  return (
    <section className="font-geist text-base-content mx-auto pt-20 max-w-3xl min-h-screen">
      <div className="rounded-lg p-4 backdrop-blur-sm space-y-8">

        {/* Header */}
        <div className="m-4">
          <p className="text-sm text-base-content mb-0">• About</p>
          <h1 className="text-2xl md:text-3xl">
            Mehedi <span className="text-base-content/60">Hasan</span>
          </h1>
        </div>

        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4">
          {/* Image */}
          <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72
                          mx-auto md:mx-0 overflow-hidden rounded-2xl
                          shadow-md flex-shrink-0">
            <Image
              src="/assets/images/about.png"
              alt="Mehedi Hasan"
              fill
              sizes="(max-width: 768px) 200px, 224px"
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              I’m a Full-Stack Web Developer focused on building fast, scalable,
              and maintainable web applications using{" "}
              <span className="font-medium text-base-content">
                Next.js, React, Node.js, and MongoDB
              </span>.
            </p>

            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              My work emphasizes clean architecture, performance, and thoughtful
              user experience. I enjoy turning complex ideas into reliable,
              real-world solutions.
            </p>

            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              I actively contribute to projects, explore modern web tooling, and
              collaborate with teams to ship high-quality products.
            </p>

            <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
              Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/mehedi-hasan1102/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary
                           underline underline-offset-6
                           decoration-dashed transition-colors"
              >
                LinkedIn
              </a>.
            </p>
          </div>
        </div>

        {/* Sections */}
        <SkillsAboutSection />
        <ResumeAboutSection />
        <GitHubAboutSection />

      </div>
    </section>
  );
}

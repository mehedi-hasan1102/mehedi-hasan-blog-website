// ================================================
// IMPORTS
// ================================================
import HeroSection from '@/components/home/Hero';
import ResumeSections from '@/components/home/Resume';
import { ScrollProgress } from "@/components/ui/scroll-progress";
import ProjectsHomePage from '@/components/home/ProjectsHomePage';
import BlogHomePage from '@/components/home/BlogHomePage';
import GitHubActivitySection from '@/components/home/GitHub';
import SkillsSection from '@/components/home/Skills';
import ContactHomePage from '@/components/home/ContactHomePage';
import WhatIDoSection from '@/components/home/WhatIDoSection';
import { getSortedBlogsData } from '@/lib/blogs';
import UpcomingProjects from '@/components/home/UpcomingProject';

// ================================================
// HOME PAGE COMPONENT
// ================================================
export default async function Home() {
    // 🔹 Fetch all blogs
    const allBlogsData = await getSortedBlogsData();

    // 🔹 Get latest 3 blogs for homepage
    const latestBlogs = allBlogsData
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <div className="min-h-screen font-geist relative pt-20">

            {/* ================================================
          SCROLL PROGRESS INDICATOR
      ================================================ */}
            <ScrollProgress />

            {/* ================================================
          1. Hero Section – Identity & CTA
      ================================================ */}
            <HeroSection />

            {/* ================================================
          2. Skills Section – Quick Technical Validation
      ================================================ */}
            <SkillsSection />

            {/* ================================================
          3. Featured Projects – Primary Proof
      ================================================ */}
            <ProjectsHomePage />

            {/* ================================================
              4. Upcoming Projects – Primary Proof
             ================================================ */}


            <UpcomingProjects />



            {/* ================================================
          5. What I Do – Services / Offerings
      ================================================ */}
            <WhatIDoSection />

            {/* ================================================
          6. Resume Section – Hiring Support
      ================================================ */}
            <ResumeSections />

            {/* ================================================
          7. Blog Section – Thought Leadership
      ================================================ */}
            <BlogHomePage latestBlogs={latestBlogs} />

            {/* ================================================
          8. GitHub Section – Activity Proof
      ================================================ */}
            <GitHubActivitySection />

            {/* ================================================
          9. Contact Section – Conversion
      ================================================ */}
            <ContactHomePage />

        </div>
    );
}

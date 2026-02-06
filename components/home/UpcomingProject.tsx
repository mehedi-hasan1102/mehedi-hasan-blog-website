'use client';

import React, { useState } from "react";
import projectsData from "@/data/upcomingprojects.json";
import ProjectCard, { Project } from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";




const UpcomingProjects: React.FC = () => {
  const projects: Project[] = projectsData as Project[];
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // Show only 2 or 3 upcoming projects
  const upcomingProjects = projects.slice(0, 3); // adjust number as needed

  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-6 text-base-content font-geist">
        {/* Header */}
        <div className="mb-5">
          <h2 className="text-lg font-semibold tracking-tight">
            Upcoming Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          {upcomingProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpenModal={openModal}
            />
          ))}
        </div>

        {/* Footer link */}
       
      </section>

      {/* Modal */}
      <ProjectModal
        showModal={showModal}
        selectedProject={selectedProject}
        closeModal={closeModal}
      />
    </>
  );
};

export default UpcomingProjects;

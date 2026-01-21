'use client';

import React, { useState } from "react";
import projectsData from "@/data/projects.json";
import ProjectCard, { Project } from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const ProjectsHomePage: React.FC = () => {
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

  const displayedProjects = projects.slice(0, 6);

  return (
    <>
      <section className="text-base-content font-geist mx-auto pt-1 max-w-3xl">
        <div className="relative overflow-hidden rounded-lg p-4 backdrop-blur-sm transition-shadow duration-300">

          <div className="text-start m-4">
            <p className="text-sm text-base-content mb-0">• Projects</p>
            <h2 className="text-2xl">
              Recent <span className="text-base-content/60"> Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenModal={openModal}
              />
            ))}
          </div>

          <div className="m-4 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1 hover:text-primary text-sm font-geist transition-all duration-300 hover:underline underline-offset-6 decoration-dashed"
            >
              See More
              <ChevronDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <ProjectModal
        showModal={showModal}
        selectedProject={selectedProject}
        closeModal={closeModal}
      />
    </>
  );
};

export default ProjectsHomePage;

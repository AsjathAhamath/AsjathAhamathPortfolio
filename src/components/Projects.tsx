import React, { useState } from 'react';
import { Sparkles, FolderGit2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = [
    'All',
    'Full-Stack Mobile & Web',
    'Desktop Management System',
    'Data Structures & Algorithms',
  ];

  const filteredProjects =
    categoryFilter === 'All'
      ? projects
      : projects.filter((p) => {
          if (categoryFilter === 'Full-Stack Mobile & Web') {
            return p.category.includes('Mobile & Web');
          }
          if (categoryFilter === 'Desktop Management System') {
            return p.category.includes('Desktop');
          }
          if (categoryFilter === 'Data Structures & Algorithms') {
            return p.category.includes('Data Structures');
          }
          return true;
        });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#8B5CF6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects & Systems
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Real-world web, mobile, desktop, and algorithmic software engineering projects built with production-grade architectures.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                categoryFilter === cat
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/25 border border-purple-400/30'
                  : 'bg-[#151821] text-[#9CA3AF] hover:text-white hover:bg-[#1C202D] border border-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* GitHub Repository Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#101218] border border-white/8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
              <FolderGit2 className="w-5 h-5 text-[#06B6D4]" />
              <span>Looking for more code repositories?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF]">
              Browse additional academic assignments, component experiments, and utility libraries on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/AsjathAhamath"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#151821] hover:bg-[#1C202D] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-semibold text-white transition-all shrink-0"
          >
            Visit GitHub Profile
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

import React from 'react';
import { ExternalLink, Sparkles, Navigation, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const isFeatured = project.featured;

  return (
    <div
      className={`rounded-2xl bg-[#151821] border border-white/8 hover:border-[#8B5CF6]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
        isFeatured
          ? 'lg:col-span-12 p-7 sm:p-9 shadow-xl shadow-purple-950/10'
          : 'lg:col-span-6 p-6 sm:p-8'
      }`}
    >
      <div>
        {/* Top bar: Category Badge + GitHub Link */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#101218] border border-white/8 text-xs font-mono text-[#06B6D4]">
              {project.category}
            </span>
            {isFeatured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[11px] font-mono text-[#A78BFA]">
                <Sparkles className="w-3 h-3" />
                Featured System
              </span>
            )}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#101218] border border-white/8 text-[#9CA3AF] hover:text-white hover:border-white/20 transition-all"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Title */}
        <h3
          onClick={() => onOpenModal(project)}
          className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#A78BFA] transition-colors cursor-pointer text-left flex items-center justify-between"
        >
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#06B6D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
        </h3>

        {/* Short Description */}
        <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed text-left mt-3">
          {project.shortDescription}
        </p>

        {/* Featured Project Visual Mockup / Architecture Box */}
        {isFeatured ? (
          <div className="my-6 p-5 rounded-xl bg-[#0B0D13] border border-white/8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-3.5 rounded-lg bg-[#151821]/80 border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#06B6D4]">
                <Navigation className="w-3.5 h-3.5" />
                <span>Live Location Sync</span>
              </div>
              <p className="text-xs text-gray-400">
                Sub-second GPS coordination across multi-vehicle travel groups.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#151821]/80 border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6]">
                <Layers className="w-3.5 h-3.5" />
                <span>Cross-Platform Client</span>
              </div>
              <p className="text-xs text-gray-400">
                React Native mobile app paired with React.js web administration.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#151821]/80 border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI Travel Assistance</span>
              </div>
              <p className="text-xs text-gray-400">
                Google Maps API routing integrated with Google Gemini AI intelligence.
              </p>
            </div>
          </div>
        ) : (
          <div className="my-4" />
        )}

        {/* Key Features List */}
        <div className="text-left space-y-2 mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
            Key Capabilities:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar: Tech Badges & View Details Trigger */}
      <div className="pt-4 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#101218] border border-white/8 text-[11px] font-mono text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1C202D] hover:bg-[#8B5CF6] border border-white/10 hover:border-purple-400/40 rounded-xl transition-all cursor-pointer self-start sm:self-auto"
        >
          <span>View Details</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

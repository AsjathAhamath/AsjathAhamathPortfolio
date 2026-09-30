import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Layers, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#151821] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto z-10 text-left p-6 sm:p-9 space-y-7">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/8">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#101218] border border-white/8 text-xs font-mono text-[#06B6D4]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gray-400">
                {project.mockupBadge}
              </span>
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#101218] border border-white/8 text-gray-400 hover:text-white hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#A78BFA]">
            Project Overview
          </h3>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#101218] border border-white/8 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#101218] border border-white/8 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>The Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4]">
            Implemented Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture & Approach */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300">
            <Layers className="w-4 h-4" />
            <span>Architecture & Technical Approach</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0B0D13] border border-white/8 space-y-2">
            {project.architecture.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                <span className="text-[#06B6D4] font-mono text-xs mt-0.5">0{idx + 1}.</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Challenges */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
            <Cpu className="w-4 h-4" />
            <span>Engineering Challenges & Solutions</span>
          </div>
          <ul className="space-y-2">
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 mt-2 shrink-0" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Badges */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[#101218] border border-white/8 text-xs font-mono text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] rounded-xl shadow-lg shadow-[#8B5CF6]/20 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white bg-[#101218] hover:bg-[#1C202D] border border-white/8 rounded-xl transition-all"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

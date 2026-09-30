import React from 'react';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="pt-16 pb-12 bg-[#06070A] border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/8 items-start">

          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#151821] border border-white/10 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-[#8B5CF6]" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#06B6D4] font-medium font-mono">
              {personalInfo.title}
            </p>

            <p className="text-xs text-[#9CA3AF] max-w-md leading-relaxed">
              Software Engineering graduate based in Colombo, Sri Lanka. Developing scalable web, mobile, and full-stack solutions with modern architectural standards.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top Col */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end justify-between space-y-4">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-[#151821] border border-white/8 text-[#9CA3AF] hover:text-white hover:border-white/20 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#151821] border border-white/8 text-[#9CA3AF] hover:text-[#06B6D4] hover:border-[#06B6D4]/30 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-[#151821] border border-white/8 text-[#9CA3AF] hover:text-[#8B5CF6] hover:border-[#8B5CF6]/30 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-gray-400 hover:text-white bg-[#101218] border border-white/8 rounded-lg hover:border-white/20 transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>© 2026 Asjath Ahamath. All rights reserved.</p>
          <p className="text-[11px] font-mono text-white/30">
            Engineered with React 19, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

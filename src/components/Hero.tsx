import React, { useState } from 'react';
import {
  MapPin,
  ArrowRight,
  FileDown,
  Terminal,
  CheckCircle2,
  Copy,
  Code2,
  Layers,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer' | 'stack' | 'terminal'>('developer');
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('npx asjath-portfolio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-10 md:pt-36 md:pb-8 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#8B5CF6]/15 via-[#06B6D4]/10 to-transparent blur-[110px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#06B6D4]/5 blur-[80px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Personal Brand & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151821] border border-white/10 shadow-inner">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-5 h-5 rounded-full object-cover border border-white/20 shrink-0"
              />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-[#F5F7FA] tracking-wide">
                {personalInfo.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Building scalable digital experiences with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#06B6D4]">
                  code.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#A78BFA] flex items-center gap-2 pt-1">
                <span>{personalInfo.headlineHighlight}</span>
                <span className="text-white/30">•</span>
                <span className="text-[#9CA3AF] text-base font-normal">Full-Stack & Mobile</span>
              </p>
            </div>

            {/* Supporting Bio */}
            <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Location Indicator */}
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <MapPin className="w-4 h-4 text-[#06B6D4]" />
              <span>{personalInfo.location}</span>
              <span className="text-white/20">|</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/8 text-gray-300">
                BEng (Hons) Software Engineering
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] rounded-xl shadow-lg shadow-[#8B5CF6]/25 border border-purple-400/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Asjath_Ahamath_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#F5F7FA] bg-[#151821] hover:bg-[#1C202D] border border-white/10 hover:border-white/20 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-[#06B6D4]" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-[#151821] border border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-[#151821] border border-white/10 text-[#9CA3AF] hover:text-[#06B6D4] hover:border-[#06B6D4]/40 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Tech Pill Ribbon */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs text-[#9CA3AF]">
              <span className="text-white/40 uppercase tracking-wider text-[10px] font-mono">Core Tech:</span>
              {['Laravel', 'React', 'React Native', 'C# / .NET', 'Node.js', 'SQL'].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-[#101218] border border-white/8 text-gray-300 font-mono text-[11px]">
                  {t}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Developer Code & Terminal Workstation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#151821] border border-white/10 shadow-2xl overflow-hidden group">

              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#101218] border-b border-white/8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  </div>
                  <span className="text-[11px] font-mono text-white/40 ml-2">asjath@workspace:~</span>
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1 bg-[#08090D] p-0.5 rounded-lg border border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveTab('developer')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${activeTab === 'developer'
                      ? 'bg-[#151821] text-[#A78BFA] border border-white/10'
                      : 'text-[#9CA3AF] hover:text-white'
                      }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>profile.ts</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('stack')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${activeTab === 'stack'
                      ? 'bg-[#151821] text-[#06B6D4] border border-white/10'
                      : 'text-[#9CA3AF] hover:text-white'
                      }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>stack.json</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${activeTab === 'terminal'
                      ? 'bg-[#151821] text-emerald-400 border border-white/10'
                      : 'text-[#9CA3AF] hover:text-white'
                      }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>bash</span>
                  </button>
                </div>
              </div>

              {/* Code Content Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[340px] bg-[#0A0C11]">
                {activeTab === 'developer' && (
                  <div className="space-y-1 text-gray-300">
                    <div>
                      <span className="text-purple-400">interface</span>{' '}
                      <span className="text-cyan-300">SoftwareEngineer</span> {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-400">name:</span>{' '}
                      <span className="text-emerald-300">'Asjath Ahamath'</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-400">role:</span>{' '}
                      <span className="text-emerald-300">'Full-Stack Developer'</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-400">location:</span>{' '}
                      <span className="text-emerald-300">'Colombo, Sri Lanka'</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-400">education:</span>{' '}
                      <span className="text-emerald-300">'BEng (Hons) Software Engineering'</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-400">internship:</span>{' '}
                      <span className="text-emerald-300">'GoSetup Pvt Ltd'</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-400">status:</span>{' '}
                      <span className="text-emerald-400 font-semibold">'Ready for Opportunities'</span>;
                    </div>
                    <div>{'}'}</div>
                    <div className="pt-2">
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">asjath</span>:{' '}
                      <span className="text-cyan-300">SoftwareEngineer</span> = {'{'}
                    </div>
                    <div className="pl-4 text-gray-400">
                      // Hands-on development across web, mobile & APIs
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">deliver</span>:{' '}
                      <span className="text-yellow-300">()</span> =&gt;{' '}
                      <span className="text-purple-300">['Clean Code', 'Scalable Architecture', 'Agile Delivery']</span>
                    </div>
                    <div>{'};'}</div>
                    <div className="pt-2 text-white/40 flex items-center">
                      <span>// Ready to collaborate</span>
                      <span className="terminal-cursor" />
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1 text-gray-300">
                    <div>{'{'}</div>
                    <div className="pl-4">
                      <span className="text-cyan-400">"frontend"</span>: [
                      <span className="text-emerald-300">"React"</span>,{' '}
                      <span className="text-emerald-300">"React Native"</span>,{' '}
                      <span className="text-emerald-300">"Flutter"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">"backend"</span>: [
                      <span className="text-emerald-300">"Laravel (PHP)"</span>,{' '}
                      <span className="text-emerald-300">".NET / ASP.NET"</span>,{' '}
                      <span className="text-emerald-300">"Node.js"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">"databases"</span>: [
                      <span className="text-emerald-300">"MySQL"</span>,{' '}
                      <span className="text-emerald-300">"MS SQL Server"</span>,{' '}
                      <span className="text-emerald-300">"Firebase"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">"languages"</span>: [
                      <span className="text-emerald-300">"C#"</span>,{' '}
                      <span className="text-emerald-300">"Java"</span>,{' '}
                      <span className="text-emerald-300">"PHP"</span>,{' '}
                      <span className="text-emerald-300">"JavaScript"</span>,{' '}
                      <span className="text-emerald-300">"Python"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">"services"</span>: [
                      <span className="text-emerald-300">"REST APIs"</span>,{' '}
                      <span className="text-emerald-300">"Google Maps"</span>,{' '}
                      <span className="text-emerald-300">"Gemini AI"</span>
                      ]
                    </div>
                    <div>{'}'}</div>
                    <div className="pt-2 text-white/40">
                      // Normalized for production scale
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span className="text-white">curl -s https://api.asjath.dev/v1/health</span>
                    </div>
                    <div className="text-emerald-300 pl-3">
                      HTTP/2 200 OK — Status: Healthy & Ready
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span className="text-white">git status</span>
                    </div>
                    <div className="text-gray-400 pl-3">
                      On branch main: Working tree clean. Ready for deployment.
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-emerald-400 font-bold">$</span>
                      <span className="text-[#06B6D4]">asjath --version</span>
                    </div>
                    <div className="text-purple-300 pl-3">
                      Asjath Ahamath v2026.1 (BEng Software Engineering Graduate)
                    </div>
                    <div className="flex items-center gap-1 pt-2 text-white/50">
                      <span className="text-emerald-400">$</span>
                      <span className="text-white">ping colombo.lk</span>
                      <span className="terminal-cursor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="px-4 py-2.5 bg-[#101218] border-t border-white/8 flex items-center justify-between text-[11px] text-[#9CA3AF]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Connected</span>
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="text-gray-400">UTF-8</span>
                  <span className="text-white/20">|</span>
                  <span className="text-gray-400">TypeScript 5.x</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCommand}
                  className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white transition-colors"
                  title="Copy terminal command"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>npx asjath</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

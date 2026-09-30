import React from 'react';
import { GraduationCap, Briefcase, Code, CheckCircle, Sparkles, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const getCardIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />;
      case 1:
        return <Briefcase className="w-6 h-6 text-[#06B6D4]" />;
      default:
        return <Code className="w-6 h-6 text-emerald-400" />;
    }
  };

  const coreSkills = [
    'PHP & Laravel',
    'React & React Native',
    'C# & .NET',
    'JavaScript & TypeScript',
    'SQL Databases',
    'REST APIs',
    'Git Version Control',
    'Agile Development',
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#06B6D4]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND & PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Software Engineering graduate with hands-on application development background, dedicated to building clean, performant, and reliable software.
          </p>
        </div>

        {/* Main Profile & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-10">
          
          {/* Left Column: Developer Portrait Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-[#151821] border border-white/10 p-3 shadow-2xl overflow-hidden group">
              {/* Ambient Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#06B6D4]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Photo Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#101218] border border-white/8">
                <img
                  src={personalInfo.profileImage}
                  alt="Asjath Ahamath - Software Engineer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-[#08090D]/85 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium text-white text-[11px]">Ready for Roles</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-[#06B6D4] font-mono">
                    <MapPin className="w-3 h-3" />
                    Colombo, LK
                  </span>
                </div>
              </div>

              {/* Info Snippet Underneath */}
              <div className="p-3 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {personalInfo.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    Full-Stack
                  </span>
                </div>
                <p className="text-xs text-[#9CA3AF]">
                  BEng (Hons) Software Engineering Graduate
                </p>
              </div>
            </div>

            {/* Quick Fast Fact Pill */}
            <div className="p-4 rounded-xl bg-[#101218] border border-white/8 flex items-center justify-between text-xs text-[#9CA3AF]">
              <span className="flex items-center gap-2 text-gray-300">
                <Award className="w-4 h-4 text-[#8B5CF6]" />
                <span>GoSetup Pvt Ltd Intern</span>
              </span>
              <span className="font-mono text-[11px] text-[#06B6D4]">2026</span>
            </div>
          </div>

          {/* Right Column: Narrative Content & Capabilities */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-8 rounded-2xl bg-[#151821] border border-white/8 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-xl font-semibold text-white">
                Engineering Practical Solutions with Modern Tech Stacks
              </h3>

              <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                I am a Software Engineering graduate based in Colombo, Sri Lanka, with practical experience developing, debugging, and maintaining web and full-stack software. Having interned as a Software Engineer at GoSetup Pvt Ltd, I have worked directly on production Laravel-based systems, building backend endpoints, managing database migrations, and participating in Agile sprints and code reviews.
              </p>

              <p className="text-[#9CA3AF] leading-relaxed text-sm sm:text-base">
                My hands-on experience includes developing full-stack web applications, cross-platform mobile apps with React Native, and enterprise desktop software with C# and .NET. I enjoy taking ideas through their entire lifecycle—from requirement analysis and database architecture to API integration and responsive user interfaces.
              </p>

              {/* Verified core competencies */}
              <div className="pt-4 border-t border-white/8">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-3">
                  Core Engineering Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {coreSkills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Highlight Cards in a Responsive Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalInfo.highlightCards.map((card, idx) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-[#151821] border border-white/8 hover:border-white/20 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#101218] border border-white/8 group-hover:border-[#8B5CF6]/40 transition-colors shrink-0">
                  {getCardIcon(idx)}
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A78BFA]">
                    {card.title}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {card.subtitle}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed pt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

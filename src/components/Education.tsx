import React from 'react';
import { GraduationCap, Calendar, Award, Sparkles, School } from 'lucide-react';
import { educations } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#101218]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#06B6D4]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Formal software engineering and computer science qualifications underpinning technical engineering practice.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#151821] border border-white/8 hover:border-white/20 transition-all hover:-translate-y-1 text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-xl bg-[#101218] border border-white/8 group-hover:border-[#8B5CF6]/40 transition-colors">
                    <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#101218] border border-white/8 text-xs font-mono text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-[#06B6D4] font-medium">
                    <span className="flex items-center gap-1.5">
                      <School className="w-4 h-4 text-white/50" />
                      {edu.institution}
                    </span>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <span className="text-gray-400 text-xs">{edu.affiliate}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9CA3AF] leading-relaxed pt-2">
                  {edu.description}
                </p>
              </div>

              {/* Bottom verification badge */}
              <div className="pt-6 mt-6 border-t border-white/8 flex items-center justify-between text-xs text-[#9CA3AF]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Award className="w-4 h-4" />
                  <span>Accredited Curriculum</span>
                </span>
                <span className="font-mono text-[11px] text-white/40">ESOFT Metro Campus</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

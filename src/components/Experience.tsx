import React from 'react';
import { Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#06B6D4]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Hands-on professional software engineering experience contributing to production web applications and agile workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#8B5CF6] border-4 border-[#08090D] shadow-md shadow-[#8B5CF6]/50 group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#151821] border border-white/8 hover:border-white/20 transition-all text-left space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-white/8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#06B6D4] font-medium mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1 text-[#9CA3AF] text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101218] border border-white/8 text-xs font-mono text-purple-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                    Key Responsibilities & Contributions:
                  </span>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-gray-400 mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#101218] border border-white/8 text-xs font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Award, ExternalLink, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#8B5CF6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Certifications
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Verified technical certifications in database architecture, SQL programmability, and AI productivity tools via Microsoft Learn.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#151821] border border-white/8 hover:border-white/20 transition-all hover:-translate-y-1 text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge & Issuer */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#101218] border border-white/8 text-[#06B6D4]">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {cert.issuer}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* Card Footer: Date & Credential Link */}
              <div className="pt-4 mt-6 border-t border-white/8 flex items-center justify-between text-xs text-[#9CA3AF]">
                <div className="flex items-center gap-1.5 text-gray-400 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{cert.date}</span>
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#06B6D4] hover:text-white font-medium transition-colors"
                  >
                    <span>Microsoft Learn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

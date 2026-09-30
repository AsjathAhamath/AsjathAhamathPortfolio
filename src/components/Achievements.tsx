import React from 'react';
import { Trophy, Code2, Users2, Sparkles, Calendar } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    award: <Trophy className="w-6 h-6 text-amber-400" />,
    hackathon: <Code2 className="w-6 h-6 text-[#8B5CF6]" />,
    conference: <Users2 className="w-6 h-6 text-[#06B6D4]" />,
  };

  const badgeMap: Record<string, { label: string; class: string }> = {
    award: { label: 'Competition Winner', class: 'bg-amber-950/40 border-amber-500/30 text-amber-300' },
    hackathon: { label: 'National Hackathon', class: 'bg-purple-950/40 border-purple-500/30 text-purple-300' },
    conference: { label: 'Tech Conference', class: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300' },
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative bg-[#101218]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#06B6D4]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // HONORS & ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Achievements & Activities
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Competitive programming recognition, hackathon participation, and engagement within the developer community.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#151821] border border-white/8 hover:border-white/20 transition-all hover:-translate-y-1 text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-xl bg-[#101218] border border-white/8 group-hover:border-white/20 transition-colors">
                    {iconMap[item.type]}
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono ${
                      badgeMap[item.type]?.class || 'bg-white/5 border-white/10 text-gray-300'
                    }`}
                  >
                    {badgeMap[item.type]?.label}
                  </span>
                </div>

                {/* Title and Event */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#A78BFA] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#06B6D4]">
                    {item.event}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Year */}
              <div className="pt-4 mt-6 border-t border-white/8 flex items-center justify-between text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>{item.date}</span>
                </div>
                <span className="text-[11px] text-white/30">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

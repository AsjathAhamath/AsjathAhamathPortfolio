import React from 'react';
import { Languages as LanguagesIcon, Sparkles } from 'lucide-react';
import { languages } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-7 sm:p-8 rounded-2xl bg-[#151821] border border-white/8 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#101218] border border-white/8 text-[#06B6D4]">
                <LanguagesIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Language Proficiencies
                </h3>
                <p className="text-xs text-[#9CA3AF]">
                  Multilingual communication capabilities for local and distributed global engineering teams.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101218] border border-white/8 text-xs font-mono text-purple-300">
              <Sparkles className="w-3 h-3" />
              <span>Multilingual</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-[#101218] border border-white/8 hover:border-[#8B5CF6]/30 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-base font-bold text-white block">
                    {lang.name}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {lang.level}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/8 text-xs font-medium text-[#06B6D4]">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

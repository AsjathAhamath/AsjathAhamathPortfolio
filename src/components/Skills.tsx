import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code className="w-5 h-5 text-[#8B5CF6]" />,
    Frontend: <Layout className="w-5 h-5 text-[#06B6D4]" />,
    'Backend & Frameworks': <Server className="w-5 h-5 text-emerald-400" />,
    Databases: <Database className="w-5 h-5 text-amber-400" />,
    'APIs & Services': <Cloud className="w-5 h-5 text-blue-400" />,
    'Tools & Workflows': <Wrench className="w-5 h-5 text-purple-400" />,
  };

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#101218]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#8B5CF6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // CAPABILITIES & TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Proficiencies across modern web frameworks, systems programming, backend architectures, relational databases, and cloud services.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/25 border border-purple-400/30'
                  : 'bg-[#151821] text-[#9CA3AF] hover:text-white hover:bg-[#1C202D] border border-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#151821] border border-white/8 hover:border-white/20 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[#101218] border border-white/8 group-hover:border-white/20 transition-colors">
                  {categoryIcons[category.title] || <Code className="w-5 h-5 text-[#8B5CF6]" />}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight text-left">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[#101218] border border-white/8 text-xs font-mono text-gray-300 hover:text-white hover:border-[#8B5CF6]/40 hover:bg-[#151821] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

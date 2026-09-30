import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { personalInfo } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Achievements', href: '#achievements', id: 'achievements' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section spy
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#8B5CF6] origin-left transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090D]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Asjath Ahamath Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#151821] border border-white/10 flex items-center justify-center group-hover:border-[#8B5CF6]/50 transition-colors">
              <Terminal className="w-5 h-5 text-[#8B5CF6] group-hover:text-[#06B6D4] transition-colors" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center">
              <span>Asjath</span>
              <span className="text-[#8B5CF6] ml-0.5">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#101218]/80 border border-white/8 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#151821] border border-white/10 shadow-sm text-shadow'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Socials & CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#151821] border border-white/8 text-[#9CA3AF] hover:text-white hover:border-white/20 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#151821] border border-white/8 text-[#9CA3AF] hover:text-[#06B6D4] hover:border-[#06B6D4]/30 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Asjath_Ahamath_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] rounded-lg shadow-sm shadow-[#8B5CF6]/20 transition-all border border-purple-400/20 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#151821] border border-white/10 text-[#9CA3AF] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-30 md:hidden bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-40 md:hidden bg-[#08090D] border-l border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#151821] border border-white/10 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-[#8B5CF6]" />
              </div>
              <span className="font-bold text-white text-base">Asjath.dev</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#06B6D4] bg-[#151821] border border-[#06B6D4]/30'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#151821] border border-white/10 text-[#9CA3AF] hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#151821] border border-white/10 text-[#9CA3AF] hover:text-[#06B6D4]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          <a
            href={personalInfo.resumeUrl}
            download="Asjath_Ahamath_Resume.pdf"
            className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg transition-colors"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
};

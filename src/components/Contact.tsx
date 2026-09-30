import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission flow and prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Asjath,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151821] border border-white/8 text-xs font-mono text-[#8B5CF6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 // INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's build something meaningful.
          </h2>
          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed">
            Interested in working together or discussing a software engineering opportunity? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-2xl bg-[#151821] border border-white/8 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Available for full-time Software Engineer, Full-Stack, Web, and Mobile Developer positions in Sri Lanka or remote teams globally.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#101218] border border-white/8 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#151821] text-[#8B5CF6]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-mono block">Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101218] border border-white/8">
                  <div className="p-2 rounded-lg bg-[#151821] text-[#06B6D4]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-mono block">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101218] border border-white/8">
                  <div className="p-2 rounded-lg bg-[#151821] text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-mono block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* External Profiles */}
              <div className="pt-4 border-t border-white/8 flex items-center gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#101218] border border-white/8 hover:border-[#06B6D4]/40 text-xs font-semibold text-white hover:text-[#06B6D4] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#101218] border border-white/8 hover:border-white/25 text-xs font-semibold text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 text-left">
            <div className="p-8 rounded-2xl bg-[#151821] border border-white/8">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mb-6">
                Have an inquiry or opportunity? Fill in the details below to start a conversation.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#101218] border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Ready!</h4>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md mx-auto">
                    Your email client has been prepared with your message to <strong>{personalInfo.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono text-[#06B6D4] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-gray-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#101218] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.name
                          ? 'border-rose-500/50 focus:ring-rose-500'
                          : 'border-white/8 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-gray-300 mb-1.5">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#101218] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email
                          ? 'border-rose-500/50 focus:ring-rose-500'
                          : 'border-white/8 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Message input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-gray-300 mb-1.5">
                      Your Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss an open role, project requirements, or connect..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#101218] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/50 focus:ring-rose-500'
                          : 'border-white/8 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] rounded-xl shadow-lg shadow-[#8B5CF6]/25 border border-purple-400/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Preparing Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={personalInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-gray-300 hover:text-white bg-[#101218] hover:bg-[#1C202D] border border-white/8 rounded-xl transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

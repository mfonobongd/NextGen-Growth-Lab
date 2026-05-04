import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2, HeartHandshake, Zap } from "lucide-react";

export default function HireTalent() {
  return (
    <div className="pt-32 pb-24">
      <Section className="pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Hire Talent
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            Hire From Our Community
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Access a curated pool of trained, mentored, and community-verified professionals ready to drive your community-led growth.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </Section>

      <Section className="py-16 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Hire From Us</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Community-trained. Industry-ready.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 group hover:border-brand/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700" />
              <ShieldCheck className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Pre-Vetted Talent</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Every member has been trained, mentored, and community-verified through our rigorous programs.
              </p>
            </div>
            
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 group hover:border-brand/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700" />
              <Globe2 className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Pan-African & Global</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Access diverse talent from Nigeria, Ghana, Kenya, South Africa, and beyond - remote-ready.
              </p>
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 group hover:border-brand/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700" />
              <HeartHandshake className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Community-Backed</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Hire with confidence. Our community reputation system ensures accountability and quality.
              </p>
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 group hover:border-brand/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700" />
              <Zap className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Growth Mindset</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Our members are lifelong learners who stay current with community-led growth best practices.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] border border-brand-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-brand/5 to-transparent pointer-events-none" />
            
            <div className="text-center relative z-10 mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Roles You Can Hire For</h2>
              <p className="text-zinc-400">Our members specialise across the full community-led growth stack.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative z-10 max-w-2xl mx-auto">
              {[
                "Community Managers",
                "Developer Relations Engineers",
                "Content Strategists",
                "Growth Marketers",
                "Community Operations Leads",
                "Event Coordinators",
                "Social Media Managers",
                "Partnership Managers"
              ].map((role, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-brand-surface border border-brand-border rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                  </div>
                  <span className="font-semibold text-white text-sm">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 border-t border-brand-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to hire community talent?</h2>
          <p className="text-zinc-400 leading-relaxed mb-10">
            Tell us what you're looking for and we'll match you with the right professionals from our community.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Section>
    </div>
  );
}

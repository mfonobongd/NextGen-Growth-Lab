import React from "react";
import { motion } from "motion/react";
import { Section } from "../components/Section";
import { MessageSquare, Mail, MapPin, Calendar, Globe2 } from "lucide-react";
import { FAQList } from "./FAQ";

export default function Contact() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <Section className="pb-16 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's build something <span className="text-brand">together.</span>
          </h1>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to hire talent, partner on events, or join our ecosystem, we'd love to hear from you.
          </p>
        </motion.div>
      </Section>

      <Section className="py-12 border-t border-brand-border">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-brand-surface-2 border border-brand-border rounded-3xl p-8 relative overflow-hidden group hover:border-brand/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700" />
              <Mail className="w-8 h-8 text-brand mb-6" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Email Us</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10">We're here to help and answer any questions you might have.</p>
              <a href="mailto:nextgengrowthlab@gmail.com" className="text-brand hover:underline font-semibold relative z-10">nextgengrowthlab@gmail.com</a>
            </div>

            <div className="bg-brand-surface-2 border border-brand-border rounded-3xl p-8 relative overflow-hidden group hover:border-brand/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700" />
              <Calendar className="w-8 h-8 text-brand mb-6" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Prefer a Live Conversation?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10">
                Book a discovery call with our team to discuss your goals and how we can help you achieve them.
              </p>
              <a href="https://cal.com/nextgen-growth-lab-waokgk/discoverycall?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-brand text-black font-semibold text-center rounded-xl hover:opacity-90 transition-opacity">
                Book a Discovery Call
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
            
            <form 
              action="https://docs.google.com/forms/d/e/1FAIpQLSdDeuYlmOTy0B0yCJ5smOelxx7XtGtMAlwKcX6aWfo7vUnyqw/formResponse" 
              method="POST"
              target="_blank"
              className="space-y-6 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">Name</label>
                  <input 
                    type="text" 
                    name="entry.1698133626"
                    required
                    className="w-full bg-[#1a1a1a] border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand text-white placeholder-zinc-600"
                    placeholder="Mfonobong Umondia"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400">Email</label>
                  <input 
                    type="email" 
                    name="entry.886306333"
                    required
                    className="w-full bg-[#1a1a1a] border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand text-white placeholder-zinc-600"
                    placeholder="nextgengrowthlab@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400">Subject</label>
                <input 
                  type="text" 
                  name="entry.537384066"
                  required
                  className="w-full bg-[#1a1a1a] border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand text-white placeholder-zinc-600"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400">Inquiry Type</label>
                <select 
                  name="entry.2072604982"
                  required
                  className="w-full bg-[#1a1a1a] border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand text-white"
                >
                  <option value="Partnership & Sponsorship">Partnership & Sponsorship</option>
                  <option value="Hire Talent/Consulting">Hire Talent/Consulting</option>
                  <option value="Community Membership">Community Membership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400">Message</label>
                <textarea 
                  name="entry.49124418"
                  required
                  rows={4}
                  className="w-full bg-[#1a1a1a] border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none text-white placeholder-zinc-600"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-brand text-black font-bold transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 border-t border-brand-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
             <p className="text-zinc-400">Find quick answers to common questions about NextGen.</p>
          </div>
          <FAQList />
        </div>
      </Section>

      {/* Building Across The Globe */}
      <Section className="py-24 border-t border-brand-border overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto mb-8 relative z-10"
          >
             <Globe2 className="w-8 h-8" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight relative z-10">We're Building Across The Globe</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto relative z-10">
            With members in over 20 countries, NextGen Growth Lab is the world's leading network of community-led growth professionals.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto relative z-10">
             {[
                "Nigeria", "Ghana", "Kenya", "South Africa", "Rwanda", "USA", "UK", "Canada", "+15 more"
             ].map((country, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="px-5 py-2.5 rounded-full bg-brand-surface-2 border border-brand-border text-white text-sm font-semibold shadow-sm hover:border-brand hover:text-brand cursor-default transition-all hover:scale-105"
                >
                  {country}
                </motion.div>
             ))}
          </div>
        </motion.div>
      </Section>

    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "../components/Section";
import { Calendar, Clock, Users, CalendarCheck, CheckCircle2 } from "lucide-react";

export default function Mentorship() {
  const [activeTab, setActiveTab] = useState<"mentee" | "mentor">("mentee");

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <Section className="pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Cohort 1.0 open to all Community Managers
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            Mentorship Program
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 flex justify-center">
            Get paired with experienced community-led growth leaders for personalized guidance, career strategy, and growth acceleration over 4 intensive weeks.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
            <div className="bg-brand-surface-2 border border-brand-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <Clock className="w-6 h-6 text-brand mb-3" />
              <div className="text-2xl font-bold text-white mb-1">4 Weeks</div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Duration</div>
            </div>
            <div className="bg-brand-surface-2 border border-brand-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <Users className="w-6 h-6 text-brand mb-3" />
              <div className="text-2xl font-bold text-white mb-1">20 Mentees</div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Cohort Size</div>
            </div>
            <div className="bg-brand-surface-2 border border-brand-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <Calendar className="w-6 h-6 text-brand mb-3" />
              <div className="text-2xl font-bold text-white mb-1">June 2026</div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Launch</div>
            </div>
            <div className="bg-brand-surface-2 border border-brand-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <CalendarCheck className="w-6 h-6 text-brand mb-3" />
              <div className="text-2xl font-bold text-white mb-1">May 17</div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Apply By</div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* What You Get / How It Works */}
      <Section className="py-16 border-t border-brand-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* What You Get */}
          <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
             <h2 className="text-3xl font-display font-bold text-white mb-8 relative z-10">What You Get</h2>
             <ul className="space-y-4 relative z-10">
                {[
                  "1-on-1 sessions with industry mentors",
                  "Personalized career roadmap",
                  "Portfolio & resume reviews",
                  "Real-world project guidance",
                  "Certificate of completion",
                  "Alumni community access"
                ].map((item, idx) => (
                  <li key={idx} className="flex flex-start gap-4 text-zinc-300">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-brand" />
                    </div>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* How It Works */}
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-8">How It Works</h2>
            <div className="space-y-8 relative before:absolute before:inset-y-3 before:left-6 before:w-px before:bg-brand-border">
              {[
                {
                  step: "1",
                  title: "Apply",
                  desc: "Fill out the application form telling us about your goals, experience, and what you hope to gain."
                },
                {
                  step: "2",
                  title: "Match",
                  desc: "We carefully pair you with a mentor whose expertise aligns with your career goals."
                },
                {
                  step: "3",
                  title: "Grow",
                  desc: "Begin your 4-week journey with structured sessions, accountability, and community support."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface-2 border border-brand-border flex items-center justify-center text-xl font-display font-bold text-brand shrink-0 z-10">
                    {item.step}
                  </div>
                  <div className="pt-2 pb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Apply Form Section */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Apply Now</h2>
            <p className="text-zinc-400">Choose how you'd like to participate in the mentorship program.</p>
          </div>

          {/* Tabs Control */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-[#1a1a1a] p-1.5 rounded-xl border border-brand-border relative">
              <button
                onClick={() => setActiveTab("mentee")}
                className={`relative px-8 py-3 text-sm font-bold tracking-wide transition-all z-10 rounded-lg ${
                  activeTab === "mentee" ? "text-black" : "text-zinc-500 hover:text-white"
                }`}
              >
                Apply as Mentee
              </button>
              <button
                onClick={() => setActiveTab("mentor")}
                className={`relative px-8 py-3 text-sm font-bold tracking-wide transition-all z-10 rounded-lg ${
                  activeTab === "mentor" ? "text-black" : "text-zinc-500 hover:text-white"
                }`}
              >
                Apply as Mentor
              </button>
              
              {/* Tab Highlight Background */}
              <div 
                className={`absolute inset-y-1.5 w-[calc(50%-6px)] bg-brand rounded-lg transition-transform duration-300 ease-out z-0 ${
                  activeTab === "mentee" ? "translate-x-0" : "translate-x-[calc(100%+6px)]"
                }`}
              />
            </div>
          </div>

          {/* Form Containers */}
          <div className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden min-h-[600px] md:min-h-[800px] relative">
            <AnimatePresence mode="wait">
              {activeTab === "mentee" ? (
                <motion.div
                  key="mentee-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full bg-white/5"
                >
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdvHtsCFIKlTuGJ1zt9dLEbNce4qCzX2FRK-Ud2K6mUnsZODg/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Mentee Application Form"
                  >
                    Loading…
                  </iframe>
                </motion.div>
              ) : (
                <motion.div
                  key="mentor-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full bg-white/5"
                >
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfjIakR4BOf8LDb6Q4VZEGGhiFqu5fAvjxciSB5tQOdl7Nt3w/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Mentor Application Form"
                  >
                    Loading…
                  </iframe>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
}

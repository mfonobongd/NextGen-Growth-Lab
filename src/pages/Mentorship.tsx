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
            Applications for cohort 1.0 closed on Friday 15th May 2026
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Applications Closed</h2>
            <p className="text-zinc-400">Applications for cohort 1.0 closed on Friday 15th May 2026. Keep an eye out for our next cohort!</p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-3xl p-12 text-center">
             <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex flex-col items-center justify-center text-brand mx-auto mb-6">
                <CalendarCheck className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Thank you to everyone who applied!</h3>
             <p className="text-zinc-400">We are currently reviewing applications. Selected mentees and mentors will be notified soon.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

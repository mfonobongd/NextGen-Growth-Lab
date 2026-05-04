import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { ArrowRight, CheckCircle2, Users, Target, BookOpen, MessageSquare, Briefcase, Zap, Calendar, MapPin } from "lucide-react";

export default function BuildFest() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <Section className="pb-16 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Oct 2026 • Lagos, Nigeria
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            BuildFest
          </h1>
          <p className="text-xl text-brand mb-8 font-semibold">
            NextGen Growth Lab’s flagship in-person gathering
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Designed for community managers, marketers, growth professionals, DevRel practitioners, and ecosystem builders. We are not just learning; we are actively building, experimenting, and shaping communities and growth systems across Africa.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2">
            Request an Invite <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </Section>

      {/* About & Goal Section */}
      <Section className="py-12 border-t border-brand-border">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-white tracking-tight">Not a typical conference.</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                BuildFest is intentionally designed as a high-value, interactive experience where ideas are exchanged, real challenges are discussed, and practical solutions are shared.
              </p>
              <p>
                Across Africa, more people are stepping into roles in community, growth, and ecosystem building, but there are still limited spaces for real learning, collaboration, and honest conversations.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 relative overflow-hidden group hover:border-brand/40 transition-colors shadow-lg hover:shadow-brand/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand/10 transition-colors duration-500" />
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <Target className="w-5 h-5 text-brand group-hover:scale-110 transition-transform duration-300" /> Our Goal
            </h3>
            <ul className="space-y-4 relative z-10">
              {[
                "Builders can learn from real-world experiences",
                "Professionals can exchange insights and frameworks",
                "Meaningful connections can be formed",
                "The future of community and growth ecosystems can be shaped collaboratively"
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3 group/item hover:-translate-y-0.5 transition-transform"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm group-hover/item:text-white transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Who It's For */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">Who It's For</h2>
            <p className="text-zinc-400">BuildFest is curated for professionals actively shaping the ecosystem.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Users, label: "Community Managers" },
              { icon: Target, label: "Growth Marketers" },
              { icon: BookOpen, label: "DevRel Professionals" },
              { icon: Briefcase, label: "Startup Founders" },
              { icon: Zap, label: "Ecosystem Builders" }
            ].map((role, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-brand-surface-2 border border-brand-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-brand transition-colors hover:-translate-y-1 group"
              >
                <role.icon className="w-8 h-8 text-brand group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-semibold text-white group-hover:text-brand transition-colors">{role.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* What to Expect & Themes */}
      <Section className="py-16 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What to Expect</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">BuildFest focuses on practical learning and real conversations.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Insightful Sessions",
                desc: "Short, focused talks sharing real strategies, lessons, and case studies.",
                icon: BookOpen
              },
              {
                title: "Experience Sharing",
                desc: "Open discussions on what’s working, what’s not, and why.",
                icon: MessageSquare
              },
              {
                title: "Community Showcases",
                desc: "Attendees share frameworks, dashboards, tools, and systems they’ve used.",
                icon: Target
              },
              {
                title: "Interactive Breakouts",
                desc: "Smaller group conversations around specific challenges and ideas.",
                icon: Users
              },
              {
                title: "Meaningful Networking",
                desc: "Intentional connections, not just exchanging contacts, but building relationships.",
                icon: Briefcase
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-bg border border-brand-border rounded-2xl p-8 hover:border-brand/50 transition-colors group hover:-translate-y-1 shadow-lg hover:shadow-brand/5"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand transition-colors">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{feature.desc}</p>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-brand border border-brand rounded-2xl p-8 text-black flex flex-col justify-center relative overflow-hidden group shadow-[0_0_30px_rgba(187,225,46,0.15)] hover:shadow-[0_0_40px_rgba(187,225,46,0.3)] transition-shadow"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[50px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
               <h3 className="text-xl font-bold mb-4 relative z-10">Key Themes</h3>
               <ul className="space-y-3 font-medium text-sm mb-8 relative z-10">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/50 group-hover:bg-black transition-colors"></div> Building and scaling communities</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/50 group-hover:bg-black transition-colors"></div> Growth strategies that actually work</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/50 group-hover:bg-black transition-colors"></div> Engagement & retention</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/50 group-hover:bg-black transition-colors"></div> DevRel ecosystem development</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/50 group-hover:bg-black transition-colors"></div> Content & personal branding</li>
               </ul>
               <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border border-brand-border rounded-full transition-all duration-300 hover:border-brand/50 hover:bg-brand/5 hover:scale-105 active:scale-95 gap-2 w-full">
                 Apply to Speak <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Event Details */}
      <Section className="py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-brand-surface border border-brand-border rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-brand/40 transition-colors shadow-lg hover:shadow-brand/5"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand/10 transition-colors duration-500" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-8">Event Details</h2>
              <div className="space-y-6">
                 <motion.div 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="flex items-start gap-4 group/item hover:-translate-y-0.5 transition-transform"
                 >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover/item:bg-brand group-hover/item:text-black transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">Location</div>
                    <div className="text-lg font-semibold text-white group-hover/item:text-brand transition-colors">Lagos, Nigeria</div>
                  </div>
                </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="flex items-start gap-4 group/item hover:-translate-y-0.5 transition-transform"
                 >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover/item:bg-brand group-hover/item:text-black transition-colors duration-300">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">Date</div>
                    <div className="text-lg font-semibold text-white group-hover/item:text-brand transition-colors">October 2026</div>
                  </div>
                </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   className="flex items-start gap-4 group/item hover:-translate-y-0.5 transition-transform"
                 >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover/item:bg-brand group-hover/item:text-black transition-colors duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">Audience Size</div>
                    <div className="text-lg font-semibold text-white group-hover/item:text-brand transition-colors">50–100 curated attendees</div>
                  </div>
                </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 }}
                   className="flex items-start gap-4 group/item hover:-translate-y-0.5 transition-transform"
                 >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover/item:bg-brand group-hover/item:text-black transition-colors duration-300">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">Format</div>
                    <div className="text-lg font-semibold text-white group-hover/item:text-brand transition-colors">In-person, invite-only</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6">Why It Matters</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                BuildFest exists to bridge the gap in learning, collaboration, and honest conversations by creating access to shared knowledge, encouraging collaboration, and elevating the quality of work in the ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-brand-bg rounded-xl p-4 border border-brand-border text-center hover:border-brand/50 transition-colors"
                >
                  <span className="block text-xs font-bold text-zinc-500 uppercase mb-1">Curated</span>
                  <span className="text-sm font-semibold text-white">Not crowded</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-brand-bg rounded-xl p-4 border border-brand-border text-center hover:border-brand/50 transition-colors"
                >
                  <span className="block text-xs font-bold text-zinc-500 uppercase mb-1">Practical</span>
                  <span className="text-sm font-semibold text-white">Not theoretical</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-brand-bg rounded-xl p-4 border border-brand-border text-center hover:border-brand/50 transition-colors"
                >
                  <span className="block text-xs font-bold text-zinc-500 uppercase mb-1">Interactive</span>
                  <span className="text-sm font-semibold text-white">Not passive</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-brand-bg rounded-xl p-4 border border-brand-border text-center hover:border-brand/50 transition-colors"
                >
                  <span className="block text-xs font-bold text-zinc-500 uppercase mb-1">Community</span>
                  <span className="text-sm font-semibold text-white">Not hype-driven</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Event Schedule */}
      <Section className="py-24 border-t border-brand-border cursor-default">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Schedule of Events</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A single-day, high-impact agenda designed for actionable learning and deep connection.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { time: "9:00 AM - 10:00 AM", title: "Registration & Breakfast Networking", desc: "Settle in, grab a coffee, and connect with fellow community builders.", type: "break" },
              { time: "10:00 AM - 10:15 AM", title: "Welcome & Opening Remarks", desc: "Setting the stage for the day's insights and goals.", type: "session" },
              { time: "10:15 AM - 11:00 AM", title: "Keynote: The Future of Community-Led Growth in Africa", desc: "Exploring the shifting landscape and what it means for your career.", type: "keynote" },
              { time: "11:00 AM - 11:45 AM", title: "Panel: Building Culturally Relevant Developer Communities", desc: "Insights from leading DevRel professionals.", type: "panel" },
              { time: "11:45 AM - 12:00 PM", title: "Coffee Break", desc: "Stretch, hydrate, and network.", type: "break" },
              { time: "12:00 PM - 1:00 PM", title: "Masterclass: Metrics that Matter - Measuring Community ROI", desc: "A practical deep-dive into tracking success.", type: "workshop" },
              { time: "1:00 PM - 2:00 PM", title: "Lunch & Interactive Workshops", desc: "Breakout sessions over a curated lunch.", type: "break" },
              { time: "2:00 PM - 2:45 PM", title: "Panel: Growth Marketing Secrets for Ecosystem Builders", desc: "Bridging the gap between marketing and community.", type: "panel" },
              { time: "2:45 PM - 3:00 PM", title: "Closing Notes & Networking", desc: "Wrapping up the day and carrying the conversation forward.", type: "session" }
            ].map((session, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-2xl border transition-all ${
                  session.type === 'break' 
                    ? 'bg-[#1a1a1a] border-brand-border/50 opacity-80 hover:opacity-100' 
                    : 'bg-brand-surface border-brand-border hover:border-brand/40 shadow-lg hover:shadow-brand/5 group'
                }`}
              >
                <div className="md:w-48 shrink-0">
                  <div className={`text-sm font-bold font-mono ${session.type === 'break' ? 'text-zinc-500' : 'text-brand'}`}>
                    {session.time}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 ${session.type === 'break' ? 'text-zinc-300' : 'text-white group-hover:text-brand transition-colors'}`}>
                    {session.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {session.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sponsors */}
      <Section className="py-16 border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Partner with BuildFest</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Showcase your brand to a highly engaged audience of community managers, growth marketers, and ecosystem builders across Africa.
          </p>
          
          <div className="bg-brand-surface-2 border border-brand-border rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Why Sponsor?</h3>
            <div className="grid sm:grid-cols-3 gap-6 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mb-4 text-brand">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-white mb-2">Direct Access</h4>
                <p className="text-xs text-zinc-400">Connect with the top 100 ecosystem builders in Africa.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mb-4 text-brand">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-white mb-2">Brand Visibility</h4>
                <p className="text-xs text-zinc-400">Prominent placement across all event materials.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mb-4 text-brand">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-white mb-2">Lead Generation</h4>
                <p className="text-xs text-zinc-400">Build relationships with decision-makers.</p>
              </div>
            </div>
          </div>

          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2">
            Become a Sponsor <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}

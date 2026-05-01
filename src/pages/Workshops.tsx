import { Section } from "../components/Section";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Ticket, CheckCircle2, ArrowRight, Tag } from "lucide-react";

export default function Workshops() {
  return (
    <div className="pt-32 pb-16">
      <Section className="pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Upcoming Events</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Conferences, meetups, and gatherings for community-led growth professionals worldwide.
          </p>
        </motion.div>
      </Section>

      <Section className="py-12 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden relative p-6 lg:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-10 relative z-10 lg:items-start">
              
              {/* Left Column: Image */}
              <div className="w-full lg:w-[45%] shrink-0">
                <div className="w-full aspect-square bg-[#1a1a1a] border border-brand-border rounded-2xl relative overflow-hidden group flex items-center justify-center p-4 sm:p-8 bg-brand-surface-2">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-sm z-0">
                    Loading image...
                  </div>
                  <img 
                    src="/workshop-banner.png" 
                    alt="Building Lasting Communities Workshop" 
                    className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 rounded-xl shadow-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                    onLoad={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '1';
                    }}
                  />
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="w-full lg:w-[55%] flex flex-col gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-sm font-bold tracking-wider text-brand uppercase">
                    <Tag className="w-4 h-4" /> Workshop
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-white tracking-tight">
                    Building Lasting Communities
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    A power-packed virtual session designed to help community builders, managers, and advocates move beyond the basics.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Date</div>
                        <div className="text-sm font-semibold text-white">Sat, May 23</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Time</div>
                        <div className="text-sm font-semibold text-white">3:00 PM GMT+1</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Location</div>
                        <div className="text-sm font-semibold text-white">Virtual</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                        <Ticket className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Tickets</div>
                        <div className="text-sm font-semibold text-white">Free for Members</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-8 py-4 bg-brand text-black font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    RSVP for Workshop <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="border-t border-brand-border pt-8">
                  <h3 className="text-xl font-bold text-white mb-4">About the Session</h3>
                  <div className="space-y-4 text-zinc-400 leading-relaxed sm:text-sm">
                    <p>
                      This session digs into the psychology of belonging, the systems that drive long-term engagement, and the practical strategies that turn a group of people into a thriving, resilient community.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-bg rounded-2xl p-6 border border-brand-border">
                  <h4 className="font-bold text-white mb-4 text-sm">Topics covered include:</h4>
                  <ul className="space-y-3">
                    {[
                      "The anatomy of a community that lasts, what makes members stay vs. leave",
                      "Designing intentional onboarding experiences",
                      "Building community rituals, rhythms, and culture",
                      "Strategies for preventing burnout as a community manager",
                      "Data-informed community health checks",
                      "Case studies from global community ecosystems",
                      "Live Q&A and peer discussion"
                    ].map((topic, idx) => (
                      <li key={idx} className="flex flex-start gap-3 text-zinc-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

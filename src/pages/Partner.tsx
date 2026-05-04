import { motion } from "motion/react";
import { Section } from "../components/Section";
import { ArrowRight, Megaphone, Users, LineChart, CheckCircle2 } from "lucide-react";

export default function Partner() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <Section className="pb-16 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Partnerships
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white leading-tight">
            Partner With Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Reach the world's most engaged community of growth professionals. Let's create value together.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </Section>

      <Section className="py-12 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Event Sponsorship */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-3xl p-8 relative overflow-hidden group hover:border-brand/50 transition-colors shadow-lg hover:shadow-brand/5 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700 group-hover:bg-brand/10" />
              <Megaphone className="w-10 h-10 text-brand mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10 group-hover:text-brand transition-colors">
                Event Sponsorship
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors">
                Put your brand in front of the world's top community-led growth professionals at our events, workshops, and masterclasses.
              </p>
              <ul className="space-y-3 relative z-10">
                {[
                  "Logo placement at events",
                  "Branded speaking slots",
                  "Attendee lead lists",
                  "Social media promotion"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5 opacity-80" />
                    <span className="text-zinc-300 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Community Partnership */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-surface border border-brand-border rounded-3xl p-8 relative overflow-hidden group hover:border-brand/50 transition-colors shadow-lg hover:shadow-brand/5 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700 group-hover:bg-brand/10" />
              <Users className="w-10 h-10 text-brand mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10 group-hover:text-brand transition-colors">
                Community Partnership
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors">
                Co-create content, host joint events, or embed your product within our community of engaged professionals.
              </p>
              <ul className="space-y-3 relative z-10">
                {[
                  "Co-branded content",
                  "Joint webinars",
                  "Community activations",
                  "Product integrations"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5 opacity-80" />
                    <span className="text-zinc-300 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Research & Insights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-brand-surface border border-brand-border rounded-3xl p-8 relative overflow-hidden group hover:border-brand/50 transition-colors shadow-lg hover:shadow-brand/5 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700 group-hover:bg-brand/10" />
              <LineChart className="w-10 h-10 text-brand mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10 group-hover:text-brand transition-colors">
                Research & Insights
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors">
                Commission custom research on community-led growth trends, or sponsor our annual industry report.
              </p>
              <ul className="space-y-3 relative z-10">
                {[
                  "Custom surveys",
                  "Industry reports",
                  "Data-driven insights",
                  "Exclusive findings"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5 opacity-80" />
                    <span className="text-zinc-300 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </Section>
    </div>
  );
}

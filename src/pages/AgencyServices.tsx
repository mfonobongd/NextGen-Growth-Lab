import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { ArrowRight, CheckCircle2, LayoutTemplate, Zap, Search, Calendar, Users, RefreshCw, Briefcase } from "lucide-react";

export default function AgencyServices() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <Section className="pb-16 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Agency Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white leading-tight">
            Hire Our In-House Team
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Let our experienced community-led growth professionals embed with your team to build, manage, and scale your community, so you don't have to figure it out alone.
          </p>
          <button className="px-8 py-4 bg-brand text-black font-semibold rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </Section>

      {/* What We Do */}
      <Section className="py-16 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What We Do</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Full-service community-led growth — from strategy to execution.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Community Strategy & Build",
                desc: "We design, launch, and manage branded communities from the ground up — with engagement playbooks tailored to your audience.",
                icon: LayoutTemplate,
                list: ["Community architecture", "Platform setup & migration", "Launch strategy", "Moderation playbook"]
              },
              {
                title: "Growth & Engagement Programs",
                desc: "Retention-focused campaigns, ambassador programs, and activation strategies that turn passive users into advocates.",
                icon: Zap,
                list: ["Ambassador programs", "Engagement campaigns", "Gamification systems", "Retention funnels"]
              },
              {
                title: "Community Audits & Research",
                desc: "Deep-dive analysis of your existing community with actionable recommendations, benchmarks, and a 90-day roadmap.",
                icon: Search,
                list: ["Health score audit", "Sentiment analysis", "Competitor benchmarking", "Strategic roadmap"]
              },
              {
                title: "Content & Programming",
                desc: "We produce community-first content calendars, event series, AMAs, and educational programming that drives consistent engagement.",
                icon: Calendar,
                list: ["Content calendars", "Event production", "Workshop facilitation", "Newsletter management"]
              },
              {
                title: "Team Onboarding & Upskilling",
                desc: "Get your newly hired community, marketing, or DevRel team up to speed fast — or level up your existing team's CLG capabilities.",
                icon: Users,
                list: ["Role-specific onboarding", "Skills gap assessment", "Advanced engagement frameworks", "Hands-on workshops"]
              },
              {
                title: "Team Restructuring Support",
                desc: "Transitioning your marketing team to a community-led model? We help redefine roles, workflows, and KPIs for the shift.",
                icon: RefreshCw,
                list: ["Current state assessment", "New role & workflow design", "KPI realignment", "Change management guidance"]
              },
              {
                title: "Executive Strategy Sessions",
                desc: "Align leadership on the value and execution of community-led growth with focused sessions designed for C-suite and department heads.",
                icon: Briefcase,
                list: ["CLG business case development", "ROI frameworks", "Cross-department alignment", "Strategic roadmap creation"],
                className: "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto" // Center the last one if it's odd
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-brand-surface border border-brand-border rounded-3xl p-8 group hover:border-brand/40 transition-colors relative overflow-hidden shadow-lg hover:shadow-brand/5 hover:-translate-y-1 ${service.className || ''}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full pointer-events-none transition-transform group-hover:scale-150 duration-700 group-hover:bg-brand/10" />
                <service.icon className="w-10 h-10 text-brand mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-brand transition-colors">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10 group-hover:text-zinc-300 transition-colors">{service.desc}</p>
                <ul className="space-y-3 relative z-10 border-t border-brand-border/50 pt-6">
                  {service.list.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5 opacity-80" />
                      <span className="text-xs font-semibold text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section className="py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-brand-surface-2 border border-brand-border rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden group hover:border-brand/30 transition-colors shadow-lg hover:shadow-brand/5"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand/10 transition-colors duration-700" />
          
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Why Work With Us</h2>
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                We're not consultants who hand you a PDF and disappear. Our team rolls up their sleeves and works alongside yours to deliver real, measurable community growth.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Trained 500+ community professionals across Africa and beyond",
                "In-house team with hands-on experience scaling real communities",
                "Data-driven approach with measurable KPIs and reporting",
                "End-to-end execution — strategy through to day-to-day management"
              ].map((reason, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-brand-bg border border-brand-border rounded-2xl p-6 hover:border-brand/40 transition-all hover:-translate-y-1 group/item"
                >
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold mb-4 group-hover/item:bg-brand group-hover/item:text-black transition-colors">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed group-hover/item:text-white transition-colors">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* How It Works */}
      <Section className="py-16 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">How It Works</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A simple, transparent engagement process.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-border z-0"></div>
            
            {[
              { num: "01", title: "Discovery Call", desc: "We learn about your goals, audience, and current community efforts." },
              { num: "02", title: "Strategy & Proposal", desc: "A tailored plan with clear deliverables, timelines, and pricing." },
              { num: "03", title: "Execution", desc: "Our team embeds with yours to build, launch, and manage." },
              { num: "04", title: "Reporting & Iteration", desc: "Monthly performance reviews with data-backed optimizations." }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group-hover:border-brand/50 transition-colors">
                   <div className="absolute inset-0 bg-brand/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                   <span className="text-2xl font-display font-bold text-brand relative z-10 group-hover:scale-110 transition-transform duration-300">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed px-4 group-hover:text-zinc-300 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Ready to scale your community?</h2>
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Section>

    </div>
  );
}

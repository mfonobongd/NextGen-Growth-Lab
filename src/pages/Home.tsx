import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Users, Zap, Briefcase, ChevronRight, CheckCircle2, Globe, Target } from "lucide-react";
import { Section } from "../components/Section";
import { FAQList } from "./FAQ";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const [isUSD, setIsUSD] = useState(false);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-40">
        {/* Background Ambient Glow */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.4, 0.6, 0.4] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand/20 rounded-full blur-[100px] pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight md:leading-[0.9] text-white"
            >
              Building the Next <br className="hidden lg:block" />
              Generation of Leaders.
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg lg:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              A premium community-driven ecosystem for Marketers, DevRels, and Founders to learn, practice, and scale through elite programs.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/community/hub"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2 w-full sm:w-auto"
                >
                  Join Community
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://cal.com/nextgen-growth-lab-waokgk/discoverycall?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border border-brand-border rounded-full transition-all duration-300 hover:border-brand/50 hover:bg-brand/5 hover:scale-105 active:scale-95 gap-2"
                >
                  <span className="relative z-10 w-full text-center">Book a Discovery Call</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section className="py-16 md:py-24 border-y border-brand-border overflow-hidden relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase">
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Why NextGen Growth Lab exists
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                Across the world, thousands of talented community builders, DevRel professionals, and growth marketers are doing an incredible work, but in isolation. No structured support. No shared playbooks. No clear career paths.
              </p>
              <p>
                NextGen Growth Lab was born from a simple belief: <strong className="text-white font-medium">community-led growth professionals everywhere deserve world-class resources, real mentorship, and a network that grows with them.</strong>
              </p>
              <p>
                We built the home that didn't exist - a global space where practitioners across the world learn together, land dream roles, launch projects, and define the future of community-led growth worldwide.
              </p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4"
            >
              <Link to="/about" className="inline-flex items-center gap-2 text-brand hover:underline font-semibold relative group">
                Learn more about us 
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-brand-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Built to close the gap */}
      <Section className="py-16 md:py-24 bg-brand-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Built to close the gap</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Community-led growth professionals everywhere deserve world-class resources, supportive networks, and meaningful career opportunities.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
          {[
            { icon: <Target className="w-6 h-6" />, desc: "Structured support for community-led growth professionals worldwide" },
            { icon: <Briefcase className="w-6 h-6" />, desc: "Quality resources, mentorship, and career opportunities in one place" },
            { icon: <Globe className="w-6 h-6" />, desc: "Connecting global community-led growth talent with world-class opportunities" },
            { icon: <Users className="w-6 h-6" />, desc: "Continuous learning and peer support for community-led growth careers" }
          ].map((item, i) => (
              <motion.div 
              key={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 rounded-3xl border border-brand-border bg-[#1a1a1a] hover:border-brand/50 transition-colors text-left group cursor-pointer shadow-lg hover:shadow-brand/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 text-brand">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <p className="relative z-10 text-zinc-300 font-medium leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-brand rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(187,225,46,0.2)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
          <h3 className="text-6xl md:text-8xl font-display font-bold text-black tracking-tight mb-4">10x</h3>
          <p className="text-2xl md:text-3xl text-black/80 font-medium max-w-xl mx-auto leading-tight">
            Faster career growth with the <br className="hidden md:block" /> right community-led network
          </p>
        </motion.div>
      </Section>

      {/* Membership Section */}
      <Section className="py-16 md:py-24 border-t border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Membership
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
            Choose your growth path
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Join the world's leading community-led growth network and accelerate your career.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${!isUSD ? 'text-white' : 'text-zinc-500'}`}>NGN (₦)</span>
            <button 
              onClick={() => setIsUSD(!isUSD)}
              className="relative w-14 h-7 bg-zinc-800 rounded-full p-1 border border-brand-border transition-colors focus:outline-none"
            >
              <div 
                className={`absolute top-1 w-5 h-5 bg-brand rounded-full transition-transform ${isUSD ? 'translate-x-7' : 'translate-x-0'}`} 
              />
            </button>
            <span className={`text-sm font-semibold ${isUSD ? 'text-white' : 'text-zinc-500'}`}>USD ($)</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* General Tier */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="mb-8 border-b border-brand-border pb-8 relative z-10">
              <h3 className="text-2xl font-bold font-display mb-2 text-white">General</h3>
              <p className="text-zinc-400 text-sm mb-6">Get started with essential community-led growth access</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white tracking-tight">{isUSD ? "$0" : "₦0"}</span>
                <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">forever</span>
              </div>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              {[
                "Access to community discussions",
                "Monthly newsletter",
                "Basic learning resources",
                "Community events access",
                "Networking opportunities"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeDSDPY7nf7nvGwqNAN9hehOBA1-vQndZPZ4r_-wBXwolF4tg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border border-brand-border rounded-full transition-all duration-300 hover:border-brand/50 hover:bg-brand/5 hover:scale-105 active:scale-95 gap-2 w-full"
              >
                Join Free
              </a>
            </motion.div>
          </motion.div>

          {/* Premium Tier */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, boxShadow: "0px 10px 40px rgba(187,225,46,0.2)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a1a1a] border-2 border-brand rounded-3xl p-8 md:p-12 flex flex-col relative shadow-[0_0_50px_rgba(187,225,46,0.1)] group overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-brand text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            </div>
            <div className="mb-8 border-b border-brand/20 pb-8">
              <h3 className="text-2xl font-bold font-display mb-2 text-white">Premium</h3>
              <p className="text-zinc-400 text-sm mb-6">Unlock the full community-led growth experience</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white tracking-tight">{isUSD ? "$45" : "₦59,999"}</span>
                <span className="text-sm font-semibold text-brand uppercase tracking-widest">/year</span>
              </div>
            </div>
            <div className="text-sm font-bold text-white mb-6">Everything in General, plus:</div>
            <ul className="space-y-5 mb-10 flex-1">
              {[
                "Exclusive workshops & masterclasses",
                "1-on-1 mentorship sessions",
                "Priority job board access",
                "Portfolio reviews",
                "Private networking channels",
                "Certification programs",
                "Early access to new features"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
              <a 
                href="https://paystack.shop/pay/nglcmembership"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2 w-full"
              >
                Get Premium
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Flagship Event / Featured Program */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase">
              FLAGSHIP EVENT / 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              NextGen BuildFest
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Our premier in-person event focusing on deep learning, networking, and direct opportunities. Over 50+ growth leaders sharing playbooks, connecting with hiring companies, and building the future.
            </p>
            <ul className="space-y-4">
              {['Exclusive keynotes from top founders', 'Direct hiring pathways', 'Hands-on strategy workshops'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/events/buildfest" className="inline-flex items-center text-xs font-bold tracking-widest text-white uppercase group mt-4">
              Explore BuildFest 
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-brand-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="People networking at a conference" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Who It's For */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Built for Growth Operators</h2>
          <p className="text-gray-400">Whether you're just starting or scaling a global movement.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "Community Managers", desc: "Build highly-engaged, structured networks that drive business value." },
            { tag: "Growth Marketers", desc: "Master retention loops, acquisition channels, and organic scaling." },
            { tag: "DevRel Professionals", desc: "Foster developer ecosystems that lead to product adoption." },
            { tag: "Founders & Builders", desc: "Leverage community as a moat to scale your startup sustainably." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 rounded-2xl border border-brand-border bg-brand-surface hover:bg-zinc-900/80 transition-all text-left"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.tag}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-brand-surface border-y border-brand-border">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">The Growth Pipeline</h2>
          <p className="text-gray-400">A clear, actionable path from raw ambition to market leadership.</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand/0 via-brand/50 to-brand/0" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Join", desc: "Enter the ecosystem and connect with vetted peers." },
              { step: "02", title: "Learn", desc: "Master practical skills from leading operators." },
              { step: "03", title: "Practice", desc: "Apply knowledge to real-world projects." },
              { step: "04", title: "Grow", desc: "Access high-value jobs and consulting ops." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-brand-bg border border-brand-border rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(187,225,46,0.1)]">
                  <span className="font-display font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Backed by the best in the continent.</h2>
            <p className="text-gray-400 text-lg mb-8">
              We've created a movement. Uniting professionals across the ecosystem to push boundaries and build world-class products.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-white tracking-tight mb-2">150+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white tracking-tight mb-2">5+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">Global Partners</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { quote: "The most actionable community for DevRels right now. I landed my current consulting gig through a connection I made here.", author: "Sarah J.", role: "Senior Developer Advocate" },
              { quote: "It’s not just theory. The playbooks shared in the Pro tier allowed us to scale our user retention by 25% in one quarter.", author: "David O.", role: "Growth Lead" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-brand-surface p-8 rounded-3xl border border-brand-border relative"
              >
                <div className="text-6xl text-brand/20 absolute top-4 right-6 font-serif">"</div>
                <p className="text-gray-300 italic mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-accent" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.author}</h4>
                    <span className="text-xs text-gray-400">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 md:py-24 border-t border-brand-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">FAQ</h2>
            <p className="text-xl text-zinc-400">Got questions?</p>
          </div>
          <FAQList />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-brand-border py-16 md:py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative bg-brand-surface rounded-3xl border border-brand-border p-8 md:p-12 lg:p-24 overflow-hidden text-center"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 p-32 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 p-32 bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="relative text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight text-white">Ready to start your growth journey?</h2>
          <p className="relative text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a global community of community-led growth professionals and practitioners shaping the future. Your next opportunity awaits.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/community/hub"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2"
            >
              Join Community
            </Link>
            <a
              href="https://cal.com/nextgen-growth-lab-waokgk/discoverycall?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border border-brand-border rounded-full transition-all duration-300 hover:border-brand/50 hover:bg-brand/5 hover:scale-105 active:scale-95 gap-2"
            >
              Book a Discovery Call
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

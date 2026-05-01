import { motion } from "motion/react";
import { Section } from "../components/Section";
import { Users, FileText, Video, Target, Users2, Briefcase, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { AnimatedCounter } from "../components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CommunityHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isUSD, setIsUSD] = useState(false);

  return (
    <div className="pt-24 border-t border-brand-border pb-16">
      {/* Hero Section */}
      <Section className="pb-16 lg:pb-24 text-center mt-12 md:mt-16">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            The Community Hub
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
            Join the World's Leading <span className="text-brand">Community-Led Growth</span> Community
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            A global space for community builders, growth marketers, and DevRel professionals to learn, connect, and accelerate their careers together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeDSDPY7nf7nvGwqNAN9hehOBA1-vQndZPZ4r_-wBXwolF4tg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand text-black font-semibold rounded-xl shadow-[0_0_20px_rgba(187,225,46,0.3)] hover:shadow-[0_0_30px_rgba(187,225,46,0.5)] transition-all flex justify-center items-center"
              >
                Join for Free
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://paystack.shop/pay/nglcmembership"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-surface border border-brand-border text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors flex justify-center items-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 w-full text-center">Explore Premium</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Stats */}
      <Section className="border-t border-brand-border py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
          {[
            { value: 500, suffix: "+", label: "Active Members" },
            { value: 20, suffix: "+", label: "Countries Represented" },
            { value: 50, suffix: "+", label: "Events Hosted" },
            { value: 200, suffix: "+", label: "Resources Shared" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What You'll Get */}
      <Section className="bg-brand-surface border-y border-brand-border py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What You'll Get as a Member</h2>
          <p className="text-gray-400">Everything you need to build, grow, and monetize communities — all in one place.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Users />, title: "Peer Network", desc: "Connect with 500+ community-led growth professionals across the globe." },
            { icon: <FileText />, title: "Exclusive Resources", desc: "Access frameworks, templates, playbooks, and case studies you won't find anywhere else." },
            { icon: <Video />, title: "Expert Q&A Sessions", desc: "Monthly live sessions with industry leaders where you can ask anything." },
            { icon: <Target />, title: "Challenges & Competitions", desc: "Join time-bound challenges to sharpen your skills and win prizes." },
            { icon: <Users2 />, title: "Accountability Groups", desc: "Get matched with peers who keep you on track and push you to grow." },
            { icon: <Briefcase />, title: "Job & Gig Board", desc: "Early access to community management, DevRel, and growth roles worldwide." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-8 bg-brand-bg border border-brand-border rounded-2xl hover:border-brand/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-12 h-12 bg-brand/10 border border-brand/20 text-brand rounded-xl flex items-center justify-center mb-6 relative z-10"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-3 relative z-10 group-hover:text-brand transition-colors">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing / Tiers */}
      <Section className="py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Choose Your Membership</h2>
          <p className="text-gray-400">Start free, or go Premium for the full experience. Cancel anytime.</p>
        </div>

        {/* Currency Converter (Sticky/Fixed) */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-3 bg-[#1a1a1a]/90 backdrop-blur-md p-3 px-5 rounded-full border border-brand-border shadow-[0_0_20px_rgba(187,225,46,0.1)]">
          <span className={`text-sm font-semibold ${!isUSD ? 'text-white' : 'text-zinc-500'}`}>NGN (₦)</span>
          <button 
            onClick={() => setIsUSD(!isUSD)}
            className="relative w-14 h-7 bg-zinc-800 rounded-full p-1 border border-brand-border transition-colors focus:outline-none shadow-inner"
          >
            <div 
              className={`absolute top-1 w-5 h-5 bg-brand rounded-full transition-transform ${isUSD ? 'translate-x-7' : 'translate-x-0'}`} 
            />
          </button>
          <span className={`text-sm font-semibold ${isUSD ? 'text-white' : 'text-zinc-500'}`}>USD ($)</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* General Tier */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 border border-brand-border bg-brand-surface rounded-3xl flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-display mb-2">General</h3>
              <p className="text-zinc-400 text-sm mb-6">Get started with essential community-led growth access</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{isUSD ? "$0" : "₦0"}</span>
                <span className="text-zinc-500 font-medium"> / forever</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              {[
                'Access to community discussions',
                'Monthly newsletter',
                'Basic learning resources',
                'Community events access',
                'Networking opportunities'
              ].map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-300">
                  <Check className="w-5 h-5 text-gray-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full relative z-10">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeDSDPY7nf7nvGwqNAN9hehOBA1-vQndZPZ4r_-wBXwolF4tg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl border border-brand-border bg-brand-bg hover:bg-zinc-800 transition-colors font-semibold text-white flex justify-center items-center"
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
            className="p-8 lg:p-10 border border-brand/30 bg-brand/5 rounded-3xl flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-brand/20 blur-3xl rounded-full z-0 pointer-events-none" />
            <div className="absolute top-0 right-0 mt-6 md:mt-10 mr-6 md:mr-10">
              <span className="text-[10px] font-bold px-3 py-1 bg-brand text-black rounded-full uppercase tracking-widest shadow-lg shadow-brand/20">Most Popular</span>
            </div>
            
            <h3 className="text-2xl font-bold font-display mb-2 text-white">Premium</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-[240px] md:max-w-xs">Unlock the full community-led growth experience</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{isUSD ? "$45" : "₦59,999"}</span>
              <span className="text-brand font-medium"> / year</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm font-semibold text-white">
                <Check className="w-5 h-5 text-brand shrink-0" />
                Everything in General, plus:
              </li>
              {[
                'Exclusive workshops & masterclasses',
                '1-on-1 mentorship sessions',
                'Priority job board access',
                'Portfolio reviews',
                'Private networking channels',
                'Certification programs',
                'Early access to new features'
              ].map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-300">
                  <Check className="w-5 h-5 text-brand shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full relative z-10">
              <a 
                href="https://paystack.shop/pay/nglcmembership"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-brand text-black font-semibold hover:bg-white transition-colors mb-4 flex justify-center items-center shadow-[0_0_20px_rgba(187,225,46,0.2)] hover:shadow-[0_0_30px_rgba(187,225,46,0.4)]"
              >
                Get Premium
              </a>
            </motion.div>
            <p className="text-xs text-center text-zinc-500 font-medium relative z-10">Premium membership renewed yearly. Cancel anytime.</p>
          </motion.div>
        </div>
      </Section>

      {/* Community Guidelines */}
      <Section className="bg-brand-surface border-y border-brand-border py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">Community Guidelines</h2>
          <p className="text-gray-400 text-center mb-12">
            We're building a safe, respectful, and growth-oriented space. By joining, you agree to:
          </p>
          <div className="space-y-4">
            {[
              "Be respectful — no hate speech, discrimination, or harassment of any kind.",
              "No spam or unsolicited self-promotion. Share value, not pitches.",
              "Keep discussions constructive. Disagreement is welcome; toxicity is not.",
              "Protect member privacy. What's shared in the community stays in the community.",
              "Give credit where it's due. Respect intellectual property.",
              "Report violations to moderators. We take community safety seriously."
            ].map((rule, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl border border-brand-border hover:border-brand/40 transition-colors shadow-sm cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-zinc-300 mt-1">{rule}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Who is this community for?", a: "Community managers, growth marketers, DevRel professionals, and founders looking to scale using community-led growth strategies." },
              { q: "What is the difference between General and Premium?", a: "General gives you basic access to discussions and events. Premium unlocks workshops, 1-on-1 mentorship, job boards, and advanced resources." },
              { q: "Can I upgrade or cancel later?", a: "Yes, you can upgrade to Premium anytime or cancel your subscription without any hassle directly from your account settings." },
              { q: "Are live sessions and events recorded?", a: "Yes, all our live expert Q&A sessions and workshops are recorded and made available inside the Premium resource library." },
              { q: "Do I need prior experience to join?", a: "Not necessarily! Whether you are a beginner looking to break into DevRel or a seasoned community manager, there is immense value and a place for you here." }
            ].map((faq, i) => (
              <div key={i} className="border border-brand-border bg-brand-surface rounded-xl overflow-hidden text-left">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", openFaq === i ? "rotate-180" : "")} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="pb-16 text-center">
        <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 md:p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-brand/10 blur-[100px] pointer-events-none rounded-full" />
          <h2 className="relative text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">Ready to Join?</h2>
          <p className="relative text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start free, upgrade when you're ready. Join 500+ professionals shaping the world's future in community-led growth.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeDSDPY7nf7nvGwqNAN9hehOBA1-vQndZPZ4r_-wBXwolF4tg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 bg-brand text-black font-semibold rounded-xl hover:opacity-90 transition-opacity inline-block"
          >
            Join the Community for Free
          </a>
        </div>
      </Section>

    </div>
  );
}

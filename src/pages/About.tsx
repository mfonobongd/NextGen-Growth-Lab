import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Section } from "../components/Section";
import { Users, BookOpen, Zap, Globe2, Target, Heart, CarFront } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <Section className="pb-16 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white leading-tight">
            Our Story
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            The World's Future in Community-Led Growth
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            NextGen Growth Lab is the premier global hub for community-led growth professionals who want to learn, connect, and build the future of growth - worldwide.
          </p>
        </motion.div>
      </Section>

      {/* The Story */}
      <StorySection />

      {/* Mission & Vision */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-brand/50 transition-colors shadow-lg hover:shadow-brand/5"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            <Target className="w-12 h-12 text-brand mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              To equip community-led growth professionals worldwide with the skills, connections, and resources they need to build thriving communities that drive real business growth and social impact.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-surface border border-brand-border rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-brand/50 transition-colors shadow-lg hover:shadow-brand/5"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            <Globe2 className="w-12 h-12 text-brand mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              To be the world's leading platform for community-led growth professionals, pioneering a global movement where communities power the next generation of businesses worldwide.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* What We Stand For */}
      <Section className="py-16 md:py-24 border-t border-brand-border">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">What We Stand For</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">The core principles that guide our ecosystem.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Community First", desc: "Every decision we make starts with how it serves our community members.", icon: Users },
              { title: "Excellence in Learning", desc: "We create world-class content that rivals the best programs globally.", icon: BookOpen },
              { title: "Bold Action", desc: "We move fast, experiment often, and never settle for good enough.", icon: Zap },
              { title: "Inclusive Growth", desc: "We believe everyone deserves access to quality education and mentorship.", icon: Heart },
              { title: "Global Reach", desc: "We champion talent and perspectives from every corner of the world.", icon: Globe2 },
              { title: "Impact Over Vanity", desc: "We measure success by real outcomes, not follower counts.", icon: Target }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#1a1a1a] border border-brand-border rounded-2xl p-8 hover:border-brand/40 transition-colors group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-brand" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{value.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Journey */}
      <JourneyTimeline />

    </div>
  );
}

function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const carY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Make the line fill up as we scroll
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeySteps = [
    { 
      year: "2024", 
      title: "The Beginning",
      text: "Started as the CM Growth Lab exclusively for community managers to share insights and resources." 
    },
    { 
      year: "2025", 
      title: "The Evolution",
      text: "Evolved into NextGen Growth Lab to accommodate DevRel and other marketing professionals, broadening our scope." 
    },
    { 
      year: "2026", 
      title: "The Launchpad",
      text: "We truly became active. We opened up our community to the world and launched the first community management mentorship program." 
    }
  ];

  return (
    <Section className="py-24 md:py-32 border-t border-brand-border bg-brand-surface-2/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Our Journey</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">The road we've traveled to build the ultimate growth ecosystem.</p>
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10" ref={containerRef}>
        {/* Timeline Path Background */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-brand-border md:-translate-x-1/2 rounded-full" />
        
        {/* Timeline Path Active */}
        <motion.div 
          className="absolute left-8 md:left-1/2 top-0 w-1 bg-brand md:-translate-x-1/2 rounded-full shadow-[0_0_10px_rgba(187,225,46,0.5)] origin-top"
          style={{ height: pathHeight }}
        />

        {/* Driving Car */}
        <motion.div 
          className="absolute left-8 md:left-1/2 -ml-6 md:ml-0 md:-translate-x-1/2 z-20 flex flex-col items-center justify-center text-brand drop-shadow-[0_0_15px_rgba(187,225,46,0.6)]"
          style={{ top: carY, y: "-50%" }}
        >
          <div className="w-12 h-12 bg-black border-2 border-brand rounded-full flex items-center justify-center shadow-xl">
              <CarFront className="w-6 h-6 text-brand" />
          </div>
        </motion.div>

        <div className="space-y-24 md:space-y-40 relative pb-24 pt-12">
          {journeySteps.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 group ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
              
              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="flex-1 w-full pl-24 md:pl-0"
              >
                <div className="bg-[#1a1a1a] border border-brand-border rounded-3xl p-8 relative hover:border-brand/50 transition-colors duration-500 shadow-xl group-hover:shadow-brand/5">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />
                  <span className="text-5xl font-display font-black text-white/5 absolute top-4 right-6 pointer-events-none">{item.year}</span>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-xs font-bold tracking-wider text-brand mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <Section className="py-24 border-t border-brand-border relative overflow-hidden" ref={containerRef}>
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" 
      />
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-brand-border rounded-3xl p-8 md:p-14 relative overflow-hidden group hover:border-brand/40 transition-all duration-500 shadow-2xl">
          {/* Internal slight moving gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out" />
          
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 relative z-10 flex items-center gap-4">
            <span className="w-10 h-1 bg-brand rounded-full" />
            How NextGen Came to Be
          </h3>
          <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed relative z-10 font-light">
            <p className="first-line:uppercase first-line:tracking-widest first-letter:text-5xl first-letter:font-bold first-letter:text-brand first-letter:mr-2 first-letter:float-left">
              It started with a simple observation: the landscape of business growth was shifting. Traditional marketing channels were becoming saturated, expensive, and less effective. But everywhere we looked, companies that invested in genuine, engaged communities were thriving.
            </p>
            <p>
              However, there was a glaring gap. While the demand for community builders and community-led growth strategists skyrocketed, there was no centralized ecosystem where these professionals could get practical training, find vetted opportunities, and learn from each other's direct experiences.
            </p>
            <p>
              NextGen Growth Lab was born out of this necessity. We set out to create more than just a course or a slack group. We wanted to build a comprehensive ecosystem - a lab where the next generation of growth leaders could experiment, develop strategies that actually work, and connect directly with the companies that need them most.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

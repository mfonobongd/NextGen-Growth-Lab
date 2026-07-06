import { motion } from "motion/react";
import { Section } from "../components/Section";
import { Package } from "lucide-react";
import { InteractiveComingSoon } from "../components/InteractiveComingSoon";

export default function Products() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 flex items-center justify-center min-h-[70vh]">
      <Section className="pb-8 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Our Products
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white leading-tight">
            NextGen Products
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Tools and resources designed to help community builders, growth marketers, and DevRels scale their impact.
          </p>

          <InteractiveComingSoon 
            title="Coming Soon" 
            description="We're currently building something amazing. Join our waitlist to be the first to know when it launches." 
            icon={<Package className="w-8 h-8 text-brand" />} 
          />
        </motion.div>
      </Section>
    </div>
  );
}

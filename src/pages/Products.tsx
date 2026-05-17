import { motion } from "motion/react";
import { Section } from "../components/Section";
import { Package } from "lucide-react";

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

          <div className="mt-16 sm:mt-20 inline-block">
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="w-16 h-16 mx-auto bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Package className="w-6 h-6 text-brand" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
                <span className="text-brand">Coming Soon</span>
              </h2>
              
              <p className="text-zinc-400 text-lg max-w-lg mx-auto relative z-10">
                We're currently building something amazing. Join our newsletter to be the first to know when it launches.
              </p>
              
              <div className="mt-8 relative z-10">
                <a
                  href="https://nextgengrowthlab.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2"
                >
                  Subscribe to our Newsletter
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { ArrowRight, Calendar, User } from "lucide-react";

export const BLOG_POSTS = [
  {
    slug: "future-of-community-led-growth",
    title: "The Future of Community-Led Growth in Africa",
    excerpt: "How companies are leveraging communities to drive sustainable acquisition and retention across the continent.",
    author: "Amfonobong",
    date: "May 15, 2026",
    category: "Insights",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  },
  {
    slug: "measuring-community-roi",
    title: "Measuring Community ROI: Metrics that Matter",
    excerpt: "Move beyond vanity metrics and learn how to track the true business impact of your community initiatives.",
    author: "NextGen Team",
    date: "April 22, 2026",
    category: "Strategy",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    slug: "building-devrel-programs",
    title: "How to Build a Culturally Relevant DevRel Program",
    excerpt: "Developer relations requires localized context. Here's how top companies are building DevRel in emerging markets.",
    author: "Guest Contributor",
    date: "March 10, 2026",
    category: "DevRel",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <Section className="pb-16 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Insights & Updates
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white leading-tight">
            The NextGen Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Thoughts, strategies, and resources on community building, growth marketing, and DevRel.
          </p>
        </motion.div>
      </Section>

      <Section className="py-16 md:py-24 border-t border-brand-border h-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: "0px 15px 40px rgba(0,0,0,0.6)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden group hover:border-brand/40 transition-colors flex flex-col relative"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-brand-border/50">
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-white transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

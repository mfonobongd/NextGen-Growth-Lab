import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Section } from "../components/Section";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { BLOG_POSTS } from "./Blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
        <Link to="/blog" className="text-brand hover:text-white transition-colors">Return to blog</Link>
      </div>
    );
  }

  return (
    <article className="pt-24 md:pt-32 pb-16 md:pb-24">
      <Section className="pb-16 mt-8 md:mt-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            {post.category}
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-5xl font-display font-bold mb-6 tracking-tight text-white leading-tight"
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-6 text-sm font-medium text-zinc-400 mb-10 pb-10 border-b border-brand-border"
          >
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-500" /> {post.date}</span>
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-zinc-500" /> {post.author}</span>
            <button className="ml-auto flex items-center gap-2 hover:text-white transition-colors"><Share2 className="w-4 h-4" /> Share</button>
          </motion.div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full h-[400px] mb-12 rounded-3xl overflow-hidden relative shadow-2xl"
          >
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="prose prose-invert prose-lg prose-p:text-zinc-300 prose-headings:text-white prose-a:text-brand max-w-none">
            <p className="lead text-xl text-zinc-300 mb-8 font-medium">
              {post.excerpt}
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2>The Shift to Community-Led</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <blockquote>
              "Community is not a marketing channel. It's a business strategy. The companies that understand this will define the next decade of growth."
            </blockquote>
            
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <h3>Key Takeaways</h3>
            <ul>
              <li>Focus on value creation before value capture.</li>
              <li>Measure leading indicators, not just lagging metrics.</li>
              <li>Empower your champions.</li>
            </ul>
             <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </Section>
    </article>
  );
}

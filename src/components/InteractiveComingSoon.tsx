import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

interface InteractiveComingSoonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function InteractiveComingSoon({ title, description, icon }: InteractiveComingSoonProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="mt-12 sm:mt-16 w-full max-w-2xl mx-auto relative"
    >
      <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl group transition-colors hover:border-brand/40">
        {/* Interactive Spotlight Hover Effect */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(187,225,46,0.08), transparent 40%)`
          }}
        />
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none z-0" />
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-20 h-20 mx-auto bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center mb-8 relative z-10"
        >
          <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
            {icon}
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10"
        >
          {title}
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 text-lg max-w-lg mx-auto relative z-10 mb-10 leading-relaxed"
        >
          {description}
        </motion.p>
        
        <motion.form 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit} 
          className="relative z-10 max-w-md mx-auto"
        >
          <div className="flex bg-[#0A0A0A] border border-brand-border/80 rounded-full p-1.5 focus-within:border-brand/50 focus-within:ring-1 focus-within:ring-brand/30 transition-all duration-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to join waitlist"
              required
              disabled={status !== "idle"}
              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder:text-zinc-600 px-4 text-sm disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status !== "idle" || !email}
              className={cn(
                "relative flex items-center justify-center h-12 px-6 rounded-full font-bold text-sm transition-all duration-300 disabled:opacity-50 overflow-hidden",
                status === "success" 
                  ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]" 
                  : "bg-brand text-black hover:bg-brand/90 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(187,225,46,0.3)]"
              )}
            >
              {status === "idle" && (
                <span className="flex items-center gap-2">
                  Subscribe <Send className="w-4 h-4 ml-1" />
                </span>
              )}
              {status === "loading" && (
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              )}
              {status === "success" && (
                <motion.span 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  Subscribed <CheckCircle2 className="w-4 h-4" />
                </motion.span>
              )}
            </button>
          </div>
        </motion.form>
      </div>
      
      {status === "success" && (
        <motion.div 
          className="absolute inset-0 pointer-events-none z-20"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
            <motion.div animate={{ y: [-10, -50], opacity: [0, 1, 0], scale: [0.5, 1, 0.8] }} transition={{ duration: 2 }} className="absolute -top-4 -left-4">
              <Sparkles className="w-8 h-8 text-brand/80" />
            </motion.div>
            <motion.div animate={{ y: [0, -60], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 1.8, delay: 0.2 }} className="absolute top-10 -right-8">
              <Sparkles className="w-6 h-6 text-brand/60" />
            </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

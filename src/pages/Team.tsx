import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "../components/Section";
import { SEO } from "../components/SEO";
import { Linkedin, Twitter, X } from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: "founder",
    name: "Alex Johnson",
    role: "Founder",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    bio: "Alex founded NextGen Growth Lab with a vision to empower community-led growth worldwide.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: "pm",
    name: "Sarah Chen",
    role: "Program Manager",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Sarah ensures our mentorship programs run smoothly and effectively, bringing years of operational experience.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: "cm",
    name: "Kwame Osei",
    role: "Community Manager",
    imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80",
    bio: "Kwame is the heartbeat of our community, keeping members engaged, supported, and connected.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: "smcm",
    name: "Maya Patel",
    role: "Social Media and Community Manager",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80",
    bio: "Maya amplifies our voice online and builds meaningful relationships across all our social platforms.",
    social: { linkedin: "#", twitter: "#" }
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen">
      <SEO 
        title="Team & Volunteers | NextGen Growth Lab"
        description="Meet the dedicated team and volunteers powering the NextGen Growth Lab."
        canonicalUrl="/team"
      />
      <Section className="pb-8 text-center mt-8 md:mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Get To Know Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white leading-tight">
            Our Team & Volunteers
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Meet the passionate individuals organizing, building, and growing our community ecosystem behind the scenes.
          </p>
        </motion.div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden group hover:border-brand/40 transition-colors flex flex-col cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1 relative z-20 bg-brand-surface/95 backdrop-blur-md">
                <h3 className="text-xl font-bold tracking-tight text-white mb-1">{member.name}</h3>
                <p className="text-sm text-brand font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {member.bio}
                </p>
                <div className="flex gap-3 pt-4 border-t border-brand-border mt-auto">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pop Out Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              layoutId={`team-card-${selectedMember.id}`}
              className="bg-brand-surface border border-brand-border rounded-3xl w-full max-w-xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white z-20 transition-colors border border-white/10"
                onClick={() => setSelectedMember(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="h-64 sm:h-80 relative">
                <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
              </div>
              
              <div className="p-8 -mt-20 relative z-10 w-full">
                <h2 className="text-3xl font-display font-bold text-white mb-2">{selectedMember.name}</h2>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold border border-brand/20">
                    {selectedMember.role}
                  </span>
                </div>
                
                <h4 className="text-white font-semibold mb-2">Biography</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {selectedMember.bio}
                </p>

                <div className="mt-8 pt-8 border-t border-brand-border flex gap-4">
                  <a href={selectedMember.social.linkedin} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={selectedMember.social.twitter} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

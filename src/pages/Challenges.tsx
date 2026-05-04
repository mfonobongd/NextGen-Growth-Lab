import { useState, useEffect } from "react";
import { Section } from "../components/Section";
import { Target, Trophy, Clock, ArrowRight, CheckCircle2, Users, Medal, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedCounter } from "../components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-3 md:gap-4 mt-2">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-brand-surface-2 border border-brand-border rounded-xl text-xl font-bold text-white shadow-inner">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mt-2">Days</span>
      </div>
      <span className="text-zinc-600 font-bold text-xl pb-6">:</span>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-brand-surface-2 border border-brand-border rounded-xl text-xl font-bold text-white shadow-inner">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mt-2">Hours</span>
      </div>
      <span className="text-zinc-600 font-bold text-xl pb-6">:</span>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-brand-surface-2 border border-brand-border rounded-xl text-xl font-bold text-white shadow-inner">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 mt-2">Mins</span>
      </div>
      <span className="text-zinc-600 font-bold text-xl pb-6">:</span>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-brand-surface-2 border-brand border rounded-xl text-xl font-bold text-brand shadow-inner shadow-brand/10">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider text-brand/80 mt-2">Secs</span>
      </div>
    </div>
  );
}

export default function Challenges() {
  return (
    <div className="pt-32 pb-16">
      <Section className="pb-16 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-[10px] font-bold tracking-widest text-brand uppercase mb-6">
            Level Up with Challenges
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Community Challenges</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join time-bound challenges designed to push your skills, build accountability, and compete with fellow community members on the leaderboard.
          </p>
        </motion.div>
      </Section>

      <Section className="py-12 border-t border-brand-border">
        {/* Featured Challenge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-surface border border-brand-border rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden group hover:border-brand/40 transition-colors shadow-lg hover:shadow-brand/5"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand/10 transition-colors duration-500" />
          
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Left side: Challenge Info */}
            <div className="flex-1 space-y-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-brand text-black rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(187,225,46,0.3)]">
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                    Active Now
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-brand-surface-2 border border-brand-border text-zinc-300 rounded-full uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    15 Days
                  </span>
                </motion.div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">#15DaysOfCommunityManagement</h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  A foundational challenge designed to help you plan, launch, and engage your community effectively. Complete daily tasks and rise up the leaderboard.
                </p>

                <div className="mt-8 mb-8 border-t border-brand-border pt-6">
                  <div className="text-xs font-bold text-white mb-2 flex items-center gap-2 uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-brand" /> Challenge Ends In:
                  </div>
                  <CountdownTimer targetDate="2026-05-16T23:59:59Z" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white"><AnimatedCounter value={234} /></div>
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Participants</div>
                  </div>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeDSDPY7nf7nvGwqNAN9hehOBA1-vQndZPZ4r_-wBXwolF4tg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-brand rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,225,46,0.4)] hover:scale-105 active:scale-95 gap-2"
                >
                  Join Challenge Now <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right side: Tasks Preview */}
            <div className="flex-1">
              <div className="bg-brand-bg border border-brand-border rounded-2xl p-6 lg:p-8 hover:border-brand/40 transition-colors h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-brand" /> Challenge Tasks
                  </h3>
                  <span className="text-sm font-medium text-zinc-500">15 Tasks</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Day 1: Define your community's purpose & persona",
                    "Day 2: Create a seamless member onboarding flow",
                    "Day 3: Write your first community guidelines",
                    "Day 4: Host an engaging AMA session",
                    "Day 5: Measure success with meaningful metrics"
                  ].map((task, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-brand-border bg-brand-surface-2 transition-all hover:border-brand/40 hover:-translate-y-0.5 cursor-pointer group/task"
                    >
                      <div className="w-6 h-6 rounded-full border-2 border-brand-border flex items-center justify-center shrink-0 mt-0.5 group-hover/task:border-brand transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-brand opacity-0 group-hover/task:opacity-50 transition-opacity" />
                      </div>
                      <span className="text-sm text-zinc-300 group-hover/task:text-white transition-colors">{task}</span>
                    </motion.div>
                  ))}
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeDSDPY7nf7nvGwqNAN9hehOBA1-vQndZPZ4r_-wBXwolF4tg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 text-sm font-semibold text-zinc-400 hover:text-brand transition-colors flex items-center justify-center gap-1 group/more"
                  >
                    View all 15 tasks <ChevronRight className="w-4 h-4 group-hover/more:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-brand" /> Live Leaderboard
            </h2>
            <p className="text-zinc-500">Top participants for the current challenge.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-[auto_1fr_auto] gap-4 p-6 border-b border-brand-border bg-brand-bg/50 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <div className="w-12 text-center">Rank</div>
              <div>Participant</div>
              <div className="text-right">Points</div>
            </div>
            <div className="divide-y divide-brand-border">
              {[
                { rank: 1, name: "Sarah Williams", role: "Community Manager", points: 1500, color: "text-yellow-400" },
                { rank: 2, name: "David Chen", role: "DevRel Engineer", points: 1200, color: "text-zinc-300" },
                { rank: 3, name: "Aisha Mohammed", role: "Growth Marketer", points: 1150, color: "text-orange-400" },
                { rank: 4, name: "James Anderson", role: "Community Builder", points: 900, color: "text-zinc-500" },
                { rank: 5, name: "Elena Rodriguez", role: "Developer Advocate", points: 850, color: "text-zinc-500" }
              ].map((user, idx) => (
                <motion.div 
                  key={user.rank} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-6 hover:bg-white/5 transition-colors cursor-pointer group/row relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 translate-x-[-100%] group-hover/row:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="w-12 flex justify-center relative z-10">
                    {user.rank <= 3 ? (
                      <Medal className={`w-8 h-8 ${user.color} group-hover/row:scale-110 transition-transform`} />
                    ) : (
                      <span className="text-lg font-bold text-zinc-500 group-hover/row:text-white transition-colors">#{user.rank}</span>
                    )}
                  </div>
                  <div className="relative z-10">
                    <div className="font-bold text-white mb-1 group-hover/row:text-brand transition-colors">{user.name}</div>
                    <div className="text-xs text-zinc-500 group-hover/row:text-zinc-400 transition-colors">{user.role}</div>
                  </div>
                  <div className="text-right relative z-10">
                    <span className="text-lg font-bold text-white"><AnimatedCounter value={user.points} /></span>
                    <span className="text-xs text-zinc-500 ml-1 group-hover/row:text-brand transition-colors">pts</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "../components/Section";
import { ChevronDown } from "lucide-react";
import { SEO } from "../components/SEO";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
  answerText: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is NextGen Growth Lab?",
    answer: "NextGen Growth Lab is an ecosystem focused on helping community managers, marketers, and growth professionals learn, practice, and grow through hands-on programs, events, and real-world experiences.",
    answerText: "NextGen Growth Lab is an ecosystem focused on helping community managers, marketers, and growth professionals learn, practice, and grow through hands-on programs, events, and real-world experiences."
  },
  {
    question: "Who is NextGen for?",
    answer: (
      <>
        <p className="mb-2">NextGen is for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Aspiring and experienced Community Managers</li>
          <li>Growth & Marketing Professionals</li>
          <li>DevRel practitioners</li>
          <li>Founders and operators building communities or products</li>
        </ul>
      </>
    ),
    answerText: "NextGen is for Aspiring and experienced Community Managers, Growth & Marketing Professionals, DevRel practitioners, and Founders and operators building communities or products."
  },
  {
    question: "What makes NextGen different?",
    answer: (
      <>
        <p className="mb-2">We focus on:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Practical, real-world learning (not just theory)</li>
          <li>Hands-on programs and mentorship</li>
          <li>Building actual skills you can apply immediately</li>
          <li>Curated, high-quality communities and events</li>
        </ul>
      </>
    ),
    answerText: "We focus on practical, real-world learning, hands-on programs and mentorship, building actual skills you can apply immediately, and curated, high-quality communities and events."
  },
  {
    question: "What programs do you offer?",
    answer: (
      <>
        <p className="mb-2">We run:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Community Management Mentorship Programs</li>
          <li>Monthly learning sessions (The Growth Lab Series)</li>
          <li>Workshops and hands-on training</li>
          <li>Writing and visibility initiatives</li>
        </ul>
      </>
    ),
    answerText: "We run Community Management Mentorship Programs, Monthly learning sessions (The Growth Lab Series), Workshops and hands-on training, and Writing and visibility initiatives."
  },
  {
    question: "Are your programs free or paid?",
    answer: "Some programs are free or scholarship-based, while others are paid or sponsored, depending on the format and depth.",
    answerText: "Some programs are free or scholarship-based, while others are paid or sponsored, depending on the format and depth."
  },
  {
    question: "How do I apply for programs?",
    answer: (
      <>
        <p className="mb-2">Applications are typically announced publicly. You’ll need to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fill out an application form</li>
          <li>Meet the eligibility criteria</li>
          <li>Commit to the program schedule</li>
        </ul>
      </>
    ),
    answerText: "Applications are typically announced publicly. You’ll need to fill out an application form, meet the eligibility criteria, and commit to the program schedule."
  },
  {
    question: "Do I need prior experience to join?",
    answer: "Not always. Some programs are beginner-friendly, while others are designed for people already working in the field.",
    answerText: "Not always. Some programs are beginner-friendly, while others are designed for people already working in the field."
  },
  {
    question: "How does the mentorship program work?",
    answer: (
      <>
        <p className="mb-2">Participants are paired with mentors and go through:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Weekly live sessions</li>
          <li>Assignments and practical tasks</li>
          <li>Ongoing feedback and support</li>
        </ul>
      </>
    ),
    answerText: "Participants are paired with mentors and go through weekly live sessions, assignments and practical tasks, and ongoing feedback and support."
  },
  {
    question: "Can I become a mentor?",
    answer: "Yes. We periodically onboard experienced professionals who are interested in guiding the next generation of community and growth talent.",
    answerText: "Yes. We periodically onboard experienced professionals who are interested in guiding the next generation of community and growth talent."
  },
  {
    question: "What is BuildFest?",
    answer: "BuildFest is our flagship in-person event that brings together community managers, marketers, and ecosystem builders for practical learning, collaboration, and networking.",
    answerText: "BuildFest is our flagship in-person event that brings together community managers, marketers, and ecosystem builders for practical learning, collaboration, and networking."
  },
  {
    question: "What is The Growth Lab Series?",
    answer: "A monthly virtual session where we bring in experts to teach on specific topics, workshops, and hands-on sessions.",
    answerText: "A monthly virtual session where we bring in experts to teach on specific topics, workshops, and hands-on sessions."
  },
  {
    question: "Are events open to everyone?",
    answer: "Some events are open, while others (like BuildFest) are invite-only or curated to maintain a high-quality experience. You can always request an invite if you’d like to attend.",
    answerText: "Some events are open, while others (like BuildFest) are invite-only or curated to maintain a high-quality experience. You can always request an invite if you’d like to attend."
  },
  {
    question: "Do you work with companies?",
    answer: (
      <>
        <p className="mb-2">Yes. We support companies through:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Community and growth consulting</li>
          <li>Training and workshops</li>
          <li>Events and ecosystem engagement</li>
        </ul>
      </>
    ),
    answerText: "Yes. We support companies through community and growth consulting, training and workshops, and events and ecosystem engagement."
  },
  {
    question: "How can my company partner with NextGen?",
    answer: (
      <>
        <p className="mb-2">You can partner with us through:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Event sponsorships</li>
          <li>Training collaborations</li>
          <li>Community-building initiatives</li>
        </ul>
        <p className="mt-2">Reach out via: <a href="mailto:nextgengrowthlab@gmail.com" className="text-brand hover:underline">nextgengrowthlab@gmail.com</a></p>
      </>
    ),
    answerText: "You can partner with us through event sponsorships, training collaborations, and community-building initiatives."
  },
  {
    question: "What kind of companies do you work with?",
    answer: (
      <>
        <p className="mb-2">We typically work with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Startups (early to growth stage)</li>
          <li>Tech companies (fintech, edtech, web3, etc.)</li>
          <li>Organizations building developer or user communities</li>
        </ul>
      </>
    ),
    answerText: "We typically work with startups, tech companies, and organizations building developer or user communities."
  },
  {
    question: "How do I join the NextGen community?",
    answer: (
      <>
        <p>You can join by signing up here: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDSDPY7nf7nvGwqNAN9hehOBA1-vQndZPZ4r_-wBXwolF4tg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline break-all">Community Sign Up Form</a></p>
      </>
    ),
    answerText: "You can join by signing up via our Community Sign Up Form."
  },
  {
    question: "What can I expect as a community member?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Access to learning opportunities</li>
        <li>Events and workshops</li>
        <li>Peer support and collaboration</li>
        <li>Growth and visibility opportunities</li>
      </ul>
    ),
    answerText: "You can expect access to learning opportunities, events and workshops, peer support and collaboration, and growth and visibility opportunities."
  },
  {
    question: "How can I stay updated?",
    answer: (
      <>
        <p className="mb-2">Follow us on:</p>
        <ul className="space-y-1">
          <li><a href="https://www.linkedin.com/company/nextgengrowthlab" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">LinkedIn</a></li>
          <li><a href="https://x.com/nextgengl" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">X(Twitter)</a></li>
          <li><a href="https://www.instagram.com/nextgengl/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Instagram</a></li>
        </ul>
      </>
    ),
    answerText: "Follow us on LinkedIn, X(Twitter), and Instagram."
  },
  {
    question: "Who can I contact for inquiries?",
    answer: "For general inquiries, partnerships, or support: nextgengrowthlab@gmail.com",
    answerText: "For general inquiries, partnerships, or support: nextgengrowthlab@gmail.com"
  },
  {
    question: "How can I get involved?",
    answer: (
      <>
        <p className="mb-2">You can:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Join the community</li>
          <li>Apply to programs</li>
          <li>Attend events</li>
          <li>Partner or sponsor</li>
          <li>Contribute as a speaker or mentor</li>
        </ul>
      </>
    ),
    answerText: "You can join the community, apply to programs, attend events, partner or sponsor, or contribute as a speaker or mentor."
  }
];

const FAQAccordion: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-border last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-white group-hover:text-brand transition-colors">
          {item.question}
        </span>
        <span className="ml-6 flex-shrink-0">
          <ChevronDown 
            className={`w-5 h-5 text-gray-400 group-hover:text-brand transition-all duration-300 ${isOpen ? "rotate-180 text-brand" : "rotate-0"}`} 
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 leading-relaxed text-base">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQList({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-surface border border-brand-border rounded-3xl p-6 md:p-10 shadow-lg"
    >
      {displayFaqs.map((faq, index) => (
        <FAQAccordion
          key={index}
          item={faq}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </motion.div>
  );
}

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answerText
      }
    }))
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title="FAQ | NextGen Growth Lab"
        description="Frequently asked questions about NextGen Growth Lab, our community, programs, and how you can get involved in the future of community-led growth."
        canonicalUrl="/faq"
        schema={faqSchema}
      />
      <Section className="pb-16 max-w-4xl mx-auto text-center relative mt-8 md:mt-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about NextGen Growth Lab, our programs, and how to get involved.
          </p>
        </motion.div>
      </Section>

      <Section className="py-12 border-t border-brand-border relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <FAQList />
        </div>
      </Section>
    </div>
  );
}

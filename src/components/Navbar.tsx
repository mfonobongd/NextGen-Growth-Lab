import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { 
    name: "Community", 
    href: "/community",
    subLinks: [
      { name: "Community Hub", href: "/community/hub" },
      { name: "Challenges", href: "/community/challenges" },
    ]
  },
  { 
    name: "Events", 
    href: "/events",
    subLinks: [
      { name: "Workshops", href: "/events/workshops" },
      { name: "BuildFest", href: "/events/buildfest" },
      { name: "Mentorship Program", href: "/events/mentorship" }
    ]
  },
  { 
    name: "Business", 
    href: "/business",
    subLinks: [
      { name: "Partner with Us", href: "/business/partner" },
      { name: "Hire from our community", href: "/business/hire" },
      { name: "Agency Services", href: "/business/agency" }
    ]
  },
  {
    name: "Company",
    href: "/about",
    subLinks: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-brand-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
            <span className="font-display font-bold text-lg text-black">N</span>
          </div>
          <span className="font-display font-semibold tracking-tight text-lg group-hover:text-brand transition-colors">
            NextGen Growth Lab
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group">
              {link.subLinks ? (
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-white py-2 cursor-default focus:outline-none",
                    (location.pathname.startsWith(link.href) && link.href !== '/') ? "text-white" : "text-gray-400"
                  )}
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-white py-2",
                    location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/') ? "text-white" : "text-gray-400"
                  )}
                >
                  {link.name}
                </Link>
              )}
              
              {link.subLinks && (
                <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-0">
                  <div className="bg-brand-bg border border-brand-border rounded-xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                    {link.subLinks.map(sub => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/about"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/community/hub"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 bg-gradient-accent rounded-full hover:shadow-[0_0_20px_rgba(187,225,46,0.3)] hover:scale-105"
          >
            Join Community
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full inset-x-0 bg-brand-surface border-b border-brand-border md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col space-y-2">
                  {link.subLinks ? (
                    <div className="text-lg font-medium text-gray-300">
                      {link.name}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.subLinks && (
                    <div className="flex flex-col pl-4 space-y-3 mt-2 border-l border-brand-border/50">
                      {link.subLinks.map(sub => (
                         <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-gray-400 hover:text-white"
                         >
                           {sub.name}
                         </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px bg-brand-border w-full" />
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                Contact Us
              </Link>
              <Link
                to="/community/hub"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black bg-gradient-accent rounded-full"
              >
                Join Community
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

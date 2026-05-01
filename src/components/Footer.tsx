import { Link } from "react-router-dom";
import { ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="font-display font-bold text-lg text-black">N</span>
              </div>
              <span className="font-display font-semibold tracking-tight text-lg">
                NextGen Growth Lab
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Building the next generation of Community & Growth leaders. 
              Learn, practice, and grow through real-world experiences.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/community/hub" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/events/workshops" className="hover:text-white transition-colors">Events & Workshops</Link></li>
              <li><Link to="/business/hire" className="hover:text-white transition-colors">Hire Talent</Link></li>
              <li><Link to="/community/hub" className="hover:text-white transition-colors">Pro Membership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/business/partner" className="hover:text-white transition-colors">Partner with us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest insights on community building and growth.
            </p>
            <a 
              href="https://nextgengrowthlab.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-brand text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Subscribe on Substack <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NextGen Growth Lab. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

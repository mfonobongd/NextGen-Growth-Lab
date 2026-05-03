/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CommunityHub from "./pages/CommunityHub";
import Challenges from "./pages/Challenges";
import Workshops from "./pages/Workshops";
import BuildFest from "./pages/BuildFest";
import Mentorship from "./pages/Mentorship";
import Partner from "./pages/Partner";
import HireTalent from "./pages/HireTalent";
import AgencyServices from "./pages/AgencyServices";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MainRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error key is a valid React prop but it's not defined in the interface here */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/community" element={<Navigate to="/community/hub" replace />} />
        <Route path="/community/hub" element={<PageWrapper><CommunityHub /></PageWrapper>} />
        <Route path="/community/challenges" element={<PageWrapper><Challenges /></PageWrapper>} />
        <Route path="/events" element={<Navigate to="/events/buildfest" replace />} />
        <Route path="/events/workshops" element={<PageWrapper><Workshops /></PageWrapper>} />
        <Route path="/events/buildfest" element={<PageWrapper><BuildFest /></PageWrapper>} />
        <Route path="/events/mentorship" element={<PageWrapper><Mentorship /></PageWrapper>} />
        <Route path="/business" element={<Navigate to="/business/partner" replace />} />
        <Route path="/business/partner" element={<PageWrapper><Partner /></PageWrapper>} />
        <Route path="/business/hire" element={<PageWrapper><HireTalent /></PageWrapper>} />
        <Route path="/business/agency" element={<PageWrapper><AgencyServices /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-brand-bg text-white">
          <Navbar />
          <main className="flex-1">
            <MainRoutes />
          </main>
          <Footer />
        </div>
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}
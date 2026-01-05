"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HeroSection from "@/components/home/hero-section";
import AboutPreview from "@/components/home/about-preview";
import ProjectsPreview from "@/components/home/projects-preview";
import SkillsPreview from "@/components/home/skills-preview";
import ContactPreview from "@/components/home/contact-preview";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200); // más Apple: más rápido
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="glass rounded-3xl px-8 py-6"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-sm text-muted-foreground">Loading…</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <HeroSection />
          <AboutPreview />
          <ProjectsPreview />
          <SkillsPreview />
          <ContactPreview />
        </>
      )}
    </>
  );
}

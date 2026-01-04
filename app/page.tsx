'use client';

import { useEffect, useState } from 'react';
// import HeroSection from '@/components/home/hero-section';
// import AboutPreview from '@/components/home/about-preview';
// import ProjectsPreview from '@/components/home/projects-preview';
// import SkillsPreview from '@/components/home/skills-preview';
// import ContactPreview from '@/components/home/contact-preview';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-sm opacity-70">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 md:space-y-24">
      {/* <HeroSection /> */}
      {/* <AboutPreview /> */}
      {/* <ProjectsPreview /> */}
      {/* <SkillsPreview /> */}
      {/* <ContactPreview /> */}
    </div>
  );
}

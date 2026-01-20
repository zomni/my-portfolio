"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import * as THREE from "three";

import { Button } from "@/components/ui/button";
import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";

export default function HeroSection() {
  const { t } = useTranslation();

  const vantaRef = useRef<HTMLDivElement>(null);

  type VantaEffect = { destroy: () => void };
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      if (!vantaRef.current || vantaEffect.current) return;

      const BirdsModule = await import("vanta/dist/vanta.birds.min");
      const BIRDS = BirdsModule.default;

      if (cancelled || !vantaRef.current) return;

      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x100007,
        color1: 0x000000,
        color2: 0x560bad,
        birdSize: 0.5,
        wingSpan: 40.0,
        speedLimit: 1.0,
        separation: 100.0,
        alignment: 100.0,
        cohesion: 1.0,
      });
    };

    init();

    return () => {
      cancelled = true;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Vanta */}
      <div
        ref={vantaRef}
        className="absolute inset-0 -z-20"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 soft-grid" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            background:
              "radial-gradient(900px circle at 50% 35%, rgba(86,11,173,0.18), transparent 60%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 min-h-[90vh] flex items-center justify-center">
        <motion.div
          variants={stagger(0.09, 0.1)}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-center"
        >
          <motion.p
            variants={fadeIn("up", 0)}
            className="text-base text-3xl md:text-lg lg:text-4xl font-bold mb-4 tracking-wide text-primary"
          >
            {t("home.hero.role")}
          </motion.p>

          <motion.h1
            variants={fadeIn("up", 0.06)}
            className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight"
          >
            <span
              className="
                bg-gradient-to-r
                from-foreground
                via-primary
                to-[#F7B801]
                bg-clip-text
                text-transparent
              "
            >
              Paolo
            </span>{" "}
            <span
              className="
                bg-gradient-to-r
                from-foreground
                via-primary
                to-[#F7B801]
                bg-clip-text
                text-transparent
              "
            >
              Vilches
            </span>{" "}
            <span
              className="
                text-foreground
                text-white
                dark:text-muted-foreground
              "
            >
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.14)}
            className="
              mt-6
              text-xl
              text-base md:text-2xl
              text-white
              dark:text-muted-foreground
              max-w-2xl mx-auto
            "
          >
            {t("home.hero.description")}
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.2)}
            className="mt-10 flex flex-wrap gap-3 justify-center"
          >
            <Button asChild className="rounded-2xl px-6">
              <Link href="/projects">
                {t("home.hero.ctaProjects")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="rounded-2xl px-6 glass">
              <a href="#" download>
                {t("home.hero.ctaCV")} <FileDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

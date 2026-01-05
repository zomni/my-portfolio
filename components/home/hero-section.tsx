"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import { Button } from "@/components/ui/button";
import { fadeIn, stagger } from "@/lib/motion";

export default function HeroSection() {
  const [vanta, setVanta] = useState<ReturnType<typeof NET> | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vanta && vantaRef.current) {
      setVanta(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,

          // “Apple-ish”: menos ruido visual
          points: 8.0,
          maxDistance: 22.0,
          spacing: 26.0,
          showDots: false,

          // escala más “suave”
          scale: 1.0,
          scaleMobile: 1.0,

          // rojo sutil + fondo muy oscuro
          color: 0xef4444,           // red-500
          backgroundColor: 0x0b0b10,  // casi negro azulado
        })
      );
    }

    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return (
    <section className="relative overflow-hidden">
      {/* Vanta */}
      <div ref={vantaRef} className="absolute inset-0 -z-20 opacity-55" />

      {/* Overlays Apple (para glass + limpieza visual) */}
      <div className="absolute inset-0 -z-10">
        {/* grid sutil */}
        <div className="absolute inset-0 soft-grid" />

        {/* glow rojo suave */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(900px circle at 50% 35%, rgba(239,68,68,0.14), transparent 60%)",
          }}
        />

        {/* viñeta ligera para “profundidad” */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
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
            className="text-sm md:text-base text-primary/90"
          >
            Computer Science Engineering Student
          </motion.p>

          <motion.h1
            variants={fadeIn("up", 0.06)}
            className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight"
          >
            <span className="text-foreground/95">Paolo Vilches</span>{" "}
            <span className="text-primary">Portfolio</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.14)}
            className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of my projects, skills, and achievements in the field of engineering.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.2)}
            className="mt-10 flex flex-wrap gap-3 justify-center"
          >
            <Button asChild className="rounded-2xl px-6">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="rounded-2xl px-6 glass">
              <a href="#" download>
                Download CV <FileDown className="ml-2 h-4 w-4" />
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

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, stagger } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo Apple: blobs suaves + grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 soft-grid" />

        <motion.div
          className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.45), transparent 60%)" }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-24 -right-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.35), transparent 60%)" }}
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.30), transparent 60%)" }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.div
          variants={stagger(0.09, 0.1)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeIn("up", 0)} className="text-sm md:text-base text-muted-foreground">
            Computer Science Engineering Student
          </motion.p>

          <motion.h1
            variants={fadeIn("up", 0.05)}
            className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Paolo Vilches
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.12)}
            className="mt-6 text-base md:text-xl text-muted-foreground"
          >
            Passionate about building full-stack solutions, specializing in modern web technologies and software quality.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.18)} className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-2xl px-6">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl px-6 glass">
              <a href="#" download>Download CV</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-10 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

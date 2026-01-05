"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

export default function AboutPreview() {
  const summary =
    siteConfig.description ??
    "A professional portfolio website template for engineering students.";

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid gap-6 md:grid-cols-12 md:items-stretch">
        <motion.div
          className="md:col-span-7"
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="glass">
            <CardContent className="p-7 md:p-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                About
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                Clean engineering portfolio, modern UI.
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl px-6">
                  <Link href="/about">Read more</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-6 glass">
                  <Link href="/contact">Let’s talk</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="md:col-span-5 grid gap-4">
          {[
            {
              title: "Glass UI",
              desc: "Dark, premium look with blur and subtle borders.",
            },
            {
              title: "Smooth motion",
              desc: "Soft transitions and fade-in on scroll—Apple style.",
            },
            {
              title: "Structured content",
              desc: "Everything from one constants file, easy to edit.",
            },
          ].map((x, i) => (
            <motion.div
              key={x.title}
              variants={fadeIn("up", 0.06 + i * 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Card className="hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="font-semibold tracking-tight">{x.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

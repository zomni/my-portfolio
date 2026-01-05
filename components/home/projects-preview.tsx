"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-muted-foreground">A selection of work I’m proud of.</p>
        </div>
        <Button asChild variant="outline" className="rounded-2xl glass">
          <Link href="/projects">View all</Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {projects.slice(0, 3).map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeIn("up", i * 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="hover:-translate-y-1">
              <CardContent>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs rounded-full px-2 py-1 border border-border/60 bg-background/40">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

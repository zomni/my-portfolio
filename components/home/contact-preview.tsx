"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

export default function ContactPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Card className="relative overflow-hidden glass">
          {/* brillo sutil */}
          <div className="absolute inset-0 -z-10 opacity-40">
            <div
              className="absolute -top-20 -right-24 h-[320px] w-[320px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.35), transparent 60%)",
              }}
            />
            <div
              className="absolute -bottom-28 -left-20 h-[360px] w-[360px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(16,185,129,0.25), transparent 60%)",
              }}
            />
          </div>

          <CardContent className="p-7 md:p-10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              Want to build something clean?
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl">
              Send me a message and tell me what you’re working on. I’m open to
              collaborations and opportunities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl px-6">
                <Link href="/contact">Go to contact</Link>
              </Button>

              {/* mailto (cámbialo por tu correo) */}
              <Button asChild variant="outline" className="rounded-2xl px-6 glass">
                <a href={siteConfig.links.email}>Email</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

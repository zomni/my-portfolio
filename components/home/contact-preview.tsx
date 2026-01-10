"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

export default function ContactPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      {/* Title */}
      <motion.div
        className="flex flex-col items-center text-center"
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Get In Touch
        </h2>
        <div className="mt-2 h-1 w-24 rounded-full bg-primary" />
      </motion.div>

      {/* Layout */}
      <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-start">
        {/* Left text */}
        <motion.div
          className="md:col-span-5 md:pt-4"
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
            Interested in working together or have a question? Feel free to
            reach out!
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="md:col-span-7 md:flex md:justify-center"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="glass w-full max-w-xl">
            <CardContent className="p-6 md:p-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-11 w-full rounded-xl border border-border bg-background/40 px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-11 w-full rounded-xl border border-border bg-background/40 px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={7}
                    className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Button type="submit" className="w-full rounded-2xl">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

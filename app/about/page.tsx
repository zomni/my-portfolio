"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type FactItem = { k: string; v: string };

export default function AboutPage() {
  const { t } = useTranslation();

  const facts: FactItem[] = [
    {
      k: t("aboutPage.quickFacts.items.educationKey"),
      v: t("aboutPage.quickFacts.items.educationVal"),
    },
    {
      k: t("aboutPage.quickFacts.items.experienceKey"),
      v: t("aboutPage.quickFacts.items.experienceVal"),
    },
    {
      k: t("aboutPage.quickFacts.items.focusKey"),
      v: t("aboutPage.quickFacts.items.focusVal"),
    },
    {
      k: t("aboutPage.quickFacts.items.toolsKey"),
      v: t("aboutPage.quickFacts.items.toolsVal"),
    },
  ];

  const strengths = [
    t("aboutPage.sections.strengths.s1"),
    t("aboutPage.sections.strengths.s2"),
    t("aboutPage.sections.strengths.s3"),
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("aboutPage.title")}
        </h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("aboutPage.subtitle")}
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-stretch">
        {/* Left: identity / visual */}
        <motion.div
          className="md:col-span-7"
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="glass h-full overflow-hidden">
            <CardContent className="h-full p-0">
              <div className="relative h-full min-h-[320px] md:min-h-[460px]">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-primary/10" />
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:22px_22px]" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t("aboutPage.header.name")}
                  </p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    {t("aboutPage.header.role")}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-muted-foreground">
                    {t("aboutPage.header.bio")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right: quick facts */}
        <motion.div
          className="md:col-span-5"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="glass h-full">
            <CardContent className="flex h-full flex-col p-7 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {t("aboutPage.quickFacts.title")}
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {facts.map((item) => (
                  <Card key={item.k} className="hover:-translate-y-1">
                    <CardContent className="p-5">
                      <p className="text-sm font-semibold tracking-tight">
                        {item.k}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.v}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Details */}
      <motion.div
        className="mt-10 grid gap-6 md:grid-cols-12"
        variants={stagger(0.08, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="md:col-span-7" variants={fadeIn("up", 0)}>
          <Card className="glass h-full">
            <CardContent className="p-7 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {t("aboutPage.sections.profileTitle")}
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                {t("aboutPage.sections.profileBody")}
              </p>

              <div className="mt-7 grid gap-4">
                {strengths.map((s) => (
                  <div
                    key={s}
                    className="rounded-2xl border border-border/60 bg-card/40 px-5 py-4"
                  >
                    <p className="text-sm md:text-base leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="md:col-span-5" variants={fadeIn("up", 0.06)}>
          <Card className="glass h-full">
            <CardContent className="p-7 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {t("aboutPage.sections.stackTitle")}
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                {t("aboutPage.sections.stackBody")}
              </p>

              <div className="mt-8">
                <Card className="hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mt-5">
                      <Button asChild className="w-full rounded-2xl">
                        <a
                          href="/cv.pdf"
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("aboutPage.sections.cvButton")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

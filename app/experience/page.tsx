"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";

import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilitiesTitle: string;
  responsibilities: string[];
  toolsTitle: string;
  tools: string[];
};

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-medium text-white shadow-md hover:brightness-110 transition">
      {label}
    </span>
  );
}

export default function ExperiencePage() {
  const { t, lang } = useTranslation();

  const items: ExperienceItem[] = [
    {
      role: t("experiencePage.items.e1.role"),
      company: t("experiencePage.items.e1.company"),
      location: t("experiencePage.items.e1.location"),
      period: t("experiencePage.items.e1.period"),
      responsibilitiesTitle: t("experiencePage.items.e1.responsibilitiesTitle"),
      responsibilities: [
        t("experiencePage.items.e1.r1"),
        t("experiencePage.items.e1.r2"),
        t("experiencePage.items.e1.r3"),
      ],
      toolsTitle: t("experiencePage.items.e1.toolsTitle"),
      tools: [
        t("experiencePage.items.e1.t1"),
        t("experiencePage.items.e1.t2"),
        t("experiencePage.items.e1.t3"),
        t("experiencePage.items.e1.t4"),
      ],
    },
    {
      role: t("experiencePage.items.e2.role"),
      company: t("experiencePage.items.e2.company"),
      location: t("experiencePage.items.e2.location"),
      period: t("experiencePage.items.e2.period"),
      responsibilitiesTitle: t("experiencePage.items.e2.responsibilitiesTitle"),
      responsibilities: [
        t("experiencePage.items.e2.r1"),
        t("experiencePage.items.e2.r2"),
        t("experiencePage.items.e2.r3"),
      ],
      toolsTitle: t("experiencePage.items.e2.toolsTitle"),
      tools: [
        t("experiencePage.items.e2.t1"),
        t("experiencePage.items.e2.t2"),
        t("experiencePage.items.e2.t3"),
      ],
    },
  ];

  return (
    <section key={lang} className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      {/* Header */}
      <motion.div variants={fadeIn("up", 0)} initial="hidden" animate="show">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("experiencePage.title")}
        </h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("experiencePage.subtitle")}
        </p>
      </motion.div>

      {/* Big stacked cards */}
      <motion.div
        className="mt-10 space-y-6"
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
      >
        {items.map((exp, idx) => (
          <motion.div
            key={`${exp.role}-${idx}-${lang}`}
            variants={fadeIn("up", idx * 0.06)}
          >
            <Card className="glass hover:-translate-y-1">
              <CardContent className="p-7 md:p-8">
                {/* Title + company */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {exp.role}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-primary/90">
                      {exp.company}
                    </p>
                  </div>

                  <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
                    {t("experiencePage.badge")}
                  </span>
                </div>

                {/* Meta */}
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {exp.responsibilitiesTitle}
                  </h3>

                  <div className="mt-4 rounded-2xl border border-border/60 bg-card/40 p-5">
                    <ul className="space-y-3">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={`${r}-${lang}`}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                          <span className="text-sm md:text-base leading-relaxed text-foreground/90">
                            {r}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tools */}
                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {exp.toolsTitle}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <Tag key={`${tool}-${lang}`} label={tool} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

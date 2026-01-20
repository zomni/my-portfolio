"use client";

import { motion } from "framer-motion";

import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Code2, Users, Languages } from "lucide-react";

type SkillRow = {
  label: string;
  value: number; // 0..10
};

function SkillBar({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: number;
  delay?: number;
}) {
  const clamped = Math.max(0, Math.min(10, value));
  const pct = (clamped / 10) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between gap-3">
        <p className="text-sm md:text-base font-medium tracking-tight">
          {label}
        </p>
        <span className="text-xs text-muted-foreground">{clamped}/10</span>
      </div>

      <div className="h-2 w-full rounded-full bg-muted/40 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

function SectionCard({
  title,
  subtitle,
  rows,
  idx,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  rows: SkillRow[];
  idx: number;
  icon: React.ElementType;
}) {
  return (
    <motion.div variants={fadeIn("up", idx * 0.06)}>
      <Card className="glass hover:-translate-y-1">
        <CardContent className="p-7 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            </div>

            <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
              {rows.length} items
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {rows.map((r, i) => (
              <SkillBar
                key={`${r.label}-${i}`}
                label={r.label}
                value={r.value}
                delay={0.05 + i * 0.06}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function SkillsPage() {
  const { t, lang } = useTranslation();

  const technical: SkillRow[] = [
    {
      label: t("skillsPage.sections.technical.items.i1.label"),
      value: Number(t("skillsPage.sections.technical.items.i1.value")),
    },
    {
      label: t("skillsPage.sections.technical.items.i2.label"),
      value: Number(t("skillsPage.sections.technical.items.i2.value")),
    },
    {
      label: t("skillsPage.sections.technical.items.i3.label"),
      value: Number(t("skillsPage.sections.technical.items.i3.value")),
    },
    {
      label: t("skillsPage.sections.technical.items.i4.label"),
      value: Number(t("skillsPage.sections.technical.items.i4.value")),
    },
    {
      label: t("skillsPage.sections.technical.items.i5.label"),
      value: Number(t("skillsPage.sections.technical.items.i5.value")),
    },
  ];

  const software: SkillRow[] = [
    {
      label: t("skillsPage.sections.software.items.i1.label"),
      value: Number(t("skillsPage.sections.software.items.i1.value")),
    },
    {
      label: t("skillsPage.sections.software.items.i2.label"),
      value: Number(t("skillsPage.sections.software.items.i2.value")),
    },
    {
      label: t("skillsPage.sections.software.items.i3.label"),
      value: Number(t("skillsPage.sections.software.items.i3.value")),
    },
    {
      label: t("skillsPage.sections.software.items.i4.label"),
      value: Number(t("skillsPage.sections.software.items.i4.value")),
    },
    {
      label: t("skillsPage.sections.software.items.i5.label"),
      value: Number(t("skillsPage.sections.software.items.i5.value")),
    },
  ];

  const soft: SkillRow[] = [
    {
      label: t("skillsPage.sections.soft.items.i1.label"),
      value: Number(t("skillsPage.sections.soft.items.i1.value")),
    },
    {
      label: t("skillsPage.sections.soft.items.i2.label"),
      value: Number(t("skillsPage.sections.soft.items.i2.value")),
    },
    {
      label: t("skillsPage.sections.soft.items.i3.label"),
      value: Number(t("skillsPage.sections.soft.items.i3.value")),
    },
    {
      label: t("skillsPage.sections.soft.items.i4.label"),
      value: Number(t("skillsPage.sections.soft.items.i4.value")),
    },
  ];

  const languages: SkillRow[] = [
    {
      label: t("skillsPage.sections.languages.items.i1.label"),
      value: Number(t("skillsPage.sections.languages.items.i1.value")),
    },
    {
      label: t("skillsPage.sections.languages.items.i2.label"),
      value: Number(t("skillsPage.sections.languages.items.i2.value")),
    },
    {
      label: t("skillsPage.sections.languages.items.i3.label"),
      value: Number(t("skillsPage.sections.languages.items.i3.value")),
    },
  ];

  return (
    <section key={lang} className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      {/* Header */}
      <motion.div variants={fadeIn("up", 0)} initial="hidden" animate="show">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("skillsPage.title")}
        </h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-6 max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("skillsPage.subtitle")}
        </p>
      </motion.div>

      {/* 2x2 grid like the screenshot */}
      <motion.div
        className="mt-10 grid gap-6 md:grid-cols-2"
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
      >
        <SectionCard
          idx={0}
          icon={Wrench}
          title={t("skillsPage.sections.technical.title")}
          subtitle={t("skillsPage.sections.technical.subtitle")}
          rows={technical}
        />

        <SectionCard
          idx={1}
          icon={Code2}
          title={t("skillsPage.sections.software.title")}
          subtitle={t("skillsPage.sections.software.subtitle")}
          rows={software}
        />

        <SectionCard
          idx={2}
          icon={Users}
          title={t("skillsPage.sections.soft.title")}
          subtitle={t("skillsPage.sections.soft.subtitle")}
          rows={soft}
        />

        <SectionCard
          idx={3}
          icon={Languages}
          title={t("skillsPage.sections.languages.title")}
          subtitle={t("skillsPage.sections.languages.subtitle")}
          rows={languages}
        />
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { skills, type Skill } from "@/lib/constants";
import { useTranslation } from "@/hooks/use-translation";

function groupByCategory(list: Skill[]) {
  const groups: Record<Skill["category"], Skill[]> = {
    technical: [],
    software: [],
    soft: [],
    language: [],
  };
  for (const s of list) groups[s.category].push(s);
  return groups;
}

export default function SkillsPreview() {
  const { t } = useTranslation();

  const groups = groupByCategory(skills);

  // “Apple”: muestra pocas y bien ordenadas
  const pickTop = (arr: Skill[], n: number) =>
    [...arr].sort((a, b) => b.level - a.level).slice(0, n);

  const preview: Skill[] = [
    ...pickTop(groups.technical, 3),
    ...pickTop(groups.software, 3),
    ...pickTop(groups.soft, 3),
    ...pickTop(groups.language, 3),
  ];

  const categoryLabel: Record<Skill["category"], string> = {
    technical: t("home.skillsPreview.categories.technical"),
    software: t("home.skillsPreview.categories.software"),
    soft: t("home.skillsPreview.categories.soft"),
    language: t("home.skillsPreview.categories.language"),
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {t("home.skillsPreview.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {t("home.skillsPreview.subtitle")}
          </p>
        </div>

        <Button asChild variant="outline" className="rounded-2xl glass">
          <Link href="/skills">{t("home.skillsPreview.viewAll")}</Link>
        </Button>
      </div>

      <motion.div
        variants={stagger(0.06, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {preview.map((s, i) => (
          <motion.div
            key={`${s.category}-${s.name}`}
            variants={fadeIn("up", i * 0.02)}
          >
            <Card className="hover:-translate-y-1">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {categoryLabel[s.category]}
                  </span>
                </div>

                {/* bar sutil */}
                <div className="mt-3 h-1.5 w-full rounded-full bg-border/50 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-foreground/80"
                    style={{ width: `${(s.level / 10) * 100}%` }}
                  />
                </div>

                <p className="mt-2 text-xs text-muted-foreground">
                  {t("home.skillsPreview.level")} {s.level}/10
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

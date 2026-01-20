"use client";

import { motion } from "framer-motion";

import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";

type TimelineItem = {
  title: string;
  place: string;
  period: string;
  details: string[];
};

export default function EducationPage() {
  const { t, lang } = useTranslation();

  const timeline: TimelineItem[] = [
    {
      title: t("educationPage.timeline.items.duoc.title"),
      place: t("educationPage.timeline.items.duoc.place"),
      period: t("educationPage.timeline.items.duoc.period"),
      details: [
        t("educationPage.timeline.items.duoc.d1"),
        t("educationPage.timeline.items.duoc.d2"),
        t("educationPage.timeline.items.duoc.d3"),
      ],
    },
    {
      title: t("educationPage.timeline.items.self.title"),
      place: t("educationPage.timeline.items.self.place"),
      period: t("educationPage.timeline.items.self.period"),
      details: [
        t("educationPage.timeline.items.self.d1"),
        t("educationPage.timeline.items.self.d2"),
        t("educationPage.timeline.items.self.d3"),
      ],
    },
  ];

  return (
    // key={lang} fuerza una remount suave si quieres que re-animen al cambiar idioma
    <section key={lang} className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      {/* Header */}
      <motion.div variants={fadeIn("up", 0)} initial="hidden" animate="show">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("educationPage.title")}
        </h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("educationPage.subtitle")}
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="mt-10"
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
      >
        <div className="relative">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-[14px] top-0 h-full w-px bg-border/70 md:left-[18px]" />

          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={`${item.title}-${item.period}-${lang}`}
                variants={fadeIn("up", idx * 0.06)}
              >
                <div className="relative pl-10 md:pl-12">
                  {/* Dot */}
                  <div className="absolute left-[8px] top-6 h-3 w-3 rounded-full bg-primary shadow-sm md:left-[12px]" />

                  <Card className="glass hover:-translate-y-1">
                    <CardContent className="p-7 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-sm md:text-base text-muted-foreground">
                            {item.place}
                          </p>
                        </div>

                        <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
                          {item.period}
                        </span>
                      </div>

                      <div className="mt-6 rounded-2xl border border-border/60 bg-card/40 p-5">
                        <ul className="space-y-3">
                          {item.details.map((d) => (
                            <li
                              key={`${d}-${lang}`}
                              className="text-sm md:text-base leading-relaxed"
                            >
                              <span className="mr-2 text-muted-foreground">
                                •
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

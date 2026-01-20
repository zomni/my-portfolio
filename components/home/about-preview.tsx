"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";

type InfoItem = { k: string; v: string };

export default function AboutPreview() {
  const { t } = useTranslation();

  const items: InfoItem[] = [
    { k: t("home.aboutPreview.info.educationKey"), v: t("home.aboutPreview.info.educationVal") },
    { k: t("home.aboutPreview.info.experienceKey"), v: t("home.aboutPreview.info.experienceVal") },
    { k: t("home.aboutPreview.info.stackKey"), v: t("home.aboutPreview.info.stackVal") },
    { k: t("home.aboutPreview.info.dbKey"), v: t("home.aboutPreview.info.dbVal") },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {t("home.aboutPreview.title")}
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("home.aboutPreview.intro")}
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-stretch">
        {/* Left: image / visual */}
        <motion.div
          className="md:col-span-7"
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="glass h-full overflow-hidden">
            <CardContent className="h-full p-0">
              <div className="relative h-full min-h-[280px] md:min-h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-muted/5 to-primary/10" />
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:22px_22px]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t("home.aboutPreview.leftName")}
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">
                    {t("home.aboutPreview.leftRole")}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {t("home.aboutPreview.leftBio")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right: content */}
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
                {t("home.aboutPreview.rightTitle")}
              </h3>

              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                {t("home.aboutPreview.rightDescription")}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {items.map((item) => (
                  <Card key={item.k} className="hover:-translate-y-1">
                    <CardContent className="p-5">
                      <p className="text-sm font-semibold tracking-tight">{item.k}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.v}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <Button asChild className="w-full rounded-2xl">
                  <Link href="/about">{t("home.aboutPreview.learnMore")}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

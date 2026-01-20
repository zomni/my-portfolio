"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const { t, lang } = useTranslation();

  return (
    <section key={lang} className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      {/* Header centrado */}
      <motion.div
        className="text-center"
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("contactPage.title")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("contactPage.subtitle")}
        </p>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
      >
        {/* Left: Contact info */}
        <motion.div variants={fadeIn("up", 0)}>
          <Card className="glass h-full">
            <CardContent className="p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {t("contactPage.info.title")}
              </h2>

              <div className="mt-7 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("contactPage.info.phoneLabel")}
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      {t("contactPage.info.phoneValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("contactPage.info.emailLabel")}
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      {t("contactPage.info.emailValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("contactPage.info.locationLabel")}
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      {t("contactPage.info.locationValue")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-border/60 bg-card/40 p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("contactPage.info.note")}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right: Form */}
        <motion.div variants={fadeIn("up", 0.06)}>
          <Card className="glass h-full">
            <CardContent className="p-7 md:p-8">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Por ahora solo UI (sin envío real)
                  alert(t("contactPage.form.mockAlert"));
                }}
              >
                <div>
                  <label className="sr-only">
                    {t("contactPage.form.name")}
                  </label>
                  <input
                    className="w-full rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder={t("contactPage.form.name")}
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">
                    {t("contactPage.form.email")}
                  </label>
                  <input
                    className="w-full rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder={t("contactPage.form.email")}
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">
                    {t("contactPage.form.subject")}
                  </label>
                  <input
                    className="w-full rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder={t("contactPage.form.subject")}
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">
                    {t("contactPage.form.message")}
                  </label>
                  <textarea
                    className="min-h-[160px] w-full resize-none rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder={t("contactPage.form.message")}
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-xl">
                  <span className="inline-flex items-center justify-center gap-2">
                    {t("contactPage.form.send")}
                    <Send className="h-4 w-4" />
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

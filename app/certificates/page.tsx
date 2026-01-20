"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, ExternalLink, Download } from "lucide-react";

import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Certificate = {
  title: string;
  issuer: string;
  issued: string;
  certId: string;
  verifyUrl?: string;
  downloadUrl?: string;
};

function normalizeUrl(raw: unknown): string | undefined {
  if (typeof raw !== "string") return undefined;
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "—") return undefined;
  return trimmed;
}

function ActionButton({
  href,
  icon,
  children,
}: {
  href?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const enabled = Boolean(href);
  const isExternal = enabled && href!.startsWith("http");

  // ✅ Si no hay link, mostramos el botón pero disabled (grisado)
  if (!enabled) {
    return (
      <Button
        variant="outline"
        className="rounded-xl opacity-60 cursor-not-allowed pointer-events-none"
        disabled
      >
        <span className="inline-flex items-center gap-2">
          {icon}
          {children}
        </span>
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" className="rounded-xl">
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          {icon}
          {children}
        </a>
      ) : (
        <Link href={href!} className="inline-flex items-center gap-2">
          {icon}
          {children}
        </Link>
      )}
    </Button>
  );
}

export default function CertificatesPage() {
  const { t, lang } = useTranslation();

  const certs: Certificate[] = [
    {
      title: t("certificatesPage.items.c1.title"),
      issuer: t("certificatesPage.items.c1.issuer"),
      issued: t("certificatesPage.items.c1.issued"),
      certId: t("certificatesPage.items.c1.id"),
      verifyUrl: normalizeUrl(t("certificatesPage.items.c1.verifyUrl")),
      downloadUrl: normalizeUrl(t("certificatesPage.items.c1.downloadUrl")),
    },
    {
      title: t("certificatesPage.items.c2.title"),
      issuer: t("certificatesPage.items.c2.issuer"),
      issued: t("certificatesPage.items.c2.issued"),
      certId: t("certificatesPage.items.c2.id"),
      verifyUrl: normalizeUrl(t("certificatesPage.items.c2.verifyUrl")),
      downloadUrl: normalizeUrl(t("certificatesPage.items.c2.downloadUrl")),
    },
    {
      title: t("certificatesPage.items.c3.title"),
      issuer: t("certificatesPage.items.c3.issuer"),
      issued: t("certificatesPage.items.c3.issued"),
      certId: t("certificatesPage.items.c3.id"),
      verifyUrl: normalizeUrl(t("certificatesPage.items.c3.verifyUrl")),
      downloadUrl: normalizeUrl(t("certificatesPage.items.c3.downloadUrl")),
    },
  ];

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
          {t("certificatesPage.title")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("certificatesPage.subtitle")}
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
      >
        {certs.map((c, idx) => (
          <motion.div key={`${c.title}-${idx}-${lang}`} variants={fadeIn("up", idx * 0.06)}>
            <Card className="glass h-full hover:-translate-y-1">
              <CardContent className="p-7 md:p-8 h-full flex flex-col">
                {/* Title row */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Award className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold tracking-tight leading-snug">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="text-foreground/90">{t("certificatesPage.labels.issued")}:</span>{" "}
                    {c.issued}
                  </p>
                  <p>
                    <span className="text-foreground/90">{t("certificatesPage.labels.certificateId")}:</span>{" "}
                    {c.certId}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <ActionButton href={c.verifyUrl} icon={<ExternalLink className="h-4 w-4" />}>
                    {t("certificatesPage.buttons.verify")}
                  </ActionButton>
                  <ActionButton href={c.downloadUrl} icon={<Download className="h-4 w-4" />}>
                    {t("certificatesPage.buttons.download")}
                  </ActionButton>
                </div>

                <div className="flex-1" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

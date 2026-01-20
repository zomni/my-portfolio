"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { fadeIn, stagger } from "@/lib/motion";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-medium text-white shadow-sm">
      {label}
    </span>
  );
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
  if (!href) return null;

  const isExternal = href.startsWith("http");

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
        <Link href={href} className="inline-flex items-center gap-2">
          {icon}
          {children}
        </Link>
      )}
    </Button>
  );
}

export default function ProjectsPage() {
  const { t, lang } = useTranslation();

  const projects: Project[] = [
    {
      title: t("projectsPage.items.p1.title"),
      description: t("projectsPage.items.p1.description"),
      image: t("projectsPage.items.p1.image"),
      tags: [
        t("projectsPage.items.p1.tags.t1"),
        t("projectsPage.items.p1.tags.t2"),
        t("projectsPage.items.p1.tags.t3"),
        t("projectsPage.items.p1.tags.t4"),
      ],
      demoUrl: t("projectsPage.items.p1.demoUrl"),
      repoUrl: t("projectsPage.items.p1.repoUrl"),
    },
    {
      title: t("projectsPage.items.p2.title"),
      description: t("projectsPage.items.p2.description"),
      image: t("projectsPage.items.p2.image"),
      tags: [
        t("projectsPage.items.p2.tags.t1"),
        t("projectsPage.items.p2.tags.t2"),
        t("projectsPage.items.p2.tags.t3"),
        t("projectsPage.items.p2.tags.t4"),
      ],
      demoUrl: t("projectsPage.items.p2.demoUrl"),
      repoUrl: t("projectsPage.items.p2.repoUrl"),
    },
    {
      title: t("projectsPage.items.p3.title"),
      description: t("projectsPage.items.p3.description"),
      image: t("projectsPage.items.p3.image"),
      tags: [
        t("projectsPage.items.p3.tags.t1"),
        t("projectsPage.items.p3.tags.t2"),
        t("projectsPage.items.p3.tags.t3"),
        t("projectsPage.items.p3.tags.t4"),
      ],
      demoUrl: t("projectsPage.items.p3.demoUrl"),
      repoUrl: t("projectsPage.items.p3.repoUrl"),
    },
  ].map((p) => ({
    ...p,
    // Si en translations pones "—" o "" para links, los tratamos como undefined
    demoUrl: p.demoUrl && p.demoUrl !== "—" ? p.demoUrl : undefined,
    repoUrl: p.repoUrl && p.repoUrl !== "—" ? p.repoUrl : undefined,
  }));

  return (
    <section key={lang} className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      {/* Header centrado como la foto */}
      <motion.div
        className="text-center"
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("projectsPage.title")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("projectsPage.subtitle")}
        </p>
      </motion.div>

      {/* Grid de cards */}
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.1, 0.05)}
        initial="hidden"
        animate="show"
      >
        {projects.map((p, idx) => (
          <motion.div
            key={`${p.title}-${idx}-${lang}`}
            variants={fadeIn("up", idx * 0.06)}
          >
            <Card className="glass h-full overflow-hidden hover:-translate-y-1">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Imagen */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent z-[1]" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <Tag key={`${p.title}-${tag}-${lang}`} label={tag} />
                    ))}
                  </div>

                  {/* Botones abajo */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ActionButton
                      href={p.demoUrl}
                      icon={<ExternalLink className="h-4 w-4" />}
                    >
                      {t("projectsPage.buttons.demo")}
                    </ActionButton>
                    <ActionButton
                      href={p.repoUrl}
                      icon={<Github className="h-4 w-4" />}
                    >
                      {t("projectsPage.buttons.repo")}
                    </ActionButton>
                  </div>

                  {/* Empuja los botones hacia abajo si la descripción es corta */}
                  <div className="flex-1" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

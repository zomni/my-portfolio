"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export default function ProjectPreview() {
  const { t } = useTranslation();

  const featuredProjects: Project[] = [
    {
      title: t("home.projectsPreview.p1.title"),
      description: t("home.projectsPreview.p1.description"),
      image: "/images/projects/project-1.jpg",
      tags: ["IT Support", "Networks", "Windows", "AnyDesk"],
      demoUrl: "#",
      repoUrl: "https://github.com/zomni",
    },
    {
      title: t("home.projectsPreview.p2.title"),
      description: t("home.projectsPreview.p2.description"),
      image: "/images/projects/project-2.jpg",
      tags: ["Node.js", "Express", "Java", "Spring Boot"],
      demoUrl: "#",
      repoUrl: "https://github.com/zomni",
    },
    {
      title: t("home.projectsPreview.p3.title"),
      description: t("home.projectsPreview.p3.description"),
      image: "/images/projects/project-3.jpg",
      tags: ["Angular", "Ionic", "Roles", "UI"],
      demoUrl: "#",
      repoUrl: "https://github.com/zomni",
    },
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
          {t("home.projectsPreview.title")}
        </h2>
        <div className="mt-2 h-1 w-24 rounded-full bg-primary" />
        <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {t("home.projectsPreview.intro")}
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={fadeIn("up", 0.05 + idx * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card className="glass h-full overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0}
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl"
                      disabled={!project.demoUrl || project.demoUrl === "#"}
                    >
                      <Link href={project.demoUrl || "#"}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("home.projectsPreview.demo")}
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl"
                      disabled={!project.repoUrl}
                    >
                      <Link href={project.repoUrl || "#"} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        {t("home.projectsPreview.repo")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Ver todos */}
      <motion.div
        className="mt-10 flex justify-center"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Button asChild className="rounded-2xl px-6">
          <Link href="/projects">
            {t("home.projectsPreview.viewAll")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}

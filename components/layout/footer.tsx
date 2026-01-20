"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

import { useTranslation } from "@/hooks/use-translation";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: t("footer.socials.phone"), href: "tel:+56996742085", Icon: Phone, external: false },
    { label: t("footer.socials.email"), href: "mailto:paolovilches@hotmail.com", Icon: Mail, external: false },
    {
      label: t("footer.socials.linkedin"),
      href: "https://www.linkedin.com/in/paolo-vilches",
      Icon: Linkedin,
      external: true,
    },
    { label: t("footer.socials.github"), href: "https://github.com/zomni", Icon: Github, external: true },
    { label: t("footer.socials.message"), href: "/contact", Icon: MessageSquare, external: false },
    { label: t("footer.socials.twitter"), href: "#", Icon: Twitter, external: true },
    { label: t("footer.socials.facebook"), href: "#", Icon: Facebook, external: true },
    { label: t("footer.socials.instagram"), href: "#", Icon: Instagram, external: true },
  ];

  const columns = [
    {
      title: t("footer.columns.about.title"),
      links: [
        { label: t("footer.columns.about.aboutMe"), href: "/about" },
        { label: t("footer.columns.about.education"), href: "/education" },
        { label: t("footer.columns.about.skills"), href: "/skills" },
      ],
    },
    {
      title: t("footer.columns.work.title"),
      links: [
        { label: t("footer.columns.work.experience"), href: "/experience" },
        { label: t("footer.columns.work.projects"), href: "/projects" },
        { label: t("footer.columns.work.certificates"), href: "/certificates" },
      ],
    },
    {
      title: t("footer.columns.connect.title"),
      links: [
        { label: t("footer.columns.connect.contact"), href: "/contact" },
        { label: t("footer.columns.connect.github"), href: "https://github.com/zomni", external: true },
        { label: t("footer.columns.connect.linkedin"), href: "https://www.linkedin.com/in/paolo-vilches", external: true },
      ],
    },
  ];

  return (
    <footer className="mt-24">
      {/* TOP DIVIDER */}
      <div className="h-px w-full bg-muted-foreground/30" />

      <div className="bg-background/20">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Izquierda */}
            <div className="md:col-span-5">
              <h3 className="text-xl font-semibold tracking-tight text-primary">
                {t("footer.brand")}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t("footer.description")}
              </p>

              {/* Iconos redes sociales grid */}
              <div className="mt-6 grid max-w-xs grid-cols-6 gap-3">
                {socialLinks.map(({ label, href, Icon, external }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border 
                    border-white/20 bg-white/10 text-white/80 transition hover:-translate-y-1 
                    hover:border-primary hover:bg-primary/20 hover:text-white hover:shadow-lg 
                    hover:shadow-primary/20"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Columnas derechas */}
            <div className="md:col-span-7">
              <div className="grid gap-8 sm:grid-cols-3">
                {columns.map((col) => (
                  <div key={col.title}>
                    <h4 className="text-sm font-semibold tracking-tight text-foreground">
                      {col.title}
                    </h4>

                    <ul className="mt-4 space-y-2">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            target={l.external ? "_blank" : undefined}
                            rel={l.external ? "noreferrer" : undefined}
                            className="text-sm text-muted-foreground transition hover:text-foreground"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM DIVIDER */}
          <div className="mt-8 h-px w-full bg-muted-foreground/30" />

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              © {year} {t("footer.bottom.copyrightLeft")}
            </p>

            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">
                {t("footer.bottom.privacy")}
              </span>
              <span className="text-sm text-muted-foreground">
                {t("footer.bottom.terms")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

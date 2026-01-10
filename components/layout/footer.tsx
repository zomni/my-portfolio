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

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: "Phone", href: "tel:+56996742085", Icon: Phone, external: false },
    { label: "Email", href: "mailto:paolovilches@hotmail.com", Icon: Mail, external: false },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paolo-vilches",
      Icon: Linkedin,
      external: true,
    },
    { label: "GitHub", href: "https://github.com/zomni", Icon: Github, external: true },
    { label: "Message", href: "/contact", Icon: MessageSquare, external: false },
    { label: "Twitter", href: "#", Icon: Twitter, external: true },
    { label: "Facebook", href: "#", Icon: Facebook, external: true },
    { label: "Instagram", href: "#", Icon: Instagram, external: true },
  ];

  const columns = [
    {
      title: "About",
      links: [
        { label: "About Me", href: "/about" },
        { label: "Education", href: "/education" },
        { label: "Skills", href: "/skills" },
      ],
    },
    {
      title: "Work",
      links: [
        { label: "Experience", href: "/experience" },
        { label: "Projects", href: "/projects" },
        { label: "Certificates", href: "/certificates" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "GitHub", href: "https://github.com/zomni", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/paolo-vilches", external: true },
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
                Portfolio
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                A professional portfolio showcasing my skills, projects, and achievements
                in software engineering and IT.
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
              © {year} Engineering Portfolio. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

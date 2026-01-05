"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import dynamic from "next/dynamic";

// ThemeToggle solo cliente (evita mismatch SSR)
const ThemeToggle = dynamic(() => import("@/components/theme-toggle.client"), {
  ssr: false,
});

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/education", key: "education" },
  { href: "/skills", key: "skills" },
  { href: "/experience", key: "experience" },
  { href: "/projects", key: "projects" },
  { href: "/certificates", key: "certificates" },
  { href: "/contact", key: "contact" },
] as const;

const labels = {
  en: {
    home: "Home",
    about: "About",
    education: "Education",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    certificates: "Certificates",
    contact: "Contact",
  },
  es: {
    home: "Inicio",
    about: "Sobre mí",
    education: "Educación",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    certificates: "Certificados",
    contact: "Contacto",
  },
} as const;

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = useMemo(() => navItems, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b",
        // base glass oscuro
        "bg-background/50 backdrop-blur-xl",
        scrolled ? "shadow-sm border-border/70" : "border-border/50"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground/95 hover:text-foreground transition-colors"
        >
          Portfolio
        </Link>

        {/* Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          suppressHydrationWarning
        >
          {items.map((item) => {
            const label = labels[lang][item.key];
            const active = pathname === item.href;

            return (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    active ? "text-foreground" : "text-foreground/70 hover:text-foreground/90"
                  )}
                >
                  {label}
                </Link>

                {/* underline animado estilo Apple */}
                <AnimatePresence>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-2 h-[2px] rounded-full bg-foreground/80"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 2 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* idioma */}
          <Button
            variant="outline"
            onClick={toggleLang}
            className="rounded-2xl bg-background/30 border-border/60 hover:bg-background/40"
          >
            {lang === "en" ? "ES" : "EN"}
          </Button>

          {/* tema */}
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// ThemeToggle solo cliente
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
        "bg-background/50 backdrop-blur-xl",
        scrolled ? "shadow-sm border-border/70" : "border-border/50"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          Portfolio
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          suppressHydrationWarning
        >
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    active
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground/90"
                  )}
                >
                  {labels[lang][item.key]}
                </Link>

                <AnimatePresence>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-2 h-[2px] rounded-full bg-primary"
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              onClick={toggleLang}
              className="rounded-2xl bg-background/30 border-border/60"
            >
              {lang === "en" ? "ES" : "EN"}
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="glass w-[280px] p-6"
              >
                <div className="flex flex-col gap-6">
                  <div className="text-sm font-semibold tracking-tight">
                    Menu
                  </div>

                  <nav className="flex flex-col gap-4">
                    {items.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg",
                            pathname === item.href
                              ? "text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {labels[lang][item.key]}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-border/60 flex gap-2">
                    <Button
                      variant="outline"
                      onClick={toggleLang}
                      className="flex-1 rounded-xl"
                    >
                      {lang === "en" ? "ES" : "EN"}
                    </Button>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

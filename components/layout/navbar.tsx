"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@/components/theme-toggle.client'), {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          Portfolio
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/90 text-foreground/70",
                  active && "text-foreground"
                )}
              >
                {labels[lang][item.key]}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* idioma */}
          <Button variant="outline" onClick={toggleLang}>
            {lang === "en" ? "ES" : "EN"}
          </Button>
          {/* tema */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

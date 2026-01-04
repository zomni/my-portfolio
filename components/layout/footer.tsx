"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { lang } = useLanguage();

  const text =
    lang === "en"
      ? { social: "Social Links", rights: "All rights reserved." }
      : { social: "Redes", rights: "Todos los derechos reservados." };

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio — {text.rights}
        </p>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">{text.social}:</span>
          <Link className="hover:underline" href="#" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link className="hover:underline" href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

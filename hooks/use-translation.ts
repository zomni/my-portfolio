import { useLanguage } from "@/components/language-provider";
import { isTranslatedString, translations } from "@/lib/translations";

type Dict = Record<string, unknown>;

function getByPath(obj: unknown, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (typeof current !== "object" || current === null) return undefined;
    const rec = current as Dict;
    current = rec[key];
  }

  return current;
}

export function useTranslation() {
  const { lang } = useLanguage();

  function t(path: string): string {
    const v = getByPath(translations, path);
    if (isTranslatedString(v)) return v[lang];
    return path; // fallback si no existe la key
  }

  return { t, lang };
}

import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/")({
  component: HomePage,
});

function HomePage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const switchLang = currentLang === "fa" ? "en" : "fa";

  return (
    <div>
      <h1>{t("hello")}</h1>
      <Link to="/$lang" params={{ lang: switchLang }}>
        تغییر زبان به {switchLang}
      </Link>
    </div>
  );
}

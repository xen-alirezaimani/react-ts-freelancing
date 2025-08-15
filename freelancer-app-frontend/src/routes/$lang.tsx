import { Outlet, useParams, useNavigate, createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$lang")({
  component: LangLayout,
});

function LangLayout() {
  const { i18n } = useTranslation();

  const { lang } = useParams({ strict: false });
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && !["fa", "en"].includes(lang)) {
      navigate({ to: "/fa", replace: true });
    } else {
      i18n.changeLanguage(lang ?? "fa");
    }
  }, [lang, navigate, i18n]);

  return <Outlet />;
}

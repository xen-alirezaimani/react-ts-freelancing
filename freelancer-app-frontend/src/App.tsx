import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n, t } = useTranslation();

  // useEffect(() => {
  //   const pathLang = window.location.pathname.split("/")[1] as LocaleKey;
  //   if (["fa", "en"].includes(pathLang)) {
  //     i18n.changeLanguage(pathLang);
  //     document.documentElement.setAttribute("dir", i18n.dir(pathLang));
  //   } else {
  //     i18n.changeLanguage("fa");
  //     document.documentElement.setAttribute("dir", i18n.dir("fa"));
  //   }
  // }, [i18n]);

  // const changeLanguage = (lng: LocaleKey) => {
  //   const newUrl = `/${lng}${window.location.pathname.replace(/^\/(fa|en)/, "")}`;
  //   window.history.pushState({}, "", newUrl);
  //   i18n.changeLanguage(lng);
  //   document.documentElement.setAttribute("dir", i18n.dir(lng));
  // };

  return (
    <div>
      <p>{t("hello")}</p>
      {/* <button onClick={() => changeLanguage("fa")}>FA</button>
      <button onClick={() => changeLanguage("en")}>EN</button> */}
    </div>
  );
}

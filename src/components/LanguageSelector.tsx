import { IconButton } from "@mui/material";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { languagesWorld } from "../lib/languages-world";
import { I18NextLanguagesAvailable } from "../localization/localization";
import { Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={(open) => setIsSheetOpen(open)}>
      <div style={{}}>
        <SheetTrigger asChild>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
          >
            <Languages className="h-[1.5rem] w-[1.5rem]" strokeWidth={1.5} />
          </IconButton>
          {/* {
            I18NextLanguagesAvailable.find(
              (item) => item.lang === i18n.language
            )?.text
          } */}
        </SheetTrigger>
      </div>

      <SheetContent
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "auto",
          zIndex: 1200,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <SheetHeader
            style={{
              marginBottom: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <SheetTitle>{t("language-selector-title")}</SheetTitle>
          </SheetHeader>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
          >
            {I18NextLanguagesAvailable.map((lang) => {
              const isCurrentLanguageSelected = lang.lang === i18n.language;
              return (
                <div
                  onClick={() => handleChangeLanguage(lang.lang)}
                  style={{
                    padding: "5px 10px",
                    ...(isCurrentLanguageSelected
                      ? { textDecoration: "underline" }
                      : {}),
                  }}
                  className={`cursor-pointer`}
                >
                  {languagesWorld[lang.lang].nativeName}
                </div>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

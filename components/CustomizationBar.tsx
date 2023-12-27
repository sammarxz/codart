import { LanguageSeletor } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";
import { BackgroundSeletor } from "./BackgroundSelector";
import { PaddingSelector } from "./PaddingSelector";
import { ExportButton } from "./ExportButton";

export function CustomizationBar() {
  return (
    <div
      className="custom-bar z-50 fixed bottom-10 px-6 py-4 bg-white/5 
      rounded-2xl border border-[#3C3C3C] shadow-md flex gap-4 items-center"
    >
      <LanguageSeletor />
      <ThemeSelector />
      <BackgroundSeletor />
      <PaddingSelector />
      <ExportButton />
    </div>
  );
}

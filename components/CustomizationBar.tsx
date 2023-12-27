import {
  LanguageSeletor,
  ThemeSelector,
  BackgroundSeletor,
  PaddingSelector,
  ExportButton,
} from ".";

export function CustomizationBar() {
  return (
    <div
      className="custom-bar z-50 fixed bottom-10 px-6 py-4 bg-white/5 
      rounded-2xl border border-[#3C3C3C] shadow-md flex gap-4 items-center text-white"
    >
      <LanguageSeletor />
      <ThemeSelector />
      <BackgroundSeletor />
      <PaddingSelector />
      <ExportButton />
    </div>
  );
}

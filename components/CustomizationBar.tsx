"use client";

import { Download } from "lucide-react";

import { Button } from "./Button";
import { LanguageSeletor } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";
import { BackgroundSeletor } from "./BackgroundSelector";
import { PaddingSelector } from "./PaddingSelector";

export function CustomizationBar() {
  return (
    <div
      className="z-50 fixed bottom-0 w-[940px] p-5 bg-white/5 
      rounded-2xl border border-[#3C3C3C] shadow-md flex gap-4 items-center"
    >
      <LanguageSeletor />
      <ThemeSelector />
      <div className="export-btn self-center ml-auto">
        <Button>
          <Download />
          Export PNG
        </Button>
      </div>
    </div>
  );
}

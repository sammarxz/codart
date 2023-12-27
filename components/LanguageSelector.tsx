"use client";

import { useContext } from "react";
import { Globe } from "lucide-react";

import { EditorContext } from "@/context/editor.context";

import { languages } from "@/data";

import { Select } from "./Select";

export function LanguageSeletor() {
  const {
    state: { language },
    dispatch,
  } = useContext(EditorContext);

  return (
    <Select
      icon={<Globe size={18} />}
      options={languages}
      selectedOption={language}
      onSelect={(newLanguage) => {
        dispatch({
          type: "CHANGE_LANGUAGE",
          payload: newLanguage,
        });
      }}
    />
  );
}

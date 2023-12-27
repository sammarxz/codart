"use client";

import { useContext } from "react";
import { Paintbrush2 } from "lucide-react";

import { EditorContext } from "@/context/editor.context";

import { themes } from "@/data";

import { Select } from ".";

export function ThemeSelector() {
  const {
    state: { theme },
    dispatch,
  } = useContext(EditorContext);

  return (
    <Select
      icon={<Paintbrush2 size={18} />}
      options={themes}
      selectedOption={theme}
      onSelect={(newTheme) => {
        dispatch({
          type: "CHANGE_THEME",
          payload: newTheme,
        });
      }}
    />
  );
}

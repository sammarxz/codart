"use client";

import { useContext, useState } from "react";

import { EditorContext } from "@/context/editor.context";

import { backgrounds } from "@/data";

export function BackgroundSeletor() {
  const {
    state: { background },
    dispatch,
  } = useContext(EditorContext);

  const handleBackgroundChange = (bg: string) => {
    dispatch({
      type: "CHANGE_BACKGROUND",
      payload: bg,
    });
  };

  return (
    <div className="ml-2">
      <div className="dropdown-menu flex">
        {backgrounds.map((bg, i) => {
          return (
            <div
              key={i}
              role="button"
              onClick={() => handleBackgroundChange(bg)}
              className={`w-6 h-6 rounded-full 
              -ml-2 z-10 hover:z-20 cursor-pointer ${
                bg === background &&
                "ring-offset-2 ring-2 ring-inset ring-white/20"
              }`}
              style={{ background: bg }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

import { MutableRefObject } from "react";

import { backgrounds, initialCode, languages, paddings, themes } from "@/data";

export const initialState = {
  language: languages[0],
  theme: themes[0],
  padding: paddings[2],
  background: backgrounds[0],
  code: initialCode,
  editorRef: {} as MutableRefObject<HTMLDivElement>,
  dimensions: {
    width: 1020,
    height: 500
  }
}

export type State = typeof initialState
import { backgrounds, initialCode, languages, paddings, themes } from "@/data";

export const initialState = {
  language: languages[0],
  theme: themes[0],
  padding: paddings[2],
  background: backgrounds[0],
  code: initialCode
}

export type State = typeof initialState
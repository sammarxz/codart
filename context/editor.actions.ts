export type Action =
  | { type: "CHANGE_LANGUAGE"; payload: string }
  | { type: "CHANGE_THEME"; payload: string }
  | { type: "CHANGE_PADDING"; payload: string }
  | { type: "CHANGE_BACKGROUND"; payload: string }
  | { type: "CHANGE_CODE"; payload: string };
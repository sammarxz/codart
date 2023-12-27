import { MutableRefObject } from 'react'

export type Action =
  | { type: "CHANGE_LANGUAGE"; payload: string }
  | { type: "CHANGE_THEME"; payload: string }
  | { type: "CHANGE_PADDING"; payload: string }
  | { type: "CHANGE_BACKGROUND"; payload: string }
  | { type: "CHANGE_CODE"; payload: string }
  | { type: "SET_EDITOR_REF"; payload: MutableRefObject<HTMLDivElement | null> }
  | { type: "SET_DIMENSIONS"; payload: { width: number, height: number } };
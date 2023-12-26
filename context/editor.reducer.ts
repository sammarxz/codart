import { State } from "./editor.data";
import { Action } from "./editor.actions";

export function editorReducer(state: State, action: Action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case "CHANGE_PADDING":
      return { ...state, padding: action.payload };
    case "CHANGE_BACKGROUND":
      return { ...state, background: action.payload };
    case "CHANGE_CODE":
      return { ...state, code: action.payload };
    default:
      return state;
  }
}

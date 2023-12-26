import { Dispatch, createContext } from "react";

import { State, initialState } from "./editor.data";
import { Action } from "./editor.actions";

export const EditorContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

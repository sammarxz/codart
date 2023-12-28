"use client";

import { ReactNode, useReducer } from "react";

import { EditorContext } from "./editor.context";
import { State, initialState } from "./editor.data";
import { editorReducer } from "./editor.reducer";
import { Action } from "./editor.actions";

interface EditorProviderProps {
  children: ReactNode;
}

export function EditorProvider({ children }: EditorProviderProps) {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    editorReducer,
    initialState
  );

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

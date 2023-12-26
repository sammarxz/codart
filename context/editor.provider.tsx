"use client";

import { ReactNode, useReducer } from "react";

import { EditorContext } from "./editor.context";
import { initialState } from "./editor.data";
import { editorReducer } from "./editor.reducer";

interface EditorProviderProps {
  children: ReactNode;
}

export function EditorProvider({ children }: EditorProviderProps) {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

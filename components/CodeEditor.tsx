"use client";

import React, { useState, useContext } from "react";
import AceEditor from "react-ace";

// languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

// themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-gruvbox";

import { EditorContext } from "@/context/editor.context";

interface CodeEditorProps {
  resizeDimensions: {
    width: number;
    height: number;
  };
}

const CODE_TITLE_HEIGHT = 52;

export function CodeEditor({ resizeDimensions }: CodeEditorProps) {
  const {
    state: { code, language, padding, theme },
  } = useContext(EditorContext);

  const [editorCode, setEditorCode] = useState(code);

  const handleCodeChange = (newCode: string) => setEditorCode(newCode);

  return (
    <AceEditor
      value={editorCode}
      name="ace-code-editor"
      fontSize={16}
      theme={theme}
      mode={language.toLowerCase()}
      showGutter={false}
      wrapEnabled={true}
      height={`calc(${resizeDimensions.height}px - ${padding} - ${padding} - ${CODE_TITLE_HEIGHT}px)`}
      showPrintMargin={false}
      highlightActiveLine={false}
      editorProps={{ $blockScrolling: true }}
      className="ace-editor-container"
      onChange={handleCodeChange}
    />
  );
}

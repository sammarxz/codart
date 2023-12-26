"use client";

import React, { useEffect, useState, ChangeEvent, useContext } from "react";
import { Resizable } from "re-resizable";
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

import { getExtension } from "@/utils/getExtension";

import { EditorContext } from "@/context/editor.context";

const CODE_TITLE_HEIGHT = 52;

export function CodeEditor() {
  const {
    state: { background, code, language, padding, theme },
  } = useContext(EditorContext);

  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);
  const [title, setTitle] = useState("App");

  const [editorCode, setEditorCode] = useState(code);
  const [extension, setExtension] = useState(() => getExtension(language));

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleCodeChange = (newCode: string) => setEditorCode(newCode);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

  const handleResize = (evt: any, direction: any, ref: any, pos: any) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{
        width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative rounded-2xl"
      style={{
        background,
      }}
    >
      <div
        className="code-block rounded-lg"
        style={{
          margin: padding,
        }}
      >
        <div
          className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 
            rounded-full bg-slate-300 hover:bg-slate-50"
        ></div>
        <div
          className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>

        <div className="code-title h-[52px] px-4 flex items-center justify-between">
          <div className="dots flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full bg-[#ff5656]`}></div>
            <div className={`w-3 h-3 rounded-full bg-[#ffbc6a] `}></div>
            <div className={`w-3 h-3 rounded-full bg-[#67f772] `}></div>
          </div>
          <div className="flex items-center">
            <span
              contentEditable
              role="textbox"
              onChange={handleTitleChange}
              className="text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent leading-7"
            >
              {title}
            </span>
            {extension}
          </div>
          <div className="w-12" />
        </div>
        <AceEditor
          value={editorCode}
          name="ace-code-editor"
          fontSize={16}
          theme={theme}
          mode={language.toLowerCase()}
          showGutter={false}
          wrapEnabled={true}
          height={`calc(${height}px - ${padding} - ${padding} - ${CODE_TITLE_HEIGHT}px)`}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
          onChange={handleCodeChange}
        />
      </div>
    </Resizable>
  );
}

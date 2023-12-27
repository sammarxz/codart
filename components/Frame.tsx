"use client";

import { ChangeEvent, useContext, useState } from "react";
import { Resizable } from "re-resizable";

import { EditorContext } from "@/context/editor.context";

import { getExtension } from "@/utils/getExtension";

import { CodeEditor } from "./CodeEditor";

export default function Frame() {
  const {
    state: { background, padding, language },
  } = useContext(EditorContext);

  const [resizeDimensions, setResizeDimensions] = useState({
    width: 1000,
    height: 500,
  });
  const [title, setTitle] = useState("App");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

  const handleResize = (evt: any, direction: any, ref: any, pos: any) => {
    const newHeight = ref.style.height;
    const newWidth = ref.style.width;
    const newDimensions = {
      width: parseInt(newWidth, 10),
      height: parseInt(newHeight, 10),
    };

    setResizeDimensions(newDimensions);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Resizable
        minHeight={400}
        minWidth={500}
        maxWidth={1000}
        maxHeight={700}
        defaultSize={{
          width: resizeDimensions.width,
          height: resizeDimensions.height,
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
            rounded-full bg-gray-300 hover:bg-gray-50"
          ></div>
          <div
            className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
        bg-gray-300 hover:bg-gray-50 "
          ></div>
          <div
            className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
        bg-gray-300 hover:bg-gray-50 "
          ></div>
          <div
            className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-gray-300 hover:bg-gray-50 "
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
              {getExtension(language)}
            </div>
            <div className="w-12" />
          </div>
          <CodeEditor resizeDimensions={resizeDimensions} />
        </div>
      </Resizable>
      <div className="resize-dimensions text-xs text-gray-500">
        {resizeDimensions.width} x {resizeDimensions.height}
      </div>
    </div>
  );
}

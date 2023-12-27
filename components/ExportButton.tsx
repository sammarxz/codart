"use client";

import { useContext } from "react";
import { Download } from "lucide-react";

import { EditorContext } from "@/context/editor.context";

import domToImage from "@/lib/dom-to-image";

import { Button } from ".";

export function ExportButton() {
  const {
    state: { editorRef, dimensions },
  } = useContext(EditorContext);

  const handleClick = async () => {
    if (editorRef && editorRef.current) {
      //hide elemnets
      const editorWrapper = document.querySelector(".resize-wrapper") as any;

      editorWrapper.classList.add("is-printing");

      await exportPng(editorRef.current);

      editorWrapper.classList.remove("is-printing");
    }
  };

  const exportPng = async (editorElem: HTMLDivElement) => {
    const { width, height } = dimensions;

    const dataUrl = await domToImage.toPng(editorElem, {
      width,
      height,
    });

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "code.png";
    link.click();
  };

  return (
    <Button onClick={handleClick}>
      <Download size={18} />
      Export PNG
    </Button>
  );
}

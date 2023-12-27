"use client";

import { HTMLAttributes, useContext } from "react";

import { EditorContext } from "@/context/editor.context";

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  const {
    state: { background },
  } = useContext(EditorContext);

  return (
    <button
      className=" py-2 px-3 rounded-md text-sm 
      font-medium relative overflow-hidden border border-white/10"
      {...props}
    >
      <span
        style={{
          background,
          opacity: 0.3,
        }}
        className="block absolute inset-0"
      />
      <span className="opacity-100 flex items-center gap-3 text-white/90">
        {props.children}
      </span>
    </button>
  );
}

"use client";

import { useContext } from "react";

import { EditorContext } from "@/context/editor.context";

import { paddings } from "@/data";

export function PaddingSelector() {
  const {
    state: { padding },
    dispatch,
  } = useContext(EditorContext);

  return (
    <div>
      <div className="flex gap-1">
        {paddings.map((p) => (
          <button
            key={p}
            className={`flex items-center justify-center text-xs p-2 cursor-pointer
          ${
            padding === p && "bg-white/10 text-white rounded-md"
          } hover:text-white ease-linear transition-all duration-300
        `}
            onClick={() => {
              dispatch({
                type: "CHANGE_PADDING",
                payload: p,
              });
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

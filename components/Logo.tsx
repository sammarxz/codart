"use client";

import Link from "next/link";
import { Code } from "lucide-react";
import { useContext } from "react";
import { EditorContext } from "@/context/editor.context";

export function Logo() {
  const {
    state: { background },
  } = useContext(EditorContext);

  return (
    <Link href="/" className="flex gap-2 items-center">
      <span className="logo-clip-left block w-8 h-8" style={{ background }} />
      <span className="logo-clip-right block w-8 h-8" style={{ background }} />
    </Link>
  );
}

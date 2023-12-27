import Link from "next/link";
import { Code } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex gap-2">
      <Code strokeWidth={3} />
      <span>code.art</span>
    </Link>
  );
}

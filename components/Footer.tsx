import { Github, GithubIcon } from "lucide-react";
import { Logo } from ".";

export function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto px-4 mt-16 pb-16 flex items-center justify-between">
      <Logo />
      <div className="text-xs flex gap-4">
        <span>
          Developed by{" "}
          <a
            href="https://github.com/sammarxz"
            target="blank"
            className="text-white"
          >
            @sammarxz
          </a>
        </span>
        <a
          href="https://github.com/sammarxz/codart"
          target="blank"
          className="text-white flex gap-1 items-center"
        >
          <GithubIcon size={16} />
          source code
        </a>
      </div>
    </footer>
  );
}

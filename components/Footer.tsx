import { Github, GithubIcon } from "lucide-react";
import { Logo } from ".";

export function Footer() {
  return (
    <footer className="w-full max-w-[930px] mx-auto px-4 my-16 flex items-center justify-between">
      <Logo />
      <div className="text-xs flex gap-4">
        <span>
          Developed by{" "}
          <a href="" className="text-white">
            @sammarxz
          </a>
        </span>
        <a
          href=""
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

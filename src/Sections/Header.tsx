import { Github } from "lucide-react";

import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header() {
  return (
    <header className="w-100 h-auto flex flex-row justify-between items-center pt-8 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold font-platypi">Arthur Broudoux</h1>
        <span className="text-xs font-normal">Web Developper</span>
      </div>
      <ul className="flex flex-row items-center gap-2 h-full">
        <li className="p-2 hover:bg-white/30 focus:bg-white/30 rounded">
          <a href="https://github.com/abroudoux" target="_blank">
            <Github size={18} />
          </a>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </header>
  );
}

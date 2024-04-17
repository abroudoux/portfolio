import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="w-100 h-auto flex flex-row justify-between items-center pt-8 p-4 group">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg group-hover:italic font-bold font-platypi">Arthur Broudoux</h1>
        <span className="text-xs font-normal">Web Developper</span>
      </div>
      <ul className="flex flex-row items-start gap-2 h-full">
        <li className="p-2 hover:bg-white/30 focus:bg-white/30 rounded">
          <a href="https://github.com/abroudoux" target="_blank">
            <Github size={18} />
          </a>
        </li>
        <li className="p-2 hover:bg-white/30 focus:bg-white/30 rounded">
          <a href="https://linkedin.com/in/abroudoux" target="_blank">
            <Linkedin size={18} />
          </a>
        </li>
      </ul>
    </header>
  );
}

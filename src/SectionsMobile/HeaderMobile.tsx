import { Github, Linkedin } from "lucide-react";

export default function HeaderMobile() {
  return (
    <header className="w-100 h-auto flex flex-row justify-between items-center pt-8 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-md font-bold">Arthur Broudoux</h1>
        <span className="text-xs font-normal">Web Developper</span>
      </div>
      <ul className="flex flex-row items-start gap-4 h-full">
        <li>
          <a href="https://github.com/abroudoux" target="_blank">
            <Github size={16} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/abroudoux" target="_blank">
            <Linkedin size={16} />
          </a>
        </li>
      </ul>
    </header>
  );
}

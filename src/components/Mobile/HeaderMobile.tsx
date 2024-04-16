import linkedin from "@/assets/logos/linkedin.svg";
import github from "@/assets/logos/github.svg";

export default function HeaderMobile() {
  return (
    <header className="w-100 h-auto flex flex-row justify-between items-center p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-md font-bold">Arthur Broudoux</h1>
        <span className="text-xs font-normal">Web Developper</span>
      </div>
      <ul className="flex flex-row items-start gap-4">
        <li>
          <a href="https://github.com/abroudoux" target="_blank">
            <img src={github} alt="logo-github" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/abroudoux" target="_blank">
            <img src={linkedin} alt="logo-linkedin" className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}

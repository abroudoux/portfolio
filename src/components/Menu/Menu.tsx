import MenuLink from "@/components/Menu/MenuLink";

export default function Menu() {
  return (
    <nav className="h-auto w-auto border-2 border-white absolute bottom-16 rounded-3xl backdrop-blur-xl text-md z-50">
      <ul className="flex-row-center-between w-full h-full">
        <MenuLink section="home" />
        <MenuLink section="about" />
        <MenuLink section="projects" />
      </ul>
    </nav>
  );
}

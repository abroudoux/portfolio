export default function SkillsMobile() {
  return (
    <section className="w-100 p-4 flex flex-col items-start my-5">
      <h2 className="text-md font-semibold underline mb-4 italic">skills</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col gap-2">
          <h3 className="text-xs underline font-semibold">fontend</h3>
          <p className="text-white/70 font-normal text-xs">
            JavaScript, TypScript, React, TailwindCSS, SCSS, VueJs
          </p>
        </li>
        <li className="flex flex-col gap-2">
          <h3 className="text-xs underline font-semibold">backend & databases</h3>
          <p className="text-white/70 font-normal text-xs">
            NodeJs (Adonis, Nest), php (Laravel, Symfony), Python, Go, Rust, PostgreSQL, MongoDB
          </p>
        </li>
        <li className="flex flex-col gap-2">
          <h3 className="text-xs underline font-semibold">tools</h3>
          <p className="text-white/70 font-normal text-xs">Postman, Docker, git, Figma</p>
        </li>
      </ul>
    </section>
  );
}

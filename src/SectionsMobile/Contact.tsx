export default function ContactMobile() {
  return (
    <section className="w-100 p-4 flex flex-col items-start my-5">
      <h2 className="text-md font-semibold underline mb-4 italic">contact</h2>
      <p className="text-xs font-normal mb-3 text-white/70">
        Let's work together ? You can contact me{" "}
        <a href="mailto:arthur.broudoux@gmail.com" className="text-white">
          by mail
        </a>{" "}
        or via{" "}
        <a href="https://www.linkedin.com/in/abroudoux/" target="_blank" className="text-white">
          Linkedin
        </a>
        .
      </p>
    </section>
  );
}

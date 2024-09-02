export default function Footer() {
  return (
    <footer className="w-full p-8 mt-16 text-center">
      <p className="text-ms text-muted-foreground">
        © 2024 - Made with{" "}
        <span role="img" aria-label="heart" className="text-red-500">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="
                    https://www.linkedin.com/in/abroudoux/"
          target="_blank"
          className="text-primary font-semibold">
          Arthur Broudoux
        </a>
      </p>
    </footer>
  );
}

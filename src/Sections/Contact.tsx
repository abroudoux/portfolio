import { motion } from "framer-motion";

import { itemsVariants } from "@/lib/animations";

import SectionMobileComp from "@/components/Sections/SectionsComp";
import HightlightString from "@/components/Sections/Highlightstring";

import cv from "@/assets/cv-arthur-broudoux-2024.pdf";

export default function Contact() {
  const content = (
    <motion.p className="text-xs text-muted-foreground leading-8" variants={itemsVariants}>
      Let's work together ! You can contact me by{" "}
      <a href="mailto:arthur.broudoux@gmail.com" className="text-primary font-semibold">
        <HightlightString text="mail" icon="📫" />
      </a>{" "}
      or via{" "}
      <a
        href="https://www.linkedin.com/in/abroudoux/"
        target="_blank"
        className="text-primary font-semibold">
        <HightlightString text="Linkedin" icon="💼" />
      </a>{" "}
      . You can also check my{" "}
      <a href={cv} className="text-primary font-semibold" target="_blank">
        <HightlightString text="Curriculum Vitae." icon="📃" />
      </a>
    </motion.p>
  );
  return <SectionMobileComp title="contact" content={content} />;
}

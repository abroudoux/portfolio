import { motion } from "framer-motion";

import { itemsVariants } from "@/lib/animations";

import SectionsComp from "@/components/Sections/SectionsComp";
import HightlightString from "@/components/Sections/Highlightstring";

export default function About() {
  const content = (
    <motion.div className="text-sm leading-8" variants={itemsVariants}>
      <p className="mb-3">
        I'm a student in web development at{" "}
        <a href="https://www.epitech.eu/" target="_blank">
          <HightlightString icon="📚" text="Epitech" />
        </a>{" "}
        in Rennes. I'm passionate about new technologies and programming. I'm also aware of the
        importance of the <HightlightString icon="👤" text="user experience" /> and the design of an
        application.
      </p>
      <p>
        I'm looking for an Internship in web development from January 2024 near to{" "}
        <HightlightString icon="📍" text="Rennes" />. I'm conviced that I can bring a lot to a new
        company and I'm motivated to face new challenges.
      </p>
    </motion.div>
  );

  return <SectionsComp title="about" content={content} />;
}

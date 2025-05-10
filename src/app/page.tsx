"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";

const sections = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div>
      <header className="fixed top-0 w-full shadow z-50">
        <nav className="flex space-x-4 p-4 justify-center">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-blue-600 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <Section id="home">
        <div>
          <h1 className="typewriter">test</h1>
        </div>
      </Section>

      
    </div>
  );
}
type SectionProps = {
  id: string;
};

function Section({ children, id }: PropsWithChildren & SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex justify-center transition-colors"
    >
      {children}
    </motion.section>
  );
}

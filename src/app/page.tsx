"use client";
import { Background } from "@/components/animations/Background";
import { AnimatedTitle } from "@/components/blog/AnimatedTitle";
import { Project } from "@/components/blog/projects/Projects";
import { Section } from "@/components/blog/Section";
import { ContactForm } from "@/components/form/ContactForm";
import { useEffect, useState } from "react";

const sections = {
  home: { id: "home", label: "Accueil" },
  about: { id: "about", label: "À propos" },
  projects: { id: "projects", label: "Projets" },
  contact: { id: "contact", label: "Contact" },
} as const;

export default function HomePage() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      setScrolledPastHero(window.scrollY > threshold);
    };

    handleScroll(); // Appel initial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed right-0 top-0 w-full shadow z-50 transition-all duration-700 ${
          scrolledPastHero
            ? "bg-cyan-950/80 shadow-md backdrop-blur-md"
            : "bg-transparent"
        } `}
      >
        <nav className="flex space-x-4 p-4 justify-center">
          {Object.values(sections).map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-foreground  hover:text-shadow-sm hover:text-shadow-cyan-500"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
      <Background />
      <Section id={sections.home.id} className="bg-transparent">
        <AnimatedTitle
          className="text-3xl"
          texts={[
            "Thomas Neang",
            "Développeur fullstack JS",
            "Créateur d'interface responsive",
            "Intégrateur backend avancé",
          ]}
        />
        <span>
          Cillum do incididunt esse eu magna proident Lorem. Ea nostrud ex
          aliquip anim sint aute nostrud do sit enim consequat nostrud nostrud.
          Laboris commodo ad voluptate occaecat Lorem dolore consequat ut ipsum
          cupidatat et excepteur adipisicing. Aliqua anim ipsum ea enim ullamco
          do non sunt quis dolor. Sunt sint ut laboris exercitation magna
          eiusmod ut cillum. Duis ex occaecat pariatur ex non labore officia
          adipisicing fugiat velit ipsum non sint. Aliqua officia ea in aliquip
          nisi. Dolore aliqua pariatur Lorem pariatur Lorem ea do deserunt qui
          quis duis excepteur laboris. Labore velit ullamco officia pariatur
          est.
        </span>
      </Section>
      <Section id={sections.about.id} label="À propos">
        <span>
          Consectetur est officia culpa consectetur voluptate aute consequat
          sint sunt eiusmod magna adipisicing amet et. Commodo voluptate ullamco
          laborum sunt officia voluptate excepteur et et veniam. Est fugiat ea
          anim culpa magna. Id pariatur adipisicing et eiusmod est commodo ea
          exercitation. In consequat fugiat eu mollit nostrud culpa irure est in
          pariatur. Eiusmod nulla ipsum reprehenderit laboris. Officia qui aute
          anim voluptate mollit est proident ipsum incididunt. Magna cupidatat
          cupidatat nulla tempor culpa labore sit duis proident. Eu consequat
          velit in commodo cillum veniam laborum tempor laboris quis aliqua
          exercitation ipsum enim. Officia reprehenderit consectetur veniam
          magna ut incididunt nulla cillum ad in sit in mollit reprehenderit.
          Ullamco cillum aliqua et amet officia est ullamco amet consequat
          officia laborum culpa. Nostrud reprehenderit magna magna commodo esse
          ea et occaecat sint deserunt esse officia esse incididunt. Consectetur
          elit do incididunt ullamco eiusmod ipsum anim adipisicing irure do
          enim irure aute. Elit ad cupidatat laboris fugiat in. Ipsum irure
          proident est ex ut tempor consectetur aliqua.
        </span>
      </Section>

      <Section id={sections.projects.id} label={sections.projects.label}>
        <Project></Project>
      </Section>

      <Section id={sections.contact.id} label={sections.contact.label}>
        <div className="w-full flex justify-center">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

"use client";
import { Background } from "@/components/animations/Background";
import { AnimatedTitle } from "@/components/blog/AnimatedTitle";
import { Section } from "@/components/blog/Section";

const sections = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <header className="fixed right-0 top-0 w-full shadow z-50 bg-blue-500 dark:bg-cyan-950">
        <nav className="flex space-x-4 p-4 justify-center">
          {sections.map(({ id, label }) => (
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
      <Section id="home">
        <Background />
        <div className="align-center ">
          <AnimatedTitle
            texts={["Thomas Neang", "Développeur fullstack polyvalent"]}
          />
          <span>
            Consectetur est officia culpa consectetur voluptate aute consequat
            sint sunt eiusmod magna adipisicing amet et. Commodo voluptate
            ullamco laborum sunt officia voluptate excepteur et et veniam. Est
            fugiat ea anim culpa magna. Id pariatur adipisicing et eiusmod est
            commodo ea exercitation. In consequat fugiat eu mollit nostrud culpa
            irure est in pariatur. Eiusmod nulla ipsum reprehenderit laboris.
            Officia qui aute anim voluptate mollit est proident ipsum
            incididunt. Magna cupidatat cupidatat nulla tempor culpa labore sit
            duis proident. Eu consequat velit in commodo cillum veniam laborum
            tempor laboris quis aliqua exercitation ipsum enim. Officia
            reprehenderit consectetur veniam magna ut incididunt nulla cillum ad
            in sit in mollit reprehenderit. Ullamco cillum aliqua et amet
            officia est ullamco amet consequat officia laborum culpa. Nostrud
            reprehenderit magna magna commodo esse ea et occaecat sint deserunt
            esse officia esse incididunt. Consectetur elit do incididunt ullamco
            eiusmod ipsum anim adipisicing irure do enim irure aute. Elit ad
            cupidatat laboris fugiat in. Ipsum irure proident est ex ut tempor
            consectetur aliqua.
          </span>
        </div>
      </Section>
      <Section id="about" className="bg-background">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">À propos</h1>
          <span>
            Consectetur est officia culpa consectetur voluptate aute consequat
            sint sunt eiusmod magna adipisicing amet et. Commodo voluptate
            ullamco laborum sunt officia voluptate excepteur et et veniam. Est
            fugiat ea anim culpa magna. Id pariatur adipisicing et eiusmod est
            commodo ea exercitation. In consequat fugiat eu mollit nostrud culpa
            irure est in pariatur. Eiusmod nulla ipsum reprehenderit laboris.
            Officia qui aute anim voluptate mollit est proident ipsum
            incididunt. Magna cupidatat cupidatat nulla tempor culpa labore sit
            duis proident. Eu consequat velit in commodo cillum veniam laborum
            tempor laboris quis aliqua exercitation ipsum enim. Officia
            reprehenderit consectetur veniam magna ut incididunt nulla cillum ad
            in sit in mollit reprehenderit. Ullamco cillum aliqua et amet
            officia est ullamco amet consequat officia laborum culpa. Nostrud
            reprehenderit magna magna commodo esse ea et occaecat sint deserunt
            esse officia esse incididunt. Consectetur elit do incididunt ullamco
            eiusmod ipsum anim adipisicing irure do enim irure aute. Elit ad
            cupidatat laboris fugiat in. Ipsum irure proident est ex ut tempor
            consectetur aliqua.
          </span>
        </div>
      </Section>
      <Section id="projects">
        <div className="flex flex-col">
          <a href="/board" target="_blank">
            Tableau
          </a>
        </div>
      </Section>
    </>
  );
}

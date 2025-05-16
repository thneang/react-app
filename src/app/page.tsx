import { Background } from "@/components/animations/Background";
import { AnimatedContainer } from "@/components/blog/AnimatedContainer";
import { AnimatedTitle } from "@/components/blog/AnimatedTitle";
import { Project } from "@/components/blog/projects/Projects";
import { Section } from "@/components/blog/Section";
import { ContactForm } from "@/components/form/ContactForm";
import { AnchorButton } from "@/components/navigation/AnchorButton";
import { TopNavbar } from "@/components/navigation/TopNavbar";

const sections = {
  home: { id: "home", label: "Accueil" },
  about: { id: "about", label: "Mon Parcours" },
  projects: { id: "projects", label: "Projets" },
  contact: { id: "contact", label: "Contact" },
} as const;
// Server components here to pre render the page and hydrate after with client
// Do not make it a client component for SEO purposes
export default async function HomePage() {
  const CVPath = "/CV_Thomas_Neang.pdf";
  return (
    <>
      <TopNavbar sections={sections} />
      <Background />
      <Section
        id={sections.home.id}
        className="bg-transparent flex items-center"
      >
        <AnimatedContainer className="mx-auto w-3/4 md:max-w-[50%] md:ml-[33vh]">
          <AnimatedTitle
            className="text-3xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
            texts={[
              "Thomas Neang",
              "Développeur fullstack JS",
              "Créateur d'UI responsive",
              "Intégrateur backend avancé",
            ]}
          />
          <p>
            {`Développeur polyvalent avec 7 ans d'expériences, j'ai travaillé autant sur des projets backend
          que frontend tout en étant en charge de suivre la mise en production de mes travaux.
          Je participe aussi à l'amélioration de la scalabilité de l'infrastructure si besoin grâce à mes compétences en DevOps.`}
          </p>
          <p>
            {`Mes languages principaux sont Typescript et Java et je travaille principalement avec React + Next.js, Vue.js et Spring Boot.`}
          </p>

            <AnchorButton className="mt-2 w-auto" href={CVPath} download>
              Télécharger mon CV
            </AnchorButton>
        </AnimatedContainer>
      </Section>
      <Section
        id={sections.about.id}
        label={sections.about.label}
        className="section"
      >
        <AnimatedContainer className="centered scrollable-content">
          <p>
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
          </p>
        </AnimatedContainer>
      </Section>

      <Section
        id={sections.projects.id}
        label={sections.projects.label}
        className="section"
      >
        <AnimatedContainer className="centered scrollable-content">
          <Project />
        </AnimatedContainer>
      </Section>

      <Section
        id={sections.contact.id}
        label={sections.contact.label}
        className="section"
      >
        <AnimatedContainer className="centered scrollable-content">
          <ContactForm />
        </AnimatedContainer>
      </Section>
    </>
  );
}

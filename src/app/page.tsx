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
  about: { id: "about", label: "Expérience" },
  projects: { id: "projects", label: "Projets" },
  contact: { id: "contact", label: "Contact" },
} as const;
// Server components here to pre render the page and hydrate after with client
// Do not make it a client component for SEO purposes
export default async function HomePage() {
  const CVPath = "/CV_Thomas_Neang.pdf";
  return (
    <>
      <TopNavbar sections={sections}></TopNavbar>
      <Background />
      <Section
        id={sections.home.id}
        className="bg-transparent flex items-center"
      >
        <AnimatedContainer className="mx-auto w-3/4 lg:max-w-[50%] lg:ml-[33vh]">
          <AnimatedTitle
            className="text-3xl font-bold text-cyan-500 mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
            texts={[
              "Thomas Neang",
              "Développeur fullstack",
              "Créateur d’UI responsive",
              "Intégrateur backend avancé",
            ]}
          />
          <p>
            Développeur polyvalent avec 7 ans d’expérience, j’ai travaillé aussi
            bien sur des projets backend que frontend, tout en étant en charge
            de la mise en production de mes travaux. Je participe également à
            l’amélioration de la scalabilité de l’infrastructure si nécessaire,
            grâce à mes compétences en DevOps.
          </p>
          <p>
            Je suis à 40 minutes de Paris, mais je suis ouvert à un déplacement
            mensuel pour des zones plus éloignées si le poste est en
            télétravail.
          </p>
          <p>
            Mes langages principaux sont TypeScript et Java, et je travaille
            principalement avec React.js ou Vue.js et Spring Boot. Je peux aussi
            travailler sur un back Node.js si besoin.
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
        <AnimatedContainer className="centered">
          <h1 className="text-2xl mt-4 xl:mt-0">Khresterion 2018-2024</h1>
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="flex flex-col gap-4 w-full xl:w-1/2">
              <h2>Le commencement</h2>
              <p>
                Après avoir obtenu mon master en mathématiques et informatique à
                l’université de Marne-la-Vallée en 2016, j’ai travaillé pendant
                un an dans le commerce familial pour soutenir mes proches. J’ai
                ensuite débuté ma carrière en 2018 en tant qu’ingénieur logiciel
                en télétravail total chez Khresterion, alors jeune entreprise
                dans l’insurtech. Cela m’a permis de participer dès le départ à
                la création d’applications from scratch, ainsi qu’à la mise en
                place du pipeline CI/CD et de l’architecture en microservices.
              </p>
              <h2>Que fait Khresterion ?</h2>
              <p>
                Khresterion développe une intelligence artificielle permettant à
                ses clients de formaliser leurs connaissances métiers, afin
                d’obtenir des conseils en temps réel comme s’ils étaient
                accompagnés par un expert. Dans le domaine des assurances, cela
                permet par exemple de vérifier automatiquement la conformité des
                garanties aux réglementations en vigueur dans le cadre de la
                réforme du 100% santé. L’entreprise propose également des
                solutions pour assurer la conformité de documents juridiques
                comme les DUE ou les contrats de travail. J’ai contribué au
                développement d’applications frontend et backend robustes,
                scalables, et destinées à de grands comptes du secteur
                assurantiel.
              </p>
              <h2>Pourquoi 7 ans pour le même poste ?</h2>
              <p>
                Même si mon intitulé de poste est resté le même, mes
                responsabilités ont fortement évolué au fil du temps. Dans une
                équipe de 4 personnes, chacun était responsable de son propre
                projet, ce qui exigeait une grande autonomie et une forte
                polyvalence. Curieux de nature, j’ai profité de cette liberté
                pour explorer des technologies variées et résoudre des
                problématiques complexes liées au web sémantique. C’est cette
                diversité de missions et de défis qui explique pourquoi je suis
                resté sept ans dans cette entreprise. La plupart des projets
                étant réalisés pour des clients B2B, je ne peux malheureusement
                pas les partager publiquement.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full xl:w-1/2">
              <h2>Les challenges</h2>
              <p>
                L’un des principaux défis techniques résidait dans la maîtrise
                des technologies propriétaires de l’entreprise. Dans un domaine
                aussi spécifique que le web sémantique, la documentation en
                ligne est limitée, et il est souvent nécessaire d’expérimenter
                et de comprendre la modélisation en profondeur. Les données
                métiers sont stockées dans des bases de données orientées graph
                (GraphDB, Stardog), puis analysées en temps réel par notre
                moteur de raisonnement pour générer des recommandations
                personnalisées.
              </p>
              <p>
                Cela impliquait un travail minutieux sur la performance, afin de
                garantir des temps de réponse courts malgré la complexité du
                raisonnement. Mon rôle consistait notamment à gérer
                intelligemment les données côté frontend pour déclencher les
                raisonnements au bon moment, tout en limitant la charge sur les
                moteurs et les bases de données. Il fallait également concevoir
                des mappings sélectifs pour n’enregistrer que les informations
                nécessaires. Côté backend, j’ai mis en place une API de paiement
                et contribué à un générateur de documents juridiques (contrats,
                DUE…), en utilisant Python, LaTeX et Lua.
              </p>
              <h2>Et maintenant ?</h2>
              <p>
                Je suis à la recherche d’une nouvelle opportunité, sans
                attachement rigide à une stack particulière. Je suis prêt à
                m’adapter rapidement aux outils et technologies utilisés par
                votre équipe. Ce qui m’importe avant tout, c’est de répondre
                efficacement à vos besoins techniques et fonctionnels, quelle
                que soit la stack choisie.
              </p>
            </div>
          </div>
        </AnimatedContainer>
      </Section>

      <Section
        id={sections.projects.id}
        label={sections.projects.label}
        className="section"
      >
        <AnimatedContainer className="centered">
          <Project />
        </AnimatedContainer>
      </Section>

      <Section
        id={sections.contact.id}
        label={sections.contact.label}
        className="section"
      >
        <AnimatedContainer className="centered">
          <ContactForm />
        </AnimatedContainer>
      </Section>
    </>
  );
}

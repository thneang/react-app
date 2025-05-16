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
  about: { id: "about", label: "Experience" },
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
            {`Je suis à 40 minutes de Paris mais je suis ouvert pour un déplacement mensuel en télétravail pour les zone plus éloignées.`}
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
        <AnimatedContainer className="centered">
          <h1 className="text-3xl">Khresterion 2018-2024</h1>
          <div className="flex gap-4 mt-10">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <h2>Le commencement</h2>
              <p>
                {`Après avoir obtenu mon diplôme de maîtrise en mathématiques et informatique à l’université de Marne-la-Vallée en 2016, 
                j’ai temporairement travaillé dans le commerce familial pendant 1 an afin de soutenir ma famille.
                J’ai commencé ma carrière en 2018 en tant qu’ingénieur logiciel chez Khresterion qui en était à ses débuts dans l'insurtech, ce qui m’a permis de participer activement à la création des applications from scratch, 
                ainsi qu’à la mise en place du pipeline CI/CD et de l’architecture en microservices.
            `}
              </p>
              <h2>Que fait Khresterion ?</h2>
              <p>
                {`Khresterion est une entreprise qui propose une IA pour accompagner ses clients dans leur prise de décision, 
                en modélisant leurs connaissances et logiques métiers grâce à leurs experts. 
                Cela permet ensuite d’obtenir des conseils en temps réel, comme s’ils étaient accompagnés par un expert. 
                Dans le cas des assurances, cela permet de vérifier que leurs garanties sont conformes aux lois et réglementations en vigueur.
                L'entreprise propose aussi des solutions pour garantir la conformité de documents juridiques comme les DUE ou les contrats de travails.
                J’ai ainsi contribué au développement d’applications frontend et backend, robustes et scalables, à destination de grands comptes de l'assurance.`}
              </p>
              <h2>Pourquoi 7 ans pour le même poste ?</h2>
              <p>
                {`J'ai beaucoup évolué durant ces 7 ans. Arrivée en tant que développeur Java, mes responsabilités ont rapidement évolué pour répondre aux besoins de l'entreprise.
                Nous étions une petite équipe de 4 personnes chacun responsable d'un projet différent. Ce qui implique de devoir être autonome et polyvalent.
                De nature curieuse, j’ai apprécié cette opportunité d’explorer des technologies variées, 
                tout en résolvant des problèmes complexes liés au domaine du web sémantique — 
                ce qui explique pourquoi je suis resté dans cette entreprise pendant sept ans. 
                La plupart des projets sur lesquels j’ai travaillé sont à destination du B2B et ne peuvent malheureusement pas être partagés ici.`}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <h2>Les challenges</h2>
              <p>
                {`Une grande partie de la difficulté se base sur la maitrise des technologies propriétaire de l'entreprise. La communauté du web sémantique étant réduite, 
              il ne suffit pas d'aller sur StackOverflow ou Github pour trouver toutes ses réponses. Une compréhension de la modélisation et beaucoup d'expérimentation sont nécessaires.
              Mais pour faire simple les données métiers sont sauvegarder dans une base de donnée graph comme GraphDB ou Stardog ensuite nous utilisons notre moteur de 
              raisonement pour inférer (calculer) une recommandation sur la base du modèle client. 
              Ces informations sont ensuite affiché sur l'application du client en temps réel.
              `}
              </p>
              <p>{`Il y a donc un équilibrage délicat à avoir sur la performance coté infrastructure pour ne pas avoir de raisonnement trop long et garder une application qui répond assez vite.
              Mon role dans tout ça était donc de bien gérer les données coté front pour raisonner au bon moment et de manière la plus transparente possible pour l'utilisateur 
              tout en surveillant la charge sur les différents moteur de raisonnement ainsi que sur la base de donnée. Un mapping des données est aussi nécessaire pour ne pas tout 
              sauvegarder dans la base de données graph car toutes les données ne sont pas forcément nécessaire pour le raisonnement.
              Coté back, j'ai travaillé sur une API de paiement pour gérer les paiements de nos clients ainsi que sur le générateur de document permettant de générer les différents 
              document juridique. Une connaissance de python, Latex et lua était nécessaire.`}</p>
              <h2>Et maintenant ?</h2>
              <p>
                {`Je me spécialise aujourd’hui dans le développement d’applications web et mobiles, en tant que développeur fullstack JS, 
                avec comme principales technologies React et Next.js, utilisées notamment pour ce portfolio. 
                Je suis ouvert à de nouvelles opportunités, sans être limité à une stack particulière : je saurai m’adapter à vos besoins et à votre environnement de travail.`}
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

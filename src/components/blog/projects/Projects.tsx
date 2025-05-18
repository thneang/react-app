import { ProjectCard } from "@/components/blog/projects/ProjectCard";
import { Tag } from "@/types/global";

export function Project() {
  // const projects: ProjectCardProps[] = [
  //   {
  //     title: "Souscription",
  //     description: "Description of project 1",
  //     imageUrl: "",
  //     link: "projects/souscription",
  //     tags: [Tag.FRONT],
  //   },
  //   {
  //     title: "DUE",
  //     description: "",
  //     imageUrl: "",
  //     link: "/projects/due",
  //     tags: [Tag.FRONT],
  //   },
  //   {
  //     title: "API de paiement",
  //     description: "",
  //     imageUrl: "",
  //     link: "/projects/due",
  //     tags: [Tag.BACK],
  //   },
  //   {
  //     title: "TODO list",
  //     description: "Personnal trello like app",
  //     imageUrl: "",
  //     link: "/board",
  //     tags: [Tag.FRONT],
  //   },
  // ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
          tags={project.tags}
        />
      ))} */}
      <ProjectCard
        key="DUE"
        title="DUE"
        tags={[Tag.FRONT]}
        techTag={["Vue.js", "Typescript"]}
        link="https://app.ruedelaconvention.fr/due"
      >
        Application permettant de créer sa propre DUE (décision unilatérale de
        l’employeur) accompagné par l’IA de Khresterion. Le site nécessite un
        login mais elle est bien ouverte au public.
      </ProjectCard>
      <ProjectCard
        key="Gestionnaire de paiement"
        title="Gestionnaire de paiement"
        tags={[Tag.BACK]}
        techTag={["Java", "Spring boot", "Stripe API", "Mailjet API", "SQL"]}
        link="https://app.ruedelaconvention.fr/due"
      >
        Permet de facturer les clients, envoyer par mail leur document ou gérer leurs abonnements.
        Toute la gestion des codes promos est aussi incluse.
      </ProjectCard>
    </div>
  );
}

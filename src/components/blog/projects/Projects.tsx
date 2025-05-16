import {
  ProjectCard,
  ProjectCardProps,
} from "@/components/blog/projects/ProjectCard";
import { Tag } from "@/types/global";

export function Project() {
  const projects: ProjectCardProps[] = [
    {
      title: "Souscription",
      description: "Description of project 1",
      imageUrl: "",
      link: "projects/souscription",
      tags: [Tag.FRONT],
    },
    {
      title: "DUE",
      description: "",
      imageUrl: "",
      link: "/projects/due",
      tags: [Tag.FRONT],
    },
    {
      title: "API de paiement",
      description: "",
      imageUrl: "",
      link: "/projects/due",
      tags: [Tag.BACK],
    },
    {
      title: "TODO list",
      description: "Personnal trello like app",
      imageUrl: "",
      link: "/board",
      tags: [Tag.FRONT],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
          tags={project.tags}
        />
      ))}
    </div>
  );
}

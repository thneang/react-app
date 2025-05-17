import { TagLabel } from "@/components/blog/projects/TagLabel";
import { Tag } from "@/types/global";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: Tag[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col  items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          draggable="false"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-gray-400">{description}</p>
      <div className="flex flex-wrap mt-4">
        {tags.map((tag) => (
          <TagLabel key={tag} tag={tag} />
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-600"
      >
        Voir détails
      </a>
    </div>
  );
}

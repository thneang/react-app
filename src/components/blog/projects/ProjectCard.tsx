"use client";
import { TagLabel } from "@/components/blog/projects/TagLabel";
import { Tag } from "@/types/global";
import Image from "next/image";
import { PropsWithChildren } from "react";

export interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  tags: Tag[];
  techTag: Tag[] | string [];
}

export function ProjectCard(props: PropsWithChildren<ProjectCardProps>) {

  return (
    <>
      <div className="flex flex-col h-full items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg">
        {props.imageUrl && (
          <Image
            src={props.imageUrl}
            alt={props.title}
            draggable="false"
            width="720"
            height="720"
            className="w-full h-48 object-cover "
          />
        )}
        <h2 className="mt-4 text-xl font-bold text-white">{props.title}</h2>
        <p className={"relative mt-2 text-gray-400"} >
          {props.children}
          {props.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-4">
          {props.tags.map((tag) => (
            <TagLabel key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mt-4">
          {props.techTag.map((tag) => (
            <TagLabel key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex mt-4 gap-2">
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Aller
            </a>
          )}
        </div>
      </div>
    </>
  );
}

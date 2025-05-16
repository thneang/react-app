"use client";
import { PropsWithChildren } from "react";

type SectionProps = {
  id: string;
  label?: string;
  className?: string;
};

export function Section({
  children,
  id,
  label,
  className,
}: PropsWithChildren & SectionProps) {
  

  return (
    <section
      id={id}
      className={"w-screen min-h-screen " + (className ? className : "")}
    >
      {label && <h1 className="mt-4 text-4xl text-center">{label}</h1>}
      {children}
    </section>
  );
}

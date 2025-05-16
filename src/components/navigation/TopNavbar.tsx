'use client';
import { SectionMapType } from "@/types/global";
import { useEffect, useState } from "react";

interface TopNabarProps {
  sections: SectionMapType;
}

export function TopNavbar({ sections }: TopNabarProps) {
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
  );
}

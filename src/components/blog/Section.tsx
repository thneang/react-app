"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";

type SectionProps = {
  id: string;
  className?: string;
};

export function Section({ children, id, className }: PropsWithChildren & SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1 }}
      className={"w-screen h-screen " + (className ? className : "")}
    >
      {children}
    </motion.section>
  );
}

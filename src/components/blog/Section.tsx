"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      id={id}
      ref={ref}
      className={"w-screen h-screen " + (className ? className : "")}
    >
      { label && <h1 className="mt-4 text-4xl text-center">{label}</h1>}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1 }}
        className="py-32"
      >
        {children}
      </motion.div>
    </section>
  );
}

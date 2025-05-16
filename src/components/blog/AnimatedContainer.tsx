'use client';
import { motion, useAnimation, useInView } from "motion/react";
import { PropsWithChildren, useEffect, useRef } from "react";

export function AnimatedContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1 }}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  );
}

import React, { useState, useEffect } from "react";
import styles from "./AnimatedTitle.module.css";

interface AnimatedTitleProps {
  texts: string[];
  className: string;
}

export function AnimatedTitle({ texts, className }: AnimatedTitleProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        setSpeed(20); // Speed up when deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length); // Move to the next text
        setSpeed(50); // Reset speed
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, speed, texts, currentIndex]);

  return (
    <h1 className={"text-cyan-500 font-bold " + (className ? className : "")}>
      {currentText} <span className={styles.blinking}>|</span>
    </h1>
  );
}

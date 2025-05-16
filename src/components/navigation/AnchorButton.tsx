"use client";
import { PropsWithChildren } from "react";

export function AnchorButton({
  children,
  className,
  ...options
}: PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      {...options}
      className={`button ${className} text-center`}
      onMouseUp={(e) => {
        e.currentTarget.blur();
      }}
    >
      {children}
    </a>
  );
}

import { PropsWithChildren } from "react";

export function Button({
  children,
  className,
  ...options
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...options}
      className={
        `button ${className}`
      }
    >
      {children}
    </button>
  );
}

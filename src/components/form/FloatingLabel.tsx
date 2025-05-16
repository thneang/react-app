import { PropsWithChildren } from "react";

export function FloatingLabel({children, label}: PropsWithChildren<{label: string}>) {
  return (
    <label className="relative block">
      <span className="absolute px-2 -top-2 left-3 text-sm text-foreground bg-background transition-all duration-200 transform origin-[0_0] scale-75">
        {label}
      </span>
      {children}
    </label>
  );
}
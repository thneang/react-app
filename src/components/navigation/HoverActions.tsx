import { PropsWithChildren } from "react";

interface HoverActionsProps {
    isActive: boolean
}
export function HoverActions({ children, isActive }: PropsWithChildren & HoverActionsProps) {
  return (
    <>
      {children && isActive && (
        <div className="absolute right-[5px] z-1">
          {children}
        </div>
      )}
    </>
  );
}

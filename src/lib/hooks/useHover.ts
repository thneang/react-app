import { Dispatch, SetStateAction, useState } from "react";

export function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEventHandlers = {
    onMouseOver: () => {
      setIsHovered(true);
    },
    onMouseOut: () => {
      setIsHovered(false);
    },
  };

  return { isHovered, setIsHovered, mouseEventHandlers} as UseHoverType;
}

export interface UseHoverType {
  isHovered: boolean;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  mouseEventHandlers: { onMouseOver: () => void; onMouseOut: () => void };
}

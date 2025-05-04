import { Dispatch, SetStateAction, useState } from "react";

export function useActive() {
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = {
    onClick: () => {
      setIsActive(!isActive);
    },
  };

  return {isActive, setIsActive, onClickHandler} as UseActiveType ;
}

export interface UseActiveType {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  onClickHandler: { onClick: () => void };
}

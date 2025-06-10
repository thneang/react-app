import { useActive, UseActiveType } from "@/lib/hooks/useActive";
import { createContext, PropsWithChildren, useContext, useRef } from "react";

const DropdownContext = createContext<UseActiveType | undefined>(undefined);

function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw Error("Dropdown must be used within it's context prodiver");
  }
  return context;
}

export function Dropdown({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  const { isActive, setIsActive, onClickHandler } = useActive();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Give some leeway to the user when leaving the dropdown
  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, 300);
  }

  function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  return (
    <DropdownContext.Provider value={{ isActive, setIsActive, onClickHandler }}>
      <div
        className={"cursor-pointer " + className}
        onMouseLeave={() => handleMouseLeave()}
        onMouseEnter={() => handleMouseEnter()}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function DropdownIcon({ children }: PropsWithChildren) {
  const { onClickHandler } = useDropdownContext();
  return (<div {...onClickHandler}>{children}</div>);
}

function DropdownButton({ children }: PropsWithChildren) {
  const { onClickHandler } = useDropdownContext();
  return (
    <>
      <button {...onClickHandler} className="bg-blue-500 text-white">
        {children}
      </button>
    </>
  );
}

function DropDownItem({ children }: PropsWithChildren) {
  return (<li className=" hover:bg-stone-700 text-sm">{children}</li>);
}

function DropDownList({ children }: PropsWithChildren) {
  return (<ul className="">{children}</ul>);
}

function DropdownContent({ children }: PropsWithChildren) {
  const { isActive } = useDropdownContext();
  return (
    <>
      {isActive && (
        <div className="absolute bg-stone-900 text-white shadow-sm min-w-[160px] p-2 translate-x-[-45%] z-10">
          {children}
        </div>
      )}
    </>
  );
}

Dropdown.DropdownContent = DropdownContent;
Dropdown.DropdownList = DropDownList;
Dropdown.DropdownItem = DropDownItem;
Dropdown.DropdownButton = DropdownButton;
Dropdown.DropdownIcon = DropdownIcon;

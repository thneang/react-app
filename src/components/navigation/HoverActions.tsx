import { PropsWithChildren } from "react";

export function HoverActions({children}: PropsWithChildren ) {

    return <>
     {
        children && <div className="absolute border-2 border-amber-300 right-[10px] cursor-pointer">{children}</div>
     }
    </>
}

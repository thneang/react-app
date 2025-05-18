import { ProjectCardProps } from "@/components/blog/projects/ProjectCard";
import { createPortal } from "react-dom";

interface FullscreenProjectCardProps extends ProjectCardProps {
  isActive: boolean;
  onClose: () => void;
}
// Nah, just expand the text...
export function FullscreenProjectCard(props: FullscreenProjectCardProps) {
  return (
    <>
      {props.isActive &&
        createPortal(
          <div
            className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center backdrop-blur-sm no-doc-scroll"
            onClick={() => props.onClose()}
            // Optionally, you can add a callback prop to close the popin
          >
            <div
              className="relative my-10 w-full h-full lg:w-2/3 bg-gray-800 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute top-2 right-2 button"
                onClick={() => props.onClose()}
              >
                x
              </div>
              <h1>{props.title}</h1>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

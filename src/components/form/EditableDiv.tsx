import { useEffect, useRef, useState } from "react";

interface EditableDivProps {
  value: string;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  className?: string
}

export default function EditableDiv(props: EditableDivProps) {
  const [localValue, setLocalValue] = useState(props.value);
  const [isEditable, setIsEditable] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!isEditable) {
      setLocalValue(props.value);
    }
  }, [props.value, isEditable]);

  useEffect(() => {
    if (isEditable && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditable]);

  function handleBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    if (localValue !== props.value) {
      props.onBlur(e);
    }
  }

  function renderDiv() {
    /* Mouse up is used instead of onClick to not be in conflict with the drag and drop of the task card */
    return <div className={props.className} onMouseUp={() => setIsEditable(true)}>{localValue}</div>;
  }

  function renderTextarea() {
    return (
      <textarea
        ref={textareaRef}
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={(e) => {
          handleBlur(e);
          setIsEditable(false);
        }}
      />
    );
  }

  return isEditable ? renderTextarea() : renderDiv();
}

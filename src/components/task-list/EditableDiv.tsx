import { useState } from "react";

interface EditableDivProps {
  value: string;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function EditableDiv(props: EditableDivProps) {
  const [value, setValue] = useState(props.value);

  function handleBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    if (value !== props.value) {
      props.onBlur(e);
    }
  }
  return (
    <textarea
      onChange={(e) => setValue(e.target.value)}
      value={value}
      onBlur={handleBlur}
    ></textarea>
  );
}

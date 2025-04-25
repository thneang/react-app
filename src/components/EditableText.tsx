"use client";
import { useState } from "react";

interface EditableTextProps {
  value: string;
  className: string;
  onSave: (newValue: string) => void;
}

export default function EditableText(props: EditableTextProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [text, setText] = useState(props.value);
  function enableEditMode() {
    setIsEditMode(true);
  }
  function disableEditMode() {
    setIsEditMode(false);
  }
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }
  function handleSave() {
    props.onSave(text);
  }
  function TextArea() {
    if (!isEditMode) {
      return (
        <div className="flex gap-2">
          <div onClick={enableEditMode} className={props.className}>
            {text}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <textarea
            className={props.className}
            value={text}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleSave}>Enregistrer</button>
          <button onClick={disableEditMode}>Annuler</button>
        </>
      );
    }
  }
  return (
    <>
      <TextArea></TextArea>
    </>
  );
}

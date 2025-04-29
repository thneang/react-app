import { Dispatch, useEffect } from "react";

export function saveToStorage(key: string, object: unknown) {
  if (object == undefined) {
    throw new Error("Unexpected undefined value while saving in local storage");
  }
  localStorage.setItem(key, JSON.stringify(object));
}

export function getItemFromStorage(key: string) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export enum StorageKey{
  COLUMNS = "columns",
  TASKS = "tasks"
}

export function useStorage(key: StorageKey, state: unknown) {
  useEffect(() => {
    saveToStorage(key, state);
  }, [key, state]);
}

export function useStorageInitialisation<T>(
  key: StorageKey,
  initialData: T,
  setState: Dispatch<React.SetStateAction<T>>
) {
  useEffect(() => {
    const data = getItemFromStorage(key);
    if (data) {
      setState(data);
    } else {
      saveToStorage(key, initialData);
      setState(initialData);
    }
  }, [key, initialData, setState]);
}

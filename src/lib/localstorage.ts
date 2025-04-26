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

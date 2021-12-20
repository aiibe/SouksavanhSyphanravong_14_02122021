// Enhance localstorage methods

/**
 * Get data by key
 * @param key string key
 * @returns Array of items
 */
export function getItems(key: string) {
  const stringData = localStorage.getItem(key);
  return stringData ? JSON.parse(stringData) : null;
}

/**
 * Set new key value
 * @param key string key
 * @param value string or object item
 * @returns New array of items created
 */
export function setItems(key: string, value: any) {
  const val = typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(key, val);
  return getItems(key);
}

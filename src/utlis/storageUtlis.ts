//For setting the item in local storage
export const setItemLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

//for getting the item from local storage
export const getItemLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

//for removing the item from local storage
export const removeItemlocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

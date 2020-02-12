import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const getItem = window.localStorage.getItem(key)
    const setItem = window.localStorage.setItem(key, JSON.stringify(initialValue));
    return getItem ? JSON.parse(getItem) :setItem;
  
  })

  const setValue = newValue => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }
}
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { visitFunctionBody } from 'typescript';

export const useDarkMode = (key, initialValue) => {
  const [DMValue, setDMValue] = useLocalStorage(key, initialValue)
  
  useEffect(() => {
    let bodyEl = document.querySelector('body');
    DMValue 
    ? bodyEl.classList.add('dark-mode')
    : bodyEl.classList.remove('dark-mode')
  }, [DMValue])
  
  return [DMValue, setDMValue];
};
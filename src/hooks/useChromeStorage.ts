import { useState, useCallback } from 'react';

export async function getItem<T>(key: string, fallback: T): Promise<T> {
  return new Promise((resolve) => {
    try {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key] ?? fallback);
      });
    } catch {
      resolve(fallback);
    }
  });
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, () => resolve());
    } catch (e) {
      reject(e);
    }
  });
}

export function useChromeStorageState<T>(key: string, fallback: T): [T, (v: T) => void] {
  const [state, setState] = useState<T>(fallback);
  const setValue = useCallback((v: T) => {
    setState(v);
    setItem(key, v);
  }, [key]);
  return [state, setValue];
} 
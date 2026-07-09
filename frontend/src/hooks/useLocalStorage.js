import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const readValue = () => {
    try {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        return JSON.parse(item);
      }

      return initialValue;
    } catch (error) {
      console.error(
        `Error reading localStorage key "${key}":`,
        error
      );

      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function
          ? value(storedValue)
          : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(
        key,
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error(
        `Error setting localStorage key "${key}":`,
        error
      );
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(
        `Error removing localStorage key "${key}":`,
        error
      );
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);

  return [
    storedValue,
    setValue,
    removeValue,
  ];
};

export default useLocalStorage;
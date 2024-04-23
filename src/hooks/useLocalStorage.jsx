import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName); // Mustra el valor del locarStorage APP_V1: '[{OBJECT}{OBJECT}]'
        let parsedItem;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItems(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const updateLocalAndState = (newItem) => {
    // va a recibir nuevos todos, los guarda en el estado y en el localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem)); // Modificamos el localStorage pasandole como key'APP_V1' y el value tiene que ser las 'newTodos'

    setItems(newItem); // luego con la funcion modificadora del estado le pasamos esos newTodos
  };

  return {
    items,
    updateLocalAndState,
    loading,
    error,
  };
};

export default useLocalStorage;
// localStorage.removeItem('APP_V1')

// const defaultTodos = [
//   { text: "Sacar a mateo", completed: true },
//   { text: "Tomar pausa activa", completed: false },
//   { text: "madrugar el sabado", completed: false },
//   { text: "Ir a dormir tembrano", completed: false },
// ];

// localStorage.setItem('APP_V1', defaultTodos)

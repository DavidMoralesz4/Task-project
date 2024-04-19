import { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItems = localStorage.getItem(itemName); // Mustra el valor del locarStorage APP_V1: '[{OBJECT}{OBJECT}]'

  let parsedItem;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItems);
  }

  const [items, setItems] = useState(parsedItem);

  const updateLocalAndState = (newItem) => {
    // va a recibir nuevos todos, los guarda en el estado y en el localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem)); // Modificamos el localStorage pasandole como key'APP_V1' y el value tiene que ser las 'newTodos'

    setItems(newItem); // luego con la funcion modificadora del estado le pasamos esos newTodos
  };

  return [items, updateLocalAndState];
};

export default useLocalStorage;

import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";

const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const {
    items: todoUsers,
    updateLocalAndState,
    loading,
    error,
  } = useLocalStorage("APP_V1", []);
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const todosFiltered = todoUsers.filter((todo) => {
    // Filtro mi resuldato de busqueda (lo que quiero buscar)
    const textTodos = todo.text.toLowerCase(); // convierto en minusculas
    const inputSearch = input.toLocaleLowerCase(); // convierto en minusculas

    return textTodos.includes(inputSearch); // busca si en en los textos incluye mi busqueda
  });


  const onClose = () => {
    setOpenModal(false)
  }

  const complet = todoUsers.filter((todo) => !!todo.completed).length; //los '!!' son para trabajar con booleans

  const pending = todoUsers.length; // cantidad total de Tarear con 'length'

  const todoChecking = (text) => {
    // [{}, {}, {}, {}]
    const index = todoUsers.findIndex((todo) => todo.text === text);

    const newTodos = [...todoUsers];

    newTodos[index].completed = !newTodos[index].completed;

    updateLocalAndState(newTodos);
  };

  const todoDeleted = (text) => {
    const deleted = [...todoUsers];
    const index = todoUsers.findIndex((todo) => todo.text === text);

    deleted.splice(index, 1); /// Le especificas la posicion y la cantidad de 'pan' que quieres llevarte o 'eliminar'

    updateLocalAndState(deleted);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        handleInputChange,
        todoDeleted,
        todoChecking,
        todosFiltered,
        complet,
        pending,
        openModal,
        setOpenModal,
        onClose
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

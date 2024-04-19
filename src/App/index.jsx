import { useState } from "react";
import useLocalStorage from "./useLocarStorage";
import TodoItem from "../components/items/TodoItem";
import TodoSearch from "../components/search/TodoSearch";
import TodoCounter from "../components/counter/TodoCounter";
import TodoList from "../components/list/TodoList";
import CreateTodoButton from "../components/button/CreateTodoButton";
import Title from "../components/tittle/Title";

// const defaultTodos = [
//   { text: "Sacar a mateo", completed: true },
//   { text: "Tomar pausa activa", completed: false },
//   { text: "madrugar el sabado", completed: false },
//   { text: "Ir a dormir tembrano", completed: false },
// ];

// localStorage.setItem('APP_V1', defaultTodos)

const App = () => {
  const [todoUsers, updateLocalAndState] = useLocalStorage("APP_V1", []);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const todosFiltered = todoUsers.filter((todo) => {
    // Filtro mi resuldato de busqueda (lo que quiero buscar)
    const textTodos = todo.text.toLowerCase(); // convierto en minusculas
    const inputSearch = input.toLocaleLowerCase(); // convierto en minusculas

    return textTodos.includes(inputSearch); // busca si en en los textos incluye mi busqueda
  });

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

  // if (complet >= pending) {
  //   alert("Felicitaciones!! Has terminado tus tareas 🎇✨🎊🎉");
  // }

  return (
    <>
      <div className="app">
        <Title />
        <TodoCounter complet={complet} pending={pending} />
        <TodoSearch handleInputChange={handleInputChange} input={input} />

        <div className="centerItems">
          <TodoList>
            {todosFiltered?.map((todo, index) => (
              <TodoItem
                completed={todo.completed}
                text={todo.text}
                key={index}
                onComplete={() => {
                  todoChecking(todo.text);
                }}
                onDeleted={() => {
                  todoDeleted(todo.text);
                }}
              />
            ))}
          </TodoList>
        </div>

        <CreateTodoButton />
      </div>
    </>
  );
};

export default App;

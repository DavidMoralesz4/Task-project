import TodoItem from "../components/items/TodoItem";
import TodoSearch from "../components/search/TodoSearch";
import TodoCounter from "../components/counter/TodoCounter";
import TodoList from "../components/list/TodoList";
import CreateTodoButton from "../components/button/CreateTodoButton";
import Title from "../components/tittle/Title";
import TodosLoading from "../components/loading/TodosLoading";
import TodosErrors from "../components/errors/TodosErrors";
import EmptyTodos from "../components/Empty/EmptyTodos";
import { TodoContext } from "../context/TodoProvider";
import { useContext } from "react";

const AppUI = () => {
  const { loading, error, todosFiltered, todoChecking, todoDeleted } = useContext(TodoContext);

  return (
    <div>
      <div className="app">
        <Title />
        <TodoCounter />
        <TodoSearch />
        <div className="centerItems">
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosErrors />}
            {!loading && todosFiltered.length === 0 ? <EmptyTodos /> : loading}

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
    </div>
  );
};

export default AppUI;

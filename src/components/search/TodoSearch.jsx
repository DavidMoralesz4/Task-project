import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import "./styleSearch.css";

// eslint-disable-next-line react/prop-types
const TodoSearch = () => {

  const {input, handleInputChange} = useContext(TodoContext);

  return (
        <div>
        <input
          type="text"
          placeholder="Busca Tarea"
          className="search"
          value={input} // liga el valor del input a mi estado
          onChange={handleInputChange} // manejador de cambio del input
        />
      </div>
  );
};

export default TodoSearch;

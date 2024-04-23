import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import "./styleCounter.css";

// eslint-disable-next-line react/prop-types
const TodoCounter = () => {
  const { complet, pending } = useContext(TodoContext);

  return (
    <div className="counter">
      <p className="p1">Has completado</p>
      <p className="p2">{complet}</p>
      <p className="p1">de</p>
      <p className="p2">{pending}</p>
      <p className="p1">tareas</p>
    </div>
  );
};

export default TodoCounter;

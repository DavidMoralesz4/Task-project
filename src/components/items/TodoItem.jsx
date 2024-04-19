import "./styleItem.css";
import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ text, completed, onComplete, onDeleted }) => {
  return (
    <div className="container-task">
      <span
        onClick={onComplete}
        className={`Icon Icon-check ${
          completed ? "Icon-check--active" : "Icon"
        }`}
      >
        <FaCheck />
      </span>
      <p
        className={`TodoItem-p ${
          completed ? "TodoItem-p--complete" : "TodoItem-p"
        }`}
      >
        {text} {completed}
      </p>
      <span className={`Icon Icon-delete`} onClick={onDeleted}>
        <AiFillDelete />
      </span>
    </div>
  );
};

export default TodoItem;

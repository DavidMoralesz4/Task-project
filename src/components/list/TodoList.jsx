/* eslint-disable react/prop-types */
import "./styleList.css";

const TodoList = ({ children }) => {
  return (
    <>
      <div className="divFather">
        <ul className="container">{children}</ul>
      </div>
    </>
  );
};

export default TodoList;

import { useContext } from "react";
import "./styleButton.css";
import { TodoContext } from "../../context/TodoProvider";

const CreateTodoButton = () => {
  
  const {setOpenModal} = useContext(TodoContext)
  
  return (
    <>
      <span onClick={() => setOpenModal(true)}>
        <img src="./public/add.png" alt="addButton" className="add" />
      </span>
    </>
  );
};

export default CreateTodoButton;

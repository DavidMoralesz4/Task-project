import { useContext } from "react";
import "./styleButton.css";
import { TodoContext } from "../../context/TodoProvider";
import { IoMdAdd } from "react-icons/io";


// const add = './public/add.png'
const CreateTodoButton = () => {
  
  const {setOpenModal} = useContext(TodoContext)
  
  return (
    <>
      <span onClick={() => setOpenModal(true)} >

      <IoMdAdd className="add"/>
      </span>
    </>
  );
};

export default CreateTodoButton;

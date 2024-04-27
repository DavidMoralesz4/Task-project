// import React from 'react'
import { useContext, useState } from "react";
import "./styleForm.css";
import { TodoContext } from "../../context/TodoProvider";

const Form = () => {
  const [createTodo, setCreateTodo] = useState("");

  const { openModal, onClose, addTodo,setOpenModal} = useContext(TodoContext);
  if (!openModal) return <></>;



  const newTodo = (event) => {
    setCreateTodo(event.target.value);
  };

  const onSubmit = (event) => {
      event.preventDefault()
      addTodo(createTodo)
      setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="container2">
          <strong className="titleCreate">!Crea una nueva tarea!</strong>
          <p>agrega el nombre de tu tarea</p>
          <input
            type="text"
            placeholder="Salir a correr..."
            className="input"
            value={createTodo}
            onChange={newTodo}
          />
          <div className="container3">
            <button className="create-button" type='submit'>Crear</button>
            <button className="create-button" onClick={() => onClose()}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

// import React from 'react'
import { useContext } from 'react'
import './styleForm.css'
import { TodoContext } from '../../context/TodoProvider'

const Form = () => {
    const {openModal, onClose} = useContext(TodoContext)
    if(!openModal) return <></>
    
  return (
    <div className="container">
        <div className='container2'>
            <strong>Crea Una Nueva Tarea!!</strong>
            <input type="text" placeholder='Salir a correr' />
            <button onClick={() => onClose()}>X</button>
            
        </div>
    </div>
  )
}

export default Form
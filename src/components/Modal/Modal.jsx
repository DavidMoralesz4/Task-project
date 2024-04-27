// import React from 'react';
import ReactDOM from "react-dom";
import "./styleModal.css";
// import Form from '../formModal/Form';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fondo">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;

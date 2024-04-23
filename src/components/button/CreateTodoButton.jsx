import "./styleButton.css";

const CreateTodoButton = () => {
  
  
  return (
    <>
      <span onClick={() => console.log('Hiciste click en el boton!')}>
        <img src="./public/add.png" alt="addButton" className="add" />
      </span>
    </>
  );
};

export default CreateTodoButton;

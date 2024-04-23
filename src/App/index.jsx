import { TodoProvider } from "../context/TodoProvider";
import AppUI from "./AppUI";

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export default App;

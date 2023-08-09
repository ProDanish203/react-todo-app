import { AddTodo, FilterTodos, Heading, Todos } from "./components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
    <ToastContainer/> 
    <div className="bg-background min-h-[100vh] px-2 pt-20">
      <Heading/>
      <FilterTodos/>
      <AddTodo/>
      <Todos/>
    </div>
    </>
  );
}

export default App;

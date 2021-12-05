import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./Components/Form"
import TodoList from "./Components/TodoList"

const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    getLocalTodos()
  }, [])
  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  }, [todos, filterStatus])
  const filterHandler = () => {
    switch(filterStatus){
      case "completed" :
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case "uncompleted" :
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break;     
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  };
  const getLocalTodos = () =>{
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"))
     setTodos(todoLocal)
     }
  };
  return (
    <div className="App">
      <header>
        <h1>Motaz's to do list</h1>
      </header>
      <Form 
        inputTask={inputTask} 
        todos={todos} 
        setTodos={setTodos} 
        setInputTask={setInputTask}
        setFilterStatus={setFilterStatus}
        />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;

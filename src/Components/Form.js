import React from "react";


const Form = ({setInputTask, todos, setTodos, inputTask, setFilterStatus}) => {
    const inputTaskHandler = (e) =>{
        setInputTask(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault()
        setTodos([
            ...todos,
            { text:inputTask, completed:false, id:Math.random()}
        ])
        setInputTask("")
    }
    const filterStatusHandler = (e) =>{
      setFilterStatus(e.target.value)
    }
    return(
        <form>
        <input 
          value={inputTask} 
          onChange={inputTaskHandler} 
          type="text" 
          classNameName="todo-input"        
          />
        <button onClick={submitTodoHandler} classNameName="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={filterStatusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
    }


    export default Form;
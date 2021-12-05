import React from "react"


const Todo = ({inputText, id, todos, setTodos, todo}) => {
    const deleteTaskHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map((item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        })))
    }
    return(
        <div className="todo">
            <li key={id} className={`todo-item ${todo.completed ? "completed" : ""}`}>{inputText}</li>
            <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteTaskHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
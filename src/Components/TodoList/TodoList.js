
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TodoList.css";
import Todo from "./Todo/Todo";
import { addTodo,doTodo, removeTodo } from "../../Redux/reducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoList() {
  
  const todos = useSelector((state) => state);
  const Dispatch = useDispatch();
  
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("all");

  const removeTodoHandler = (id) => {
    Dispatch(removeTodo(id));
  };
  
  // const toastifyHandler=()=>
  const doTodoHandler = (id) => {
    Dispatch(doTodo(id));
  };
  
  
  const AddTodoHandler = (e) => {
    e.preventDefault();
    Dispatch(addTodo({ id: crypto.randomUUID(), title, isCompleted: false }));
    setTitle("");
   
  };

  const changeHandler = (e) => {
    console.log(status);
    setStatus(e.target.value);
    console.log(status);
  };


  return (
    <>
      <div className="TodoListContainer">
        <div className="TodoListAddBox">
          <h1>Getting Things Done...</h1>
          <form>
            <input
              placeholder="Please enter your Todo..."
              className="Todo-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" onClick={AddTodoHandler}>
              ADD
            </button>
          </form>
        </div>
        <div className="TodoFilter">
          <p>Filter:</p>
          <select onChange={changeHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="onCompleted">onCompleted</option>
          </select>
        </div>
      </div>

      <div className="TodoListItems">
      {status==="all" && todos.map((todo) => (
       <>
        <Todo
          key={todo.id}
          todo={todo}
          removeTodoHandler={removeTodoHandler}
          doTodoHandler={doTodoHandler}
        />
        <ToastContainer/>
       </>
      ))}
      {status==="completed" && todos.filter(todo=>todo.isCompleted).map((todo) => (
        <>
        <Todo
          key={todo.id}
          todo={todo}
          removeTodoHandler={removeTodoHandler}
          doTodoHandler={doTodoHandler}
        />
        <ToastContainer/>
       </>
      ))}
      {status==="onCompleted" && todos.filter(todo=> !todo.isCompleted).map((todo) => (
       <>
       <Todo
         key={todo.id}
         todo={todo}
         removeTodoHandler={removeTodoHandler}
         doTodoHandler={doTodoHandler}
       />
       <ToastContainer/>
      </>
      ))}
      </div>
    </>
  );



}

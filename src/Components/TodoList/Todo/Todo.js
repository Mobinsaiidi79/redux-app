import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Todo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Todo({ todo, removeTodoHandler, doTodoHandler }) {
  const { title, id, isCompleted } = todo;

  return (
    <li key={id}>
      <p className={isCompleted ? "completed" : ""}>{title}</p>

      <div className="todo-Icons">
        <FaRegTrashCan
          className="icon trash"
          onClick={async() => {
            toast.warning("Your status has changed!", {
              autoClose: 1000,
            });
            removeTodoHandler(id);
          }}
        />
        <FaRegCheckCircle
          className="icon check"
          onClick={() => {
            doTodoHandler(id);
            toast.warning("Your status has changed!", {
              autoClose: 1000,
            });
          }}
        />
      </div>
    </li>
  );
}

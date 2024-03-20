import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.scss";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = ({ todo }: TodoItemProps) => {
  console.log("todo: ", todo);
  return (
    <div className="item-wrapper">
      <div className="item-name">
        <p>{todo.text}</p>
      </div>
      <div className="icon-btns">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
    </div>
  );
};

export default TodoItem;

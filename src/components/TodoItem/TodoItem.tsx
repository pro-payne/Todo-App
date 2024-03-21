import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.scss";
import EditItem from "../EditItem/EditItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}
const TodoItem = ({ todo, editTodo, deleteTodo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log("todo: ", todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (newText: string) => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="item-wrapper">
        {isEditing ? (
          <EditItem
            id={todo.id}
            initialText={todo.text}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <div className="item-name">
              <p>{todo.text}</p>
            </div>
            <div className="icon-btns">
              <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} className="fa-edit"/>
              <FontAwesomeIcon
                icon={faTrash}
                className="fa-trash"
                onClick={() => deleteTodo(todo.id)}
              />
              <FontAwesomeIcon icon={faCheckCircle} className="fa-check" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodoItem;

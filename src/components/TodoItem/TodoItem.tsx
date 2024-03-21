import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.scss";
import EditItem from "../EditItem/EditItem";
import { Todo, toggleComplete } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hook";

interface TodoItemProps {
  todo: Todo;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, editTodo, deleteTodo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useAppDispatch();

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

  const handleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <>
      <div className={isEditing ? "" : "item-wrapper"}>
        {isEditing ? (
          <EditItem
            id={todo.id}
            initialText={todo.text}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <div className={`item-name ${todo.completed ? "completed" : ""}`}>
              <p>{todo.text}</p>
            </div>
            <div className="icon-btns">
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={handleEdit}
                className="fa-edit"
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="fa-trash"
                onClick={() => deleteTodo(todo.id)}
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                onClick={handleComplete}
                className={`fa-check ${todo.completed ? "completed" : ""}`}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodoItem;

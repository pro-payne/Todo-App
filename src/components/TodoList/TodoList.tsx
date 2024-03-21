import React from "react";
import AddItem from "../AddItem/AddItem";
// import { AddItem } from '../AddItem/AddItem'
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../../store/todoSlice";

const TodoList = () => {
  // getting todos from redux state
  const todos = useSelector((state: any) => state.todos);

  const dispatch = useDispatch();
  const editTodoFunction = (id: number, newText: string) => {
    // Dispatch the editTodo action with the id and newText payload
    dispatch(editTodo({ id, newText }));
  };

  const deleteTodoFunction = (id: number) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <div className="app-wrapper">
        <div className="todoList-wrapper">
          <h1>Todo List</h1>
          <AddItem />
          {todos.map((todo: any) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodoFunction}
              deleteTodo={deleteTodoFunction}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;

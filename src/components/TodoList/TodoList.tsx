import React from "react";
import AddItem from "../AddItem/AddItem";
// import { AddItem } from '../AddItem/AddItem'
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  // getting todos from redux state
  const todos = useSelector((state: any) => state.todos);

  return (
    <>
      <div className="app-wrapper">
        <div className="todoList-wrapper">
          <h1>Todo List</h1>
          <AddItem />
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;

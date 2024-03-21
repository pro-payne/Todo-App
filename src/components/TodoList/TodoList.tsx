import AddItem from "../AddItem/AddItem";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";
import { editTodo, deleteTodo } from "../../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const TodoList = () => {
  // getting todos from redux state
  const todos = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();

  const editTodoFunction = (id: number, newText: string) => {
    // Dispatch the editTodo action with the id and newText payload
    dispatch(editTodo({ id, newText }));
  };

  const deleteTodoFunction = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="app-wrapper">
      <div className="todoList-wrapper">
        <h1>Todo List</h1>
        <AddItem />
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodoFunction}
              deleteTodo={deleteTodoFunction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

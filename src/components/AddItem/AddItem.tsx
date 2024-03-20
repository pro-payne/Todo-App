import React, { useState } from "react";
import "./AddItem.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

const AddItem = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <form className="add-item" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={text}
          className="add-input"
          placeholder="Add a new task..."
          onChange={handleInputChange}
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    </>
  );
};

export default AddItem;

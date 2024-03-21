import React, { useState } from "react";
import "./AddItem.scss";
import { addTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hook";

const AddItem = () => {
  const [text, setText] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setErrorMessage("");
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim() === "") {
      setErrorMessage("Please enter a task before adding");
      return;
    }

    dispatch(addTodo(text));
    setText("");
    setErrorMessage("");
  };

  return (
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default AddItem;

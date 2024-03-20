import React from "react";
import "./AddItem.scss";

export const AddItem = () => {
  return (
    <>
      <form className="add-item">
        <input
          type="text"
          className="add-input"
          placeholder="Add a new task..."
          onChange={(e) => console.log(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    </>
  );
};

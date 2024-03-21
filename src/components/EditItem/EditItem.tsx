import React, { useState } from "react";
import "./EditItem.scss";

interface EditItemProps {
  id: number;
  initialText: string;
  onSave: (newText: string) => void;
  onCancel: () => void;
}
const EditItem = ({ initialText, onSave, onCancel }: EditItemProps) => {
  const [text, setText] = useState(initialText);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onSave(text);
  };

  const handleCancel = () => {
    console.log("I am clicked");
    onCancel();
  };

  return (
    <div className="edit-item">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        className="edit-input"
      />
      <button onClick={handleSave} className="edit-btn save-btn">
        Save
      </button>
      <button onClick={handleCancel} className="edit-btn">
        Cancel
      </button>
    </div>
  );
};

export default EditItem;

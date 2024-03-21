import React, { useState } from "react";

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
        className="add-input"
      />
      <button onClick={handleSave} className="add-btn">
        Save
      </button>
      <button onClick={handleCancel} className="add-btn">
        Cancel
      </button>
    </div>
  );
};

export default EditItem;

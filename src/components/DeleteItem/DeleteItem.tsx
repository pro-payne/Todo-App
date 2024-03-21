import React from 'react'

interface DeleteItemProps {
  onDelete: () => void;
}

const DeleteItem = ({onDelete}: DeleteItemProps) => {
  return (
    <button onClick={onDelete}>
    Delete
  </button>
  )
}

export default DeleteItem
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAdd(taskText);
      setTaskText('');
    } else {
      alert("Enter Valid Text");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="todo-user-input"
        placeholder="What needs to be done?"
      />
      <button type="submit" className="add-todo-button">Add</button>
    </form>
  );
};

export default TaskForm;

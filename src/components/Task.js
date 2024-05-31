import React from 'react';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <li className={`todo-item-container d-flex flex-row ${task.isChecked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={task.isChecked}
        onChange={() => onToggle(task.id)}
        className="checkbox-input"
      />
      <div className="label-container d-flex flex-row">
        <label className="checkbox-label">
          {task.text}
        </label>
        <div className="delete-icon-container">
          <i className="far fa-edit edit-icon" onClick={() => onEdit(task.id)}></i>
          <i className="far fa-trash-alt delete-icon" onClick={() => onDelete(task.id)}></i>
        </div>
      </div>
    </li>
  );
};

export default Task;

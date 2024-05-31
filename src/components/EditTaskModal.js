import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditTaskModal = ({ show, onHide, task, onSave }) => {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (task) {
      setTaskText(task.text);
    }
  }, [task]);

  const handleSave = () => {
    onSave(task.id, taskText);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="todo-user-input"
          placeholder="Edit task"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;

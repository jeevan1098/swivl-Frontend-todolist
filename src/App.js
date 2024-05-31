import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskModal from './components/EditTaskModal';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, isChecked: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    )));
  };

  const editTaskHandler = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setEditTask(taskToEdit);
    setShowEditModal(true);
  };

  const saveTask = (id, text) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, text } : task
    )));
  };

  return (
    <div className="todos-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="todos-heading">Todos</h1>
            <h1 className="create-task-heading">
              Create <span className="create-task-heading-subpart">Task</span>
            </h1>
            <TaskForm onAdd={addTask} />
            <h1 className="todo-items-heading">
              My <span className="todo-items-heading-subpart">Tasks</span>
            </h1>
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTaskHandler} />
          </div>
        </div>
      </div>
      <EditTaskModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        task={editTask}
        onSave={saveTask}
      />
    </div>
  );
};

export default App;

import React from 'react';

const Task = ({ task, deleteTask, toggleComplete }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggle = () => {
    toggleComplete(task.id);
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span
        className={task.completed ? 'text-decoration-line-through' : ''}
        style={{ marginLeft: '10px', marginRight: '10px', flex: 1 }}
      >
        {task.title}
      </span>
      <button
        className="btn btn-danger"
        style={{ paddingLeft: '10px', margin:'10px' }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;

import React from 'react';

const Task = ({ task }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div style={{backgroundColor: task.color}} className="task text-SC font-bold text-start rounded-lg shadow-lg shadow-SC h-fit" draggable onDragStart={handleDragStart}>
        <h1>{task.priority}</h1>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.assignedTo}</p>
        <p>{task.startDate}</p>
        <p>{task.endDate}</p>
    </div>
  );
};

export default Task;

import Task from './Task';

export default function Column({ column, tasks, onTaskDrop, onTaskAdd }){
    const handleDrop = (e) => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData("taskId");

      onTaskDrop(taskId, column.id);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();

    };
  
    return (
      <div className="column mx-auto h-full bg-TR gap-2 rounded-lg flex flex-col" onDrop={handleDrop} onDragOver={handleDragOver}>
        <h2>{column.name}</h2>
        {tasks.sort((a,b)=> a.order-b.order).map((task) => (
          <Task key={task.order} id={task.id} task={task} />
        ))}
        <button onClick={() => onTaskAdd(column.id)}>Add Task</button>
      </div>
    );
  };
  
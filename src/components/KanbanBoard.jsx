import Column from '../Blocks/Column_Kanban';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addColumn, addTask, updateTask,} from '../actions';

const initialColumns = [
    { id: 'planing', title: 'Planing' },
    { id: 'development', title: 'Development' },
    { id: 'testing', title: 'Testing' },
    { id: 'review', title: 'Review' },
    { id: 'done', title: 'Done' }
]

const initialTasks = [
    { id: '1', order:'1', title: 'Task 1', description: 'Ako by ze nie sa', priority: 'TOP', assignedTo:'R. Janek', column: 'planing', color: 'white' },
    { id: '2', order:'2', title: 'Task 2', description: 'Ako by ze nie sa', priority: 'M&G', assignedTo:'J. Janek', column: 'development', color: 'aqua' },
    { id: '3', order:'3', title: 'Task 3', description: 'Ako by ze nie sa', priority: 'MID', assignedTo:'S. Fico', column: 'testing', color: 'lime' },
    { id: '4', order:'4', title: 'Task 4', description: 'Ako by ze nie sa', priority: 'MID', assignedTo:'R. Janek', column: 'review', color: 'yellow' },
    { id: '5', order:'5', title: 'Task 5', description: 'Ako by ze nie sa', priority: 'LOW', assignedTo:'R. Janek', column: 'done', color: 'aliceBlue' },
]

export default function Kanban() {
    const columnsRedux = useSelector(state => state.columns);
    const tasksRedux = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [columns, setColumns] = useState(columnsRedux);
    const [tasks, setTasks] = useState(initialTasks);
    const columnWidth = 100 / columns.length;

    if (columnsRedux !== columns) {
        setColumns(columnsRedux);
    }
    if (tasksRedux !== tasks) {
        setTasks(tasksRedux);
    }



    const handleTaskAdd = (columnId) => {
        const newTask = {
            id: '6',
            title: 'Task 6',
            description: 'Ako by ze nie sa',
            priotiry: 'TOP',
            column: columnId
        }
        setTasks([...tasks, newTask]);
    }
    const getMaxOrder = (tasks) => {
        return Math.max(...tasks.map(task => parseInt(task.order),10))
    }
    const handleTaskDrop = (taskId, newColumnId) => {
        console.log(taskId);
        console.log(newColumnId);
        const maxOrder = getMaxOrder(tasks);
        /*setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, column: newColumnId, order:(maxOrder +1) } : task
            )
        );*/
        dispatch(updateTask({id:taskId, column:newColumnId, order:(maxOrder +1)}));
        console.log(tasks);
    };

return (
    <div className='flex w-full h-screen '>
        {columns.map((column,index) => (
            <div key={index} style={{width: columnWidth +'%'}}className=' h-fit -mt-4 items-center text-center'>
            <p className='text-PM  w-full bg-SC mx-auto mb-4'>{column.title}</p>
            <Column
                key={column.id}
                column={column}
                tasks={tasks.filter(task => task.column === column.id)}
                onTaskDrop={handleTaskDrop}
                onTaskAdd={handleTaskAdd}
            ></Column>
            </div>))}
    </div>
)
}

// Import the useSelector hook to select the slice of state:
import { useSelector } from 'react-redux';
// Import the Task component
import Task from "./Task";

// Create a function component that will iterate over the tasks in the store:
const Tasks = () => {
    // Get the tasks from the store:
    const tasks = useSelector((state) => state.tasks);
    // Use Object.entries to convert the tasks object from state.data to an array of tasks :
    let tasksArray = Object.entries(tasks.data);
    // The component uses the map method to iterate through the new array of tasks.
    // For every task it returns a separate instance of the Task component and sends props to that component:
    return (
        <>
            {tasksArray.map((task) =>
                <Task key={task[0]} task={task} />
            )}
        </>
    );
}
export default Tasks;

/* I learnt about Object.entries here: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */ 
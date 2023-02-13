// Import the hook needed to interact with the store and import the reducers:
import { useDispatch } from 'react-redux';
import { completed, edit, remove } from '../store/tasksSlice';

// Create a functional component that accepts "task" as a prop (received from the Tasks component) and builds each task:
const Task = ({ task }) => {
    /* The "task" received by the component is an array with an ID (index 0) and an object at index 1
    that contains the task "content" and a boolean value for "completed": */

    // Assign the useDispatch hook to a variable:
    const dispatch = useDispatch();
    /* Each task consists of an h3 with the task content, and icons for the edit, delete and complete reducers.
    Each icon has an onClick function that dispatches the task ID as a payload to the relevant reducer. */
    return (
        // When the value of 'completed' is true, add the className of 'done' to grey out the task:
        <div className={`task ${task[1].completed && 'done'}`}>
            <div id="task">
                <h3>{task[1].content}</h3>
                <div>
                    <i className="fa fa-check i-complete"
                        aria-hidden="true"
                        title="Mark as complete"
                        onClick={() => dispatch(completed(task[0]))}>
                    </i>
                    <i className="fa fa-pencil i-edit"
                        aria-hidden="true"
                        title="Edit Task"
                        onClick={() => dispatch(edit(task[0]))}>
                    </i>
                    <i className="fa fa-times i-delete"
                        aria-hidden="true"
                        title="Delete Task"
                        onClick={() => dispatch(remove(task[0]))}>
                    </i>
                </div>
            </div>
        </div>
    );
}

export default Task;
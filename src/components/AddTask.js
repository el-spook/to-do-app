// Import the useState hook to allow changes to the input field, 
// the useDispatch function that calls the reducers, and the reducers themselves:
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { add, update } from '../store/tasksSlice';

// Create a function component to capture and use the info from the form:
const AddTask = () => {
    // useState allows the text in the input field to be dissplayed, changed and captured:
    const [text, setText] = useState('');
    // Assign the useDispatch hook to a variable
    const dispatch = useDispatch();

    // The function called when the form is submitted:
    const onSubmit = (e) => {
        // stop the button from submitting the form:
        e.preventDefault();
        // Prompt the user the enter text if they try to click without doing so.
        if (!text) {
            alert('Please enter a task before adding it.');
            return;
        }
        // Get the submit button:
        let submitBtn = document.getElementById('subBtn');
        /* The button calls the add reducer if the button text says "Add Task"
            or updates the task's content by dispatching the update reducer if not: */
        submitBtn.innerText === 'Add Task' ? dispatch(add(text)) : dispatch(update(text));
        // Reset the input field text to empty:
        setText("");
    }

    /* The component returns a form with a label, input field and a button.
        The input field has an onChange function that shows the user's input.
        The button calls the onSubmit function on submission. */ 
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input 
                    type="text" 
                    id="task" 
                    placeholder="Add a task" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <button id="subBtn">Add Task</button>
        </form>
    );
}

export default AddTask;
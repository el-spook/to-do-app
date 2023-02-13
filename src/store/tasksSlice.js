/* This file is a "slice" that contains all the reducers to manage the state of the to do list.
 The createSlice() function is therefore imported from the toolkit. */
import { createSlice } from "@reduxjs/toolkit";

/* Assign the initial state object to a variable. The object contains the data for the first task (1),
including its content and if it has been completed yet. It also contains the number for the "nextID" key which
will be incremented by the add reducer: */
const initialTodoState = {
    nextId: 2,
    data: {
        1: {
            content: 'Content 1',
            completed: false
        }
    }
}

/* Name and export the slice. The function createSlice() accepts a slice name,
 an initial state (defined above), and an object containing the five reducer functions. */
export const tasksSlice = createSlice({
    name: 'tasks', // The slice name
    initialState: initialTodoState,
    // Name the five reducers & describe how each function will change the state of the app.
    reducers: {
        /* The add reducer creates a new task object when the "Add" button is clicked, 
        using the state and the action (which is the payload passed from the input field) */
        add: (state, action) => {
            // Create a new task object using nextId as a key. Pass in the user value as the content and set 'completed' to false:
            let newTask = {};
            newTask[state.nextId] = { 'content': action.payload, 'completed': false };
            // Update the state.data to include the new task along with the original one(s):
            state.data = { ...state.data, ...newTask };    
            // Increment nextId so that the next task will have a higher ID:           
            state.nextId += 1;   
        },

        /* The edit reducer is dispatched when the edit icon is clicked. 
        The action payload is the ID if the individual task item. */ 
        edit: (state, action) => {
            // Get the value of the input field and display the task contents there:
            document.getElementById('task').value = state.data[action.payload].content;    
            // Get the button and change its text to say "Update" instead of "Add task":
            let updateBtn = document.getElementById('subBtn');
            updateBtn.innerText = 'Update';                            
            // Make a new key in state data for this task object and set it to true (to be used in the next reducer):
            state.data[action.payload].update = true;                          
        },

        /* The update reducer is dispatched when the update button is clicked.
        The action payload is the content passed from the input field, like in the add reducer: */
        update: (state, action) => {
            // Use Object.entries to make an array of tasks from state.data:
            let tasksArray = Object.entries(state.data);
            // Iterate through the array using forEach:
            tasksArray.forEach((task) => {
                // If the update property of the task is set to true ...
                if (task[1].update) {
                    //... update the content with the value of the input field:                            
                    state.data[task[0]].content = action.payload;
                    // Remove the update property which will only be ther & true for the task being updated:
                    delete task[1].update;
                    // Get the submit button and change its text back to "Add Task":                               
                    let submitButton = document.getElementById('subBtn');
                    submitButton.innerText = 'Add Task';
                }
            });
        },

        /* The remove reducer is dispatched when the delete icon is clicked.
        The action payload is the task ID again. */ 
        remove: (state, action) => {
            // delete the task item with this id from state.data:
            delete state.data[action.payload];
        },

        /* The completed reducer is dispatched when the tick icon is clicked.
        Again, the payload is the task ID. */ 
        completed: (state, action) => {
            // The 'completed' property is toggled:
            state.data[action.payload].completed = !state.data[action.payload].completed;
        }
    }
});

// Export the reducers and ensure action creators are generated:
export const { add, update, edit, remove, completed } = tasksSlice.actions;
// Export the reducer function that will be used by the store:
export default tasksSlice.reducer;
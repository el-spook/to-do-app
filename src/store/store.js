// import the configureStore() function that automatically sets up an empty store:
import { configureStore } from "@reduxjs/toolkit";
// Import the reducers from tasksSlice.js:
import tasksReducer from './tasksSlice';

// Add the reducers from tasksSlice.js to the store and export the store:
export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
});

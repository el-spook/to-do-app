// Import the two other components to be rendered on this page:
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

// The App component returns a container div with an h1, and the AddTask and Tasks components:
function App() {
  return (
    <div className="container">
      <header> 
        <h1>To Do List</h1>
      </header>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;


/* 
Some of the ideas for this app were gained from me having previously
followed a free YouTube tutorial on React, which involved making a to do list:
https://youtu.be/w7ejDZ8SWv8 This tutorial didn't involve Redux or Redux Toolkit.
*/
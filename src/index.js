// Import react, the virtual DOM, the CSS file, and the App component:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* Import the Provider component from react-redux to set up the store and ensure the 
whole app has access to the slices of state */ 
import { Provider } from 'react-redux';
// Import the newly created store:
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Wrap the whole app in the Provider component and pass the store as props:
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


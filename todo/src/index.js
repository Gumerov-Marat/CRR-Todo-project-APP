import React from 'react';
import ReactDOM from 'react-dom';

const  TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const = SearchPanel = () => {
  return <input placeholder = "search"/>;
}

const App = () => {
  return (
    <div>
    <AppHeader/>
    <SearchPanel/>
    <TodoList/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import './App.css';

function App() {
    return(
        <div id="todo-container">
        	<h1>Todo List</h1>
            <TodoList />
            <TodoForm />
        </div>
    );
}

export default App;

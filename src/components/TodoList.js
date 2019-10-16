import React from 'react';
import { connect } from "react-redux";

import TodoItem from './TodoItem';

import { removeTodo, toggleTodo } from '../redux/actions/actions';

import './TodoList.css';

function TodoList(props) {
	let onRemove = (id) => {
		props.removeTodo(id);
	};

	let onToggle = (id) => {
		props.toggleTodo(id);
	};

    let todoList = props.todoState.todos.map((todo, index) => {
        return(
        	<TodoItem key={todo.id} onToggle={onToggle} onRemove={onRemove} todo={todo}/>
        );
    });

    return(
        <div id="todo-list">
            { 
            	todoList.length > 0 ? todoList : <h3>The Todo list is empty. Add a new todo</h3>
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        todoState: state
    }
}

export default connect(mapStateToProps, { removeTodo, toggleTodo })(TodoList);

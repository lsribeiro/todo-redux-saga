import React from 'react';
import { connect } from "react-redux";

import TodoItem from './TodoItem';

import { removeTodo } from '../redux/actions/actions';

function TodoList(props) {
	let onRemove = (id) => {
		props.removeTodo(id);
	};

    let todoList = props.todoState.todos.map((todo, index) => {
    	console.log(todo.id);
        return(
        	<TodoItem key={todo.id} onRemove={onRemove} todo={todo}/>
        );
    });

    return(
        <ul>
            { todoList }
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        todoState: state
    }
}

export default connect(mapStateToProps, { removeTodo })(TodoList);

import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
	let todo = props.todo;

	let handleRemove = () => {
		props.onRemove(todo.id);
	};

	let handleToggle = () => {
		props.onToggle(todo.id);
	};

	return(
		<div className="todo-item">
        	<button type="submit" onClick={ handleToggle } className={ todo.done ? "done-active-btn" : "done-btn"}><i className="fa fa-check" aria-hidden="true"></i></button>

        	<p className={ todo.done ? "todo-done" : ""}>{ todo.text }</p>
        	<div className="btn-container">
        		<button type="submit" onClick={ handleRemove } className="remove-btn"><i className="fa fa-times" aria-hidden="true"></i></button>
        	</div>
        </div>
	);
}

export default TodoItem;

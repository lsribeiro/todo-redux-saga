import React from 'react';

function TodoItem(props) {
	let todo = props.todo;

	let handleClick = () => {
		props.onRemove(todo.id);
	};

	return(
		<li>
        	{ todo.text }
        	<button type="submit" onClick={handleClick}>Remove</button>
        </li>
	);
}

export default TodoItem;

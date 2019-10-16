export const ADD_TODO = 'ADD_TODO';
export const SAVE_TODO = 'SAVE_TODO';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function saveTodo(todo) {
	return {
		type: SAVE_TODO,
		todo
	};
};

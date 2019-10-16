import Todo from '../../objects/todo';
import { SAVE_TODO, REMOVE_TODO } from '../actions/actions';

const initialState = {
	currentId: 0,
	todos: []
}
export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SAVE_TODO:
        	let newTodo = new Todo(state.currentId, action.todo);

            return {
                currentId: state.currentId+1,
                todos: [...state.todos, newTodo]
            }

        case REMOVE_TODO:
        	let newTodoList = state.todos.filter((todo) => todo.id !== action.id);
        	console.log(newTodoList);
        	return {
        		currentId: state.currentId,
        		todos: newTodoList
        	}

        default:
            return state;
    }
}

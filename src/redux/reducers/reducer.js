import Todo from '../../objects/todo';
import { SAVE_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = {
	currentId: 2,
	todos: [{
    	id: 0,
    	text: "Wash car",
    	done: false
    }, {
    	id: 1,
    	text: "Fix urgent bugs",
    	done: true
    }]
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
        	return {
        		currentId: state.currentId,
        		todos: newTodoList
        	}

        case TOGGLE_TODO:
        	let todoList = state.todos.map(todo => {
        		if(todo.id === action.id) {
        			todo.done = !todo.done;
        		}

        		return todo;
        	});
        	return {
        		currentId: state.currentId,
        		todos: todoList
        	}
        default:
            return state;
    }
}

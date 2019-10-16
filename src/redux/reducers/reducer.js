import { ADD_TODO, SAVE_TODO } from '../actions/actions';

const initialState = {
    todos: ['Cook dinner', 'Fix bugs', 'Wash car', 'Drink water']
}
export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SAVE_TODO:
            return {
                todos: [...state.todos, action.todo]
            }
        case ADD_TODO:
        	return {
        		todos: state.todos
        	}
        default:
            return state;
    }
}

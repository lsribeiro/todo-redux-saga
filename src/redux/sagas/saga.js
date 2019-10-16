import { put, takeEvery, delay } from 'redux-saga/effects';
import { ADD_TODO, saveTodo } from '../actions/actions';

function* saveTodoSaga(action) {
	yield delay(4000);
	yield put(saveTodo(action.todo));
}

function* todoSaga() {
	yield takeEvery(ADD_TODO, saveTodoSaga);
}

export default todoSaga;

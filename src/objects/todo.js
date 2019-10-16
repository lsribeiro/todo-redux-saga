class Todo {
	constructor(id, text, done=false) {
		this.id = id;
		this.text = text;
		this.done = false;
	}

	getId() {
		return this.id;
	}

	getText() {
		return this.text;
	}

	getDone() {
		return this.done;
	}
}

export default Todo;

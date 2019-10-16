import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../redux/actions/actions';

import './TodoForm.css';

//<button onClick={ this.onAdd } className="add-btn"><i className="fa fa-plus" aria-hidden="true"></i></button>
class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    handleChange(e) {
        this.setState({todo: e.target.value})
    }

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state.todo);
        this.setState({ todo: '' });
	}

    onAdd() {
        this.props.addTodo(this.state.todo);
        this.setState({ todo: '' });
    }

    render() {
        return (
            <div id="todo-form">
                <form onSubmit={this.handleSubmit}>
                	<input type="text" value={ this.state.todo } onChange={ this.handleChange } placeholder="Add todo..." required/>
                	{ this.state.todo ?
                		<input type="submit" value="&#xF067;" />
                	: "" }
            	</form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoState: state
    }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);

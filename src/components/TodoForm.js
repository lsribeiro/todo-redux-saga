import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../redux/actions/actions';

import './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    handleChange(e) {
        this.setState({todo: e.target.value})
    }

    onAdd() {
        this.props.addTodo(this.state.todo);
        this.setState({ todo: '' });
    }

    render() {
        return (
            <div id="todo-form">
                <input type="text" value={ this.state.todo } onChange={ this.handleChange } placeholder="Add todo..."/>
                <button onClick={ this.onAdd } className="add-btn"><i className="fa fa-plus" aria-hidden="true"></i></button>
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

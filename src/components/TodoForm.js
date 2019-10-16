import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../redux/actions/actions';

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
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.onAdd}>Add Todo</button>
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

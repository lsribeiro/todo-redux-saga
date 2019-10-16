import React from 'react';
import {connect} from "react-redux";

function TodoList(props) {
    let todoList = props.todoState.todos.map((todo, index) => {
        return <li key={index}> { todo }</li>
    });
    return(
        <ul>
            { todoList }
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        todoState: state
    }
}

export default connect(mapStateToProps)(TodoList);

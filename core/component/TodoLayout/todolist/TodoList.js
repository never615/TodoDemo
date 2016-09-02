/**
 * Created by never615 on 8/31/16.
 */
import React,{PropTypes} from 'react'
import Todo from './Todo'

export  default class TodoList extends React.Component{


  static propTypes={
    todos:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      completed:PropTypes.bool.isRequired,
      text:PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick:PropTypes.func.isRequired
  } ;


  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }

}

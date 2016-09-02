/**
 * Created by never615 on 9/1/16.
 */
import {connect} from 'react-redux'
import * as TodoAction from '../../../action/TodoActions'
import TodoList from '../present/TodoList'
import {FilterConstants} from '../../../constants/FilterConstants'

const  getVisibleTodos=(todos,filter)=>{
  switch (filter){
    case FilterConstants.SHOW_ALL:
          return todos;
    case FilterConstants.SHOW_COMPLETED:
          return todos.filter(t=>t.completed);
    case FilterConstants.SHOW_ACTIVE:
          return todos.filter(t=>!t.completed);
  }
};

const mapStateToProps=(state)=>{
  return{
    todos:getVisibleTodos(state.todos,state.visibilityFilter)
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    onTodoClick:(id)=>{
      dispatch(TodoAction.toggleTodo(id))
    }
  }
};

const VisibleTodoList=connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;


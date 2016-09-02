/**
 * Created by never615 on 8/31/16.
 */
import {TodoConstants} from '../constants/TodoConstants'

let nextTodoId=0;

export const addTodo=(text)=>{
  return{
    type: TodoConstants.ADD_TODO,
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type:TodoConstants.SET_VISIBILITY_FILTER,
    filter
  }
};

export const toggleTodo = (id) => {
  return {
    type:TodoConstants.TOGGLE_TODO,
    id
  }
};

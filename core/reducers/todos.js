/**
 * Created by never615 on 9/1/16.
 */
import {TodoConstants} from '../constants/TodoConstants'
const todo = (state, action)=> {
  switch (action.type) {
    case TodoConstants.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TodoConstants.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

const todos = (state = [], action)=> {
  switch (action.type) {
    case TodoConstants.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case TodoConstants.TOGGLE_TODO:
       return state.map(t=> 
         todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;

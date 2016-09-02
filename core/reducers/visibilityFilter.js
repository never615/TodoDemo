/**
 * Created by never615 on 9/1/16.
 */
import {TodoConstants} from '../constants/TodoConstants'
import {FilterConstants} from '../constants/FilterConstants'
const visibilityFilter=(state=FilterConstants.SHOW_ALL,action)=>{
  switch (action.type){
    case TodoConstants.SET_VISIBILITY_FILTER:
          return action.filter;
    default:
          return state;
  }
};

export default visibilityFilter;

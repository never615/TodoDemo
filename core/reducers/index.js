/**
 * Created by never615 on 9/1/16.
 */
import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;

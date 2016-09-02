/**
 * Created by never615 on 9/1/16.
 */
import React from 'react'
import {connect} from 'react-redux'
import * as TodoAction from '../../../action/TodoActions'
import store from  '../../../store'

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input;
    return (
      <div>
        <form onSubmit={
        e=>{
          e.preventDefault();
          if (!input.value.trim()){
            return;
          }
          store.dispatch(TodoAction.addTodo(input.value))
          input.value=''
        }
        }>
          <input ref={
            node=>{
              input=node
            }
          }/>
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }


}

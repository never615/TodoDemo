import {expect} from 'chai'
import * as TodoActions from '../../core/action/TodoActions'

// describe('test suite2', () => {
//
//   it('test', () => {
//     expect(true).to.be.equal.true;
//   });
//
// });

describe('todo actions', () => {


  // it('test', () => {
  //   // var temp = TodoActions.addTodo('Use Redux');
  //   // console.log(temp);
  //
  //   var a = {
  //     type: 'ADD_TODO',
  //     id: 0,
  //     text: 'Use Redux'
  //   };
  //   var b = {
  //     type: 'ADD_TODO', 
  //     id: 0, 
  //     text: 'Use Redux'
  //   };
  //
  //   expect(a).to.deep.equal(b);
  // });

  it('addTodo should create ADD_TODO action', () => {
    expect(TodoActions.addTodo('Use Redux')).to.deep.equal(
      {
        type: 'ADD_TODO',
        id: 0,
        text: 'Use Redux'
      }
    )
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(TodoActions.setVisibilityFilter('active')).to.deep.equal({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  });
  
  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(TodoActions.toggleTodo(1)).to.deep.equal({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })
});

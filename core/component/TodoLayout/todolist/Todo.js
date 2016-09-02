/**
 * Created by never615 on 8/31/16.
 */
import React, {PropTypes} from 'react'

export default class Todo extends React.Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
  };


  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
        textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    );
  }


}

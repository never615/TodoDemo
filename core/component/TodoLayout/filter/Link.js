/**
 * Created by never615 on 8/31/16.
 */
import React, {PropTypes} from 'react'
export default class Link extends React.Component{
  static propTypes={
    active:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired
  };

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      <a href="#"
         onClick={e => {
         e.preventDefault();
         this.props.onClick()
       }}
      >
        {this.props.children}
      </a>
    );
  }

}

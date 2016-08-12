import React from 'react';
import Test2 from './Test2';
export default class Button extends React.Component {
  // static propTypes = {
  //   color: PropTypes.string,
  //   children: PropTypes.string,
  // };
  render() {
    return (
      <div>
      <button style={{ background: this.context.color }}>
      {this.props.children}
      </button>
      <Test2 property="PropertyString"/>
      </div>
    );
  }

}
Button.contextTypes = {
  color: React.PropTypes.string,
};

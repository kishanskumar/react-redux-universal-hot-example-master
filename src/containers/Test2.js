import React from 'react';

const Test2 = (props, context) => <div>Prop is {props.property} and context_value is {context.val}</div>;
Test2.contextTypes = {
  val: React.PropTypes.string,
};
Test2.propTypes = {
  property: React.PropTypes.string,
};
export default Test2;

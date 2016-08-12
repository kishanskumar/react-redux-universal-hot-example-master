import React from 'react';

const test = (props) => <div>Hello react {props.name}</div>;
test.propTypes = {
  name: React.PropTypes.string,
};
export default test;

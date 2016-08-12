import React from 'react';
import Message from './Message';

export default class MessageList extends React.Component {
  getChildContext() {
    return { color: 'orange', val: '10' };
  }

  render() {
    const messages = ['hello', 'hi'];
    const children = messages.map((message) =>
      <Message text={message} />
    );
    return <div>{children}</div>;
  }
}
MessageList.childContextTypes = {
  color: React.PropTypes.string,
  val: React.PropTypes.string,

};

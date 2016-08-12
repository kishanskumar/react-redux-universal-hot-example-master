import React, { Component } from 'react';
import Details from 'containers/Details/Details';
import Test1 from './Test1';
import MessageList from './MessageList';

export default class SampleFile extends Component {
  constructor() {
    super();
    this.state = {
      text: 'sample text',
      val: '3',
    };
  }

  componentWillMount() {
    console.log('Will mount');
  }

  componentDidMount() {
    console.log('Did mount');
  }

  render() {
    const logoImage = require('./favicon.png-size-i9.png');
    return (
      <div>
      <h2>Hello</h2>
        <h5>Inside Sample page</h5>
        <Details src="http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" id="1001"/>
        <Details name="Rajeev" src={logoImage} id="1002"/>
        <Test1 name="component"/>
        <MessageList/>
      </div>
    );
  }
}

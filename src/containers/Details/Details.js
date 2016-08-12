import React, {Component, PropTypes} from 'react';

export default class Details extends Component {
  static propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.string,
  }
  static defaultProps = {
    name: 'Rakesh',
  }

  render() {
    return (
      <div>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <ul>
          <li>Name:{this.props.name}</li>
            <li>ID: {this.props.id}</li>
          <li>Image:{this.props.src}</li>
          <img src={this.props.src} width="200px" height="100px"/>
        </ul>
      </div>
    );
  }
}

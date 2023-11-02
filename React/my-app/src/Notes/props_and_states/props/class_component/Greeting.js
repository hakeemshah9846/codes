// Props in class component
// In a class component, props are data passed from a parent component to a child component. The child component can then use these props to render dynamic content.

import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;

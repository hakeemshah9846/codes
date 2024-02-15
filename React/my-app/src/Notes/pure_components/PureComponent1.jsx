import React, { PureComponent } from 'react';

class MyPureComponent1 extends PureComponent {
  render() {
    return <div>{this.props.message}</div>;
  }
}

export default MyPureComponent1;

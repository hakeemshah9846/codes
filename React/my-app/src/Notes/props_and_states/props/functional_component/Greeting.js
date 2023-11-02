// Props in functional component
// In functional components, props work similarly. They are also data passed from a parent component to a child component. Functional components use props to determine what content to display.

import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;

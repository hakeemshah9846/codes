// import React from 'react';

// Higher-Order Component (HOC) with functional component
const withUpperCase = (WrappedComponent) => {
  return function ({ text, ...restProps }) {
    const upperCaseText = text.toUpperCase();
    return <WrappedComponent {...restProps} text={upperCaseText} />;
  };
};

// Component
const MyComponent = ({ text }) => <div>{text}</div>;

// Usage of HOC
const MyComponentWithUpperCase = withUpperCase(MyComponent);

// Render the enhanced component
// <MyComponentWithUpperCase text="Hello, HOC!" />;

export default MyComponentWithUpperCase;
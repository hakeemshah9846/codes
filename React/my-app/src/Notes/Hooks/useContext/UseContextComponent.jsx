//useContext is a React Hook that allows functional components to subscribe to a React context without introducing a nesting of Consumer components. React context provides a way to share values like themes, user authentication, or other application-wide settings across components without passing them explicitly through props at each level of the component tree

import React, { createContext, useContext } from 'react';

// Create a context with a default value
const MyContext = createContext('default');

function ComponentA() {
  // Consume the context using useContext
  const contextValue = useContext(MyContext);

  return <div>Component A: {contextValue}</div>;
}

function ComponentB() {
  // Consume the context using useContext
  const contextValue = useContext(MyContext);

  return <div>Component B: {contextValue}</div>;
}

function UseContextApp() {
  // Provide the context value to the tree
  return (
    <MyContext.Provider value="Hello from Context!">
      <ComponentA />
      <ComponentB />
    </MyContext.Provider>
  );
}

export default UseContextApp;
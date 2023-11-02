//States in functional component
// In functional components, you can use the useState hook to add state to a component. It's a function provided by React that allows functional components to manage and update their state.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;

import React, { useState, useCallback } from 'react';

function UseCallbackComponent() {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the memoized callback to the child component */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

// ChildComponent receives the memoized callback
function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}

export default UseCallbackComponent;
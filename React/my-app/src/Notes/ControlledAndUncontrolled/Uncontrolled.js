// Uncontrolled components are React components where the form elements maintain their own state, and React is not directly involved in managing their state. You can still access their values using refs, but React does not control or manipulate the state of these elements.

import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}

export default UncontrolledInput;

// In this functional component, we use the useRef hook to create a reference to the input element (inputRef). The input maintains its own state, and when the button is clicked, we access the input's value using the ref. React is not directly controlling the input's value in this case.
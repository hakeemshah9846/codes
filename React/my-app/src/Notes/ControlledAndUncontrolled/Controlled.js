// Controlled components are React components where React controls and manages the state of the elements, such as form inputs. The component's state and the value of the input elements are tightly linked, and any change to the input is controlled through React's state management.

import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleInputChange} />;
}

export default ControlledInput;

// In this functional component, we use the useState hook to manage the inputValue state. The input value is controlled by React's state, and any change is handled through the onChange event handler.

import React, { useState } from 'react';

// FormComponent.js
function FormComponent({ onSubmit }) {
  // Initialize the state for input data
  const [inputData, setInputData] = useState('');

  // Handle input change and update the inputData state
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  // Handle form submission and call the onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// DisplayComponent.js
function DisplayComponent({ displayData }) {
  // Display the data received via props
  return <div>{displayData}</div>;
}

// ParentComponent.js
function ParentComponent() {
  // Initialize the state for data to display
  const [dataToDisplay, setDataToDisplay] = useState('');

  // Handle form submission and update dataToDisplay state
  const handleSubmit = (data) => {
    setDataToDisplay(data);
  };

  return (
    <div>
      {/* Render FormComponent and pass onSubmit function */}
      <FormComponent onSubmit={handleSubmit} />

      {/* Render DisplayComponent and pass dataToDisplay as a prop */}
      <DisplayComponent displayData={dataToDisplay} />
    </div>
  );
}

export default ParentComponent;

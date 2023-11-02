import React, { Fragment, useState } from 'react';

// FormComponent.js
function FormComponent({ onSubmit }) {
  // Initialize the state for input data
  const [inputData, setInputData] = useState({
    name : "",
    email : "",
  });

  // Handle input change and update the inputData state
  const handleInputChange = (e) => {

    console.log("e.target : ", e.target);

    if(e.target.name === "name"){
        setInputData({ ...inputData, name: e.target.value });
    }


    if(e.target.name === "email") {
        setInputData({...inputData, email : e.target.value});
    }

    
    console.log("Input data : ", inputData);
  };

  // Handle form submission and call the onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputData);
  };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name : </label>
      <input
        type="text"
        onChange={handleInputChange}
        id='name'
        name='name'
      />
      <label htmlFor="email">Email : </label>
      <input type="text" onChange={handleInputChange} id='email' name='email'/>
      <button type="submit">Submit</button>
    </form>
  );
}

// DisplayComponent.js
function DisplayComponent({ displayData }) {
  // Display the data received via props
  return (
    <Fragment>
    <div><label htmlFor="">Name : </label>{displayData.name}</div>
    <div><label htmlFor="">Email : </label>{displayData.email}</div>
    </Fragment>

    );
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

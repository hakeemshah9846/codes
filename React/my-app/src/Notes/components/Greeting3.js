import React from 'react';

// Define a functional component that takes a 'name' prop
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Use the Greeting component and pass the 'name' prop
function App() {
  return (
    <div>
      <Greeting name="Alice" /> {/* Pass 'Alice' as the 'name' prop */}
      <Greeting name="Bob" /> {/* Pass 'Bob' as the 'name' prop */}
    </div>
  );
}

export default App;

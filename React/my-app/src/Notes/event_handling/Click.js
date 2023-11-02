import React, { useState } from 'react';

function App() {
  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    setButtonText('Clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default App;

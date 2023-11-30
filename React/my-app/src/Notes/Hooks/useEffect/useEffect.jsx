import React, { useEffect } from 'react';

function UseEFfectComponent() {
  useEffect(() => {
    // Code to run after the component has rendered
    console.log('Component has rendered!');
  }, []); // Empty dependency array means it runs once after the initial render

  return <div>My Component Content</div>;
}

export default UseEFfectComponent;

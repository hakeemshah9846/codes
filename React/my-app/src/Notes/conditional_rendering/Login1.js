// Using the if Statement for Conditional Rendering

import React, { useState } from 'react';

function Login1() {
  const [isDataLoaded, setDataLoaded] = useState(false);

  let content;

  if (isDataLoaded) {
    content = <p>Data has been loaded successfully.</p>;
  } else {
    content = <p>Loading data...</p>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default Login1;
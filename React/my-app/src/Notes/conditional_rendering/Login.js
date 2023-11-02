// Conditional rendering in React is the process of rendering different content or components based on certain conditions. It allows you to control what gets displayed in your application depending on the state of your data or user interactions.

// Example 1: Using a Ternary Operator for Conditional Rendering

import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}
    </div>
  );
}

export default Login;




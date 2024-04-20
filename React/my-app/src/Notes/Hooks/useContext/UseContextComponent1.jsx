import React, { createContext, useContext, useState } from 'react';

// Create a context with an initial value
const ThemeContext = createContext();

function ThemedComponent() {
  // Consume the context using useContext
  const {theme} = useContext(ThemeContext);

  return <div style={{ background: theme }}>Themed Component</div>;
}

function ThemeSelector() {
  // Consume the context using useContext
  const {setTheme} = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme('white')}>Light Theme</button>
      <button onClick={() => setTheme('black')}>Dark Theme</button>
    </div>
  );
}


function UseContextComponent1() {
  // Use state to manage the dynamic context value
  const [theme, setTheme] = useState('light');

  const contextValue = {theme, setTheme}


  // Provide the dynamic context value to the tree
  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemedComponent />
      <ThemeSelector />
    </ThemeContext.Provider>
  );
}

export default UseContextComponent1;
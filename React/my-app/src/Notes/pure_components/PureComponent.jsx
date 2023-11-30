import React, { useState } from 'react';

const MyPureComponent = React.memo(({ message }) => {
    console.log("Re rendering")
  return <div>{message}</div>;
});

// Usage
// <MyPureComponent message="Hello, I am a pure component!" />;

function ParentComponent() {
   const [count, setCount] = useState(1);
    return (
        <>
        <MyPureComponent message="Hello, I am a pure component!"/>
        <p>Count : {count}</p>
        <button onClick={()=> {setCount(count+1)}}>Increment</button>
        </>
    )
}

export default ParentComponent;
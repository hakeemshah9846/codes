import React, { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  // useMemo memoizes the result of the computation
  const result = useMemo(() => {
    console.log('Computing result...');
    return a * b;
  }, [a, b]); // Only recompute if 'a' or 'b' changes

  return <p>Result: {result}</p>;
}

function UseMemoComponent() {
  const [valueA, setValueA] = React.useState(2);
  const [valueB, setValueB] = React.useState(3);

  return (
    <div>
      <ExpensiveComponent a={valueA} b={valueB} />
      <button onClick={() => setValueA(valueA)}>Increment A</button>
      <button onClick={() => setValueB(valueB)}>Increment B</button>
    </div>
  );
}

export default UseMemoComponent;
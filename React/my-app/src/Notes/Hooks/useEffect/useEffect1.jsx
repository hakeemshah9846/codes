import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Run this effect once after the initial render

  return (
    <div>
      <h2>Data Fetching Example</h2>
      {data ? <p>Data: {data.map((e)=>{return <p>{e.name}</p>})}</p> : <p>Loading...</p>}
    </div>
  );
}

export default DataFetchingComponent;
import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.fruityvice.com/api/fruit/all")
      .then((response) => response.json())
      .then((d) => {
        setData(d);
      });

    return () => {
        console.log('Datafetcher cleanup');
    }  
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div>
          <ul>
            {data.map((d) => {
              return <li>{d["name"]}</li>;
            })}
          </ul>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DataFetcher;

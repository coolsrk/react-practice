import React from "react";

export const Card = (props) => {
  const { index, data, activeIndex, setActiveIndex } = props;

  return (
    <div className="card">
      <h1>{data.title}</h1>
      {activeIndex === index ? (
        <p>{data.desc}</p>
      ) : (
        <button onClick={() => setActiveIndex(index)}>Show Content</button>
      )}
    </div>
  );
};

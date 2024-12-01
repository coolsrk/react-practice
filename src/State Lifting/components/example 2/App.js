import React from "react";
import { testData } from "../../asset/data";
import { Card } from "./Card";
import "../../css/App.css";
import { useState } from "react";


const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="card-container">
      {testData.map((data, index) => {
        return (
          <Card
            data={data}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </div>
  );
};

export default App;

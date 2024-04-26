import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataitem) => (
              <div
                onClick={() => handleSingleSelection(dataitem.id)}
                className="item"
              >
                <div className="title">
                  <h2>{dataitem.question}</h2>
                  <span>+</span>
                </div>
                {selected === dataitem.id && (
                  <div className="content">{dataitem.answer} </div>
                )}
              </div>
            ))
          : "Data not found"}
      </div>
    </div>
  );
}

export default Accordian;

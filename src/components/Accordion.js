import React, { useState, useEffect } from "react";
import AccordionRow from "./AccordionRow";
import "./styles/Accordion.css";

function Accordion(props) {
  const { data } = props;

  const [arr, setArr] = useState(new Array(data.length).fill(false));
  // arr is an array that has as many positions as there are rows in the accordion;
  // each position contains true or false
  // if a position of the array contains true, it means that row is open (shows its text); if it false, it means that row is closed

  function updatesArr(lastClickedRow) {
    // this function is executed when the user clicks on a row
    // it updates myVector based on which row the user clicked

    let arrCopy = arr.slice(); // clone the state vector

    for (let i = 0; i < arr.length; i++) {
      if (i === lastClickedRow) {
        arrCopy[i] = !arrCopy[i]; // flip the value of the position the user clicked on
      } else {
        arrCopy[i] = false; // every other position will always be false
      }
    }

    setArr(arrCopy);
  }

  const rows = data.map((row) => (
    <AccordionRow
      title={row.title}
      body={row.body}
      updatesArr={updatesArr}
      isOpen={arr[row.id]}
      id={row.id}
      key={row.id}
    ></AccordionRow>
  ));

  return <div className="accordion-wrapper">{rows}</div>;
}

export default Accordion;

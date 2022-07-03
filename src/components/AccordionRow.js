import React from "react";
import "./styles/AccordionRow.css";

function AccordionRow(props) {
  const { title, body, updatesArr, isOpen, id } = props;

  function onClickHandler() {
    updatesArr(id);
  }

  return (
    <div className="accordionrow-wrapper">
      <div className="accordionrow-title" onClick={onClickHandler}>
        {title}
      </div>
      <div
        className={`accordionrow-body ${
          isOpen ? "accordionrow-show" : "accordionrow-hide"
        }`}
      >
        {body}
      </div>
    </div>
  );
}

export default AccordionRow;

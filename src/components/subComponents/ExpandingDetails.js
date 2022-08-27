import React, { useState } from "react";
import "./expanding.css";

const ExpandingDetails = (props) => {
  const [open, setOpen] = useState(false);

  function handleCollapsible() {
    setOpen(!open);
  }

  return (
    <div>
      <div class="each-step">
        <button
          type="button"
          className={`collapsible ${open ? "opened" : ""}`}
          onClick={handleCollapsible}
        >
          {props.heading}
        </button>

        <div className={`content ${open ? "expand" : ""}`}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default ExpandingDetails;

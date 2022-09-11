import React from "react";

export default (props) => (
  <div className="tibim">
    <hr />
    Hi I'm a Tibim component with the title:
    <h2>{props.block.title}</h2>
  </div>
);

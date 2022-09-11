import React from "react";

export default (props) => (
  <div className="kabs">
    <hr />
    <h2>{props.block.title}</h2>
    Hi I'm a Kabs component with the title:
    <input />
    <br />
    <select>
      <option>Test1</option>
      <option>Test2</option>
    </select>
  </div>
);

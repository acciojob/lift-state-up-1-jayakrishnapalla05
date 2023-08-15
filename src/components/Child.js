import React from "react";

const Child = (props) => {
  return (
    <div className="child" style={{ backgroundColor: "#9C2121" }}>
      <h2>Child Component</h2>
      <button onClick={props.updateParent}>Show Modal</button>
      {props.modal == true ? (
        <div>
          <h3>Modal Content</h3>
          <p>This is the modal content.</p>
        </div>
      ) : null}
    </div>
  );
};

export default Child;
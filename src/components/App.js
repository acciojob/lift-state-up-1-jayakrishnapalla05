
import React, {useState} from "react";
import Child from "./Child";
import './../styles/App.css';

const App = () => {
  const [modal, showModal] = useState(false);
  const updateParent = () => {
    showModal(true);
  };
  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <Child updateParent={updateParent} modal={modal} />
    </div>
  )
}

export default App

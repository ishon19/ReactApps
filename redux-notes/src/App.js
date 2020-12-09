import React from "react";
import NewNote from "./components/NewNote";
import Notes from "./components/Note";

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;

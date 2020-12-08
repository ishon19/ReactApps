import React from "react";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";

const store = createStore(noteReducer);

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "the app state is in redux",
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
});

const App = () => {
  return (
    <div>
      <ul>
        {store.getState().map((note) => (
          <li key={note.data.id}>
            {note.data.content} <strong>{note.data.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

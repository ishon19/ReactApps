import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, toggleImportanceOf } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));
  };

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.data.id} onClick={() => toggleImportance(note.data.id)}>
            {note.data.content}{" "}
            <strong>{note.data.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

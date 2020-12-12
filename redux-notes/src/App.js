import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewNote from "./components/NewNote";
import Notes from "./components/Note";
import VisibilityFilter from "./components/VisibilityFilter";
import { initialNotes } from "./reducers/noteReducer";
import noteService from "./services/notes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(initialNotes(notes)));
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;

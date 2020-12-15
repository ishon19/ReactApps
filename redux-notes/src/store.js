import { applyMiddleware, combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filterReducer";
import noteReducer from "./reducers/noteReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

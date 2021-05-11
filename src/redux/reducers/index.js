import { combineReducers } from "redux";

import authorsReducer from "./authors";
import booksReducer from "./books";
import genresReducer from "./genres";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
  genres: genresReducer,
});

export default rootReducer;

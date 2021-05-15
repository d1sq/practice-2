/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { setBooks } from "./redux/actions/books";
import { setAuthors } from "./redux/actions/authors";
import { setGenres } from "./redux/actions/genres";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Book, Authors, Genres, AddNew, Header} from "./components";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("https://lib.poas45.ru/books").then(({ data }) => {
      dispatch(setBooks(data));
    });
    axios.get("https://lib.poas45.ru/genres").then(({ data }) => {
      dispatch(setGenres(data));
    });
    axios.get("https://lib.poas45.ru/authors").then(({ data }) => {
      dispatch(setAuthors(data));
    });
  }, []);
  return (
    <div>
      <Route path="/">
        <Header />
      </Route>
      <Route exact path="/books">
        <Book />
      </Route>
      <Route exact path="/authors">
        <Authors />
      </Route>
      <Route exact path="/genres">
        <Genres />
      </Route>
      <Route exact path="/new">
        <AddNew />
      </Route>
      {/* <Route exact path="/test">
        <TestCard />
      </Route> */}
    </div>
  );
}
export default App;

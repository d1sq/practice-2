/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Authors, Books, Genres, MainPage, NavMenu } from "./components";
import { AUTHORS, BOOKS, GENRES } from "modules/api/endpoints";
import { apiActions } from "modules/api/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiActions.fetch(BOOKS));
    dispatch(apiActions.fetch(GENRES));
    dispatch(apiActions.fetch(AUTHORS));
  }, []);

  return (
    <>
      <div className="background"></div>
      <Route path="/">
        <NavMenu />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>

      <Route exact path="/authors">
        <Authors />
      </Route>
      <Route exact path="/books">
        <Books />
      </Route>
      <Route exact path="/genres">
        <Genres />
      </Route>
    </>
  );
}
export default App;

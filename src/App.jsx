/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Book, Authors, Genres, AddNew, Header, TestCard } from "./components";

function App() {
  const dispatch = useDispatch();

  
  return (
    <div>
      {/* <Route path="/">
        <Header />
      </Route> */}
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
      <Route exact path="/test">
        <TestCard />
      </Route>
    </div>
  );
}
export default App;

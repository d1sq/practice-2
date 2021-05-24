/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Authors, Books, Genres, MainPage } from "./components";

function App() {
  return (
    <div>
      <Route exact path="/"><MainPage/></Route>
      
      <Route exact path="/authors">
        <Authors />
      </Route>
      <Route exact path="/books">
        <Books />
      </Route>
      <Route exact path="/genres">
        <Genres />
      </Route>
    </div>
  );
}
export default App;

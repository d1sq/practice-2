/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import {AuthorGrid } from "./components";

function App() {
  const dispatch = useDispatch();

  
  return (
    <div> 
      <AuthorGrid/>
    </div>
  );
}
export default App;
